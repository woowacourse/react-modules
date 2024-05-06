import { renderHook, act } from '@testing-library/react';
import { ChangeEvent } from 'react';
import useCardPassword from '../lib/useCardPassword';

describe('useCardPassword 커스텀 훅 테스트', () => {
  const passwordLength = 2;
  it('카드 비밀번호 입력 시 상태가 올바르게 업데이트되는지 확인한다.', () => {
    const password = '12';
    const { result } = renderHook(() => useCardPassword(passwordLength));

    act(() => {
      result.current.handleCardPassword({
        target: { value: password },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassWordInfo.password).toBe(password);
  });

  it('비밀번호 입력에 숫자 아닌 문자를 입력한 경우 숫자만 입력 가능합니다.라는 메세지를 보여준다.', () => {
    const passwordOverLength = 'ㄹf';
    const { result } = renderHook(() => useCardPassword(passwordLength));

    act(() => {
      result.current.handleCardPassword({
        target: { value: passwordOverLength },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassWordInfo.errorMessage).toBe(
      '숫자만 입력 가능합니다.',
    );
  });

  it('비밀번호를 설정한 길이만큼 입력하지 않은 경우 숫자 ~개를 입력해주세요.라는 메세지를 보여준다.', () => {
    const passwordLength = 2;
    const passwordOverLength = '123';
    const { result } = renderHook(() => useCardPassword(passwordLength));

    act(() => {
      result.current.handleCardPassword({
        target: { value: passwordOverLength },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardPassWordInfo.errorMessage).toBe(
      `${passwordLength}자리를 입력해주세요.`,
    );
  });
});
