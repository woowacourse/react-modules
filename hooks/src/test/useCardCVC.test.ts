import { ChangeEvent } from 'react';
import { renderHook, act } from '@testing-library/react';
import useCardCVC from '../lib/useCardCVC';

describe('useCardNumbers 커스텀 훅 테스트', () => {
  const cardCVCLength = 3;

  it('입력된 CVC가 숫자가 아닌 경우 숫자만 입력 가능합니다.라는 메세지를 보여준다.', () => {
    const { result } = renderHook(() => useCardCVC(cardCVCLength));

    act(() => {
      result.current.handleCardCVC({
        target: { value: '12A' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVCInfo.errorMessage).toBe(
      '숫자만 입력 가능합니다.',
    );
  });

  it('입력된 CVC 길이가 사용자 설정값을 초과한 경우 ~자리를 입력해주세요.라는 메세지를 보여준다.', () => {
    const { result } = renderHook(() => useCardCVC(cardCVCLength));

    act(() => {
      result.current.handleCardCVC({
        target: { value: '1234' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVCInfo.errorMessage).toBe(
      `${cardCVCLength}자리를 입력해주세요.`,
    );
  });

  it('입력된 CVC 길이가 사용자 설정값 미만인 경우 3자리를 입력해주세요.라는 메세지를 보여준다.', () => {
    const { result } = renderHook(() => useCardCVC(cardCVCLength));

    act(() => {
      result.current.handleCardCVC({
        target: { value: '12' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVCInfo.errorMessage).toBe(
      `${cardCVCLength}자리를 입력해주세요.`,
    );
  });

  it('CVC 입력에 따라 CVC 상태가 올바르게 업데이트되는지 확인한다.', () => {
    const { result } = renderHook(() => useCardCVC(cardCVCLength));
    const inputValue = '123';

    act(() => {
      result.current.handleCardCVC({
        target: { value: inputValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.cardCVCInfo.cardCVC).toBe(inputValue);
  });
});
