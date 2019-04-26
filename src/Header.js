import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component { 
  render(){ 
    return(
      <section className="header">
        <i className="fas fa-user header__icon"></i>
        <h1 className="header__store-title">{ this.props.storeName }</h1>
        <i className="fas fa-shopping-cart header__icon"></i>
      </section>   
    );
  }
}

