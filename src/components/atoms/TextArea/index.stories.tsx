import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextArea from './index';

export default {
  title: 'Atoms/TextArea',
  argTypes: {
    // プレースホルダー
    placeholder: {
      control: { type: 'text' },
      description: 'プレースホルダー',
      table: {
        type: { summary: 'string' },
      },
    },
    // 表示領域の行数
    rows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: '行数',
      table: {
        type: { summary: 'number' },
      },
    },
    // 表示領域の最小行数
    minRows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: '最小行数',
      table: {
        type: { summary: 'number' },
      },
    },
    // 表示領域の最大行数
    maxRows: {
      control: { type: 'number' },
      defaultValue: 10,
      description: '最大行数',
      table: {
        type: { summary: 'number' },
      },
    },
    // バリデーションエラー
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'バリデーションエラーフラグ',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: 'onChangeイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const Normal = Template.bind({});

export const Error = Template.bind({});
Error.args = { hasError: true };
