import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import styles from './styles';
import {FC} from 'react';

interface IProps {
  navigateToDetails: () => void;
  name: string;
}

const avatarImage = require('../../../assets/pexels-bertellifotografia-3792581.jpg');

const ListCart: FC<IProps> = ({navigateToDetails, name}) => {
  return (
    <TouchableOpacity onPress={navigateToDetails} style={styles.cart}>
      <View style={styles.left}>
        <Image style={styles.cartImage} source={avatarImage} />
        <Text style={styles.name}>{name}</Text>
      </View>
      <SvgUri
        width="35"
        height="25"
        style={styles.rightIcon}
        uri="https://www.svgrepo.com/show/523151/arrow-right.svg"
      />
    </TouchableOpacity>
  );
};

export default ListCart;
