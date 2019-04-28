import React, { Component } from 'react'; 

export default class VariantSelector extends Component { 
  render(){
    return(  
      <select 
        onChange={this.props.handleSelect}
        name={this.props.option.name}
        key={this.props.option.name}
        >
        { this.props.option.values.map(value => { 
          return <option value={value} key={`${value}-${this.props.option.id}`}>{value}</option>
        })}
      </select>
    )
    
  }
}
// generates each select for product options 
// handleSelect is passed down from product such that action is passed up