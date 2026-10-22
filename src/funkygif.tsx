import styles from './funkygif.module.css'

type Props = {imageurl: string}

export default function FunkyGif({ imageurl }: Props) {
  return (
    <div className={styles.funkygif}>
      <img src={imageurl} alt="" />
    </div>
  )
}