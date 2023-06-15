import { ExperiencesProps } from "./types";

import styles from './styles.module.css'
import { Box } from "@/components";
import Image from "next/image";

export function Experiences ({ data }: ExperiencesProps) {
  const renderItems = data.items.map((value, index) => (
    <li key={index}>
      <Image 
        src={value.logo} 
        alt={value.title}
        // sizes="40px"
        width={40} 
        height={40} 
        style={{
          borderRadius: '50%'
        }}
      />
      <Box gap={1}>
        <span className={styles['experiences__list-index']}>{`0${index + 1} /`}</span>
        <div>
          <Box flexDirection="column" gap={1}>
            <h3>
              <span className={styles['experiences__list-title']}>{value.title}</span>
              <span>{' • '}</span>
              <span className={styles['experiences__list-location']}>{value.location}</span>
            </h3>
            <Box gap={1}>
              <span className={styles['experiences__list-position']}>{value.position}</span>
              <span className={styles['experiences__list-date']}>{value.date}</span>
            </Box>
          </Box>
          <p className={styles['experiences__list-description']}>{value.description}</p>
        </div>
      </Box>
    </li>
  ))

  return (
    <div className="container">
      <section className={styles.experiences}>
        <h2 className={styles.experiences__title}>{data.title}</h2>
        <ul className={styles.experiences__list}>{renderItems}</ul>
      </section>
    </div>
  )
}