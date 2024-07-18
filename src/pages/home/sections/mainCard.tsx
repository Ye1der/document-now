import { useGlobalContext } from '@/context/globalContext'
import { DetailsDocumentation } from '../components/detailsDocumentation'
import { MainForm } from '../components/mainForm'
import styles from '../styles/mainCard.module.css'

export function MainCard() {
  const { currentDoc } = useGlobalContext()

  return (
    <section className={styles.mainCard}>
      {!currentDoc ? <MainForm /> : <DetailsDocumentation />}
    </section>
  )
}
