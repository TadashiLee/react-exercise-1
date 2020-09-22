/* eslint-disable no-undef */
import React, { Component } from 'react';
import './App.scss';
import Header from './conpoment/Header';
import About from './conpoment/About';
import Education from './conpoment/Education';
class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <hr></hr>
        <About />
        <Education />
      </main>
    );
  }
}

export default App;
