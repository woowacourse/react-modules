export const MODAL_POSITION_CLASS_NAME_MAP = {
  center: 'modalContainerCenter',
  bottom: 'modalContainerBottom',
} as const;

export const MODAL_SIZE_CLASS_NAME_MAP = {
  small: 'modalSizeSmall',
  medium: 'modalSizeMedium',
  large: 'modalSizeLarge',
} as const;

export const BUTTON_COLOR_MAP = {
  primary: 'buttonPrimary',
  secondary: 'buttonSecondary',
  danger: 'buttonDanger',
} as const;

export const MODAL_CUSTOM_STYLES = {
  cancelButton: { width: '20%', border: '1px solid rgba(51, 51, 51, 0.25)' },
  confirmButton: { width: '20%' },
  modalContent: { height: 'auto', padding: '16px 0px' },
} as const;

export const MODAL_DEVICE_CLASS_NAME_MAP = {
  mobile: 'modalDeviceMobile',
  tablet: 'modalDeviceTablet',
  desktop: 'modalDeviceDesktop',
} as const;
