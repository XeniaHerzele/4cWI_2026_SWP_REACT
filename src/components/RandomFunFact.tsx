import { useState } from 'react'
import styles from './randomFunFact.module.css'

const dadJokeApiUrl = 'https://icanhazdadjoke.com/'

function isDadJokeResponse(value: unknown): value is { joke: string } {
  return (
    typeof value === 'object' &&
    value !== null &&
    'joke' in value &&
    typeof value.joke === 'string'
  )
}

export default function RandomFunFact() {
  const [fact, setFact] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const showRandomFact = async () => {
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch(dadJokeApiUrl, {
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error(`Die Dad-Joke-API antwortete mit HTTP ${response.status}.`)
      }

      const result: unknown = await response.json()
      if (!isDadJokeResponse(result)) {
        throw new Error('Die Dad-Joke-API hat ein unerwartetes Antwortformat geliefert.')
      }

      setFact(result.joke)
    } catch (requestError) {
      console.error('Dad Joke konnte nicht geladen werden:', requestError)
      setError('Bitte versuche es erneut.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className={styles.factCard} aria-live="polite">
      <button
        type="button"
        className={styles.factButton}
        onClick={showRandomFact}
        disabled={isLoading}
      >
        {isLoading ? 'Dad Joke wird geladen …' : 'Zufälligen Dad Joke anzeigen'}
      </button>
      <p>{fact || 'Klicke auf den Button und entdecke einen Dad Joke.'}</p>
      {error && <p className={styles.factError} role="alert">{error}</p>}
    </section>
  )
}
