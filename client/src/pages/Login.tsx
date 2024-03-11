import React from 'react';
import { Box, BoxFlexCol } from '../components/ui/Boxes';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Login = () => {
  return (
    <Box className={'w-full h-screen flex justify-center bg-white'}>
      <Box className={'mt-32 h-[640px] w-[480px] rounded-xl bg-gray'}>
        <Box className={'py-8 px-8'}>
          <BoxFlexCol className={'gap-8'}>
            <Input type={'text'} placeholder={'Username'} />
            <Input type={'text'} placeholder={'Password'} />
            <Button className={'mt-8 w-[320px] mx-auto'}>Login</Button>
          </BoxFlexCol>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
