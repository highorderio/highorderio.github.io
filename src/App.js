import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Something great is getting code
          </p>
          <div className='social'>
            <a
              className="icon-github"
              href="https://github.com/highorderio"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            <a
              className="icon-linkedin"
              href="https://twitter.com/highorderio"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            <a
              className="icon-youtube"
              href="https://www.youtube.com/channel/UCq1yIR2_7Ye5fD2LEooJl0g"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            <a
              className="icon-medium"
              href="https://medium.com/@highorderio"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            <a
              className="icon-facebook"
              href="https://www.facebook.com/highorderio"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            <a
            className="icon-twitter"
            href="https://twitter.com/highorderio"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
