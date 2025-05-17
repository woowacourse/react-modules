import { useRef } from "react";

export default function useEnterKeyDown() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      buttonRef.current?.click();
    }
  };

  return { buttonRef, handleKeyDown };
}
