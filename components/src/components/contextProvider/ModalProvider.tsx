import { PropsWithChildren, createContext, useMemo, useRef } from "react";

export const ModalContext = createContext<{
  dialogRef: React.MutableRefObject<HTMLDialogElement | null>;
  action: ModalActionType;
} | null>(null);

const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const action: ModalActionType = useMemo(
    () => ({
      handleClose: () => {
        if (dialogRef) dialogRef.current?.close();
      },
      handleOpen: () => {
        if (dialogRef) dialogRef.current?.showModal();
      },
    }),
    [dialogRef]
  );

  return <ModalContext.Provider value={{ dialogRef, action }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
