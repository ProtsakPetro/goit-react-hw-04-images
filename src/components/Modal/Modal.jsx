import React, { useEffect } from 'react';
import { Overlay, ModalStyle } from './Modal.styled';

function Modal({ largeImageURL, tags, closeModalFunction }) {
  const closeModalByEsc = (event) => {
    if (event.code === 'Escape') {
      closeModalFunction();
    }
  };

  const closeModal = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModalByEsc);
    return () => {
      document.removeEventListener('keydown', closeModalByEsc);
    };
  }, [closeModalByEsc]);

  return (
    <Overlay onClick={closeModal}>
      <ModalStyle>
        <img src={largeImageURL} alt={tags} />
      </ModalStyle>
    </Overlay>
  );
}

export default Modal;