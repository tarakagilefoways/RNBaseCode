import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import ScreenNames from '../../constants/screenNames';

import { SignInTIDS } from '../../constants/testIds';
import { AppDispatch, useAppDispatch } from '../../store/store.hooks';
import { LoginApiAction } from '../../service/auth/slice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../../router/root.index';

import styles from './styles';
import InputComponent from '../../components/SampleComponent';

interface SignInFormData {
  username: string;
  password: string;
}
export type SignInFormProps = NativeStackScreenProps<
  MainStackParamList,
  ScreenNames.SignInForm
>;
const SignInForm = (props: SignInFormProps) => {
  const navigation = props.navigation;
  const dispatch: AppDispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const [networkError, setNetworkError] = useState('');

  const onSubmit = async (data: SignInFormData) => {
    const payload: ILogiInReq = {
      username: data.username,
      password: data.password,
    };
    const action = await dispatch(LoginApiAction(payload));
    if (LoginApiAction.fulfilled.match(action)) {
      navigation.navigate(ScreenNames.Home, {});
    } else if (LoginApiAction.rejected.match(action)) {
      const error: string = String(action.payload);
      setNetworkError(error);
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="username"
        defaultValue=""
        rules={{ required: 'Username is required' }}
        render={({ field: { onChange, value } }) => {
          return (
            <InputComponent
              placeholder={'Username'}
              onChangeText={onChange}
              value={value}
              testID={SignInTIDS.Username}
            />
          );
        }}
      />
      <Text style={styles.error} testID={SignInTIDS.UsernameError}>
        {errors.username?.message}
      </Text>
      <Controller
        control={control}
        name="password"
        defaultValue=""
        rules={{ required: 'Password is required' }}
        render={({ field: { onChange, value } }) => {
          return (
            <InputComponent
              placeholder={'Password'}
              secureTextEntry
              onChangeText={onChange}
              value={value}
              testID={SignInTIDS.Password}
            />
          );
        }}
      />
      <Text style={styles.error} testID={SignInTIDS.PasswordError}>
        {errors.password?.message}
      </Text>
      <Button
        title="Sign In"
        onPress={handleSubmit(onSubmit)}
        testID={SignInTIDS.SignIn}
      />
      <Text style={styles.error} testID={SignInTIDS.NetworkError}>
        {networkError}
      </Text>
    </View>
  );
};

export default SignInForm;
