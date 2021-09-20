import React from 'react';
import { storiesOf } from '@storybook/react';

import { LeftArrowIcon } from '../icons';

const stories = storiesOf('Icons', module);

stories.add("Icon 1", () => {
  return <LeftArrowIcon />
});
