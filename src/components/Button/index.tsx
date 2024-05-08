import {Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

import React, {FC} from 'react';
import styles from './styles.ts';
import {CustomButtonProps} from '../../types/Button';

const Button: FC<CustomButtonProps> = ({
  onPress,
  width = 50,
  height = 20,
  name = 'Button',
  color = 'white',
  fontSize,
  backgroundColor = 'black',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([
        {width, height, backgroundColor},
        styles.button,
      ])}>
      <Text style={StyleSheet.flatten([styles.text, {color, fontSize}])}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
