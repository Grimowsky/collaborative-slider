import { Box, BoxFlexCol } from '../components/ui/Boxes';
import React from 'react';
import { Text } from '../components/ui/Text';
import Button from '../components/ui/Button';
const Slider = () => {
  return (
    <Box className={'w-full h-screen'}>
      <Box
        className={
          'w-[640px] h-[480px] mx-auto mt-32 rounded-xl border border-gray shadow-gray'
        }
      >
        <Box className={'px-8 py-6'}>
          <Text as={'h1'} variant={'bold-18'}>
            Collaborate by submitting slider value
          </Text>
          <BoxFlexCol>
            <Button className={'w-[320px] max-w-[320px] self-center'}>
              Submit me
            </Button>
          </BoxFlexCol>
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
