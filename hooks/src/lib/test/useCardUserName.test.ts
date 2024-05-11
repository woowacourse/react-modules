import { renderHook, act } from '@testing-library/react';
import { ChangeEvent } from 'react';
import useCardUserName from '../useCardUserName';

describe('useCardUserName 커스텀 훅 테스트', () => {
  const cardUserNameLength = 21;

  it('카드 고객 이름 입력 시 상태가 올바르게 업데이트되는지 확인한다.', () => {
    const cardUserName = 'SUNDAY';
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.handleCardUserName({
        target: { value: cardUserName },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.cardUserName).toBe(cardUserName);
  });

  it('카드 고객 이름에 영어가 아닌 문자가 입력된 경우 영어만 입력 가능합니다.라는 메세지를 보여준다.', () => {
    const cardUserName = 'ㄹ123';
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.handleCardUserName({
        target: { value: cardUserName },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.errorMessage).toBe(
      '영어만 입력 가능합니다.',
    );
  });

  it('카드 고객 이름 제한 길이를 초과한 이름인 경우 이름은 ~자까지 입력 가능합니다.라는 메세지를 보여준다.', () => {
    const cardUserNameOverTenLength: string = 'TOOLONGNAMETOOLONGNAME';
    const { result } = renderHook(() => useCardUserName(cardUserNameLength));

    act(() => {
      result.current.handleCardUserName({
        target: { value: cardUserNameOverTenLength },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardUserNameInfo.errorMessage).toBe(
      `${cardUserNameLength}자까지 입력 가능합니다.`,
    );
  });
});
