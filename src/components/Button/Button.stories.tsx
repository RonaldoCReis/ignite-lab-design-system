import Button, { buttonProps } from './Button';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
} as Meta<buttonProps>;

export const Default: StoryObj<buttonProps> = {};
