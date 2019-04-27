import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import CollectionViewer from './CollectionViewer';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class App extends Component {
  
  constructor() { 
    super();

    this.state = { 
      products: []
    }
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
          <Header storeName={this.props.data.shop.name}/>
          <CollectionViewer collections={this.props.data.shop.collections}/>
      </div>
    );
  }
}
const query = gql `
  query { 
    shop { 
      name
      description
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
  }
`;


const AppWithData = graphql(query)(App); //creates a HOC for app such that query data can be passed down as props

export default AppWithData;
