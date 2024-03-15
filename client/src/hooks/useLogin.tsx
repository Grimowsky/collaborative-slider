import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRequest } from 'alova';
import { httpClient } from '../api';
import Cookies from 'js-cookie';
import { AUTH_KEY_MAPPINGS } from '../utils/keyMappings';
import { useAuth } from './useAuth';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

type LoginForm = yup.InferType<typeof schema>;
type AuthResponse = { token: string; refreshToken: string };

const useLogin = () => {
  const navigate = useNavigate();
  const { setLoggedIn: setLogin } = useAuth();
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
      Cookies.set(AUTH_KEY_MAPPINGS.AUTH_TOKEN, res.token);
      Cookies.set(AUTH_KEY_MAPPINGS.REFRESH_TOKEN, res.refreshToken);
      setLogin(true);
      navigate('/slider');
    } catch (e) {
      console.error(e);
    }
  };

  return { handleSubmit, register, handleLogin };
};

export default useLogin;
