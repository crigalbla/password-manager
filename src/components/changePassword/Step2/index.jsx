import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../Button';
import Title from '../../Title';
import Input from '../../Input';
import Loader from '../../Loader';
import { submitForm } from '../../../services/api';
import EyeOpen from '../../../assets/img/eye-open.png';
import EyeClose from '../../../assets/img/eye-close.png';

import './style.scss';

const Step2 = ({ setShowModal, setCurrentStep, setResponseOK }) => {
  const { t } = useTranslation();
  const [pass, setPass] = useState('');
  const [seePass, setSeePass] = useState(false);
  const [repeatPass, setRepeatPass] = useState('');
  const [seeRepeatPass, setSeeRepeatPass] = useState(false);
  const [clue, setClue] = useState('');
  const [loading, setLoading] = useState(false);

  const repeatPassOK = pass === repeatPass;

  const passOK = useMemo(() => {
    if (!pass) return true;

    let hasNumber = false;
    let hasUpperCase = false;
    let min8Length = false;
    let max24Length = false;

    if (pass.length >= 8) min8Length = true;
    if (pass.length <= 24) max24Length = true;

    for (let i = 0; i < pass.length; i += 1) {
      if (!hasNumber) hasNumber = parseInt(pass[i], 10) >= 0;
      if (!hasUpperCase) hasUpperCase = pass[i] === pass[i].toUpperCase() && pass[i] !== pass[i].toLowerCase();
      if (hasNumber && hasUpperCase) break;
    }

    return hasNumber && hasUpperCase && min8Length && max24Length;
  }, [pass]);

  const nextStep = () => {
    setLoading(true);
    submitForm(pass, repeatPass, clue).then((response) => {
      if (response.status === 200) {
        setResponseOK(true);
        setCurrentStep((oldState) => oldState + 1);
      }
    }).catch((error) => {
      if (error.status === 401) {
        setResponseOK(false);
        setCurrentStep((oldState) => oldState + 1);
      }
    });
  };

  return (
    <div className="step2">
      <div className="content">
        <Title text={t('title.createPass')} />
        <p className="margin-tex">{t('step2.inFirstPlace')}</p>
        <div className="display-inputs">
          <Input
            id="pass"
            name="pass"
            type={seePass ? 'text' : 'password'}
            placeholder={t('step2.createYourPass')}
            rightAddon={(
              <img
                className="eye-img"
                src={seePass ? EyeClose : EyeOpen}
                onClick={() => setSeePass((oldState) => !oldState)}
                alt="eye"
              />
            )}
            value={pass}
            onChange={setPass}
            error={!passOK ? t('step2.passNoRequirements') : ''}
          />
          <Input
            id="repeatPass"
            name="repeatPass"
            type={seeRepeatPass ? 'text' : 'password'}
            placeholder={t('step2.repeatyourPass')}
            rightAddon={(
              <img
                className="eye-img"
                src={seeRepeatPass ? EyeClose : EyeOpen}
                onClick={() => setSeeRepeatPass((oldState) => !oldState)}
                alt="eye"
              />
            )}
            value={repeatPass}
            onChange={setRepeatPass}
            error={!repeatPassOK ? t('step2.passNotEqual') : undefined}
          />
        </div>
        <div className="clue">
          <p className="margin-tex">{t('step2.alsoCan')}</p>
          <Input
            id="clue"
            name="clue"
            type="text"
            placeholder={t('step2.createYourClue')}
            rightAddon={<p className="typing">{`${clue.length}/255`}</p>}
            value={clue}
            onChange={setClue}
            maxlength={255}
          />
        </div>
      </div>
      <div className="footer">
        <Button
          onClick={() => { setShowModal((oldState) => !oldState); setCurrentStep(1); }}
          text={t('button.cancel')}
          typeOfStyle="secundary"
        />
        <Button
          onClick={nextStep}
          text={`${t('button.next')} >`}
          typeOfStyle="filled"
          disabled={!pass || !passOK || !repeatPass || !repeatPassOK}
        />
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Step2;
