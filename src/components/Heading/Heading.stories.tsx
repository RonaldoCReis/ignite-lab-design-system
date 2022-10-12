import Heading, { headingProps } from './Heading';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<headingProps>;

export const Default: StoryObj<headingProps> = {};

export const Small: StoryObj<headingProps> = {
  args: {
    size: 'sm',
  },
};

export const Large: StoryObj<headingProps> = {
  args: {
    size: 'lg',
  },
};

export const CustomComponent: StoryObj<headingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with H1</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
