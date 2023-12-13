import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import CounterContainer from './components/hero/CounterContainer'
import About from './components/About/about'
import Agenda from './components/agenda/Agenda'
import LastEditionCarousel from './components/last-year-edition/LastEditionCarousel'
import Speakers from './sections/Speakers'
import Footer from './sections/Footer'
import Sponsors from './components/Sponsors/Sponsors'

const App = () => {
  return (
    <div className='' >
      <Navbar />
      <Hero />
      <CounterContainer countDownLimit={1702713600000} />
      <About/>
      <LastEditionCarousel />
      <Agenda></Agenda>
      <Speakers />
      <Sponsors/>
      <Footer />
    </div>
  )
}

export default App