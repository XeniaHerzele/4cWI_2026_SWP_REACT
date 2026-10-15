const games = [
  'Overwatch',
  'Battlefield 3',
  'Cyberpunk 2077',
  'Powerwash Simulator',
  'Terraria',
]

export default function TolleListe() {
  return (
    <section className="game-list" aria-labelledby="game-list-title">
      <h2 id="game-list-title">supa Spiele</h2>
      <ul>
        {games.map((game) => (
          <li key={game}>{game}</li>
        ))}
      </ul>
    </section>
  )
}