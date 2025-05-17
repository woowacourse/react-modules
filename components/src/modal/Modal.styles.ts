import { css, SerializedStyles } from '@emotion/react';
import { ModalPositionType, ModalSizeType } from './Modal';

export const MODAL_CONTAINER_POSITION_STYLES: Record<
  ModalPositionType,
  SerializedStyles
> = {
  center: css``,
  bottom: css`
    width: 100%;
    max-width: 100%;
    align-items: flex-end;
  `,
};

export const MODAL_CONTENT_RESPONSIVE_WIDTH_STYLES: Record<
  ModalPositionType,
  SerializedStyles
> = {
  center: css`
    width: calc(100vw - 72px);
  `,
  bottom: css`
    width: 100%;
  `,
};

export const MODAL_CONTENT_POSITION_STYLES: Record<
  ModalPositionType,
  SerializedStyles
> = {
  center: css`
    gap: 24px;
    border-radius: 8px;
  `,
  bottom: css`
    width: 100%;

    gap: 16px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  `,
};

export const MODAL_CONTENT_SIZE_STYLES: Record<
  ModalSizeType,
  SerializedStyles
> = {
  small: css`
    width: 320px;
  `,
  medium: css`
    width: 480px;
  `,
  large: css`
    width: 600px;
  `,
};
