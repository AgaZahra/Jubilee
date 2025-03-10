import React, { useEffect } from 'react';
import { useCart } from 'react-use-cart';
import { Link, useNavigate } from 'react-router-dom';
import { WishlistBtn } from '../pages/Wishlist';
import { Col, Row } from 'react-bootstrap';
import { CiSearch } from 'react-icons/ci';
import slugify from 'slugify';
import Swal from 'sweetalert2';

const SingleCard = ({ allData }) => {
  const { addItem } = useCart();  
  const navigate = useNavigate();

  if (!allData) return <div>Product data is missing</div>;

  const { id, title, price, description, img_url_one,img_url_two } = allData;


  // Add to Cart funksiyası
  const handleAddToCart = () => {
    addItem(allData);
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Item added to cart',
      confirmButtonText: 'Ok'
    });
  };

 

  

  // Read More düyməsi ilə məhsul səhifəsinə yönləndirmək
  const handleReadMore = () => {
    navigate(`/product/${id}`);
  };

  return (
    <>
    <Col sm={12} md={6} lg={6}>
  <div className="card my-card">
    <div className="img-box">
      <img src={allData.img_url_one} className="img-one" alt={title} />
      <img src={allData.img_url_two} className="img-two" alt={title} />
      <div className="details">
         <button className="btn" onClick={handleAddToCart}>
    Add to cart
  </button>
</div>

    </div>
    <div className="context">
      <h3>{title}</h3>
      <p>${price}</p>
    </div>
    <div className="icon-items">
      <WishlistBtn  wishlistData={allData}/> <br />
      <CiSearch className="card-icon" onClick={handleReadMore} />
    </div>
  </div>
</Col>


    </>
  );
};

export default SingleCard;
