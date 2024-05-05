import { useEffect, useState } from 'react';

import { ModalPosition } from '../types/modal';

function usePosition(targetElement: HTMLElement | null | undefined) {
  const [position, setPosition] = useState<ModalPosition>({});

  const updatePosition = () => {
    if (!targetElement) return;
    const domRect = targetElement.getBoundingClientRect();
    console.log(domRect);
    setPosition({
      top: domRect.top,
      left: domRect.left,
    });
  };

  useEffect(() => {
    updatePosition();
  }, [targetElement]);

  return { position };
}

export default usePosition;
