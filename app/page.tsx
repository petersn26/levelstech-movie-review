import React from 'react';
import Slider from './components/Slider';
const Home = () => {
  return (
    <>
    <div className="pt-5">
          <Slider/>
      </div>
      <div className='pt-5'>
        <h1>SINGLE MOVIE</h1>
        <h4 className='pl-4'>#SINGLE #SEASON</h4>
        <Slider/>
      </div>
    </>
  )
}

export default Home
