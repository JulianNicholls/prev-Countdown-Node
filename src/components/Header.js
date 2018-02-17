import React from 'react';

const Header = () => (
  <header>
    <div className="header-container">
      <a href="http://reallybigshoe.co.uk/index.html">
        <img src="images/RBSLogo2_small.png" alt="" />
      </a>
      <a href="http://reallybigshoe.co.uk/index.html">Home</a>
      <a href="http://reallybigshoe.co.uk/portfolio.html">Portfolio</a>
      <a href="http://reallybigshoe.co.uk/contect.html">Contact Us</a>
      <a className="active" href="https://immense-countdown.herokuapp.com">
        Countdown
      </a>
      <a
        className="twitter"
        href="https://twitter.com/ReallyBigShoeUK"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        className="github"
        href="https://github.com/JulianNicholls"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </header>
);

export default Header;
