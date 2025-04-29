import { css } from '@emotion/css';

const Modal = () => {
  return (
    <div className={ModalBackdrop}>
      <div className={ModalFrame}>
        <button>&times;</button>
        <h2>Modal Header</h2>
        <p>This is a simple modal.</p>
      </div>
    </div>
  );
};

export default Modal;

const ModalBackdrop = css`
  width: 100dvw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 0;
  left: 0;
  top: 0;
`;

const ModalFrame = css`
  background-color: white;
  padding: 20px;
  width: 100%;
  min-width: 300px;
  max-width: 80dvw;
  border-radius: 8px;
`;
