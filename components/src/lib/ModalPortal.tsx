import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

type ModalPortalPropsType = {
  id?: string;
};

export default function ModalPortal(
  props: PropsWithChildren<ModalPortalPropsType>
) {
  const { id, children } = props;

  const portalElement = document.getElementById(id as string);

  if (!portalElement) {
    console.error("DOM 요소를 찾지 못했어요!");
    return null;
  }

  return <>{createPortal(children, portalElement)}</>;
}
