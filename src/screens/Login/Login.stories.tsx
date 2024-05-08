import React from 'react';
import {View} from 'react-native';
import Login from './index';
import {Story} from '@storybook/react';

export default {
  component: Login,
  title: 'Login',
  decorators: [
    (LoginStory: Story) => (
      <View style={{padding: 42, flex: 1}}>
        <LoginStory />
      </View>
    ),
  ],
  argTypes: {
    loginStatus: 'DEFAULT',
    loading: false,
  },
};

export const Loading = {
  args: {
    loginStatus: 'DEFAULT',
    loading: true,
  },
};

export const Default = {
  args: {
    loginStatus: 'DEFAULT',
    loading: false,
  },
};

export const LogedSuccesfull = {
  args: {
    loginStatus: 'LOGIN_SUCCESSFUL',
    loading: false,
  },
};

export const LogedSuccesFaild = {
  args: {
    loginStatus: 'LOGIN_FAILED',
    loading: false,
  },
};
