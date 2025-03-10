import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { Row, Col, Button } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import { useGetProductsQuery } from '../redux/api/productApi';
import { WishlistBtn } from './Wishlist';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const { addItem } = useCart();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product details.</div>;

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, price, description, img_url_one, img_url_two } = product;

  const handleAddToCart = () => {
    addItem(product);
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: `${title} has been added to your cart.`,
      confirmButtonText: 'OK'
    });
  };

  return (
    <div className="container my-5">
      <Row>
        <Col md={6}>
          <img src={img_url_one}  alt={title} className="img-fluid rounded" />
          <img src={img_url_two} alt={title} className="img-fluid rounded mt-3" />
        </Col>
        <Col md={6}>
          <h2>{title}</h2>
          <p className="text-muted">${price}</p>
          <p>{description}</p>
          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
          <Link to="/shop" className="btn btn-secondary ms-3">Back to Shop</Link>
          <div style={{color:'#000', width:'5%'}}> <WishlistBtn wishlistData={product} /></div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
