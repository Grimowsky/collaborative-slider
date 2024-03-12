import { Box, BoxFlexCol, BoxFlexRow } from '../components/ui/Boxes';
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
        <BoxFlexCol className={'px-8 py-6 h-full gap-2'}>
          <Text as={'h1'} variant={'bold-18'}>
            Collaborate by submitting slider value
          </Text>
          <BoxFlexCol className={'h-full'}>
            <BoxFlexRow className={'grow border border-gray'}>hello</BoxFlexRow>
            <Button className={'w-[320px] max-w-[320px] my-8 self-center'}>
              Submit me
            </Button>
          </BoxFlexCol>
        </BoxFlexCol>
      </Box>
    </Box>
  );
};

export default Slider;
