import React, { ChangeEvent } from 'react';
import { useState } from 'react';
import { PromptModal } from '@jaymyong66/simple-modal';
import './App.css';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const handleSubmit = (value: string) => console.log(value);
  return (
    <div className="app">
      <div>
        <button onClick={handleToggle}>Open</button>
      </div>
      <PromptModal
        position="center"
        size="medium"
        isOpen={isOpen}
        onToggle={handleToggle}
        title="쿠폰 번호를 입력해 주세요."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        confirmButtonLabel="확인버튼"
        cancelButtonLabel="취소버튼"
      />
    </div>
  );
}
export default App;
