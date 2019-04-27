import React, { Component } from 'react';
import './Product.css'
import VariantSelector from './VariantSelector';

export default class Product extends Component {
  constructor(props){ 
    super(props)

    this.state = {
      selectedVariant: this.props.product.variants.edges[0].node,
      selectedOptions: Object.assign(...this.props.product.options.map(option => ({[option.name]:option.values[0]})))
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(event){ 
    let selectedOptions = this.state.selectedOptions
    selectedOptions[event.target.name] = event.target.value 
    let selectedVariant = this.props.product.variants.edges.find(variant => { 
      return variant.node.selectedOptions.every(selectedOption => { 
        return selectedOptions[selectedOption.name] === selectedOption.value
      })
    }).node
    
    this.setState({
      selectedVariant
    })
  }

  render() {
    console.log(this.state)
    let product = {...this.props.product}
    let variant = this.state.selectedVariant
    let variantSelect = product.options.map(option => {
      return <VariantSelector key={option.id} option={option} handleSelect={this.handleSelect}/>
    })

    return (
      <div className="product">
        <img className="product__image" src={product.images.edges[0].node.originalSrc} alt={product.images.edges[0].node.altText}/>
        <h3 className="product__title">{product.title}</h3>
        <p>${variant.priceV2.amount}</p>
        {product.options[0].name !== "Title" ? variantSelect : "" } 
      </div> 
    );
  }
}

