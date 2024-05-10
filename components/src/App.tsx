import React from 'react';
import { AlertModal } from '@jinyyy/simple-modal';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div style={{ margin: 'auto', width: '536px' }}>
      <AlertModal
        device="mobile"
        size="small"
        position="center"
        isOpen={isOpen}
        title="아이디를 입력해주세요."
        contentLabel="아이디는 필수로 입력해야 합니다."
        onToggle={handleToggle}
      />
      <button onClick={handleToggle}>모달 클릭!</button>
    </div>
  );
}

export default App;
