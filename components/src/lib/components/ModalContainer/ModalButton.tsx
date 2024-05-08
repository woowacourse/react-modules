import { ModalContainerContext } from '../../contexts';
import { useModalContext } from '../../hooks';
import { ModalButtonProps } from '../../types/modal';

/**
 *ModalContainer의 하위 컴포넌트로, Modal 내에서 모달 닫기 기능을  사용할 수 있는 버튼
 * 모달 등장,퇴장에 애니메이션이 필요한 모달의 경우 해당 모달 내의 하위 컴포넌트인 Button을 사용하면 된다 (ex:BottomModal.Button)
 */
export default function ModalButton({ isCloseModal, children, onClick, ...rest }: ModalButtonProps) {
  const { closeModal } = useModalContext(ModalContainerContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (isCloseModal) {
      closeModal();
    }
  };

  return (
    <button {...rest} onClick={handleClick}>
      {children}
    </button>
  );
}
