import React, { Component } from 'react';
import { header } from './components/header.js';
import { main } from './components/main.js';
import { footer } from './components/footer.js';
import { nav } from './components/nav.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header />
        <main />
        <footer />
        <nav />
      </div>
    );
  }
}

export default App;
