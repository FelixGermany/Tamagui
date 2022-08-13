import * as React from 'react';
import type { ImageProps } from '../Image';
import type { ViewProps } from '../View';
declare const ImageBackground: React.ForwardRefExoticComponent<{
    blurRadius?: number | undefined;
    defaultSource?: import("../Image/types").Source | undefined;
    draggable?: boolean | undefined;
    onError?: ((e: any) => void) | undefined;
    onLayout?: ((e: any) => void) | undefined;
    onLoad?: ((e: any) => void) | undefined;
    onLoadEnd?: ((e: any) => void) | undefined;
    onLoadStart?: ((e: any) => void) | undefined;
    onProgress?: ((e: any) => void) | undefined;
    resizeMode?: import("../Image/types").ResizeMode | undefined;
    source?: import("../Image/types").Source | undefined;
    style?: import("../../types").GenericStyleProp<import("../Image/types").ImageStyle> | undefined;
} & {
    children?: any;
    dir?: "ltr" | "rtl" | undefined;
    focusable?: boolean | null | undefined;
    lang?: string | undefined;
    nativeID?: string | null | undefined;
    onBlur?: ((e: any) => void) | undefined;
    onClick?: ((e: any) => void) | undefined;
    onClickCapture?: ((e: any) => void) | undefined;
    onContextMenu?: ((e: any) => void) | undefined;
    onFocus?: ((e: any) => void) | undefined;
    onKeyDown?: ((e: any) => void) | undefined;
    onKeyUp?: ((e: any) => void) | undefined;
    onLayout?: ((e: import("../../types").LayoutEvent) => void) | undefined;
    onMoveShouldSetResponder?: ((e: any) => boolean) | undefined;
    onMoveShouldSetResponderCapture?: ((e: any) => boolean) | undefined;
    onResponderEnd?: ((e: any) => void) | undefined;
    onResponderGrant?: ((e: any) => boolean | void) | undefined;
    onResponderMove?: ((e: any) => void) | undefined;
    onResponderReject?: ((e: any) => void) | undefined;
    onResponderRelease?: ((e: any) => void) | undefined;
    onResponderStart?: ((e: any) => void) | undefined;
    onResponderTerminate?: ((e: any) => void) | undefined;
    onResponderTerminationRequest?: ((e: any) => boolean) | undefined;
    onScrollShouldSetResponder?: ((e: any) => boolean) | undefined;
    onScrollShouldSetResponderCapture?: ((e: any) => boolean) | undefined;
    onSelectionChangeShouldSetResponder?: ((e: any) => boolean) | undefined;
    onSelectionChangeShouldSetResponderCapture?: ((e: any) => boolean) | undefined;
    onStartShouldSetResponder?: ((e: any) => boolean) | undefined;
    onStartShouldSetResponderCapture?: ((e: any) => boolean) | undefined;
    pointerEvents?: "auto" | "box-none" | "box-only" | "none" | undefined;
    style?: import("../../types").GenericStyleProp<import("../View/types").ViewStyle> | undefined;
    testID?: string | null | undefined;
    dataSet?: Object | null | undefined;
    onMouseDown?: ((e: any) => void) | undefined;
    onMouseEnter?: ((e: any) => void) | undefined;
    onMouseLeave?: ((e: any) => void) | undefined;
    onMouseMove?: ((e: any) => void) | undefined;
    onMouseOver?: ((e: any) => void) | undefined;
    onMouseOut?: ((e: any) => void) | undefined;
    onMouseUp?: ((e: any) => void) | undefined;
    onScroll?: ((e: any) => void) | undefined;
    onTouchCancel?: ((e: any) => void) | undefined;
    onTouchCancelCapture?: ((e: any) => void) | undefined;
    onTouchEnd?: ((e: any) => void) | undefined;
    onTouchEndCapture?: ((e: any) => void) | undefined;
    onTouchMove?: ((e: any) => void) | undefined;
    onTouchMoveCapture?: ((e: any) => void) | undefined;
    onTouchStart?: ((e: any) => void) | undefined;
    onTouchStartCapture?: ((e: any) => void) | undefined;
    onWheel?: ((e: any) => void) | undefined;
    href?: string | null | undefined;
    hrefAttrs?: {
        download?: boolean | null | undefined;
        rel?: string | null | undefined;
        target?: string | null | undefined;
    } | null | undefined;
} & import("../View/types").AccessibilityProps & {
    imageRef?: any;
    imageStyle?: ImageProps['style'];
    style?: ViewProps['style'];
} & React.RefAttributes<HTMLElement & import("../../types").PlatformMethods>>;
export default ImageBackground;
//# sourceMappingURL=index.d.ts.map