import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import CounterContainer from './components/hero/CounterContainer'
import About from './components/About/about'

const App = () => {
  return (
    <div className='' >
      <Navbar />
      <Hero />
      <CounterContainer countDownLimit={1702713600000} />
      <About/>

    </div>
  )
}

export default App