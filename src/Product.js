import React, { Component } from 'react';
import './styles/Product.css'
import VariantSelector from './VariantSelector';

export default class Product extends Component {
  constructor(props){ 
    super(props)

    this.state = {
      selectedVariant: this.props.product.variants.edges[0].node,
      selectedOptions: Object.assign(...this.props.product.options.map(option => ({[option.name]:option.values[0]})))
    }

    this.handleSelect = this.handleSelect.bind(this)
    this.handleQuantity = this.handleQuantity.bind(this)
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
    console.log(this.state.selectedVariant)
  }

  handleQuantity(event){ 
    this.setState({
      variantQuantity: parseInt(event.target.value)
    })
  }

  render() {
    let product = {...this.props.product}
    let variant = this.state.selectedVariant
    let variantSelect = product.options.map(option => {
      return <VariantSelector className="product__variant-select" key={option.id} option={option} handleSelect={this.handleSelect}/>
    })

    return (
      <div className="product">
        <img className="product__image" src={product.images.edges[0].node.originalSrc} alt={product.images.edges[0].node.altText}/>
        <div className="product__info">
          <h3 className="product__title">{product.title}</h3>
          <p>${variant.priceV2.amount}</p>
        </div>
        <div className="product__selection">
          {product.options[0].name !== "Title" ? variantSelect : "" } 
          <label for="quantitySelector">Quantity</label>
          <input id="quantitySelector" defaultValue="1" type="number" min="1" max="10" onChange={this.handleQuantity}/>
          <button 
            className="product__button" 
            onClick={() => {this.props.addVariantToCart(
                {...this.state.selectedVariant, productName: this.props.product.title},
                this.state.variantQuantity || 1
            )}}>
            Add to Cart
          </button>
        </div>
      </div> 
    );
  }
}

