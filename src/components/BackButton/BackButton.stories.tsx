import BackButton from './index';

export default {
  title: 'BackButton',
  component: BackButton,
  tags: ['autodocs'],
  argTypes: {},
};

export const Default = {
  args: {
    title: 'Back',
  },
};

export const WithParams = {
  args: {
    title: 'Go',
    onPress: () => {},
  },
};
