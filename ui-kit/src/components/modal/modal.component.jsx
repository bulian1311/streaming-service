import React from 'react';

import { Tag } from '../tag';
import { CancelIcon } from '../../icons';
import { ModalContainer, ModalBody } from './modal.styles';

export const Modal = ({ children, isVisible, setIsVisible, ...otherProps }) => {
  if (!isVisible) return '';

  return (
    <ModalContainer {...otherProps}>
      <ModalBody>
        <Tag
          onClick={() => setIsVisible(false)}
          style={{ position: 'absolute', top: 5, right: 5 }}
        >
          <CancelIcon />
        </Tag>
        {children}
      </ModalBody>
    </ModalContainer>
  );
};
