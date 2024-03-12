import React from 'react';
import { Box, BoxFlexCol } from '../components/ui/Boxes';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Text } from '../components/ui/Text';
import { httpClient } from '../api';
import { useRequest } from 'alova';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

type LoginForm = yup.InferType<typeof schema>;

const useLogin = () => {
  const { handleSubmit, register } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });
  const { send: login } = useRequest(
    (data: LoginForm) => httpClient.Post('auth/login', data),
    {
      immediate: false,
    },
  );

  const handleLogin: SubmitHandler<LoginForm> = async (data) => {
    try {
      await login(data);
    } catch (e) {
      console.error(e);
    }
  };

  return { handleSubmit, register, handleLogin };
};

const Login = () => {
  const { handleSubmit, register, handleLogin } = useLogin();

  return (
    <Box className={'w-full h-screen flex justify-center bg-white'}>
      <Box
        className={
          'mt-32 h-[640px] w-[480px] rounded-xl border border-gray shadow-gray'
        }
      >
        <Box className={'py-8 px-8'}>
          <Text variant={'bold-24'}>Login to collaborate</Text>
          <form onSubmit={handleSubmit(handleLogin)}>
            <BoxFlexCol className={'gap-8 mt-32'}>
              <Input
                type={'text'}
                placeholder={'Username'}
                {...register('username')}
              />
              <Input
                type={'password'}
                placeholder={'Password'}
                {...register('password')}
              />
              <Button className={'mt-8 w-[240px] mx-auto'}>Login</Button>
            </BoxFlexCol>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
