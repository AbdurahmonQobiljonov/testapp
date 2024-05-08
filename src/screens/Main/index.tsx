import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import React, {useRef} from 'react';
import styles from './styles';
import Button from '../../components/Button';
import ButtonOutlined from '../../components/ButtonOutlined';
import ListCart from '../../components/ListCart';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const avatarImage = require('../../../assets/pexels-bertellifotografia-3792581.jpg');

const Main = () => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const goToDetails = () => {
    navigation.navigate('Detail');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const showBottomSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeBottomSheet = () => {
    actionSheetRef.current?.hide();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <SvgUri
            width="30"
            height="30"
            uri="https://www.svgrepo.com/show/126206/menu.svg"
          />
          <TouchableOpacity onPress={goToLogin}>
            <Image source={avatarImage} style={styles.avatar} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Find your person</Text>
        <Button
          name={'Add cart'}
          width={140}
          height={45}
          fontSize={20}
          fontWeight={'600'}
          onPress={showBottomSheet}
        />
        <ListCart name={'Alex Smith'} navigateToDetails={goToDetails} />
      </View>
      <ActionSheet
        ref={actionSheetRef}
        closable
        closeOnPressBack
        closeOnTouchBackdrop>
        <View style={styles.actionSheet}>
          <View style={styles.actionRow}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.actionRow}>
            <Text style={styles.label}>Link to profile photo</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.btns}>
            <ButtonOutlined
              name={'Cansel'}
              color={'black'}
              onPress={closeBottomSheet}
              width={130}
              height={40}
              borderColor={'black'}
            />
            <Button
              name={'Ok'}
              backgroundColor={'black'}
              color={'white'}
              width={130}
              height={40}
              onPress={closeBottomSheet}
            />
          </View>
        </View>
      </ActionSheet>
    </SafeAreaView>
  );
};

export default Main;
