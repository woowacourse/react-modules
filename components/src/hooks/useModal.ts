import { useMemo, useRef } from "react";

const useModalHook = () => {
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

  return { ref: dialogRef, action };
};

export default useModalHook;
