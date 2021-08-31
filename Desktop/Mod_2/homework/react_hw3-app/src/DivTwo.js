import React, { Component } from 'react'
import DivThree from './DivThree'

export default class DivTwo extends Component {
    render() {
        return (
            <div>
                <DivThree numThree= {this.props.numTwo}/>
                <DivThree numThree= {this.props.numTwo}/>
            </div>
        )
    }
}