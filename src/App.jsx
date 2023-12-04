import './App.css'
import Card from './components/Card'

function App() {

  const cards = [
    {
      img: 'logo.png',
      text: `Some quick example text to build on the card title and make up the bulk of thr card's content`,
      title: 'Card title',
    },
    {
      img: 'logo-vite.png',
      text: `With supporting text below as a natural lead-in to additional content`,
      title: 'Special title treatment',
    }
]

  return (

    <>
      {cards.map((e, index) =>
       <Card image={e.img} key={index}>
                {<h5 className="card-title">{e.title}</h5>}
                {<p className="card-text">{e.text}</p>}
                {<a href="#" className="btn btn-primary">Go somewhere</a>}
       </Card>
      )}
    </>
  )
}

export default App
