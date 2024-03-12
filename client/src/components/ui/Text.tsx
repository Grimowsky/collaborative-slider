import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/className.utils';

const variants = cva('', {
  variants: {
    variant: {
      'normal-16': 'text-base text-black',
      'normal-12': 'text-sm text-black',
      'normal-14': 'text-md text-black',
      'normal-10': 'text-xs text-black',
      'bold-16': 'text-base text-black font-bold',
      'bold-24': 'text-[24px] text-black font-bold',
      'bold-18': 'text-[18px] text-black font-bold',
    },
  },
  defaultVariants: {
    variant: 'normal-16',
  },
});

export type TextVariants = VariantProps<typeof variants>;

type TextOwnProps<TTag extends React.ElementType = React.ElementType> = {
  as?: TTag;
  children: React.ReactNode;
};

type TextProps<TTag extends React.ElementType = React.ElementType> =
  TextOwnProps &
    Omit<React.ComponentProps<TTag>, keyof TextOwnProps> &
    TextVariants;

const __DEFAULT_ELEMENT__ = 'span';

const Text = <TTag extends React.ElementType = typeof __DEFAULT_ELEMENT__>(
  props: TextProps<TTag>,
) => {
  const { as, children, className, variant, ...rest } = props;
  const Element = as || __DEFAULT_ELEMENT__;

  return (
    <Element {...rest} className={cn(variants({ variant }), className)}>
      {children}
    </Element>
  );
};

Text.displayName = 'Text';

export { Text };
