import React, { Component } from 'react';
import Header from './header';
import NavBar from './navbar';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <NavBar />
        <h1>  </h1>
        <p> Full-Stack Developer who is focused<br/>on writing clean, good and<br/>
							efficient code. Love HTML5, CSS3, Python, React,<br/>and JavaScript.</p>
        <Footer />
      </div>
    );
  }
}
