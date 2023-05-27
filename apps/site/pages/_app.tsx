import '@tamagui/core/reset.css'

// import '../lib/wdyr'
import '../app.css'

import {
  ColorScheme,
  NextThemeProvider,
  useRootTheme,
  useThemeSetting,
} from '@tamagui/next-theme'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import { TamaguiProvider } from 'tamagui'

import { LoadInter400, LoadInter700 } from '../components/LoadFont'
import config from '../tamagui.config'

Error.stackTraceLimit = Infinity

if (process.env.NODE_ENV === 'production') {
  require('../public/tamagui.css')
}

// for auto mode
// // santa mode
// if (isClient) {
//   const goXmas = setTimeout(() => {
//     setTintFamily('xmas')
//   }, 2500)

// prevent next.js from prefetching stuff
if (typeof navigator !== 'undefined') {
  try {
    // @ts-ignore
    navigator.connection = navigator.connection || {}
    // @ts-ignore
    navigator.connection['saveData'] = true
  } catch {
    // ignore err
  }
}

export default function App(props: AppProps) {
  const [theme, setTheme] = useRootTheme()

  // set up NextThemeProvider above AppContents so it can useThemeSetting

  return (
    <>
      <NextThemeProvider
        onChangeTheme={(next) => {
          setTheme(next as any)
        }}
      >
        <AppContents {...props} theme={theme} setTheme={setTheme} />
      </NextThemeProvider>
    </>
  )
}

function AppContents(
  props: AppProps & {
    theme: ColorScheme
    setTheme: React.Dispatch<React.SetStateAction<ColorScheme>>
  }
) {
  const [theme, setTheme] = useRootTheme()
  const [didInteract, setDidInteract] = useState(false)
  const themeSetting = useThemeSetting()!
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/takeout' && theme !== 'dark') {
      themeSetting.set('dark')
      setTheme('dark')
    }
  }, [router.pathname, theme])

  useEffect(() => {
    const onDown = () => {
      setDidInteract(true)
      unlisten()
    }
    const unlisten = () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onDown)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onDown)
    return unlisten
  }, [])

  return (
    <>
      <script
        key="tamagui-animations-mount"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          // avoid flash of animated things on enter
          __html: `document.documentElement.classList.add('t_unmounted')`,
        }}
      />

      <Head>
        <LoadInter700 />
        <LoadInter400 />
      </Head>

      <NextThemeProvider
        onChangeTheme={(next) => {
          setTheme(next as any)
        }}
      >
        <TamaguiProvider
          config={config}
          disableInjectCSS
          disableRootThemeClass
          defaultTheme={theme}
        >
          <ContentInner {...props} />
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  )
}

function ContentInner({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const getLayout = Component.getLayout || ((page) => page)

  return useMemo(() => {
    return getLayout(<Component {...pageProps} />, pageProps)
  }, [pageProps])
}
