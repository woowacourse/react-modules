import { useEffect } from 'react';

const useModalCloseClickDimmer = (
  modalRef: React.MutableRefObject<HTMLDivElement | null>,
  onClose: () => void,
  closeOnOutsideClick: boolean,
) => {
  useEffect(() => {
    const clickOutSide = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        closeOnOutsideClick
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', clickOutSide);
    return () => {
      document.removeEventListener('mousedown', clickOutSide);
    };
  }, [modalRef, onClose, closeOnOutsideClick]);
};

export default useModalCloseClickDimmer;
