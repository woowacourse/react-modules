import { useEffect, useState } from 'react';
import './App.css';
// import { useCardCVC, useCardNumber } from '@kimyouk/payments-validation';
// import { useCardNumber } from './lib';
import useExpirationPeriod from './lib/hooks/useExpirationPeriod';

function App() {
  const { value, isError, onChange, errorMessage } = useExpirationPeriod();

  const [num, setNum] = useState(0);

  useEffect(() => {
    const handler = () => {
      // 이 handler는 최초 렌더 시점의 `num`만 캡처 → 항상 0을 로그
      console.log('Current num:', num);
    };
    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  }, []); // ⚠️ 빈 deps → handler가 재생성되지 않음
  return (
    <div>
      <button onClick={() => setNum((n) => n + 1)}>{num}</button>;
      <label>유효기간 (MM / YY)</label>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <input
          type="text"
          value={value.month}
          maxLength={2}
          style={{
            width: '3em',
            border: `1px solid ${isError.month ? 'red' : 'black'}`,
            padding: '4px',
          }}
          onChange={(e) => onChange(e, 'month')}
          placeholder="MM"
        />
        <span>/</span>
        <input
          type="text"
          value={value.year}
          maxLength={2}
          style={{
            width: '3em',
            border: `1px solid ${isError.year ? 'red' : 'black'}`,
            padding: '4px',
          }}
          onChange={(e) => onChange(e, 'year')}
          placeholder="YY"
        />
      </div>
      {errorMessage && (
        <span style={{ color: 'red', marginTop: '4px', display: 'block' }}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default App;
