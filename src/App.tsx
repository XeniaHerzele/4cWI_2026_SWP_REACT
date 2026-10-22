import styles from './App.module.css'
import Card from './card.tsx'
import FunkyGif from './funkygif.tsx'
import TolleListe from './tolleliste.tsx'

function App() {
  return (
    <>
      <h1 className={styles.title}>Nyan Cat supremacy!!</h1>
      <div className={styles.cardContainer}>
        <Card title="Bildchen Nr1" description="nyan kitty" imageurl="https://media.giphy.com/media/VGuAZNdkPUpEY/giphy.gif" />
        <Card title="Bildchen Nr2" description="nyan kitty" imageurl="https://media.giphy.com/media/KqzoMxBSJwUdG/giphy.gif" />
        <Card title="Bildchen Nr3" description="nyan kitty" imageurl="https://media.giphy.com/media/DEMtMVPta88KRrK86F/giphy.gif" />
      </div>
      <div className={styles.bottomContent}>
        <FunkyGif imageurl="https://media.giphy.com/media/GkD4U3VfiIbzcBhQNu/giphy.gif" />
        <TolleListe />
      </div>
    </>
  )
}

export default App
