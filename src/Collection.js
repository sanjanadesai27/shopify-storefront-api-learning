import React, { Component } from 'react';
import Product from './Product';
import './Collection.css'

export default class Collection extends Component{ 
  render(){
    return(
      <section className="collection">
        <h2 className="collection__title">{this.props.collectionName}</h2>
        <div className="collection__product-container">
          {this.props.collection.map(product => {
            product = product.node
            return <Product key={product.id} product={product}/>
          })}
        </div>
      </section>
    )
  }

}