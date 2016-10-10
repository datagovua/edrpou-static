import React from 'react';
import Helmet from "react-helmet";
import { Link, IndexLink } from 'react-router';

const activeStyle = {
  backgroundColor: "rgb(152, 34, 121)"
};

const navStyle = {
  color: "white",
  textDecoration: 'none',
  padding: '20px'
};

const logoStyle = {
  ...navStyle,
  padding: 0,
  paddingRight: '20px',
  paddingLeft: '20px',
}

const navBarStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: "#118798",
};

export const App = ({children}) => (
  <div>
    <Helmet titleTemplate="%s - ЄДР API" />
    <div style={navBarStyle}>
      <Link to="/" style={logoStyle} activeStyle={{}}>
        <h1 style={{color: "white"}}>ЄДР API</h1>
      </Link>
      <Link to="/search" style={navStyle} activeStyle={activeStyle}>
        Пошук
      </Link>
      <Link to="/organizations" style={navStyle} activeStyle={activeStyle}>
        Організації
      </Link>
      <Link to="/about/api" style={navStyle} activeStyle={activeStyle}>
        Про API
      </Link>
    </div>
    {children}
  </div>
);
