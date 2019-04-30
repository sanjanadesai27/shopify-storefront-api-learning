import React, { Component } from 'react'
import './styles/Header.css';

export default class Header extends Component { 
  render(){ 
    return(
      <section className="header">
        <image className="header__logo" src="%PUBLIC_URL%/bobrosslogo.png"/>
        <h1 className="header__store-title">{ this.props.storeName }</h1>
        <div className="header__cart"> 
          <button class="header__cart-link">
            <i className="fas fa-shopping-cart header__cart-icon"></i>
            &nbsp;Cart 
          </button>
        </div>
      </section>   
    );
  }
}

