import { Box, BoxFlexCol, BoxFlexRow } from '../components/ui/Boxes';
import React from 'react';
import { Text } from '../components/ui/Text';
import Button from '../components/ui/Button';
import { Slider } from '../components/Slider';
import { cn } from '../utils/className.utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { authHttpClient } from '../api';
import { useRequest } from 'alova';

const schema = yup.object().shape({
  sliderValue: yup.mixed().required('Slider value is required'),
});

type SliderForm = yup.InferType<typeof schema>;

const useSliderForm = () => {
  const { register, handleSubmit, setValue } = useForm<SliderForm>({
    resolver: yupResolver(schema),
  });
  const { send: submitSliderValue } = useRequest(
    (data: SliderForm) => authHttpClient.Post('slider', data),
    {
      immediate: false,
    },
  );

  const handleSliderSubmit = async (data: SliderForm) => {
    try {
      await submitSliderValue({ value: data.sliderValue });
    } catch (e) {
      console.error(e);
    }
  };

  return { register, handleSubmit, handleSliderSubmit, setValue };
};

const SliderForm = () => {
  const { handleSubmit, handleSliderSubmit, setValue } = useSliderForm();

  return (
    <form onSubmit={handleSubmit(handleSliderSubmit)}>
      <Box className={'w-full h-screen'}>
        <Box
          className={cn(
            'w-[640px] h-[480px] mx-auto mt-32',
            'rounded-xl border  shadow-gray',
          )}
        >
          <BoxFlexCol className={'px-8 py-6 h-full gap-2'}>
            <Text as={'h1'} variant={'bold-18'}>
              Collaborate by submitting slider value
            </Text>
            <BoxFlexCol className={'h-full'}>
              <BoxFlexRow className={'grow justify-center items-center'}>
                <Box className={'w-3/4'}>
                  <Slider
                    onValueChange={(v) => setValue('sliderValue', v[0])}
                  />
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
