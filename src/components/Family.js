import React, { Component } from 'react'
import Person from './Person';

export default class Family extends Component {
  render() {
    return (
      <div>
        <Person name={this.props.name}></Person>
        
      </div>
    )
  }
}
