import './App.css';

import { Button, Modal } from 'hain-tain-components';
import React, { useState } from 'react';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleClose = () => {
    setIsOpened(false);
  };

  return (
    <>
      <Button
        text="모달 열기"
        onClick={() => {
          setIsOpened(true);
        }}
      />
      <Modal
        isOpened={isOpened}
        closeModal={handleClose}
        title="안녕하세요, 하루 💙"
        description="여기는 description 이에요."
        children={
          <>
            <div style={{ backgroundColor: '#f3e3da', height: '100px' }}>
              여기는 children 이에요.
            </div>
          </>
        }
        buttonPosition="column"
        primaryColor="#F66F00"
        primaryButton={{
          text: '확인',
          onClick: () => {
            alert('확인');
          },
        }}
        secondaryButton={{ text: '닫기', onClick: handleClose }}
      />
    </>
  );
}

export default App;
