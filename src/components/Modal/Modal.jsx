import React, { useEffect, useCallback } from 'react';
import { Overlay, ModalStyle } from './Modal.styled';

function Modal({ largeImageURL, tags, closeModal }) {
  const closeModalByEsc = useCallback((event) => {
    if (event.code === 'Escape') closeModal();
  }, [closeModal]);

  useEffect(() => {
    document.addEventListener('keydown', closeModalByEsc);
    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
    };
  }, [closeModalByEsc]);

  const handleModalClose = ({ target, currentTarget }) => {
    if (target === currentTarget) closeModal();
  };

  return (
    <Overlay onClick={handleModalClose}>
      <ModalStyle>
        <img src={largeImageURL} alt={tags} />
      </ModalStyle>
    </Overlay>
  );
}

export default Modal;