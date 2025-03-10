import React, { useState } from 'react';
import { useRegisterUserMutation } from '../../redux/api/authApi';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import BannerPages from '../../components/BannerPages';

const Register = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validatePassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pwd);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setErrorMessage('Şifrə ən azı 8 simvol, 1 böyük hərf və 1 rəqəm daxil etməlidir.');
      return;
    }

    await registerUser({ name, email, password });

  };

  return (

    <>
    <BannerPages itemOne={'Register'} itemTwo={'Home'}/>
<div className="auth-container">
  <h2>Create an account</h2>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Full Name"
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
    /> <br/>
    <input
      type="email"
      placeholder="Email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <div className="password-field">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button  className='btn-icon' type="button" onClick={() => setShowPassword((prev) => !prev)}>
      {showPassword ? <FaEyeSlash className='icon' /> : <FaEye className='icon' />}
      </button>
    </div>
    {errorMessage && <p className="error">{errorMessage}</p>} {/* Səhv mesajı */}
    <button type="submit">Register</button>
  </form>
  <p>Already have an account? <Link to="/login">Login</Link></p>
</div>
    </>
  );
};

export default Register;
