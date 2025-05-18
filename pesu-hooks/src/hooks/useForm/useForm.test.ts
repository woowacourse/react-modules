import { renderHook, act } from '@testing-library/react';
import useForm from './useForm';

function mockInputEvent(value: string) {
  return {
    target: { value },
    preventDefault: () => {},
    stopPropagation: () => {},
  } as unknown as React.ChangeEvent<HTMLInputElement>;
}

describe('useForm', () => {
  const defaultValues = { name: '', email: '' };
  const validation = {
    name: { required: true, errorMessage: '이름을 입력하세요.' },
    email: { required: true, errorMessage: '이메일을 입력하세요.' },
  };
  const inputRegex = {
    name: /^[a-zA-Z가-힣]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  };

  it('초기값과 에러값이 올바르게 설정된다', () => {
    const { result } = renderHook(() => useForm({ defaultValues }));
    expect(result.current.value).toEqual(defaultValues);
    expect(result.current.errors).toEqual(defaultValues);
    expect(result.current.isValid).toBe(true);
    expect(result.current.isDirty).toBe(false);
    expect(result.current.isAllDirty).toBe(false);
  });

  it('register로 값이 변경되면 value가 변경된다', () => {
    const { result } = renderHook(() => useForm({ defaultValues }));
    const { register } = result.current;
    act(() => {
      register('name').onChange(mockInputEvent('홍길동'));
    });
    expect(result.current.value.name).toBe('홍길동');
    expect(result.current.isDirty).toBe(true);
  });

  it('inputRegex에 맞지 않는 값은 반영되지 않는다', () => {
    const { result } = renderHook(() => useForm({ defaultValues, inputRegex }));
    const { register } = result.current;
    act(() => {
      register('name').onChange(mockInputEvent('1234'));
    });
    expect(result.current.value.name).toBe('');
  });

  it('validation에 맞지 않는 값은 errors에 메시지가 들어간다', () => {
    const { result } = renderHook(() => useForm({ defaultValues, validation }));
    const { register } = result.current;
    act(() => {
      register('name').onChange(mockInputEvent(''));
    });
    expect(result.current.errors.name).toBe('이름을 입력하세요.');
    expect(result.current.isValid).toBe(false);
  });

  it('모든 값이 변경되면 isAllDirty가 true가 된다', () => {
    const { result } = renderHook(() => useForm({ defaultValues }));
    const { register } = result.current;
    act(() => {
      register('name').onChange(mockInputEvent('홍길동'));
      register('email').onChange(mockInputEvent('test@example.com'));
    });
    expect(result.current.isAllDirty).toBe(true);
  });

  it('onChange 옵션이 정상적으로 동작한다', () => {
    const { result } = renderHook(() => useForm({ defaultValues }));
    const { register } = result.current;
    let called = false;
    act(() => {
      register('name', {
        onChange: () => {
          called = true;
        },
      }).onChange(mockInputEvent('홍길동'));
    });
    expect(called).toBe(true);
  });
});
