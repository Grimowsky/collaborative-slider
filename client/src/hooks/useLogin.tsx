import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRequest } from 'alova';
import { httpClient } from '../api';
import Cookies from 'js-cookie';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

type LoginForm = yup.InferType<typeof schema>;
type AuthResponse = { token: string; refreshToken: string };

const AuthKeyMappings = {
  AUTH_TOKEN: 'AUTH_TOKEN',
  REFRESH_TOKEN: 'REFRESH_TOKEN',
};
const useLogin = () => {
  const { handleSubmit, register } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });
  const { send: login } = useRequest(
    (data: LoginForm) => httpClient.Post<AuthResponse>('auth/login', data),
    {
      immediate: false,
    },
  );

  const handleLogin: SubmitHandler<LoginForm> = async (data) => {
    try {
      const res = await login(data);
      Cookies.set(AuthKeyMappings.AUTH_TOKEN, res.token);
      Cookies.set(AuthKeyMappings.REFRESH_TOKEN, res.refreshToken);
    } catch (e) {
      console.error(e);
    }
  };

  return { handleSubmit, register, handleLogin };
};

export default useLogin;
