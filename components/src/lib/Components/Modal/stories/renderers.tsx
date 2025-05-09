import { useState } from "react";
import Modal from "..";
import type {
  AlertDialogProps,
  ConfirmDialogProps,
  PromptDialogProps,
} from "../parts/DialogPresets";

export const renderAlertModal = (args: AlertDialogProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button id="trigger-button" onClick={() => setIsOpen((p) => !p)}>
        모달창 trigger
      </button>
      <Modal.Alert
        {...args}
        isOpen={isOpen}
        onClose={() => {
          args.onClose();
          setIsOpen(false);
        }}
        onConfirm={() => {
          args.onConfirm();
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const renderConfirmModal = (args: ConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button id="trigger-button" onClick={() => setIsOpen((p) => !p)}>
        모달창 trigger
      </button>
      <Modal.Confirm
        {...args}
        isOpen={isOpen}
        onClose={() => {
          args.onClose();
          setIsOpen(false);
        }}
        onConfirm={() => {
          args.onConfirm();
          setIsOpen(false);
        }}
        onCancel={() => {
          args.onCancel();
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const renderPromptModal = (args: PromptDialogProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button id="trigger-button" onClick={() => setIsOpen((p) => !p)}>
        모달창 trigger
      </button>
      <Modal.Prompt
        {...args}
        isOpen={isOpen}
        onClose={() => {
          args.onClose();
          setIsOpen(false);
        }}
        onConfirm={(value) => {
          args.onConfirm(value);
          setIsOpen(false);
        }}
        onCancel={() => {
          args.onCancel();
          setIsOpen(false);
        }}
      />
    </>
  );
};
