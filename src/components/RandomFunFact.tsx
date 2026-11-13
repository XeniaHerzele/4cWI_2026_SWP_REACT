import { useState } from 'react'
import styles from './randomFunFact.module.css'

const funFacts = [
  'Honig verdirbt praktisch nie, wenn er richtig verschlossen aufbewahrt wird.',
  'Oktopusse haben drei Herzen.',
  'Bananen sind botanisch gesehen Beeren.',
  'Ein Tag auf der Venus dauert länger als ein Venusjahr.',
  'Wombats machen würfelförmigen Kot.',
]

export default function RandomFunFact() {
  const [fact, setFact] = useState('')

  const showRandomFact = () => {
    const availableFacts = funFacts.filter((item) => item !== fact)
    const randomIndex = Math.floor(Math.random() * availableFacts.length)
    setFact(availableFacts[randomIndex])
  }

  return (
    <section className={styles.factCard} aria-live="polite">
      <button type="button" className={styles.factButton} onClick={showRandomFact}>
        Zufälligen Fun Fact anzeigen
      </button>
      <p>{fact || 'Klicke auf den Button und entdecke einen Fun Fact.'}</p>
    </section>
  )
}
