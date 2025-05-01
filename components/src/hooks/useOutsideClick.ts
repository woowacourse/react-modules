import { useEffect } from "react";

const useModalCloseEvent = (callback: () => void) => {
  useEffect(function outsideClick() {
    const handleDocumentClick = ({ target }: MouseEvent | TouchEvent) => {
      const currentTarget = target as HTMLElement;
      if (currentTarget.id !== "backdrop") {
        return;
      }

      callback();
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(function escKeyDown() {
    const handleDocumentKeyDown = ({ key }: KeyboardEvent) => {
      if (key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleDocumentKeyDown);

    return () => {
      document.removeEventListener("keydown", handleDocumentKeyDown);
    };
  }, []);
};

export default useModalCloseEvent;
