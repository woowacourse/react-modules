import { css } from '@emotion/css';
import { Position } from '../../Modal.type';
import { ModalSize } from '../../Modal.type';

const ModalSizeStyle = {
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

const modalPositionStyle = {
  center: css`
    border-radius: 8px;
  `,
  bottom: css`
    width: 100dvw;
    border-radius: 8px 8px 0 0;
    position: absolute;
    bottom: 0;
  `,
};

const ModalFrame = (position: Position, size: ModalSize) => css`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  ${ModalSizeStyle[size]}
  ${modalPositionStyle[position]}
`;

const ButtonBar = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const BodyStyles = css`
  width: 100%;
`;

export { ModalFrame, ButtonBar, BodyStyles };
