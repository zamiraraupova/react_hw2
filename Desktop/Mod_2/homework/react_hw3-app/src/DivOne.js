import React, { Component } from 'react'
import DivTwo from './DivTwo'
//DivTwo is a child of DivOne

export default class DivOne extends Component {

    render() {
        return (
            <div>
                <DivTwo numTwo= {this.props.numOne}/>
                
            </div>
        )
    }
}