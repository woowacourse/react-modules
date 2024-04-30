import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/Modal';
import React from 'react';
import { Temp, Wide} from '../App';


const meta = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],

  argTypes: {
    isXButton : { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '3rem' }}>{Story()}</div>],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    position: 'center',
    title: '제목입니다.',
    buttonLayout:'row',
    children: <Temp>default 문서</Temp>,
    isXButton:true,
    confirmButtonContent :'확인',
    }
};


export const BottomModal: Story = {
    args: {
      ...Default.args,
      position: 'bottom',
    }

  };

  export const NoneXButton: Story = {
    args: {
      ...Default.args,
      isXButton:false,
    }
  };

  export const CancelButton: Story = {
    args: {
      ...Default.args,
      closeButtonContent : '취소',
    }

  };

  export const ColumnButtonLayout: Story = {
    args: {
      ...Default.args,
      buttonLayout:'column',
    }
  };

  export const AlertButton: Story = {
    args: {
      ...Default.args,
      confirmButtonContent:'alert',
      handleConfirm: () => alert("확인"),
    }

  };

  export const ScrollContent: Story = {
    args: {
      ...Default.args,
      children: <Wide>Wide 문서</Wide>
    }

  };




//   position: 'bottom',
//   title: '제목입니다.',
//   buttonLayout:'column',
//   isXButton:false,
//   closeButtonContent:"취소",
//   confirmButtonContent:'alert',
//   children: <Temp>d하이</Temp>,
//   handleConfirm: () => alert("확인")
//   }

// export const Alert2: Story = {
//     args: {
//       title: '제목입니다.',
//       position: 'bottom',
//       buttonLayout:'column',
//       isXButton:false,
//       closeButtonContent:"취소",
//       confirmButtonContent:'alert',
//       children: <Temp2>d하이</Temp2>,
//       handleConfirm: () => alert("확인")
//       }
//   };
  

//     position: string;
//   title: string;
//   isXButton?: boolean;
//   buttonLayout?: string;
//   children?: ReactNode;

//   closeButtonContent?: string;
//   confirmButton?: string;
//   confirmButtonContent?: string;

//   xButtonContent?:string;

//   handleConfirm?: (e: React.MouseEvent) => void;
//   handleClose?: (e: React.MouseEvent) => void;