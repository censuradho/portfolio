import { BlogPageProps } from "./types";

export default function BlogPage ({ params }: BlogPageProps) {
  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  )
}