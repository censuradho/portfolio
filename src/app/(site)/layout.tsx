import { PropsWithChildren } from "react";
import { Header } from "./components";

export default function Layout ({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}