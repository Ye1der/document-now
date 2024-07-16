import { MainForm } from '../components/mainForm'
import styles from '../styles/mainCard.module.css'

export function MainCard() {
  return (
    <section className={styles.mainCard}>
      <MainForm />
    </section>
  )
}
