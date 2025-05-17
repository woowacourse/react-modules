import useModalCloseByEsc from './useModalCloseByEsc';
import useModalAfterOpen from './useModalAfterOpen';
import useModalCloseByBackdrop from './useModalCloseByBackdrop';

const useModalEvents = (isOpen: boolean, onClose: () => void, onAfterOpen?: () => void) => {
  useModalAfterOpen(isOpen, onAfterOpen);
  useModalCloseByEsc(onClose);
  const { handleCloseByBackdrop } = useModalCloseByBackdrop(onClose);

  return { handleCloseByBackdrop };
};

export default useModalEvents;
