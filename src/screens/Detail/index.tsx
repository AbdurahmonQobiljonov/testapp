import {SafeAreaView, View, Text} from 'react-native';
import BackButton from '../../components/BackButton';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const avatarImage = require('../../../assets/pexels-bertellifotografia-3792581.jpg');

const Detail = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <BackButton onPress={handleGoBack} />
        <View style={styles.mainBlock}>
          <View style={styles.headerRow}>
            <Image source={avatarImage} style={styles.avatar} />
            <Text style={styles.name}>Jone Doe</Text>
          </View>
          <Text style={styles.descr}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
