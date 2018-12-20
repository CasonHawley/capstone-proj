import React, { Component } from 'react';
import Header from './header';
import NavBar from './navbar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <NavBar />
        <h1>Hi.....</h1>
        <h2>Welcome to my page</h2>
      </div>
    );
  }
}
