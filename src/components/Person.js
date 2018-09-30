import React, { Component } from 'react'
import { MyContext } from '../App';

export default class Person extends Component {


   render() {
    return (
     <MyContext.Consumer>
         {(context) => (
       <h1>Mi edad es: {context.state.age} y mi nombre es {context.state.name}
       <button onClick={context.masuno}> masuno </button></h1>
         )}
     </MyContext.Consumer>
    
    )
  }
}
