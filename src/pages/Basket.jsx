import React from 'react';
import { useCart } from 'react-use-cart';
import { Link, useNavigate } from 'react-router-dom'; 
import { Table } from 'react-bootstrap'; 
import Swal from 'sweetalert2'; 
import { BiLabel } from 'react-icons/bi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import BannerPages from '../components/BannerPages';


const Basket = () => {
  const {
    isEmpty,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    cartTotal
  } = useCart();
  const navigate = useNavigate(); 
  const user = localStorage.getItem("name"); // 
  if (isEmpty) {
    return <div>Your cart is empty!</div>;
  }

  const handleProceedToCheckout = () => {
    if (!user) {
    
      Swal.fire({
        title: 'Login Required',
        text: 'Please log in to proceed to checkout.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    } else {
      
      navigate("/checkout");
    }
  };

  return (
   <>
    <BannerPages itemOne={'Basket'} itemTwo={'Home'}/>
    <div className="basket m-5">
      <h2>Shopping Cart</h2>
      <Table  bordered hover responsive>
        <thead className='head'>
          <tr className="text-center">
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Remove</th>
          </tr>
        </thead >
        <tbody className='body'>
          {items.map((item) => (
            <tr key={item.id} className="text-center">
              <td>
                <img src={item.img_url_one} alt={item.name} width={100} />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                <div className="quantity">
                  <button
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
              <RiDeleteBin5Line className='icon-remove-basket' onClick={() => removeItem(item.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="cart-summary m-5" > 
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${cartTotal.toFixed(2)}</p>
      </div>




      {/* Checkout section */}
      <div className="checkout-section m-5">
        <button className="checkout-btn" onClick={handleProceedToCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
   </>
  );
};

export default Basket;
