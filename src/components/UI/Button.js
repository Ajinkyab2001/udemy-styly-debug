import React from 'react';

import './Button.css';

const Button = props => {
  let invalid = props.valid;
  return (
    <button type={props.type} className={`button ${!invalid ? 'invalid' : ''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
