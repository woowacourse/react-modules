import { useState } from 'react';

/**
 * @description
 * useModal 훅은 모달의 열림/닫힘 상태를 관리하는 커스텀 훅입니다.
 * 모달을 열고 닫는 핸들러를 제공합니다.
 * @returns 모달 상태와 핸들러를 반환합니다.
 * @returns isOpen 모달 열림 상태
 * @returns handleOpenModal 모달 열기 핸들러
 * @returns handleCloseModal 모달 닫기 핸들러
 */
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return { isOpen, handleOpenModal, handleCloseModal };
};
