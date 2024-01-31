import React from 'react';

const ButtonAnimated = (props) => {
  return (
    <button className={`button custom-button ${props.className || ''}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      
      {props.text}
    </button>
  );
};

export default ButtonAnimated;
