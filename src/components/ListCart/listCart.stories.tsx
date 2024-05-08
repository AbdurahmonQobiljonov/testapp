import Cart from './index';

export default {
  title: 'Cart',
  component: Cart,
  argTypes: {
    name: {control: 'Jon'},
    navigateToDetails: {action: 'navigateToDetail'},
  },
};

export const Default = {
  args: {
    name: 'Jon',
    navigateToDetails: () => {},
  },
};

export const onPressed = {
  args: {
    name: 'onPressed',
    navigateToDetails: () => {},
  },
};
