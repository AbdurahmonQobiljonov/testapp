import ButtonOutlined from './index';

export default {
  title: 'ButtonOutlined',
  component: ButtonOutlined,
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
