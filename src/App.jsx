import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import CounterContainer from './components/hero/CounterContainer'
import Agenda from './components/agenda/Agenda'
import LastEditionCarousel from './components/last-year-edition/LastEditionCarousel'
import Speakers from './components/speakers/Speakers'
import Footer from './components/footer/Footer'
import Sponsors from './components/sponsors/Sponsors'

const App = () => {
  return (
    <div className='' >
      <Navbar />
      <Hero />
      <CounterContainer countDownLimit={1702713600000} />
      <LastEditionCarousel />
      <Agenda />
      <Speakers />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default App