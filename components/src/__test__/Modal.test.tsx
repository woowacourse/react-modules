import { act } from 'react';

import { renderHook } from '@testing-library/react';

import { useModal } from '../lib';

describe('Modal 테스트', () => {
  test('모달이 열리고 닫히는지 테스트', () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.handleOpenModal();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.handleCloseModal();
    });
    expect(result.current.isOpen).toBe(false);
  });

  test('Esc 키를 눌렀을 때 모달이 닫히는지 테스트', () => {
    const { result } = renderHook(() => useModal());
    act(() => {
      result.current.handleOpenModal();
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    });
    expect(result.current.isOpen).toBe(false);
  });
});
