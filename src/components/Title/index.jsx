import React from 'react';

import './style.scss';

const Title = ({ text, removeDecoration }) => (
  <div className="main-title">
    <span>{text}</span>
    {!removeDecoration && <div className="decoration" />}
  </div>
);

export default Title;
