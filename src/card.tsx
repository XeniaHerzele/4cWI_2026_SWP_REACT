import { useState } from 'react'
import styles from './card.module.css'

type Props = { title: string; description: string; imageurl: string }

export default function Card({ title, description, imageurl }: Props) {
  const [counter, setCounter] = useState(() => {
    const initialNumber = Math.floor(Math.random() * 100) + 1
    return {
      initialNumber,
      remaining: initialNumber,
      clicks: 0,
    }
  })

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <button
        className={styles.imageButton}
        type="button"
        onClick={() =>
          setCounter((currentCounter) => {
            if (currentCounter.remaining === 0) {
              return currentCounter
            }

            return {
              ...currentCounter,
              remaining: currentCounter.remaining - 1,
              clicks: currentCounter.clicks + 1,
            }
          })
        }
        disabled={counter.remaining === 0}
        aria-label={`${title} anklicken und Countdown verringern`}
      >
        <img src={imageurl} alt={title} />
      </button>
      <p>{description}</p>
      <p>Remaining: {counter.remaining}</p>
      <p>So viele clicks bis Manasek wieder in die Schule kommt: {counter.clicks}</p>
    </div>
  )
}
