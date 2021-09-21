import React from 'react';
import { storiesOf } from '@storybook/react';

import { Modal } from '../components/modal';

const stories = storiesOf('Modal', module);

stories.add('Modal regular', () => {
  return (
    <Modal isVisible>
      <div style={{ width: 200, height: 200 }}></div>
    </Modal>
  );
});
