import { PropsWithChildren } from "react";
import { Header } from "./components";

export function Layout ({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}