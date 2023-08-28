import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const { control, handleSubmit } = useForm<SignInFormData>();

  const onSubmit = (data: SignInFormData) => {
    console.log(data); // You can replace this with your sign-in logic
  };

  return (
    <View>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            onChangeText={onChange}
            value={value}
            testID="SignInEmail"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Password"
            secureTextEntry
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Button title="Sign In" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default SignInForm;
