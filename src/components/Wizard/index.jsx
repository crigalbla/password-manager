import React from 'react';

import './style.scss';
import TickSvg from '../../assets/img/tick.svg';

const Wizard = ({ currentStep, numberOfSteps }) => {
  const renderSteps = () => {
    const result = [];
    for (let i = 1; i <= numberOfSteps; i += 1) {
      if (i > 1) {
        result.push(<div key={i - 0.5} className={`line-btw-steps${currentStep >= i ? ' passed' : ''}`} />);
      }
      result.push(
        <div key={i} className={`step${currentStep > i ? ' passed' : ''}${currentStep === i ? ' current' : ''}`}>
          {currentStep > i ? <img src={TickSvg} alt="tick" /> : i}
        </div>,
      );
    }

    return result;
  };

  return (
    <div className="main-wizard">
      {renderSteps()}
    </div>
  );
};

export default Wizard;
