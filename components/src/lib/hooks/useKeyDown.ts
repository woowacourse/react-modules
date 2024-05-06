import { useEffect } from "react";

const useKeyDown = (key: KeyboardEvent["key"], callback: () => void) => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [key, callback]);
};

export default useKeyDown;
