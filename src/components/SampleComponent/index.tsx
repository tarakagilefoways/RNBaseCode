import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
interface Props {}
const SampleComponent = (props: Props) => {
  const {} = props;
  return (
    <View style={styles.component}>
      <Text>{'Component'}</Text>
    </View>
  );
};
export default SampleComponent;
