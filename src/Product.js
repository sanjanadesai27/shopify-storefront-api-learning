import React, { Component } from 'react';

export default class Product extends Component {

  render() {
    let product = {...this.props.info}
    console.log(product);
    return (

      <div className="product">
        <img src={product.images.edges[0].node.originalSrc} alt={product.images.edges[0].node.altText}/>
        <h3 className="productTitle">{product.title}</h3>
        
      </div> 
    );
  }
}