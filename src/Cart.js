import React, { Component } from 'react';
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo';

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
    return(
      <div>       
        {this.props.currentLineItems.map(lineItem => { 
          return <p key={lineItem.variant.id}>
            {lineItem.variant.productName} 
            {lineItem.variant.title !== "Default Title" ? ` - ${lineItem.variant.title}` : "" } 
            </p>
        })}
        <Mutation mutation={checkoutCreate} variables={{input:{lineItems:checkoutLineItems}}}>
          {(checkoutCreate, { data } ) => 
          <div> 
            <button onClick={checkoutCreate}>Checkout</button>
            {console.log(data)}
          </div> 
          }
        </Mutation>
      </div> 
    );
  }
}

