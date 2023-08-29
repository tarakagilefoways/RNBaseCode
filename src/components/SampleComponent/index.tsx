import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
interface Props {
  text: string;
}
const SampleComponent = (props: Props) => {
  const { text } = props;
  return (
    <View style={styles.component}>
      <Text>{text}</Text>
    </View>
  );
};
export default SampleComponent;
