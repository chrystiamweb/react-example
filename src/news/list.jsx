import React from 'react';
import Item from './item'
 
export default class List extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
      </div>
    )
  }
}