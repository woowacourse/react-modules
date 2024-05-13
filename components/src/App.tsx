import Button from './lib/Button/Button';

import { CustomModal, AlertModal, ConfirmModal, PromptModal } from './lib/index'
import React, { useState } from 'react';

const App = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const [alertModalOpened, setAlertModalOpened] = useState(false)
  const [confirmModalOpened, setConfirmModalOpened] = useState(false)
  const [promptModalOpened, setPromptModalOpened] = useState(false)

  const handleModalOpen = () => {
    setModalOpened(true)
  }

  const handleModalClose = () => {
    setModalOpened(false)
  }

  const handleAlertModalOpen = () => {
    setAlertModalOpened(true)
  }

  const handleAlertModalClose = () => {
    setAlertModalOpened(false)
  }

  const handleConfirmModalOpen = () => {
    setConfirmModalOpened(true)
  }

  const handleConfirmModalClose = () => {
    setConfirmModalOpened(false)
  }

  const handlePromptModalOpen = () => {
    setPromptModalOpened(true)
  }

  const handlePromptModalClose = () => {
    setPromptModalOpened(false)
  }


  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Button
          text="open modal"
          onClick={handleModalOpen}
          size="large"
          width="full"
          buttonStyle="primary"
          primaryColor="#1C77C1"
        />
        <Button
          text="open alert modal"
          onClick={handleAlertModalOpen}
          size="large"
          width="full"
          buttonStyle="primary"
          primaryColor="#1C77C1"
        />
        <Button
          text="open confirm modal"
          onClick={handleConfirmModalOpen}
          size="large"
          width="full"
          buttonStyle="primary"
          primaryColor="#1C77C1"
        />
        <Button
          text="open prompt modal"
          onClick={handlePromptModalOpen}
          size="large"
          width="full"
          buttonStyle="primary"
          primaryColor="#1C77C1"
        />
      </div>

      <CustomModal
        isOpened={modalOpened}
        onClose={handleModalClose}
        title="Todal Modal"
        description="This is for woowacourse mission"
        modalPosition="bottom"
        primaryButton={{
          text: 'DO SOMETHING!',
          onClick: () => { },
          size: 'medium',
          width: 'full',
        }}
        secondaryButton={{
          text: 'Cancel',
          onClick: handleModalClose,
          size: 'medium',
          width: 'fit',
        }}
        buttonPosition="row"
        showCloseButton={false}
      >
        <div
          style={{
            backgroundColor: '#dddddd',
            padding: '8px',
            height: '50vh',
          }}
        >
          Children Area
        </div>
      </CustomModal>

      <AlertModal
        isOpened={alertModalOpened}
        onClose={handleAlertModalClose}
        title="Todal Modal"
        description="This is for woowacourse mission"
        showCloseButton={false}
      />

      <ConfirmModal
        isOpened={confirmModalOpened}
        onClose={handleConfirmModalClose}
        onConfirm={() => alert('confirmed!')}
        title="Todal Modal"
        description="This is for woowacourse mission"
        showCloseButton={false}
      />

      <PromptModal
        isOpened={promptModalOpened}
        onClose={handlePromptModalClose}
        onConfirm={(value) => alert(`your email is '${value}'`)}
        title="Email"
        description="write your email"
        showCloseButton={false}

        validateOnChange={(value) => {
          if (/^[a-zA-Z0-9@.]+$/.test(value)) {

            return { isValid: true, errorMessage: '' }
          }

          return { isValid: false, errorMessage: 'invalid input' }
        }}

        validateOnBlur={(value) => {
          if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {

            return { isValid: true, errorMessage: '' }
          }

          return { isValid: false, errorMessage: 'invalid email' }
        }}
      />
    </>
  );
}

export default App;
