import React from 'react';

import keyLogo from '../../assets/img/key-logo.png';

import './style.scss';

const Loader = () => (
  <div className="loader">
    <div className="rotating">
      <img src={keyLogo} alt="loader" />
    </div>
  </div>
);

export default Loader;
