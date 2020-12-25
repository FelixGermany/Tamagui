export const stylePropsView = {
  pointerEvents: true,
  userSelect: true,
  cursor: true,
  backfaceVisibility: true,
  backgroundColor: true,
  borderBottomColor: true,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderBottomWidth: true,
  borderColor: true,
  borderEndColor: true,
  borderLeftColor: true,
  borderLeftWidth: true,
  borderRadius: true,
  borderRightColor: true,
  borderRightWidth: true,
  borderStartColor: true,
  borderStyle: true,
  borderTopColor: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  borderTopWidth: true,
  borderWidth: true,
  opacity: true,
  transform: true,
  transformMatrix: true,
  rotation: true,
  scaleX: true,
  scaleY: true,
  translateX: true,
  translateY: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  aspectRatio: true,
  borderEndWidth: true,
  borderStartWidth: true,
  bottom: true,
  display: true,
  end: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  height: true,
  justifyContent: true,
  left: true,
  margin: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,
  maxHeight: true,
  maxWidth: true,
  minHeight: true,
  minWidth: true,
  overflow: true,
  padding: true,
  paddingBottom: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  position: true,
  right: true,
  start: true,
  top: true,
  width: true,
  zIndex: true,
  direction: true,
  shadowColor: true,
  shadowOffset: true,
  shadowOpacity: true,
  shadowRadius: true,
}

export const stylePropsTextOnly = {
  color: true,
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontWeight: true,
  letterSpacing: true,
  lineHeight: true,
  textAlign: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  textDecorationColor: true,
  textShadowColor: true,
  textShadowOffset: true,
  textShadowRadius: true,
  textTransform: true,
}

export const stylePropsText = {
  ...stylePropsView,
  ...stylePropsTextOnly,
}

// unique shortkey for each style key
// for atomic styles prefixing and collision dedupe
export const uniqueStylePrefix: { [key: string]: string } = {}
const existing = new Set<string>()
for (const name in stylePropsText) {
  addStylePrefix(name)
}

export function getOrCreateStylePrefix(name: string) {
  return uniqueStylePrefix[name] ?? addStylePrefix(name)
}

function addStylePrefix(name: string) {
  let len = 1
  let key = getNiceKey(name)
  while (existing.has(key)) {
    len++
    key = getNiceKey(name, len)
  }
  existing.add(key)
  uniqueStylePrefix[name] = key
  return key
}

function getNiceKey(name: string, len = 1) {
  let key = ''
  for (const [index, char] of name.split('').entries()) {
    if (index === 0 || char.toUpperCase() === char) {
      key += name.slice(index, index + len)
    }
  }
  return key
}
