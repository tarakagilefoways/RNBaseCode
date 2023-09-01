import React, { useLayoutEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import { SignInTIDS } from '../../types/testIds';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootStoreType, useAppSelector } from '../../store/store.hooks';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm = () => {
  const navigation = useNavigation();
  const { email, password } = useAppSelector(
    (state: RootStoreType) => state.auth,
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignInFormData>();

  useLayoutEffect(() => {
    reset({ email: email, password: password });
    return () => {};
  }, [email, password, reset]);

  const onSubmit = (data: SignInFormData) => {
    console.log(data); // You can replace this with your sign-in logic
    navigation.navigate('Home', {});
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        rules={{ required: 'Email is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChange}
            value={value}
            testID={SignInTIDS.Email}
          />
        )}
      />
      <Text style={styles.error} testID={SignInTIDS.EmailError}>
        {errors.email?.message}
      </Text>
      <Controller
        control={control}
        name="password"
        defaultValue=""
        rules={{ required: 'Password is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={onChange}
            value={value}
            testID={SignInTIDS.Password}
          />
        )}
      />
      <Text style={styles.error} testID={SignInTIDS.PasswordError}>
        {errors.password?.message}
      </Text>
      <Button
        title="Sign In"
        onPress={handleSubmit(onSubmit)}
        testID={SignInTIDS.SignIn}
      />
    </View>
  );
};

export default SignInForm;
