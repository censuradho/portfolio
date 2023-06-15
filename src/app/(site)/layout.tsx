import { PropsWithChildren } from "react";
import { Header } from "./components";
import { getDictionary } from "@/utils/get-dictionary";

export default async function Layout ({ children }: PropsWithChildren) {
  const { navigation } = await getDictionary()

  return (
    <div>
      <Header navigation={navigation} />
      {children}
    </div>
  )
}