import * as React from 'react';
import { cn } from '../../../utils/className.utils';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
};

const Input = React.forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { error, className, ...rest } = props;
    return (
      <input
        {...rest}
        ref={ref}
        className={cn(
          'w-full py-2 px-4',
          'rounded-md placeholder-accent',
          'text-accent',
          'outline-none',
          'border border-secondary',
          !error && 'focus:ring-1 focus:ring-accent focus:border-accent',
          error && 'border border-error',
          className,
        )}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
