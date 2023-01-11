import { LinkTreeLayout } from "layout/link-tree";

import path from 'path';
import { promises as fs } from 'fs';
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const jsonDirectory = path.join(process.cwd(), 'data');

  const fileName = 'perfil.json'
  const fileContents =  await fs.readFile(`${jsonDirectory}/${fileName}`, 'utf8');

  const perfil = JSON.parse(fileContents)
  
  return {
    props: {
      perfil
    }
  }
}

export default function LinkTree (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <LinkTreeLayout {...props} />
  )
}