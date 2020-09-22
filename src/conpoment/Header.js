/* eslint-disable no-undef */
import React, { Component } from 'react';
import '../styles/header.scss';
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="myPicture">
          <img src={require('../assets/avatar.jpg')} alt="myPicture" />
        </div>
        <h1>HELLO,</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      </div>
    );
  }
}

export default Header;
