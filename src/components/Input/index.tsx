import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
interface IInputProps {
  backgroundColor?: string;
  color?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const CustomInput: FC<IInputProps> = ({
  backgroundColor = 'white',
  secureTextEntry = false,
  color = 'black',
  placeholder,
}) => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      style={StyleSheet.flatten([
        styles.input,
        {
          backgroundColor,
          color,
        },
      ])}
    />
  );
};

export default CustomInput;
