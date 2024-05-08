import {SvgUri} from 'react-native-svg';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles.ts';
import {FC} from 'react';
interface IProps {
  title?: string;
  onPress?: () => void;
}

const BackButton: FC<IProps> = ({title = 'Back', onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.header}>
      <SvgUri
        width="30"
        height="30"
        uri="https://www.svgrepo.com/show/524256/arrow-left.svg"
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
