import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import BannerPages from '../components/BannerPages';
import Cards from 'react-credit-cards-2';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  const { items, cartTotal, isEmpty } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    number: '',
    expiry: '',
    cvc: '',
  });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmpty) {
      Swal.fire({
        title: 'Your cart is empty!',
        icon: 'warning',
      });
      return;
    }

    Swal.fire({
      title: 'Processing payment...',
      icon: 'info',
      didOpen: () => {
        Swal.showLoading();
      },
    });

    setTimeout(() => {
      Swal.fire({
        title: 'Payment successful!',
        text: 'Your order has been successfully placed.',
        icon: 'success',
      }).then(() => {
        navigate('/shop'); // Redirect to the success page
      });
      // Clear form
      setFormData({
        name: '',
        email: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        number: '',
        expiry: '',
        cvc: '',
      });
    }, 2000);
  };

  return (
    <div className="checkout">
      <BannerPages itemOne="Checkout" itemTwo="Home" />
      <h2>Checkout</h2>
      <p>Please fill in the form to complete your purchase.</p>
      <div className="container">
        <Form onSubmit={handleSubmit} className='checkout-form'>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPostalCode">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </Form.Group>
          
          <h3>Card Details</h3>
          <Cards
            number={formData.number}
            name={formData.name}
            expiry={formData.expiry}
            cvc={formData.cvc}
            focused={focused}
          />
          <Form.Group controlId="formCardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              onFocus={(e) => setFocused(e.target.name)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formExpiry">
            <Form.Label>Expiry</Form.Label>
            <Form.Control
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              onFocus={(e) => setFocused(e.target.name)}
              placeholder="MM/YY"
              required
            />
          </Form.Group>
          <Form.Group controlId="formCVC">
            <Form.Label>CVC</Form.Label>
            <Form.Control
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              onFocus={(e) => setFocused(e.target.name)}
              required
            />
          </Form.Group>
          <Button className='btn-checkout m-3' type="submit">
            Checkout
          </Button>
        </Form>
        <div className="total p-2">
          <h4>Total: <br /> ${cartTotal.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
