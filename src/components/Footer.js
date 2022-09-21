import React from 'react';
import logo from '../img/GitHub-logo.png';
export default function Footer() {
  return (
    <footer>
      <p>
        Created by kajlos
        <a href="https://github.com/kajlos">
          <img src={logo} alt=""></img>
        </a>
      </p>
    </footer>
  );
}
