import { MouseEvent, useCallback } from 'react';

const useModalCloseByBackdrop = (onClose: () => void) => {
  const handleCloseByBackdrop = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  return { handleCloseByBackdrop };
};

export default useModalCloseByBackdrop;
