import React, { Component } from 'react';
import './styles/CollectionViewer.css';
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
      <div className="collection-viewer">
        <fieldset className="collection-viewer__select">
          {/* <label className="collection-viewer__select-label" htmlFor="collection-select">Select a Collection:</label> */}
          <select className="collection-viewer__select-dropdown" id="collection-select" onChange={this.handleChange} value="">
            <option value="">Select a Collection</option>
            {this.props.collections.edges.map((collection) => { 
              return <option key={collection.node.id} value={collection.node.title}>{collection.node.title}</option>
            })}
          </select>
        </fieldset>
        <Collection collectionName={this.state.selectedCollectionTitle} addVariantToCart={this.props.addVariantToCart} collection={this.props.collections.edges[this.state.selectedCollectionIndex].node.products.edges}/>
      </div>
    )
  }
}
