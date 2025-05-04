import * as S from "./Modal.styles";
import { useEffect } from "react";

/**
 * Modal 컴포넌트에 전달되는 props
 */
interface ModalProps {
  /** 모달의 열림 여부 */
  isOpen: boolean;
  /** 모달을 닫을 때 호출되는 함수 */
  handleCloseModal: () => void;
  /** 모달 내부에 표시될 내용 */
  children: React.ReactNode;
  /** 모달의 제목 */
  title: string;
  /** 모달 위치 - center(중앙) 또는 bottom(하단) */
  position: "center" | "bottom";
}

/**
 * 재사용 가능한 Modal 컴포넌트입니다.
 *
 * - 외부에서 `isOpen`으로 모달의 상태를 제어합니다.
 * - `handleCloseModal`은 클릭 또는 키보드 이벤트로 닫기 동작을 수행합니다.
 */
const Modal = ({
  isOpen,
  handleCloseModal,
  title,
  children,
  position = "center",
}: ModalProps) => {
  useEffect(() => {
    //esc를 눌러 모달 닫기
    window.addEventListener("keyup", handleCloseModal);
  }, []);

  return (
    <>
      {isOpen && (
        <S.Background onClick={handleCloseModal}>
          <S.ModalContainer position={position}>
            <S.HeaderSection>
              <S.Title>{title}</S.Title>
              <S.ModalCloseButton onClick={handleCloseModal}>
                <img src="./closeIcon.png" />
              </S.ModalCloseButton>
            </S.HeaderSection>

            <S.ModalContent>{children}</S.ModalContent>
          </S.ModalContainer>
        </S.Background>
      )}
    </>
  );
};

export default Modal;
