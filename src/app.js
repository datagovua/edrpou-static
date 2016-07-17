import React from 'react';
import { Link, IndexLink } from 'react-router';

const activeStyle = {color: 'black'};

export class App extends React.Component {
  render() {
    return (
      <div className="default-page">
        <div className="header">
          <h1 id="main-title" className="container">ЄДР API</h1>
        </div>
        <div className="container">
          <ul>
            <li><IndexLink to="/" activeStyle={activeStyle}>Головна</IndexLink></li>
            <li><Link to="/api" activeStyle={activeStyle}>API</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}
