import Card from './card.tsx'
import styles from './cards.module.css'

const cards = [
  {
    title: 'Bildchen Nr1',
    description: 'nyan kitty',
    imageurl: 'https://media.giphy.com/media/VGuAZNdkPUpEY/giphy.gif',
  },
  {
    title: 'Bildchen Nr2',
    description: 'nyan kitty',
    imageurl: 'https://media.giphy.com/media/KqzoMxBSJwUdG/giphy.gif',
  },
  {
    title: 'Bildchen Nr3',
    description: 'nyan kitty',
    imageurl: 'https://media.giphy.com/media/DEMtMVPta88KRrK86F/giphy.gif',
  },
]

export default function Cards() {
  return (
    <section className={styles.cards} aria-label="Nyan Cat Bilder">
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </section>
  )
}
