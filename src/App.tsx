import{ useState } from 'react'
import './App.css'
import Card from './card.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>Zeas!</h1>
   <div className="card-container">
   <Card title="Bildchen Nr1" description="made with love" imageurl="https://picsum.photos/200/300"/>
  <Card title="Bildchen Nr2" description="made with love" imageurl="https://picsum.photos/200"/>
  <Card title="Bildchen Nr3" description="made with love" imageurl="https://picsum.photos/200/300"/>  
  <Card title="Bildchen Nr4" description="made with love" imageurl="https://picsum.photos/200"/>  
   </div>
   </>
  )
}

export default App
