import React, { Component } from 'react'

export default class ShoppingCart extends Component {
    render() {
        return (
            <li>{this.props.item.name} {this.props.item.price}</li>
        )
    }
}
