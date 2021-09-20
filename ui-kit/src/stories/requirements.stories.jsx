import React from 'react'
import { storiesOf } from '@storybook/react'

import { Requirements } from '../components/requirements'

const stories = storiesOf('App test', module);

stories.add("App", () => {
  return <Requirements />
})