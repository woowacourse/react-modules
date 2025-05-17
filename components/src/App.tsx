import { useState } from 'react';
import AlertModal from './lib/component/AlertModal/AlertModal';
import ConfirmModal from './lib/component/ConfirmModal/ConfirmModal';
import PromptModal from './lib/component/PromptModal/PromptModal';

function App() {
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [isConfirmOpen, setConfirmOpen] = useState(false);
  const [isPromptOpen, setPromptOpen] = useState(false);

  return (
    <div style={{ padding: '40px', display: 'flex', gap: '16px' }}>
      <button onClick={() => setAlertOpen(true)}>모달 1 열기</button>
      <AlertModal size="large" isOpen={isAlertOpen} onClose={() => setAlertOpen(false)} content={<p>아이디는 필수로 입력해야 합니다.</p>} />

      <button onClick={() => setConfirmOpen(true)}>모달 2 열기</button>
      <ConfirmModal
        size="medium"
        isOpen={isConfirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="카드를 삭제하시겠습니까?"
        content={<p>삭제하면 복구하실 수 없습니다.</p>}
        onConfirm={() => alert('확인!')}
      />

      <button onClick={() => setPromptOpen(true)}>모달 3 열기</button>
      <PromptModal
        isOpen={isPromptOpen}
        onClose={() => setPromptOpen(false)}
        title="쿠폰 번호를 입력해 주세요"
        placeholder="GCEXX46Z"
        onConfirm={() => alert('확인!')}
      />
    </div>
  );
}

export default App;
