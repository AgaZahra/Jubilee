import React, { useState } from 'react';
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Col, Row } from 'react-bootstrap';
import BannerPages from '../components/BannerPages';

export const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({}); // For error messages

    const validateForm = () => {
        let formErrors = {};

        if (!firstName) formErrors.firstName = 'Please enter your first name';
        if (!lastName) formErrors.lastName = 'Please enter your last name';
        if (!email) formErrors.email = 'Please enter your email address';
        if (!phoneNumber) formErrors.phoneNumber = 'Please enter your phone number';
        if (!message) formErrors.message = 'Please enter your message';

        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setSubmitted(true);
            setErrors({});

            // Reset form values only when everything is correct
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');
        } else {
            setErrors(formErrors);
            setSubmitted(false);
        }
    };

    return (
        <>
        <BannerPages itemOne={'Contact US'} itemTwo={'Home'}/>

        <Row className='m-5'>
        <Col sm={12} md={6} lg={6}>
     <div className='my-container'>
     <form onSubmit={handleSubmit} className="contact-form">
        <h5>Do You Have Any Questions?</h5>
         <div className="input-group">
             <div className="input-wrapper">
                 <input
                     type="text"
                     placeholder="First Name"
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                     className={errors.firstName ? 'input-field error' : 'input-field'}
                 />
                 {errors.firstName && <span className="error-message">{errors.firstName}</span>}
             </div>
             <div className="input-wrapper">
                 <input
                     type="text"
                     placeholder="Last Name"
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                     className={errors.lastName ? 'input-field error' : 'input-field'}
                 />
                 {errors.lastName && <span className="error-message">{errors.lastName}</span>}
             </div>
         </div>
         <div className="input-group">
             <div className="input-wrapper">
                 <input
                     type="email"
                     placeholder="Email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className={errors.email ? 'input-field error' : 'input-field'}
                 />
                 {errors.email && <span className="error-message">{errors.email}</span>}
             </div>
             <div className="input-wrapper">
                 <input
                     type="tel"
                     placeholder="Phone Number"
                     value={phoneNumber}
                     onChange={(e) => setPhoneNumber(e.target.value)}
                     className={errors.phoneNumber ? 'input-field error' : 'input-field'}
                 />
                 {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
             </div>
         </div>
         <textarea
             placeholder="Write your message"
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             className="textarea-field"
         />
         <button type="submit" className="btn">
             Submit
         </button>

         {/* Conditionally show error message */}
         {Object.keys(errors).length > 0 && !submitted && (
             <div className="error-message-box">
                 <p>There are errors in the form, please fix them.</p>
             </div>
         )}

         {/* Conditionally show success message */}
         {submitted && (
             <div className="success-message">
                 <p>Your message has been successfully sent!</p>
             </div>
         )}
     </form>
 </div>
            </Col>


            <Col sm={12} md={6} lg={6}>
            <div className="address">
                <h5>Get in touch with us</h5>
            <ul className='list-group'>
                <li>
                    <IoLocationOutline className='icon' />
                    <div className="content">
                        <h4>Address</h4>
                        <p>Baku, Azerbaijan</p>
                    </div>
                </li>
                <li>
                    <FaPhoneAlt className='icon' />
                    <div className="content">
                        <h4>Phone</h4>
                        <p>000-123-456-789 / 000-897-654-321</p>
                    </div>
                </li>
                <li>
                    <IoMailOutline className='icon' />
                    <div className="content">
                        <h4>Email</h4>
                        <p>info@company.com</p>
                    </div>
                </li>
                <li>
                    <MdOutlineCalendarMonth className='icon' />
                    <div className="content">
                        <h4>Working Hours</h4>
                        <p>Monday to Friday: 09:00 - 18:00</p>
                    </div>
                </li>
            </ul>
        </div>
            </Col>
        </Row>


        <Row className='m-5' >
          <Col>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30246.858983283105!2d-73.9822235!3d40.6605048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDBDNTAgNjcwLjUiTiA3M1o0MDAwMDA!5e0!3m2!1sen!2sus!4v1688224986697!5m2!1sen!2sus&layer=c"
                height="700"
                width="100%"
                title="Satellite Map"
                style={{ border: 0, padding: 0 }}
              ></iframe>
            </div>
          </Col>
        </Row>
           

            
        </>



       
    );
};

