import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Family from './components/Family';
import MyProvider from './components/MyProvider';

export const MyContext = React.createContext();


class App extends Component {
  render() {
    return (
      <MyProvider>
         <div className="App">
       <Family name={'kain'}/>
      </div>
      </MyProvider>
     
    );
  }
}

export default App;
