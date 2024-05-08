/** @type{import("@storybook/react-webpack5").StorybookConfig} */
const config = {
  stories: ['../src/components/**/*.stories.?(ts|tsx|js|jsx)', '../src/screens/**/*.stories.@(js|jsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};

export default config
