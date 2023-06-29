import { ProjectsProps } from "./types";

import styles from './styles.module.css'
import { Carousel } from "@/components";

export function Projects ({ data }: ProjectsProps) {
  
  return (
    <div className="container-sm">
      <section className={styles.projects}>
        <h2 className={styles.projects__title}>Projetos destaques</h2>
        <Carousel 
          data={data.items}
        />
      </section>
    </div>
  )
}