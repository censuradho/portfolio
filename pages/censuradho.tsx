import { LinkTreeLayout } from "layout/link-tree";

import path from 'path';
import { promises as fs } from 'fs';
import { InferGetStaticPropsType } from "next";
import { Head } from "components/common";
import { Perfil, TLink} from "types";
import { getLinkPreview, LinkPreview  } from "service/link-preview";

export const getStaticProps = async () => {
  const jsonDirectory = path.join(process.cwd(), 'data');

  const fileName = 'perfil.json'
  const fileContents =  await fs.readFile(`${jsonDirectory}/${fileName}`, 'utf8');

  const perfil = JSON.parse(fileContents) as Perfil
  
  const projects_links = [] as Perfil['projects_links']

  for (const project of perfil.projects_links) {
    const _preview = {} as LinkPreview

    try {
      const preview = await getLinkPreview(project.link)
      Object.assign(_preview, preview.data)

    } catch (err) {
      console.log(err)
      Object.assign(_preview, project)
    }
  
    const links = {
      ...project,
      link_preview: _preview.image || ''
    } as TLink
  
    projects_links.push(links)
  }

  const _perfil = {
    ...perfil,
    projects_links
  }

  return {
    props: {
      perfil: _perfil
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