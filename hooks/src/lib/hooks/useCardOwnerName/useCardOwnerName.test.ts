import { renderHook } from '@testing-library/react';
import { act } from 'react';
import useCardOwnerName, { OWNER_NAME_ERROR_MESSAGES } from './useCardOwnerName';

describe('useCardOwnerName 커스텀 훅 테스트', () => {
  const setup = (initialName?: string) => {
    const { result } = renderHook(() => useCardOwnerName({ initialName }));
    return result;
  };

  const setOwnerName = (result: any, name: string) => {
    act(() => result.current.handleOwnerNameChange(name));
  };

  it('초기값을 전달해주면 해당 값으로 초기값을 세팅한다.', () => {
    const name = 'SALLY';

    const result = setup(name);

    expect(result.current.ownerName).toBe(name);
  });

  it('영어로 구성된 사용자 명을 입력하면 유효하다', () => {
    const result = setup();
    setOwnerName(result, 'PARK PARK');
    expect(result.current.isValidOwnerName).toBe(true);
  });
  describe('올바르지 않은 이름을 입력한 경우', () => {
    it('영어 외 다른 문자를 입력하면 유효하지 않다.', () => {
      const result = setup();
      setOwnerName(result, 'PARK 빡');
      expect(result.current.isValidOwnerName).toBe(false);
    });

    it('영어 외 다른 문자를 입력하면 에러 메세지를 표시한다.', () => {
      const result = setup();
      setOwnerName(result, 'PARK 빡');
      expect(result.current.ownerNameErrorMessage).toBe(OWNER_NAME_ERROR_MESSAGES.NOT_ENG);
    });

    it('공백을 연속으로 입력하면 유효하지 않다.', () => {
      const result = setup();
      setOwnerName(result, 'PA   ');
      expect(result.current.isValidOwnerName).toBe(false);
    });

    it('공백을 연속으로 입력하면 에러 메세지를 표시한다.', () => {
      const result = setup();
      setOwnerName(result, 'PA   ');
      expect(result.current.ownerNameErrorMessage).toBe(OWNER_NAME_ERROR_MESSAGES.EXCESSIVE_WHITE_SPACE);
    });
  });
});
