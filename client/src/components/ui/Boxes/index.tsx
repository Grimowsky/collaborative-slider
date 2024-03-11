import * as React from 'react';
import { cn } from '../../../utils/className.utils';

type NativeBoxProps = React.HTMLAttributes<HTMLDivElement>;

const Box = (props: NativeBoxProps) => {
  const { children, className, ...rest } = props;
  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};

Box.displayName = 'Box';

const BoxFlexRow = (props: NativeBoxProps) => {
  const { children, className, ...rest } = props;
  return (
    <div {...rest} className={cn('flex flex-row', className)}>
      {children}
    </div>
  );
};
BoxFlexRow.displayName = 'BoxFlexRow';

const BoxFlexCol = (props: NativeBoxProps) => {
  const { children, className, ...rest } = props;
  return (
    <div {...rest} className={cn('flex flex-col', className)}>
      {children}
    </div>
  );
};

export { Box, BoxFlexRow, BoxFlexCol };
