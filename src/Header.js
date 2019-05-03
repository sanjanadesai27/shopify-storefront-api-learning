import React, { Component } from 'react'
import './styles/Header.css';

export default class Header extends Component { 
  render(){ 
    return(
      <section className="header">
        {/* <img alt="header logo" className="header__logo" src="%PUBLIC_URL%/bobrosslogo.png"/> */}
        <h1 className="header__store-title">{ this.props.storeName }</h1>
        <div className="header__cart"> 
          <button className="header__cart-link" onClick={this.props.handleCartTrigger}>
            <i className="fas fa-shopping-cart header__cart-icon"></i>
            &nbsp;Cart 
          </button>
        </div>
      </section>   
    );
  }
}

