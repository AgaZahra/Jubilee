import React from 'react';
import { useWishlist } from 'react-use-wishlist';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AiFillHeart } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { TiDelete } from 'react-icons/ti';
import { Table } from 'react-bootstrap';
import slugify from 'slugify';
import BannerPages from '../components/BannerPages';

// Wishlist button component
export const WishlistBtn = ({ wishlistData }) => {
  const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

  const toggleWishlist = (product) => {
    if (inWishlist(product.id)) {
      removeWishlistItem(product.id);
    } else {
      if (!inWishlist(product.id)) {
        addWishlistItem(product);
        Swal.fire({
          title: 'Added!',
          text: 'Product has been added to the wishlist.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  return (
    <span onClick={() => toggleWishlist(wishlistData)}>
      {inWishlist(wishlistData.id) ? <AiFillHeart className="card-icon" /> : <CiHeart className="card-icon" />}
    </span>
  );
};

// Wishlist page
export const Wishlist = () => {
  const { items, isEmpty, removeWishlistItem } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (item) => {
    addItem(item);
    Swal.fire({
      title: 'Added to Cart!',
      text: `${item.title} has been added to your cart.`,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  if (isEmpty) {
    return (
      <div className="wishlist-empty">
        <h2>Your wishlist is empty.</h2>
        <Link to="/shop" className="btn btn-primary">Browse Shop</Link>
      </div>
    );
  }

  return (
    <>
    <BannerPages itemOne={'Wishlsit'} itemTwo={'Home'}/>
    <div className="wishlist-container">
      <h1 className='m'> Your Wishlist</h1>
      <div className="container">
        <Table bordered hover responsive>
          <thead>
            <tr className="head text-center">
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="body text-center">
            {items.map((item, index) => (
              <tr key={`${item.id}-${index}`}>
                <td>
                  <span onClick={() => removeWishlistItem(item.id)} style={{ cursor: 'pointer', color: 'red' }}>
                    <TiDelete className="icon" />
                  </span>
                </td>
                <td>
                  <Link to={`/products/${slugify(item.title)}`}>
                    <img src={item.img_url_one} alt={item.title} width={100} />
                  </Link>
                </td>
                <td>{item.title}</td>
                <td>${parseFloat(item.price).toFixed(2)}</td>
                <td>{item.stock}</td>
                <td>
                  <button className="btn btn-success" onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
    </>
  );
};
