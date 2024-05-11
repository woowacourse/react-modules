import { useEffect, useState } from "react";

type HookProps = {
  initialState: boolean;
  unMountAnimation: string;
  animationTime: number;
  onClose: () => void;
};

const useAnimation = ({
  initialState,
  unMountAnimation,
  animationTime,
  onClose,
}: HookProps) => {
  const [closing, setClosing] = useState(false);
  const [open, setOpen] = useState(initialState);

  useEffect(() => {
    if (initialState) {
      setOpen(true);
    } else {
      setClosing(true);
    }
  }, [initialState]);

  useEffect(() => {
    if (closing) {
      if (unMountAnimation) {
        const timer = setTimeout(() => {
          setClosing(false);
          setOpen(false);
          onClose();
        }, animationTime);

        return () => clearTimeout(timer);
      } else {
        setClosing(false);
        setOpen(false);
        onClose();
      }
    }
  }, [closing, unMountAnimation]);

  return { open, closing };
};

export default useAnimation;
