import * as React from "react";
import { SVGProps } from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_13_96)">
      <Path
        d="M3.0875 3.57922L5 5.48756L6.9125 3.57922L7.5 4.16672L5 6.66672L2.5 4.16672L3.0875 3.57922Z"
        fill="#757575"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_13_96">
        <Rect width={10} height={10} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
