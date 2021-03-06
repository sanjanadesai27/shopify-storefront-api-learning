import React, { Component } from 'react';
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo';
import './styles/Cart.css';

let CheckoutFragment = gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalTax
    subtotalPrice
    totalPrice
    lineItems (first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            title
            image {
              src
            }
            price
          }
          quantity
        }
      }
    }
  }
`;

let checkoutCreate = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!){
    checkoutCreate(input: $input) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`

export default class Cart extends Component { 
  constructor(props){
    super(props)
    this.state = {}
  }

  render() { 
    let checkoutLineItems = this.props.currentLineItems.map(lineItem => { 
      return {variantId: lineItem.variant.id, quantity: lineItem.quantity }
    })
    if (!this.props.cartVisible){ 
      return null
    }
    return(

      <section className="cart">
      <div className="cart__header">
        <h1 className="cart__header__title">Your Cart</h1> 
        <span className="cart__header__close" onClick={this.props.hideCart}>Close</span>
      </div> 
        {this.props.currentLineItems.map(lineItem => { 
          return <p key={lineItem.variant.id}>
            {lineItem.variant.productName} 
            {lineItem.variant.title !== "Default Title" ? ` - ${lineItem.variant.title}` : "" } 
            </p>
        })}
        <Mutation 
          mutation={checkoutCreate} 
          variables={{input:{lineItems:checkoutLineItems}}}
          onCompleted={(data)=> { window.open(data.checkoutCreate.checkout.webUrl) }}
        >
          {(checkoutCreateTrigger ) => 
          <div> 
            {checkoutLineItems.length > 0 ? <button onClick={checkoutCreateTrigger}>Checkout</button> : ""}
          </div>
          }
        </Mutation>
      </section> 
    );
  }
}

