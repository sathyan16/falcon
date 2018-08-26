import React from 'react';
import Nav from './Nav';
import '../Bootstrap.css';
import '../App.css';

class Banner extends React.Component {
  render() {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <Nav />
          </nav>
        </div>
    );
  };
}

export default Banner;
