import { PropsWithChildren } from "react";

export function Button (props: PropsWithChildren) {
  const { children } = props

  
  return (
    <button>
      {children}
    </button>
  )
}