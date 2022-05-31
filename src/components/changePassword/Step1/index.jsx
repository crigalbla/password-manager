import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../Button';
import Title from '../../Title';
import Group from '../../../assets/img/group.svg';
import Group3 from '../../../assets/img/group-3.svg';

import './style.scss';

const Step1 = ({ setShowModal, setCurrentStep }) => {
  const { t } = useTranslation();
  const [checkBox, setCheckBox] = useState(false);

  return (
    <div className="step1">
      <div className="content">
        <Title text={t('title.createPass')} />
        <div className="images">
          <div>
            <img src={Group} height="145px" alt="group" />
            <span>{t('step1.saveHere')}</span>
          </div>
          <div>
            <img src={Group3} height="145px" alt="group-3" />
            <span>{t('step1.createYourPass')}</span>
          </div>
        </div>
        <div className="information">
          <p className="sub-title">{t('step1.howWork')}</p>
          <span>{t('step1.inFirstPlace')}</span>
          <p className="sub-title">{t('step1.whatData')}</p>
          <span>{t('step1.forExample')}</span>
        </div>
        <div className="check-box">
          <input type="checkbox" onChange={() => setCheckBox((oldState) => !oldState)} checked={checkBox} />
          <span>{t('step1.checkBoxTerms')}</span>
        </div>
      </div>
      <div className="footer">
        <Button
          onClick={() => { setShowModal((oldState) => !oldState); setCheckBox(false); }}
          text={t('button.cancel')}
          typeOfStyle="secundary"
        />
        <Button
          onClick={() => setCurrentStep((oldState) => oldState + 1)}
          disabled={!checkBox}
          text={`${t('button.next')} >`}
          typeOfStyle="filled"
        />
      </div>
    </div>
  );
};

export default Step1;
