import React, { useContext } from 'react'
import appContext from '../context/appContext'
import DiscoverSection from '../components/DiscoverSection/DiscoverSection'
import IndexSlider from '../components/IndexSlider/IndexSlider'
import Navigation from '../components/Navigation/Navigation'

const Index = () => {

  const context = useContext(appContext)

  const {
    open,
    openMenu
  } = context;

  return (
    <div className={`indexContainer ${open ? 'openMenu' : ''}`}>
      <Navigation />

      <h2 className='slogan'>Only the best ones in the world.</h2>

      <IndexSlider />

      <DiscoverSection />
    </div>
  )
}

export default Index