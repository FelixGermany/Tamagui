import { TextProps, ThemeableProps, themeable } from '@tamagui/core'
import React, { forwardRef } from 'react'

import { InteractiveFrame, InteractiveFrameProps } from './InteractiveFrame'
import { SizableText } from './Paragraph'

// bugfix esbuild strips react jsx: 'preserve'
React['keep']

export type ButtonProps = InteractiveFrameProps &
  ThemeableProps & {
    textProps?: Omit<TextProps, 'children'>
    noTextWrap?: boolean
    icon?: JSX.Element | null
    iconAfter?: JSX.Element | null
  }

export const Button = InteractiveFrame.extractable(
  themeable(
    forwardRef(
      (
        {
          children,
          icon,
          iconAfter,
          space = '$1',
          textProps,
          noTextWrap,
          elevation,
          theme: themeName,
          // TODO
          size,
          ...props
        }: ButtonProps,
        ref
      ) => {
        return (
          <InteractiveFrame size={size} space={space} ref={ref as any} {...props}>
            {icon}
            {noTextWrap ? (
              children
            ) : !children ? null : textProps ? (
              // flex shrink = 1, flex grow = 0 makes buttons shrink properly in native
              <SizableText
                color="$color2"
                flexGrow={0}
                flexShrink={1}
                ellipse
                size={size}
                {...textProps}
              >
                {children}
              </SizableText>
            ) : (
              <SizableText size={size} color="$color2" flexGrow={0} flexShrink={1} ellipse>
                {children}
              </SizableText>
            )}
            {iconAfter}
          </InteractiveFrame>
        )
      }
    )
  )
)
