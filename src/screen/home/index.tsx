import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { MainStackParamList } from '../../router/root.index';
import ScreenNames from '../../constants/screenNames';

type Props = NativeStackScreenProps<MainStackParamList, ScreenNames.Home>;

const Home = (_props: Props) => {
  return (
    <View>
      <Text>{'Home Screen'}</Text>
    </View>
  );
};

export default Home;
