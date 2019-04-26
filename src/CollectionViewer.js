import React, { Component } from 'react';
import Collection from "./Collection";

export default class CollectionViewer extends Component { 

  constructor(props){ 
    super(props)
    this.state = { 
      selectedCollectionIndex: 0,
      selectedCollectionTitle: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){ 
    this.setState({
      selectedCollectionIndex: event.target.selectedIndex-1,
      selectedCollectionTitle: event.target.value
    })
  }

  render(){ 
    return(
      <div>
        <label htmlFor="collection-select">Select a Collection:</label>
        <select id="collection-select" onChange={this.handleChange} value="">
          <option value="">Select a Collection</option>
          {this.props.collections.edges.map((collection) => { 
            return <option key={collection.node.id} value={collection.node.title}>{collection.node.title}</option>
          })}
        </select>
        <Collection collectionName={this.state.selectedCollectionTitle} collection={this.props.collections.edges[this.state.selectedCollectionIndex].node.products.edges}/>
      </div>
    )
  }
}
