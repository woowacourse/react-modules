declare module "bunju-summit-modal" {
  import { PropsWithChildren } from "react";

  export type ModalPositionType = "center" | "bottom";

  interface ModalProps {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    position?: ModalPositionType;
  }

  export function Modal(
    props: PropsWithChildren<ModalProps>
  ): JSX.Element | null;
}
