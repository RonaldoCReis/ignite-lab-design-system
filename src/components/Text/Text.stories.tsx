import Text, { textProps } from './Text';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<textProps>;

export const Default: StoryObj<textProps> = {};

export const Small: StoryObj<textProps> = {
  args: {
    size: 'sm',
  },
};

export const Large: StoryObj<textProps> = {
  args: {
    size: 'lg',
  },
};

export const CustomComponent: StoryObj<textProps> = {
  args: {
    asChild: true,
    children: <p>Text with P tag</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
