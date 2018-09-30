import React, { Component } from 'react'
import { MyContext } from '../App';

export default class MyProvider extends Component {
    state={
        name:'kain',
        age: 35,
        masuno: 0
    }
    masuno=()=>{
        this.setState({
            age:this.state.age+1
        })
    }
    
  render() {
    return (
      <div>
        <MyContext.Provider value={{
            state: this.state,
            masuno: this.masuno
            }}>{this.props.children}</MyContext.Provider>
      </div>
    )
  }
}
