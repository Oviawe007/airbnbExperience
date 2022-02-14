import React from "react"
import Header from "./header"
import Hero from "./heros"
import Card from "./Card"
import data from "./data"
import Footer from "./Footer"

function App() {
  const cardData = data.map((item) => {
    return <Card
      key={item.id}
      Img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  })



  return (
    <div>
        <Header />
        <section>
          <Hero />
          <div className="card--list">
            {cardData}
          </div>
          <Footer />
        </section>
       
    </div>
  )
}

export default App;
