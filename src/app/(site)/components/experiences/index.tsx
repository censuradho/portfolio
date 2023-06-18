
import Image from 'next/image'
import styles from './styles.module.css'
import { ExperiencesProps } from './types'
import { Box } from '@/components'

export function Experiences (props: ExperiencesProps) {
  const { data } = props

  const renderItems = data.items.map(((value, index) => (
    <li key={index} className={styles.experiences__item}>
      <figure
        className={styles['experiences__item-avatar']}
      >
        <Image 
          src={value.avatar}
          width={32}
          height={32}
          alt={value.company_name}
        />
      </figure>
      <Box flexWrap="wrap" alignItems="flex-end" fullWidth>
        <Box flex={1} flexDirection="column">
          <strong className={styles['experiences__item-company_name']}>{value.company_name}</strong>
          <p className={styles['experiences__item-position']}>{value.position}</p>
        </Box>
        <span className={styles['experiences__item-date']}>{value.date}</span>
      </Box>
    </li>
  )))

  return (
    <div className="container-sm">
      <section className={styles.experiences}>
        <h2 className={styles.experiences__title}>Carreira</h2>
        <ul className={styles.experiences__list}>{renderItems}</ul>
      </section>
    </div>
  )
}