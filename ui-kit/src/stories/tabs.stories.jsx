import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tabs } from '../components/tabs';

const stories = storiesOf('Tabs', module);

stories.add('Tabs regular', () => {
  return <Tabs tabs={['First', 'Second', 'Third']} activeTab="Second" />;
});
