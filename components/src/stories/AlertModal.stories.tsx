import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AlertModal from '../lib/components/Modal/AlertModal/index';

import '../styles/index.css';

const meta: Meta<typeof AlertModal> = {
  title: 'Modal/Examples',
  component: AlertModal,
  argTypes: {
    $footerDirection: { table: { disable: true } },
  },
};

export default meta;

export const Alert = AlertModal.bind({});
Alert.args = {
  title: '확인(Alert) 모달',
  message: '사용자에게 메시지를 전달하고 확인 버튼만 제공',
  isCloseIcon: false,
  $modalSize: 'medium',
  $position: 'center',
  $buttonSize: 'small',
  onModalClose: action('modalClose'),
  onConfirmButtonClick: action('confirmButtonClick'),
};
