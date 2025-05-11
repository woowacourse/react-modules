import { css } from '@emotion/css';

interface HeaderProps {
  title: string;
  showCloseButton: boolean;
  onClose: () => void;
}

const ModalHeader = ({ title, showCloseButton, onClose }: HeaderProps) => (
  <section className={headerStyles}>
    {title && <h2>{title}</h2>}
    {showCloseButton && (
      <button className={closeButtonStyles} onClick={onClose}>
        X
      </button>
    )}
  </section>
);

export default ModalHeader;

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const closeButtonStyles = css`
  all: unset;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
