import React from 'react'
import { Link } from 'react-router-dom'

const BannerPages = ({itemOne,itemTwo}) => {
  return (
    <>
     <div className="hero-container">
        <div className="hero">
          <h2>{itemOne}</h2>
          <h5> <Link to='/'>{itemTwo}</Link> - {itemOne} </h5>
        </div>
       </div>
      {/* Hero-End */}
    </>
  )
}

export default BannerPages