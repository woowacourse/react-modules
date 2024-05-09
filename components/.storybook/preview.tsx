import React, { useState } from "react";
import type { Preview } from "@storybook/react";
import Modal from "../src/lib/Modal";
import { CloseContent, Content } from "../src/App";
import "../src/App.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const [modalOpen, setModalOpen] = useState(false);

      const handleModalClose = () => {
        setModalOpen(false);
      };

      const handleModalOpen = () => {
        setModalOpen(true);
      };

      return (
        <>
          <Modal
            isOpen={modalOpen}
            onClose={handleModalClose}
            position={context.args.position || "center"}
            size={context.args.size || ""}
            mountAnimation="modal_enter"
            unMountAnimation="modal_exit"
            animationTime={300}
          >
            <Modal.Portal id="modal">
              <Modal.Backdrop opacity="rgb(97 97 97 / 30%)">
                <Modal.Container className="container">
                  <Content />
                  <Modal.CloseButton>
                    <CloseContent />
                  </Modal.CloseButton>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal.Portal>
          </Modal>

          <button onClick={handleModalOpen}>모달 열기</button>
          <Story />
        </>
      );
    },
  ],
};

export default preview;
