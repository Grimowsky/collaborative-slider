import * as SliderPrimitive from '../ui/Slider';
const Slider = () => (
  <SliderPrimitive.Root defaultValue={[50]} max={100} step={1}>
    <SliderPrimitive.Track>
      <SliderPrimitive.Range />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb aria-label="Volume" />
  </SliderPrimitive.Root>
);

export default Slider;
