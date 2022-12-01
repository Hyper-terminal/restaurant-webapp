import React from 'react';

import './Card.css';

const Card = (props) => {
  let newClass = props.className + '';

  return <div className={`card ${newClass}`}>{props.children}</div>;
};
export default Card;
