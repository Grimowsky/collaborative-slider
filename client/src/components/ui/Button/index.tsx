import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../../utils/className.utils';

const variants = cva('py-2 px-8 text-base hover:-translate-y-0.5', {
  variants: {
    variant: {
      primary: 'bg-primary text-background rounded-md hover:shadow-primary',
      secondary: '',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type Variants = VariantProps<typeof variants>;

type ButtonNativeProps = React.ComponentProps<'button'>;
type ButtonProps = ButtonNativeProps & Variants;

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const { className, variant, ...rest } = props;

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(variants({ variant }), className)}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
