import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'

function Nav () {
  return (
    <ul>
      <li>
        <Link to="/">首页</Link>
      </li>
      <li>
        <Link to="/effect">effect</Link>
      </li>
    </ul>
  )
}

export default Nav;
