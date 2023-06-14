import { AboveFoldProps } from "./types";

export function AboveFold (props: AboveFoldProps) {
  const { data } = props

  return (
    <section className="container">
      <h1>{data.above.title}</h1>
      <strong>{data.above.subtitle}</strong>
      <p>{data.above.description}</p>
    </section>
  )
}