import React, { Component } from 'react';
import Product from './Product';

export default class Collection extends Component{ 
  render(){
    return(
      <div>
        <h2>{this.props.collectionName}</h2>
        {this.props.collection.map(product => {
          product = product.node
          return <Product key={product.id} info={product}/>
        })}
      </div>
    )
  }

}