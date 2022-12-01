import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const newStyles = props.className + '';

  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${newStyles}`}
      type={props.type}
    >
      {props.name}
    </button>
  );
};

export default Button;
