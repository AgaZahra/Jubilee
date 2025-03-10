import React from 'react'
import SingleCard from '../components/SingleCard'
import ProductsList from '../redux/features/ProductsList'
import { Col, Row } from 'react-bootstrap'
import BannerPages from '../components/BannerPages'
import img from '../assets/media/img/sub-banner-1.jpeg';

const Shop = () => {
  return (
    <>
    <BannerPages itemOne={'Shop'} itemTwo={'Home'}/>
    

    <Row className='m-5'>
    <Col sm={12} md={12} lg={4} >

     <div className="contetn">
      <h2>Filter:</h2>
     <div className="filter-section">
        <h5>Availability</h5>
        <ul>
          <li>In stock</li>
          <li>Out of stock</li>
        </ul>
      </div>

      <div className="filter-section">
        <h5>Product type</h5>
        <ul>
          <li>Accessories</li>
          <li>Diamond</li>
          <li>Gold</li>
          <li>Necklace</li>
          <li>Pendant</li>
          <li>Rings</li>
        </ul>
      </div>

      <div className="filter-section">
        <h5>Brand</h5>
        <ul>
          <li>Bellagio Jewelers</li>
          <li>Florida Diamond</li>
          <li>Gold Ring</li>
          <li>Junky Jewel</li>
          <li>Miss Curious</li>
          <li>Reclaim Artsy</li>
        </ul>
      </div>
     <img src={img} alt="error" style={{ width: '90%' }}/>
     </div>

    </Col>


    <Col sm={12} md={12} lg={8}>
    <ProductsList/>
    </Col>
    </Row>
    
    </>
  )
}

export default Shop