import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../components/input';

const stories = storiesOf('Input', module);

stories.add('Input without label', () => {
  return <Input />;
});

stories.add('Input with label', () => {
  return <Input label="Test label" />;
});
