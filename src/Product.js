import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class Product extends Component {
  render() {
    let query = gql`
        query{
            node(id:"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE5MzE1MjkxMjU5MTA="){
              id
              ... on Product { 
                title
                variants(first:3) { 
                  edges{ 
                    node {
                      title
                      id
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
      `
    return (
           <Query query={query}>
            {({data, loading, error}) => { 
              if (loading) return <p>Loading...</p>
              if (error) return <p>ERROR</p>
              return( 
                <Fragment>
                  <h1>{data.node.title}</h1>
                  {data.node.variants.edges.map(variant => { 
                    return <p key={variant.node.id}>{variant.node.title}</p>
                  }) }
                </Fragment>
              )
            }}
           </Query> 
       );
  }
}