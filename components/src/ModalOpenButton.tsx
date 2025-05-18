import { useModalContext } from './lib';

function ModalOpenButton({ type }: { type: string }) {
  const { openModalHandler } = useModalContext();

  return (
    <>
      <button className="click-me-button" onClick={openModalHandler}>
        {type} 모달
      </button>
    </>
  );
}

export default ModalOpenButton;
