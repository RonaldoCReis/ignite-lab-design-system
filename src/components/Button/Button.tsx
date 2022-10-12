import React, { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface buttonProps {
  children: ReactNode;
  asChild?: boolean;
}
const Button = ({ children, asChild }: buttonProps) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className={clsx(
        'px-4 py-3 bg-cyan-500 rounded font-semibold text-gray-900 transition-colors hover:bg-cyan-300 text-sm w-full focus:ring-2 ring-gray-100',
        {}
      )}
    >
      {children}
    </Comp>
  );
};

export default Button;
