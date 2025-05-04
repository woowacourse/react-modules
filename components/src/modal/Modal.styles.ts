import { css } from '@emotion/react';

export const MODAL_CONTAINER_POSITION_STYLES = {
  center: css``,
  bottom: css`
    bottom: 0;
    margin-bottom: 0;
    width: 100%;
    max-width: 100%;
  `,
};

export const MODAL_CONTAINER_RESPONSIVE_WIDTH_STYLES = {
  center: css`
    width: calc(100vw - 72px);
  `,
  bottom: css`
    width: 100%;
  `,
};

export const MODAL_WRAPPER_POSITION_STYLES = {
  center: css`
    gap: 24px;
    border-radius: 8px;
  `,
  bottom: css`
    gap: 16px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  `,
};
