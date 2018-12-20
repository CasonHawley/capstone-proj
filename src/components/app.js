import React, { Component } from 'react';
import Header from './header';
import NavBar from './navbar';
import Footer from './footer';
import Contact from './contact';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <NavBar />
        <h1>&lt;Code<span class="slash">/</span>&gt;</h1>
        <p> Full-Stack Developer who is focused<br/>on writing clean, good and<br/>
							efficient code, as well as learning as much as i can about coding.<br/> I enjoy writing HTML5, CSS3, Python, React, and JavaScript.</p>
        <Contact />
        <Footer />
      </div>
    );
  }
}
