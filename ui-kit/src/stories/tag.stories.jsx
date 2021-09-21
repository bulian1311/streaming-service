import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tag } from '../components/tag';

const stories = storiesOf('Tag', module);

stories.add('Tag regular', () => {
  return <Tag>Test tag</Tag>;
});

stories.add('Tag active', () => {
  return <Tag isActive>Test tag</Tag>;
});
