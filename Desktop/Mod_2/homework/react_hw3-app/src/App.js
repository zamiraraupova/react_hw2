import React, { Component } from 'react'
import "./App.css"
import DivOne from './DivOne'


export default class App extends Component {
  state = {
    tardis: {
      name: "Time and Relative Dimension in Space",
      caps: false,
    }
  }

  changeIt = (text) => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: this.state.tardis.name.toUpperCase(),
          caps: true
        }
      })
    }
  }
  render() {
    return (
      <div>
        <h3 onClick={this.changeIt}> <DivOne numOne={this.state.tardis} /> </h3>
      </div>
    )
  }
}