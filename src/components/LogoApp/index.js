import './styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function LogoApp(props) {
  const buttonStyle = {
    width: props.width,
    textAlign: props.textAlign,
    fontSize: props.fontSize
  };

  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <div className="Github-Search" style={buttonStyle}>
        <span>
          Github&nbsp;
        </span>
        <span className="text-style-1">
          Search
        </span>
      </div>
    </Link>
  )
}

export default LogoApp;