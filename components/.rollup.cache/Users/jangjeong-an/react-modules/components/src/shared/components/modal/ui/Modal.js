import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { createPortal } from 'react-dom';
import { useId } from 'react';
import { bottom, center, CloseButton, ModalHeader, ModalLayout, } from '../css/Modal.css';
import useEscapeModal from '../../../../hooks/useEscapeModal';
import { closeButton } from '../../../../assets';
function Modal(props) {
    const { children, closeModal, position = 'center', maxWidth = 500, title, isVisibleCloseButton = true, ...rest } = props;
    const id = useId();
    const { handleClickOverlay } = useEscapeModal(closeModal);
    return (_jsx("section", { children: createPortal(_jsx("div", { css: ModalLayout, id: id, onClick: (e) => handleClickOverlay(e, id), children: _jsxs("div", { css: position === 'center' ? center(maxWidth) : bottom(maxWidth), ...rest, children: [_jsxs("div", { css: ModalHeader, children: [title && _jsx("h2", { children: title }), isVisibleCloseButton && (_jsx("button", { onClick: closeModal, css: CloseButton, children: _jsx("img", { src: closeButton, alt: "close" }) }))] }), children] }) }), document.body) }));
}
export default Modal;
//# sourceMappingURL=Modal.js.map