// * Before we were importing React by import React from 'react'
// * Line 3 is a way for us to import one specific part of React
// * destructing
import React, { Component } from 'react';
import products from './Data.js';
import ProductList from './ProductList.js';
import ShoppingCart from './ShoppingCart'
import './App.css';

// console.table(products);

// * we are going to create our class component
// * the shortcut for the class component boilerplate using react code snippets is rcc

// * we can export default on the same line where we create our component
// * Before we would have to do React.Component

// * superclass
export default class App extends Component {
	// we need to initialize our state before our render method

	// * ===== old syntax ======
	// * props is data or properties being passed down from a parent component
	// constructor(props) {
	//   // * super() refers to the parent component (superclass)
	//   super(props)
	//   // * this.state is the object that comes with React Component that we can store data inside
	//   // * we write our state just like any objects in JS
	//   this.state = {
	//     // * key value pairs just like any object, left side is the property name and the right side is the value
	//     // * the right side refers to the products array list that we imported
	//     products: products
	//   }
	//   // * this line is binding our handleChange function to our component Object
	//   this.handleChange = this.handleChange.bind(this)
	// }

	// * ==== new syntax ====
	// ! HIGHLY RECOMMEND
	//* we no longer need to initiate our state object with "this"
	state = {
		products: products,
		// we can assign default values to our state properties
		// value: ''
		name: '',
		price: 0,
		description: 'Describe this item',
    cartItems: []
	};

	// * under our state we are creating our handleChange function
	// * handleChange naming convention that many developers use
	// events are behaviors that user's do on the web browsers
	// * ===== ARROW FUNCTION =====
	// * ES6 arrow functions automatically binds to the component object
	handleChange = (event) => {
		// * in our case of input, our event is us typing
		console.log('Below is our event.target');
		// console.log(event.target)
		// * we are going to try to update our state
		// this.state.value = event.target.value

		//* the proper way of updating our state is using the setState() that came with the component
		// * You need curly brackets inside setState()
		this.setState({
			// * value is pointing at our state that we are trying to change
			//* event.target.value is what we typed in the input field
			// name: event.target.value

			// * we are no longer pointing at one state only, we are using event.target.id to let our code know which state we want to focus on
			// * event.target.id will change into either name, price or description
			[event.target.id]: event.target.value
		});
	};

	// * ===== Handles our submit =====
	handleSubmit = (event) => {
		//* the default behavior of submit in HTML is to refresh the page
		//* preventDefault is a way for us to stop our website from refreshing
		//* we don't want our application to refresh because we want to do more things with it.
		//* defeats purpose of SPA (single page app - no refresh)
		event.preventDefault();
		// console.log("event", event)
		const newItem = {
			name: this.state.name,
			price: this.state.price,
			description: this.state.description
		};
		console.log('we are inside handlesubmit this is our new item', newItem);

		// * adding our new item to our state products
		this.setState({
			//* the spread operator is written with ...
			//* what it lets us do is add things to our array or objects without mutating the original array or objects
			//* similar to what push()
			name: '',
			price: 0,
			description: 'Describe this item',
			products: [ newItem, ...this.state.products ]
			// * we can update multiple states in one setState()
		});
	};

	addToCart = (item) => {
    // * whatever item is, we are going to add it to our cartItems state
    console.log("hey we got here because you clicked on an item inside our ProductList component and this is the item we sent back to App.js from ProductList", item)
		this.setState({
		cartItems: [ item, ...this.state.cartItems ]
		});
	};

	// ! Demonstration only - to replicate error
	// ! written as function declaration
	// handleChange(event) {
	//   console.log("we are inside handleChange this is our THIS", this)
	//   console.log(event.target.value)
	//   this.state.value = event.target.value
	// }

	render() {
		// console.log("we are inside render this is our THIS", this)
		// console.log(this.state.products)
		return (
			<div>
				<div id="title">Big Time Shopping!</div>
				{/* // * input allows us to type something on the screen
        // * a form accepts input from the user
        */}

				{/* 
        //* onSubmit event listener calls our function handleSubmit
        */}

				<div className="form-container">
					<form id="form" onSubmit={this.handleSubmit}>
						{/* //* input accepts an attribute called "value" that can take in data 
          //* input field value attribute can take in any type of data: string, array, obj...
          */}
						{/* //* label works with input fields and connects the two together
          //* we do this by assigning htmlFor inside label and creating an ID inside our input field that matches exactly what the value is for htmlFor.

          //* WHY do we use labels
          //* good for accesibility such as screen readers
          //* can click on label to put cursor inside input box
          */}
						<label htmlFor="name">Name: </label>
						<input type="text" value={this.state.name} onChange={this.handleChange} id="name" />
						<br />
						<label htmlFor="price">Price: </label>
						<input type="text" value={this.state.price} onChange={this.handleChange} id="price" />
						<br />
						<label htmlFor="description">Description: </label>
						<input
							type="text"
							value={this.state.description}
							onClick={() => this.setState({description: ''})}
              onChange={this.handleChange}
							id="description"
						/>
						<br />
						{/* submit field 
          //* when we click this submit button it tells our form that a "submit" event happened
          */}
						<input type="submit" />
					</form>

					{/* //* we are rendering our state in the div below */}
					<div className="preview">
						<h2>Preview our new item</h2>
						<h3>{this.state.name}</h3>
						<h4>{this.state.price}</h4>
						<h5>{this.state.description}</h5>
					</div>
				</div>

				<div className="products-container">
					<div className="products">
						<h3 className="headline">Please Purchase our Excellent Products</h3>
						<ul>
							{/* map over our products list that we imported 
            // map is just another iterator just like any for loops
            // what makes special is that it lets us return JSX
            // add item parameter inside our arrow function
            // each item represents each element in our products array
            // whether or not we choose to write new syntax or old syntax, we always have to REFER to our state object with the "this" keyword*/}
							{// * we know that products is an array of items
							// * best practices for naming convention is to refer to a single object with the singular name of the array
							this.state.products.map((product, index) => {
								return (
									// <li>
									//   {product.name} {product.price}
									// </li>
									// * we are mapping over our products array inside our state which will render our component ProductList 20 times (length of our array)
									// * each element inside our array is it's own object
									// * our parameter product is referencing to each element in the array while we map over it

									// ! WARNING - Each child in a list should have a unique ID
									// * the most typical way to assign a unique ID to a list item is by using the "i" iterator
									// * we need to add an extra parameter inside our arrow function inside our map function
									<ProductList key={index} product={product} handleAdd={this.addToCart} />
								);
							})}

							{/* we can call on just one item if we wanted to */}
							{/* {this.state.products[0].name} */}
						</ul>
					</div>

					<div className="cart">
						<h3 className="headline">Shopping Cart</h3>
						<ul>
              {
                this.state.cartItems.map((item, index) => {
                  return (
                    <ShoppingCart key={index} item={item}/>
                  )
                })
              }
            </ul>
					</div>
				</div>
			</div>
		);
	}
}

// console.log("we are outside of our component", products)
// console.log("we are outside trying to access our state", this.state.products)