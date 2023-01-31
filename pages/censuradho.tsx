import { LinkTreeLayout } from "layout/link-tree";

import { Head } from "components/common";
import { promises as fs } from 'fs';
import { InferGetStaticPropsType } from "next";
import path from 'path';
import { Perfil } from "types";

export const getStaticProps = async () => {
  const jsonDirectory = path.join(process.cwd(), 'data');

  const fileName = 'perfil.json'
  const fileContents =  await fs.readFile(`${jsonDirectory}/${fileName}`, 'utf8');

  const perfil = JSON.parse(fileContents) as Perfil
  

  return {
    props: {
      perfil
    }
  }
}

export default function LinkTree (props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head 
        title="Gustavo Leite Oliveira (censuradho) | Software developer"
        description="Alguns links importantes"
      />
      <LinkTreeLayout {...props} />
    </>
  )
}