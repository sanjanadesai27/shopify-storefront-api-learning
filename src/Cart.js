import React, { Component } from 'react';

export default class Cart extends Component { 
  constructor(props){
    super(props)
    this.state = {}
  }

  render() { 
    return(
      <div>
        {this.props.currentLineItems.map(lineItem => { 
          return <p key={lineItem.variant.id}>
            {lineItem.variant.productName} 
            {lineItem.variant.title !== "Default Title" ? ` - ${lineItem.variant.title}` : "" } 
            </p>
        })}
      </div>
    );
  }
}

