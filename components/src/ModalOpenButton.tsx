import { useModal } from './lib';

function ModalOpenButton({ type }: { type: string }) {
  const { openModalHandler } = useModal();

  return (
    <>
      <button className="click-me-button" onClick={openModalHandler}>
        {type} 모달
      </button>
    </>
  );
}

export default ModalOpenButton;
