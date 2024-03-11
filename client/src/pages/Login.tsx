import React from 'react';
import { Box, BoxFlexCol } from '../components/ui/Boxes';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Text } from '../components/ui/Text';

const Login = () => {
  return (
    <Box className={'w-full h-screen flex justify-center bg-white'}>
      <Box
        className={'mt-32 h-[640px] w-[480px] rounded-xl border border-gray'}
      >
        <Box className={'py-8 px-8'}>
          <Text variant={'bold-24'}>Login to collaborate</Text>
          <BoxFlexCol className={'gap-8 mt-32'}>
            <Input type={'text'} placeholder={'Username'} />
            <Input type={'text'} placeholder={'Password'} />
            <Button className={'mt-8 w-[240px] mx-auto'}>Login</Button>
          </BoxFlexCol>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
