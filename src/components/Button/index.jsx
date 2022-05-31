import React from 'react';

import './style.scss';

const Button = ({
  onClick, disabled, text, typeOfStyle,
}) => {
  const className = `base-button button-${typeOfStyle} ${disabled && 'disabled'}`;

  return <button className={className} disabled={disabled} type="button" onClick={() => onClick()}>{text}</button>;
};

export default Button;
