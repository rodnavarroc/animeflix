import React from 'react'
import IndexSlider from '../components/IndexSlider/IndexSlider'
import Navigation from '../components/Navigation/Navigation'

const Index = () => {
  return (
    <div className="indexContainer">
      <Navigation />

      <h2 className='slogan'>Only the best ones in the world.</h2>

      <IndexSlider />
    </div>
  )
}

export default Index