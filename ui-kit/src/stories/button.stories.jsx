import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from '../components/button';

const stories = storiesOf('Button test', module);

stories.add("Button", () => {
  return <Button>Test button</Button>
})