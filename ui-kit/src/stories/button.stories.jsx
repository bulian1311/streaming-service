 import React from 'react';
// import { storiesOf } from '@storybook/react';

 import { Button } from '../components/button';

// const stories = storiesOf('Button', module);

// stories.add('Button regular', () => {
//   return <Button>Test button</Button>;
// });

// stories.add('Button reversed', () => {
//   return <Button reverse>Test button</Button>;
// });

// stories.add('Button loading', () => {
//   return <Button isLoading>Test button</Button>;
// });

// stories.add('Button reversed loading', () => {
//   return (
//     <Button reverse isLoading>
//       Test button
//     </Button>
//   );
// });

export default {
  title: "Button",
  component: Button
};

export const DefaultButton = () => <Button>Button</Button>

