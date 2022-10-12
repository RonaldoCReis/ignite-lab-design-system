import Checkbox, { checkboxProps } from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Text from '../Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (story) => (
      <div className="flex items-center gap-2">
        {story()}
        <Text size="sm">Lembrar de mim por 30 dias</Text>
      </div>
    ),
  ],
} as Meta<checkboxProps>;

export const Default: StoryObj<checkboxProps> = {};
