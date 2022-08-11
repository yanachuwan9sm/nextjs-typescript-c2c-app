import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckBox from './index';

export default {
  title: 'Molecules/CheckBox',
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '表示ラベル',
      table: {
        type: { summary: 'text' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: 'チェック',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: '値が変化した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = { label: 'Label' };

export const Checked = Template.bind({});
Checked.args = { label: 'Done', checked: true };
