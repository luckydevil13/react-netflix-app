import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';


const Logo = () => (
  <Link to={'/'} >
    <div className="logo">Netflixroulette</div>
  </Link>
);

export default Logo;
