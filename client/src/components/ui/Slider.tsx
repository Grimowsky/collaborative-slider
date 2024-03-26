import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '../../utils/className.utils';

const Slider = SliderPrimitive.Slider;

type SliderRoot = typeof SliderPrimitive.Root;
type SliderRootProps = React.ComponentPropsWithoutRef<SliderRoot>;
const Root = React.forwardRef<React.ElementRef<SliderRoot>, SliderRootProps>(
  (props, forwardedRef) => {
    return (
      <SliderPrimitive.Root
        {...props}
        ref={forwardedRef}
        className={cn(
          'relative flex items-center select-none w-full min-w-24 h-5',
          props.className,
        )}
      />
    );
  },
);
Root.displayName = 'SliderRoot';

type SliderTrack = typeof SliderPrimitive.Track;
const Track = React.forwardRef<
  React.ElementRef<SliderTrack>,
  React.ComponentPropsWithoutRef<SliderTrack>
>((props, forwardedRef) => {
  return (
    <SliderPrimitive.Track
      {...props}
      ref={forwardedRef}
      className={cn('absolute w-full h-1 bg-gray', props.className)}
    />
  );
});

type SliderRange = typeof SliderPrimitive.Range;
const Range = React.forwardRef<
  React.ElementRef<SliderRange>,
  React.ComponentPropsWithoutRef<SliderRange>
>((props, forwardedRef) => {
  return (
    <SliderPrimitive.Range
      {...props}
      ref={forwardedRef}
      className={cn('absolute h-full bg-black rounded-full', props.className)}
    />
  );
});

type SliderThumb = typeof SliderPrimitive.Thumb;
const Thumb = React.forwardRef<
  React.ElementRef<SliderThumb>,
  React.ComponentPropsWithoutRef<SliderThumb>
>((props, forwardedRef) => {
  return (
    <SliderPrimitive.Thumb
      {...props}
      ref={forwardedRef}
      className={cn(
        'block w-5 h-5 bg-primary shadow-md rounded-full hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-accent',
        props.className,
      )}
    />
  );
});

export { Slider, Root, Track, Range, Thumb };
