import Button from './index';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {control: 'color'},
  },
};

export const Primary = {
  args: {
    color: 'blue',
    name: 'Button',
  },
};

export const Secondary = {
  args: {
    color: '#eee',
    name: 'Button',
  },
};

export const Large = {
  args: {
    width: 150,
    name: 'Button',
  },
};

export const Small = {
  args: {
    size: 70,
    label: 'Button',
  },
};
