import * as React from 'react';
import * as SliderPrimitive from '../ui/Slider';
import { SliderProps } from '@radix-ui/react-slider';

type Slider = SliderProps;

const Slider = React.forwardRef(
  (props: Slider, forwardedRef: React.ForwardedRef<HTMLSpanElement>) => {
    return (
      <SliderPrimitive.Slider>
        <SliderPrimitive.Root {...props} ref={forwardedRef}>
          <SliderPrimitive.Track>
            <SliderPrimitive.Range />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb aria-label="Volume" />
        </SliderPrimitive.Root>
      </SliderPrimitive.Slider>
    );
  },
);

export { Slider };
