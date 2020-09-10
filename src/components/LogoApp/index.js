import './styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function LogoApp(props) {
  const buttonStyle = {
    width: props.width,
    height: props.height,
    textAlign: props.textAlign,
    fontSize: props.fontSize
  };

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <span className="Github-Search" style={buttonStyle}>
        Github
      </span>
      <span className="text-style-1" style={buttonStyle}>
        Search
      </span>
    </Link>
  )
}

export default LogoApp;