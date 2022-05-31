import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../Button';
import Title from '../../Title';
import CorrectImg from '../../../assets/img/correct.png';
import ErrorImg from '../../../assets/img/error.png';

import './style.scss';

const Step3 = ({ setShowModal, setCurrentStep, responseOK }) => {
  const { t } = useTranslation();

  return (
    <div className="step3">
      <div className="content">
        <img src={responseOK ? CorrectImg : ErrorImg} alt="icon" />
        <div>
          <Title text={responseOK ? t('title.created') : t('title.error')} removeDecoration />
          <span>{responseOK ? t('step3.successDetails') : t('step3.errorDetails')}</span>
        </div>
      </div>
      <div className="footer">
        {responseOK ? (
          <Button
            onClick={() => { setShowModal((oldState) => !oldState); setCurrentStep(1); }}
            text={`${t('button.access')} >`}
            typeOfStyle="primary"
          />
        ) : (
          <Button
            onClick={() => setCurrentStep(1)}
            text={`${t('button.backToPM')} >`}
            typeOfStyle="primary"
          />
        )}
      </div>
    </div>
  );
};

export default Step3;
