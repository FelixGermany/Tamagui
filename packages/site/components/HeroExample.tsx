import { FastForward, Plus } from '@tamagui/feather-icons'
import React, { useState } from 'react'
import {
  Button,
  H2,
  H3,
  InteractiveContainer,
  Paragraph,
  SizableText,
  Theme,
  ThemeInverse,
  XStack,
  YStack,
} from 'tamagui'

import { CodeDemo } from './CodeDemo'
import { ContainerLarge } from './Container'
import { IconStack } from './IconStack'
import { Pill } from './Pill'

export function HeroExample() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeExample = examples[activeIndex]

  return (
    // <Theme name="pink">
    <ContainerLarge position="relative">
      <YStack zi={1} space="$5">
        <YStack space="$2">
          <H2 als="center">
            Less work, feels native <span className="rainbow">everywhere</span>
          </H2>
          <H3 theme="alt2" als="center" fow="400">
            Next level performance meets easer to write code.
          </H3>
        </YStack>

        <InteractiveContainer als="center">
          {examples.map((example, i) => {
            return (
              <Button
                onPress={() => setActiveIndex(i)}
                theme={i === activeIndex ? 'active' : null}
                key={i}
                borderRadius="$0"
              >
                {example.name}
              </Button>
            )
          })}
        </InteractiveContainer>

        <XStack mt="$2" jc="space-between">
          <YStack flex={1} maxWidth="49%" space="$4">
            <Paragraph theme="alt2" minHeight={50} ta="center" px="$7">
              {activeExample.input.description}
            </Paragraph>

            <Pill theme="blue">Input</Pill>
            <YStack>
              {activeExample.input.examples.map((example, i) => (
                <React.Fragment key={example.code}>
                  <HoverableStack>
                    <CodeDemo
                      language={example.language as any}
                      mode="interactive"
                      line="3-20"
                      maxHeight={500}
                      value={example.code}
                    />
                  </HoverableStack>
                  {i < activeExample.input.examples.length - 1 && (
                    <YStack als="center" my="$-4" zIndex={1000}>
                      <IconStack theme="blue" mb={0}>
                        <Plus size={20} />
                      </IconStack>
                    </YStack>
                  )}
                </React.Fragment>
              ))}
            </YStack>
          </YStack>
          <YStack mt={180} mx={-15} zIndex={1000}>
            <IconStack theme="blue" mb={0}>
              <FastForward size={20} />
            </IconStack>
          </YStack>
          <YStack flex={1} maxWidth="49%" space="$4">
            <Paragraph theme="alt2" minHeight={50} ta="center" px="$7">
              {activeExample.output.description}
            </Paragraph>
            <Pill theme="blue">Output</Pill>
            <YStack>
              {activeExample.output.outputs.map((example, i) => {
                const hasMore = activeExample.output.outputs.length - 1 > i
                return (
                  <React.Fragment key={`${activeIndex}${i}`}>
                    <HoverableStack>
                      <CodeDemo
                        language={example.language as any}
                        mode="interactive"
                        line="3-20"
                        maxHeight={500}
                        value={example.code}
                      />
                    </HoverableStack>
                    {hasMore && (
                      <YStack als="center" my="$-4" zIndex={1000}>
                        <IconStack theme="blue" mb={0}>
                          <Plus size={20} />
                        </IconStack>
                      </YStack>
                    )}
                  </React.Fragment>
                )
              })}
            </YStack>
          </YStack>
        </XStack>
      </YStack>
    </ContainerLarge>
    // </Theme>
  )
}

const HoverableStack = (props) => <YStack opacity={0.85} hoverStyle={{ opacity: 1 }} {...props} />

const examples = [
  {
    name: 'Inline',
    input: {
      description:
        'Write styles naturally, without having to name everything. Use your own typed theme values.',
      examples: [
        {
          language: 'jsx',
          code: `import { YStack, Text } from 'tamagui'

const App = () => (
  <YStack
    paddingHorizontal="$1"
    width={550}
  >
    <Text fontSize="$1" color="$color">
      Lorem ipsum dolor.
    </Text>
  </YStack>
)`,
        },

        {
          language: 'jsx',
          code: `const tokens = createTokens({
  space: { 1: 5, 2: 10, 3: 20 },
  fontSize: { 1: 12, 2: 14, 3: 16 },
  color: { white: '#fff' }
})

export default createTamagui({
  tokens,
  theme: {
    light: {
      color: tokens.color.white,
    }
  },
})`,
        },
      ],
    },

    output: {
      description:
        'The compiler optimizes inline styles to atomic CSS and flattens trees to HTML tags extra speed.',
      outputs: [
        {
          code: `const _cn2 = " _boxSizing-deolkf _color-1gcmrwd _display-1471scf _fontFamily-187pbxx _fontSize-mmgcxm _wordWrap-qvutc0"
const _cn = " _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _paddingLeft-1vvdr1v _paddingRight-9myuio _width-11mp6g5"
import { Text, YStack } from 'tamagui'

const App = () => <div className={_cn}>
    <span className={_cn2}>
      Lorem ipsum dolor.
    </span>
  </div>`,
          language: 'jsx',
        },
        {
          code: `
._alignItems-1oszu61{-ms-flex-align:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;align-items:stretch;}
._boxSizing-deolkf{box-sizing:border-box;}
._display-6koalj{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}
._flexBasis-1mlwlqe{-ms-flex-preferred-size:auto;-webkit-flex-basis:auto;flex-basis:auto;}
._flexDirection-eqz5dr{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
._flexShrink-1q142lx{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;}
._paddingLeft-1vvdr1v{padding-left:var(--space-1);}
._paddingRight-9myuio{padding-right:var(--space-1);}
._width-11mp6g5{width:550px;}
._color-1gcmrwd{color:var(--color);}
._display-1471scf{display:inline;}
._fontFamily-187pbxx{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;}
._fontSize-mmgcxm{font-size:var(--fontSize-1);}
._wordWrap-qvutc0{word-wrap:break-word;}
`,
          language: 'css',
        },
      ],
    },
  },

  {
    name: 'Conditionals',
    input: {
      description: `The compiler supports analyzing nested logical statements, imports, and non-dynamic expressions.`,
      examples: [
        {
          language: 'jsx',
          code: `import { Paragraph, YStack } from 'tamagui'

const App = (props) => (
  <YStack
    padding={props.big ? '$5' : '$3'}
    {...(props.colored && {
      backgroundColor: 'green',
    })}
  >
    <Paragraph size="$2">
      Lorem ipsum dolor.
    </Paragraph>
  </YStack>
)
`,
        },
      ],
    },
    output: {
      description:
        'Instead of large objects, your render function now just concats a single className string.',
      outputs: [
        {
          code: `const _cn5 = " _boxSizing-deolkf _color-scmqyp _display-1471scf _fontFamily-xeweqh _fontSize-7uzi8p _lineHeight-1l6ykvy _wordWrap-qvutc0"
const _cn4 = "  _backgroundColor-1542mo4"
const _cn3 = " _paddingBottom-12bic3x _paddingLeft-7ztw5e _paddingRight-g6vdx7 _paddingTop-1vq430g"
const _cn2 = " _paddingBottom-z3qxl0 _paddingLeft-14km6ah _paddingRight-1qpq1qc _paddingTop-1medp4i"
const _cn = " _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx "
import { concatClassName } from "@tamagui/helpers"
import { Paragraph, YStack } from 'tamagui'

const App = props => <div className={concatClassName(_cn + (props.big ? _cn2 : _cn3) + (" " + (props.colored ? _cn4 : " ")))}>
    <span className={_cn5}>
      Lorem ipsum dolor.
    </span>
  </div>
`,
          language: 'jsx',
        },
        {
          code: ` ._alignItems-1oszu61{-ms-flex-align:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;align-items:stretch;}
._boxSizing-deolkf{box-sizing:border-box;}
._display-6koalj{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}
._flexBasis-1mlwlqe{-ms-flex-preferred-size:auto;-webkit-flex-basis:auto;flex-basis:auto;}
._flexDirection-eqz5dr{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
._flexShrink-1q142lx{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;}
._paddingBottom-z3qxl0{padding-bottom:var(--space-5);}
._paddingLeft-14km6ah{padding-left:var(--space-5);}
._paddingRight-1qpq1qc{padding-right:var(--space-5);}
._paddingTop-1medp4i{padding-top:var(--space-5);}
._paddingBottom-12bic3x{padding-bottom:var(--space-3);}
._paddingLeft-7ztw5e{padding-left:var(--space-3);}
._paddingRight-g6vdx7{padding-right:var(--space-3);}
._paddingTop-1vq430g{padding-top:var(--space-3);}
._backgroundColor-1542mo4{background-color:rgba(0,128,0,1.00);}
._display-1471scf{display:inline;}
._fontFamily-xeweqh{font-family:var(--font-body);}
._fontSize-7uzi8p{font-size:var(--fontSize-2);}
._lineHeight-1l6ykvy{line-height:var(--lineHeight-2);}
._wordWrap-qvutc0{word-wrap:break-word;}`,
          language: 'css',
        },
      ],
    },
  },

  {
    name: 'Responsive',
    input: {
      description:
        'Psuedo states styling and media queries extract at compile-time, but fallback gracefully at runtime.',
      examples: [
        {
          language: 'jsx',
          code: `import { YStack } from 'tamagui'

const App = () => (
  <YStack
    backgroundColor="red"
    hoverStyle={{
      backgroundColor: 'blue',
    }}
    $gtSm={{
      backgroundColor: 'green',
      pressStyle: {
        backgroundColor: 'yellow',
      }
    }}
  />
)
`,
        },
      ],
    },
    output: {
      description:
        'Custom defined media queries output to clean CSS that runs much faster (try resizing this site).',
      outputs: [
        {
          code: `const _cn = " _alignItems-1oszu61 _backgroundColor-1g6456j _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _backgroundColor--hover-57dg7b _backgroundColor-_gtSm_1542mo4 _backgroundColor-_gtSm_-active-98uye2"
import { YStack } from 'tamagui'

const App = () => <div className={_cn} />`,
          language: 'jsx',
        },
        {
          code: `._alignItems-1oszu61{-ms-flex-align:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;align-items:stretch;}
._backgroundColor-1g6456j{background-color:rgba(255,0,0,1.00);}
._boxSizing-deolkf{box-sizing:border-box;}
._display-6koalj{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}
._flexBasis-1mlwlqe{-ms-flex-preferred-size:auto;-webkit-flex-basis:auto;flex-basis:auto;}
._flexDirection-eqz5dr{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
._flexShrink-1q142lx{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;}
@media not all and (hover: none) { :root  ._backgroundColor--hover-57dg7b:hover{background-color:rgba(0,0,255,1.00);} }
@media screen and (min-width: 861px) { :root:root ._backgroundColor-_gtSm_1542mo4{background-color:rgba(0,128,0,1.00);} }
@media screen and (min-width: 861px) { :root:root :root:root  ._backgroundColor-_gtSm_-active-98uye2:active{background-color:rgba(255,255,0,1.00);} }`,
          language: 'css',
        },
      ],
    },
  },

  {
    name: 'Shorthands',
    input: {
      description:
        'Fully typed shorthands you can set up yourself work with all the features of Tamagui.',
      examples: [
        {
          language: 'jsx',
          code: `import { YStack, Text } from 'tamagui'

const App = () => (
  <YStack px="$2" w={550} $gtSm={{ px: '$6' }}>
    <Text fs="$2">
      Lorem ipsum dolor.
    </Text>
  </YStack>
)`,
        },

        {
          language: 'jsx',
          code: `export default createTamagui({
  shorthands: {
    px: 'paddingHorizontal',
    w: 'width',
    c: 'color',
    fs: 'fontSize',
  }
})`,
        },
      ],
    },
    output: {
      description:
        'Shorthands work with the compiler support of media queries, psuedo styling and conditional logic.',
      outputs: [
        {
          code: `const _cn2 = " _boxSizing-deolkf _color-scmqyp _display-1471scf _fontFamily-187pbxx _fontSize-7uzi8p _wordWrap-qvutc0"
  const _cn = " _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _paddingLeft-11jtx42 _paddingRight-4a8ukp _width-11mp6g5 _paddingLeft-_gtSm_1hxi05q _paddingRight-_gtSm_poy3ov"
  import { Text, YStack } from 'tamagui'
  
  const App = () => <div className={_cn}>
      <span className={_cn2}>
        Lorem ipsum dolor.
      </span>
    </div>`,
          language: 'jsx',
        },
        {
          code: `._alignItems-1oszu61{-ms-flex-align:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;align-items:stretch;}
._boxSizing-deolkf{box-sizing:border-box;}
._display-6koalj{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}
._flexBasis-1mlwlqe{-ms-flex-preferred-size:auto;-webkit-flex-basis:auto;flex-basis:auto;}
._flexDirection-eqz5dr{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
._flexShrink-1q142lx{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;}
._paddingLeft-11jtx42{padding-left:var(--space-2);}
._paddingRight-4a8ukp{padding-right:var(--space-2);}
._width-11mp6g5{width:550px;}
@media screen and (min-width: 861px) { :root:root ._paddingLeft-_gtSm_1hxi05q{padding-left:var(--space-6);} }
@media screen and (min-width: 861px) { :root:root ._paddingRight-_gtSm_poy3ov{padding-right:var(--space-6);} }
._display-1471scf{display:inline;}
._fontFamily-187pbxx{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;}
._fontSize-7uzi8p{font-size:var(--fontSize-2);}
._wordWrap-qvutc0{word-wrap:break-word;}`,
          language: 'css',
        },
      ],
    },
  },

  {
    name: 'Hooks',
    input: {
      description:
        'Theme and media query hooks, fully typed that work the same across native and web.',
      examples: [
        {
          language: 'jsx',
          code: `import { useMedia, useTheme, YStack } from 'tamagui'

const App = () => {
  const theme = useTheme()
  const media = useMedia()

  return (
    <YStack
      y={media.sm ? 10 : 0}
      backgroundColor={media.lg ? theme.red : theme.blue}
      {...media.xl && {
        y: theme.space2
      }}
    />
  )
}`,
        },
      ],
    },
    output: {
      description:
        'If all hooks are used purely for styling, the compiler will remove the hook call entirely.',
      outputs: [
        {
          code: `const _cn = " _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _transform-_sm_1exagq _transform-_sm0_1wpzndr _backgroundColor-_lg_no4z4g _backgroundColor-_lg0_1qoifqd _transform-_xl_gqa6p0"
import { YStack, useMedia, useTheme } from 'tamagui'

const App = () => {
  return <div className={_cn} />
}`,
          language: 'jsx',
        },
        {
          code: ` ._alignItems-1oszu61{-ms-flex-align:stretch;-webkit-align-items:stretch;-webkit-box-align:stretch;align-items:stretch;}
._boxSizing-deolkf{box-sizing:border-box;}
._display-6koalj{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;}
._flexBasis-1mlwlqe{-ms-flex-preferred-size:auto;-webkit-flex-basis:auto;flex-basis:auto;}
._flexDirection-eqz5dr{-ms-flex-direction:column;-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;}
._flexShrink-1q142lx{-ms-flex-negative:0;-webkit-flex-shrink:0;flex-shrink:0;}
@media screen and (max-width: 860px) { :root:root ._transform-_sm_1exagq{-webkit-transform:translateY(10px);transform:translateY(10px);} }
@media not all and (max-width: 860px) { :root:root ._transform-_sm0_1wpzndr{-webkit-transform:translateY(0px);transform:translateY(0px);} }
@media screen and (min-width: 1120px) { :root:root:root ._backgroundColor-_lg_no4z4g{background-color:var(--red);} }
@media not all and (min-width: 1120px) { :root:root:root ._backgroundColor-_lg0_1qoifqd{background-color:var(--blue);} }
@media screen and (min-width: 1280px) { :root:root:root:root ._transform-_xl_gqa6p0{-webkit-transform:translateY(var(--space2));transform:translateY(var(--space2));} }`,
          language: 'css',
        },
      ],
    },
  },
]
