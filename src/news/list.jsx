import React from 'react';
import Item from './item'
 
export default (props) => (
  <div>
    <p>{props.title}</p>
    {props.children}
  </div>
)