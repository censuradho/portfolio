
import styles from './styles.module.css'

export function Slogan ({ message }: { message: string }) {
  return (
    <div className={styles.slogan}>
      <div className="container">
        <strong className={styles.slogan__message}>{message}</strong>
      </div>
    </div>
  )
}