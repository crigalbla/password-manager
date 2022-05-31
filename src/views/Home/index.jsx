/* eslint-disable max-len */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../components/Button';
import ChangePassword from '../../components/changePassword';
import Modal from '../../components/Modal';

import './style.scss';

const Home = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="task-change-pass">
        <Button onClick={() => setShowModal((oldState) => !oldState)} text={t('button.start')} typeOfStyle="filled" />
      </div>
      <Modal showModal={showModal}>
        <ChangePassword setShowModal={setShowModal} />
      </Modal>
    </>
  );
};

export default Home;
