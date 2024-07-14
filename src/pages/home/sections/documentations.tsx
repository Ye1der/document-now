import { CardDocumentation } from '../components/cardDocumentation'
import styles from './styles/documentations.module.css'

export function Documentations() {
  return (
    <section className={styles.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => {
        return <CardDocumentation key={index} />
      })}
    </section>
  )
}
