import React from 'react'
import { Paragraph } from 'tamagui'

export const Description = ({ children, ...props }) => {
  // takes the text even if it's wrapped in `<p>`
  // https://github.com/wooorm/xdm/issues/47
  const childText = typeof children === 'string' ? children : children.props.children
  return (
    <Paragraph size="$7" color="$color3" tag="p" mb="$2" mt="0" {...props}>
      {childText}
    </Paragraph>
  )
}
