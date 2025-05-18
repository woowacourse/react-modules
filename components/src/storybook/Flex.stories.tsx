import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '../lib/components/Flex';

const meta = {
  title: 'Component/Flex',
  component: Flex,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Flex 컴포넌트는 Flexbox 레이아웃을 사용하여 자식 요소들을 정렬하고 배치하는 UI 요소입니다. 이 컴포넌트는 다양한 방향, 정렬 및 간격 옵션을 제공하여 복잡한 레이아웃을 쉽게 구현할 수 있도록 돕습니다.',
      },
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    direction: 'row',
    justify: 'flex-start',
    align: 'center',
    gap: 0,
    width: '100%',
    height: '100%',
    padding: '0px',
    margin: '0px',
    children: <div>Flex Item</div>,
  },
  argTypes: {
    direction: {
      description: 'The direction of the flex container',
      control: { type: 'select' },
      options: ['row', 'column'],
    },
    justify: {
      description: 'The justify content of the flex container',
      control: { type: 'select' },
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    align: {
      description: 'The align items of the flex container',
      control: { type: 'select' },
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    },
    gap: {
      description: 'The gap between the flex items',
      control: { type: 'number' },
    },
    margin: {
      control: false,
    },
    padding: {
      control: false,
    },
    width: {
      control: false,
    },
    height: {
      control: false,
    },

    children: {
      control: false,
    },
  },
  render: (args) => {
    return (
      <Flex {...args} css={{ border: '1px solid black' }}>
        <Flex
          css={css`
            background-color: red;
            width: 32px;
            height: 32px;
          `}
        >
          1
        </Flex>
        <Flex
          css={css`
            background-color: green;
            width: 32px;
            height: 32px;
          `}
        >
          2
        </Flex>
        <Flex
          css={css`
            background-color: blue;
            width: 32px;
            height: 32px;
          `}
        >
          3
        </Flex>
      </Flex>
    );
  },
};
