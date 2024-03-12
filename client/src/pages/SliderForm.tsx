import { Box, BoxFlexCol, BoxFlexRow } from '../components/ui/Boxes';
import React from 'react';
import { Text } from '../components/ui/Text';
import Button from '../components/ui/Button';
import Slider from '../components/Slider';
const SliderForm = () => {
  return (
    <form>
      <Box className={'w-full h-screen'}>
        <Box
          className={
            'w-[640px] h-[480px] mx-auto mt-32 rounded-xl border  shadow-gray'
          }
        >
          <BoxFlexCol className={'px-8 py-6 h-full gap-2'}>
            <Text as={'h1'} variant={'bold-18'}>
              Collaborate by submitting slider value
            </Text>
            <BoxFlexCol className={'h-full'}>
              <BoxFlexRow className={'grow justify-center items-center'}>
                <Box className={'w-3/4'}>
                  <Slider />
                </Box>
              </BoxFlexRow>
              <Button className={'w-[320px] max-w-[320px] my-8 self-center'}>
                Submit me
              </Button>
            </BoxFlexCol>
          </BoxFlexCol>
        </Box>
      </Box>
    </form>
  );
};

export default SliderForm;
