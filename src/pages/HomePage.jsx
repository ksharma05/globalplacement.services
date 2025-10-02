import React, { useEffect } from 'react'
import Home from '../components/Home'

const HomePage = () => {
  useEffect(() => {
    console.log('HomePage component mounted');
  }, [] );
  return (
    <div>
      <Home />
    </div>
  )
}

export default HomePage