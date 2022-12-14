import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface textProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}
const Text = ({ size = 'md', children, asChild }: textProps) => {
  const Comp = asChild ? Slot : 'span';
  return (
    <Comp
      className={clsx('text-gray-100 font-sans', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg',
      })}
    >
      {children}
    </Comp>
  );
};

export default Text;
