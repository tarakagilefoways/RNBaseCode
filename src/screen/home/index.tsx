import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { MainStackParamList } from '../../router/root.index';

type Props = NativeStackScreenProps<MainStackParamList, 'Home'>;

const Home = (props: Props) => {
  const {} = props;
  return (
    <View>
      <Text>{'Home Screen'}</Text>
    </View>
  );
};

export default Home;
