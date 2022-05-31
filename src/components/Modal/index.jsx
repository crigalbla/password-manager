import React from 'react';

import './style.scss';

const Modal = ({ showModal, children }) => {
  const className = `main-modal ${showModal && 'is-open'}`;
  document.body.style = showModal && 'overflow: hidden';

  return (
    <div className={className}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
