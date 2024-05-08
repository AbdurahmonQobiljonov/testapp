import {Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

import React, {FC} from 'react';
import styles from './styles.ts';
import {CustomButtonProps} from '../../types/Button';
import {SvgUri} from 'react-native-svg';

const ButtonOutlined: FC<CustomButtonProps> = ({
  onPress,
  width = 50,
  height = 20,
  name = 'button',
  color = 'black',
  fontSize = 16,
  borderColor = 'red',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([
        {
          width,
          height,
          borderColor,
        },
        styles.outlined,
      ])}>
      <Text style={StyleSheet.flatten([styles.text, {color, fontSize}])}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonOutlined;
