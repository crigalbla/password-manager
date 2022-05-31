import React, { useState } from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Wizard from '../Wizard';

const ChangePassword = ({ setShowModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [responseOK, setResponseOK] = useState();

  return (
    <div>
      <Wizard currentStep={currentStep} numberOfSteps={3} />
      {currentStep === 1 && <Step1 setShowModal={setShowModal} setCurrentStep={setCurrentStep} />}
      {currentStep === 2 && <Step2 setShowModal={setShowModal} setCurrentStep={setCurrentStep} setResponseOK={setResponseOK} />}
      {currentStep === 3 && <Step3 setShowModal={setShowModal} setCurrentStep={setCurrentStep} responseOK={responseOK} />}
    </div>
  );
};

export default ChangePassword;
