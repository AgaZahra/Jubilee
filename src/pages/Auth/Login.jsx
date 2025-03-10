import React, { useState } from 'react';
import { useLoginUserMutation } from '../../redux/api/authApi';
import { useNavigate, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import BannerPages from '../../components/BannerPages';

const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await loginUser({ email, password });

   if(error){
    console.log(error);
    
   }
  };

  return (
    <>
    <BannerPages itemOne={'Log In'} itemTwo={'Home'}/>

<div className="auth-container">
  <h2>Log in to your account</h2>
  <form onSubmit={handleSubmit}>
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
      <button className='btn-icon' type="button" onClick={() => setShowPassword((prev) => !prev)}>
      {showPassword ? <FaEyeSlash className='icon' /> : <FaEye className='icon' />}
      </button>
    </div>
    <button type="submit">Sign In</button>
  </form>
  <p>No account yet? <Link to="/register">Create an account</Link></p>
</div>
    </>
  );
};

export default Login;
