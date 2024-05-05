import { BUTTON_COLOR_MAP } from './Modal.constant';

export type ModalPosition = 'center' | 'bottom';

export type FlexDirection = 'column' | 'row';

export type ButtonColorType = keyof typeof BUTTON_COLOR_MAP;
