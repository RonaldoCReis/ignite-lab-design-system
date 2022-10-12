import React, { InputHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export type TextInputRootProps = {
  children: ReactNode;
};
const TextInputRoot = (props: TextInputRootProps) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-3 px-4 py-3 h-12 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'
      )}
    >
      {props.children}
    </div>
  );
};

export type TextInputIconProps = {
  children: ReactNode;
};

const TextInputIcon = (props: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
};

export interface textInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: textInputInputProps) => {
  return (
    <input
      className="bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
