import React, { Component } from 'react';

class ProductList extends Component {
  // * this is a keyword in JS that refers to the parent object - when you say this you are referring to this component and the things inside of it

  // * new syntax
  //* inititate state above render()
  // * everytime that we want to access our state ANYWHERE inside our component we have to use this.state
  state = {
    inShoppingCart: false
  }

  // toggleCart function
  // toggleCart = (event) => {
  //   // console.log(event)
  //   // update our inShoppingCart state to switch from true to false
  //   this.setState({
  //     // what state are we trying to update
  //     // * this.setState automatically knows that we are trying to update our state
  //     // * the exclamation point just means that we want to replace the current value of our state to it's opposite
  //     inShoppingCart: !this.state.inShoppingCart
  //   })
  // }

  render() {
    // console.log("we are inside ProductList and this is our props", this.props)
    // console.log(this)
    // console.log("we just updated our inShoppingCart", this.state.inShoppingCart)
    return (
      // write event listener for click in our div
      // * if we are passing down a function from App.js, we call on that function by invoking the property name that we assigned in App.js. In our case, we called it handleAdd so in this component we call it by saying this.props.handleAdd()
      // * You need to use an arrow function inside your html element tags
      // * WHY?? because if you don't it will automatically invoke this.props.handleAdd
      <li onClick={() => this.props.handleAdd(this.props.product)}>
        {/* this.props refers to the object that was passed from the parent component App */}
        {/* // * Ternary Operator - if else statements  */}
        {this.props.product.name} {this.props.product.price} {this.state.inShoppingCart ? <span> is in the shopping cart!</span> : ''}
      
      </li>
    );
  }
}

export default ProductList;