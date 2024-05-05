import './App.css';
import Button from './lib/Button/Button';

import Modal from './lib/Modal/Modal';
import React, { useState } from 'react';

const App = () => {
  const [modalOpened, setModalOpened] = useState(false)

  const handleModalOpen = () => {
    setModalOpened(true)
  }

  const handleModalClose = () => {
    setModalOpened(false)
  }
  return (
    <>
      <Button
        text="open modal"
        onClick={handleModalOpen}
        size='large'
        width='full'
        buttonStyle='primary'
        primaryColor='#1C77C1' />
      <Modal
        isOpened={modalOpened}
        onClose={handleModalClose}
        title='Todal Modal'
        description='This is for woowacourse mission'
        children={<div style={{ backgroundColor: '#dddddd', padding: '8px', height: '1000px' }}> Children Area </div>}
        modalPosition='bottom'
        primaryButton={{ text: 'DO SOMETHING!', onClick: () => { }, size: 'medium', width: 'full' }}
        secondaryButton={{ text: 'Cancel', onClick: handleModalClose, size: 'medium', width: 'fit', buttonStyle: 'text' }}
        buttonPosition='row'
        showCloseButton={true}
      />
    </>
  );
}

export default App;
