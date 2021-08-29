import React, { Component } from 'react'
import storeList from "./data.js"
import "./App.css"
import ProductList from './ProductList.js'



export default class App extends Component {
state = {
  storeList: storeList,
  item: '',
  brand: '',
  units: '',
  quantity: 0,
  isPurchased: false,
  newItems: [],
  //msg: ""
}

change = (event) => {
  this.setState({
    [event.target.id]: event.target.value
  })
}
addToListBtn = (event) => {
   event.preventDefault();
   //const {newItems}
  const newItem = {
    item: this.state.item,
    units: this.state.units,
    quantity: this.state.quantity,
  }
  this.setState({
    item: '',
    brand: '',
    units: '',
    quantity: 0,
    storeList: [newItem, ...this.state.storeList],
  })

  //const isOnList = storeList.includes(newItem);

};

addToList = (item) => {
  this.setState({
    newItems: [item, ...this.state.newItems]
  })
}

// isPurchased = (item) => {
//   this.setState({
//     storeList: this.state.storeList.filter((_,i) => i !== item)
//   })
// }

// isPurchased = (item){
//   const newStoreList = this.state.storeList.filter(list =>{
//     return list !== item;
//   })
//   this.setState({
//     storeList: [...newStoreList]
//   })
// }

  render() {
    return (
      <div className="App">
      
      <div>
        	<div id="title">Groceries List</div>
      </div>

<form id="form" onSubmit={(event) => {this.addToListBtn(event)}}>
<label htmlFor="item">Item:</label>
<input type="text" value={this.state.item} onChange = {this.change} id="item"/> 
<br/>
<label htmlFor="brand">Brand:</label>
<input type="text" value={this.state.brand} onChange = {this.change} id="brand"/>
<br/>
<label htmlFor="units">Units:</label>
<input type="number" value={this.state.units} onChange = {this.change} id="units"/>
<br/>
<label htmlFor="quantity">Quantity:</label>
<input type="number" value={this.state.quantity} onChange = {this.change} id="quantity"/>
<br/>
<button type="submit" > Add To List </button>
{/* <button onClick = {() => this.isPurchased()} type="botton"> Remove </button> */}
</form>


 <div className = "storeList">
  {
    this.state.storeList.map((fruit, index) => {
      return (
     <ul>
       <li>
     {fruit.item} {fruit.brand} {fruit.quantity} {fruit.units}
       </li>
        < ProductList key={index} fruit ={index} handlePurchase = {this.addToList} /> 
     </ul>
     )
    })
  }
</div>

{/* <div className="cart">
  <ul>
    {
      this.state.newItems.map((item, index)=>{
        return(
          <ProductList key={index} item={item}/>
        )
      })
    }
  </ul>
</div> */}

</div>
    )
  }
}
