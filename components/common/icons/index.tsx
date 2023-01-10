import { icons } from "./icons";
import { IconsProps } from "./types";

export function Icons (props: IconsProps) {
  const {
    name,
    size = 20
  } = props

  const Component = icons[name]

  return (
    <Component 
      preserveAspectRatio
      style={{
        width: size,
        height: 'auto'
      }}/>
  )
}