import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiMessageRoundedDots } from "react-icons/bi";
import payment from '../../assets/media/img/payment-icon.png';
import { Link } from 'react-router-dom';
import { IoLocation, IoMail } from 'react-icons/io5';
import { FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';

const Footer = () => {

  // Səhifəni yuxarıya qaytarmaq üçün klik hadisəsi
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <Container fluid>
          <Row className=' newsletter mt-5'>
            <Col sm={12} md={12} lg={5} className='content'>
              <h4>Subscribe To Our Newsletter</h4>
              <p>Subscribe to our latest newsletter to get news about special discounts and upcoming sales</p>
              <form action="#">
                <input type="email" placeholder='Email' />
                <button>Subscribe</button>
              </form>
            </Col>

          </Row>
          <Row>
            <Col sm={12} md={12} lg={5}>
              <h5>About Our Store</h5>
              <p>Welcome to our store, where we pride ourselves on providing exceptional products and unparalleled customer service our store is a haven for those who appreciate quality, style, and innovation.</p>
            </Col>
            <Col sm={12} md={4} lg={2}>
              <h5>Quick Links</h5>
              <ul className='list-group'>
                <li onClick={scrollToTop}>Contact Us</li>
                <li onClick={scrollToTop}>Shipping</li>
                <li onClick={scrollToTop}>Sitemap</li>
                <li onClick={scrollToTop}>FAQs</li>
                <li onClick={scrollToTop}>Size Chart</li>
                <li onClick={scrollToTop}>About Us</li>
              </ul>
            </Col>
            <Col sm={12} md={4} lg={2}>
              <h5>Services</h5>
              <ul className='list-group'>
                <li onClick={scrollToTop}>Privacy Policy</li>
                <li onClick={scrollToTop}>Refund Policy</li>
                <li onClick={scrollToTop}>Shipping Policy</li>
                <li onClick={scrollToTop}>Terms of Service</li>
                <li onClick={scrollToTop}>Policy for Buyers</li>
                <li onClick={scrollToTop}>Policy for Sellers</li>
              </ul>
            </Col>
            <Col sm={12} md={4} lg={3}>
              <h5>Contact Us</h5>
              <ul className='list-group'>
                <li onClick={scrollToTop}><IoLocation /> No: 58 A, East Madison Street, Baltimore, MD, USA 4508</li>
                <li onClick={scrollToTop}><FaPhoneAlt /> +000-123-456-789</li>
                <li onClick={scrollToTop}><IoMail /> contact@example.com </li>
              </ul>
            </Col>
          </Row>

          <Row className='footer-bottom'>
            <Col sm={12} md={12} lg={4}>
              <img src={payment} alt="error" />
            </Col>
            <Col sm={12} md={12} lg={4}>
              <p>© 2025, Jubilee - Jewellery Store (Password: demo) Powered by Shopify</p>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <div className="social">
                <Link to='https://www.instagram.com' target='_blank' className='btn btn-footer'><FaInstagram />
                </Link>
                <Link to='https://www.facebook.com/' target='_blank' className='btn btn-footer'><FaFacebook />
                </Link>
                <Link to='https://www.threads.net/' target='_blank' className='btn btn-footer'><FaThreads />
                </Link>
                <Link to='https://x.com/' target='_blank' className='btn btn-footer'>X</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
