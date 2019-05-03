import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header';
import CollectionViewer from './CollectionViewer';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Cart from './Cart';

class App extends Component {
  
  constructor() { 
    super();

    this.state = {
      currentLineItems: [],
      cartVisible: false
    }

    this.addVariantToCart = this.addVariantToCart.bind(this)
    this.showCart = this.showCart.bind(this)
  }

  addVariantToCart(variant, quantity) { 
    let lineItem = {variant, quantity}
    return this.setState({currentLineItems:[...this.state.currentLineItems, lineItem]})
  }

  showCart(){ 
    return this.setState({ 
      cartVisible: !this.state.cartVisible
    })
  }


  render() {

    if (this.props.data.loading) {
      return <p>Loading ...</p>;
    }
    if (this.props.data.error) {
      return <p>{this.props.data.error.message}</p>;
    }
    return (
      <div className="App">
          <Header storeName={this.props.data.shop.name} handleCartTrigger={this.showCart}/>
          <CollectionViewer collections={this.props.data.collections} addVariantToCart={this.addVariantToCart} />
          <Cart currentLineItems={this.state.currentLineItems} checkout={this.createCheckout} hideCart={this.showCart} cartVisible={this.state.cartVisible}></Cart>
      </div>
    );
  }
}
const query = gql `
  query { 
    shop { 
      name
      description
    }
    collections(first:20){ 
      edges { 
        node {
          title
          id
          products(first:20){ 
            edges { 
              node { 
                id
                title
                options { 
                  id
                  name
                  values
                }
                images(first:10){
                  edges {
                    node { 
                      originalSrc
                      altText
                    }
                  }
                }
                variants(first:20){ 
                  edges { 
                    node { 
                      id 
                      title
                      selectedOptions { 
                        name
                        value
                      }
                      image { 
                        src
                      } 
                      priceV2 {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const AppWithData = graphql(query)(App); //creates a HOC for app such that query data can be passed down as props

export default AppWithData;
