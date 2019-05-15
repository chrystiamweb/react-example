import React from 'react';
 
export default class Item extends React.Component {
    render() {
        return (
         <p>{this.props.content}</p>
        )
    }
}