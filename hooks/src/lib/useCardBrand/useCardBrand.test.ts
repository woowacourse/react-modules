import { act, renderHook } from '@testing-library/react';
import useCardBrand from './useCardBrand';

import { DEFAULT_PARAMS } from './useCardBrand';

describe('useCardBrand 테스트', () => {
  const ALLOWED_BRANDS = ['신한카드', 'KB카드', '카카오뱅크', '현대카드'];

  it('초기값과 카드사 목록이 함께 설정되면, brand 상태에 초기값으로 입력한 카드사 이름이 저장되어야 한다.', () => {
    const initialValue = '신한카드';
    const { result } = renderHook(() => useCardBrand(ALLOWED_BRANDS, initialValue));

    expect(result.current.brand).toBe(initialValue);
    expect(result.current.validationResult.isValid).toBe(true);
  });

  it('훅 초기화시 입력한 카드사 목록의 길이가 1 미만이라면 에러를 반환해야 한다.', () => {
    const initialValue = '국민카드';

    expect(() => {
      renderHook(() => useCardBrand([], initialValue));
    }).toThrow(DEFAULT_PARAMS.errorMessages.emptyAllowedBrands);
  });

  it('초기값으로 입력한 카드사 이름이 함께 입력된 카드사 목록에 존재하지 않거나 공백("")이 아니라면 에러를 반환해야 한다.', () => {
    const initialValue = '국민카드';

    expect(() => {
      renderHook(() => useCardBrand(ALLOWED_BRANDS, initialValue));
    }).toThrow(DEFAULT_PARAMS.errorMessages.initialValueNotExistsInAllowedBrands);
  });

  it('brand의 상태값이 기존의 카드사 목록에 존재하는 카드사 이름으로 업데이트되면, validationResult의 isValid가 true로 반환되어야 한다.', () => {
    const initialValue = '신한카드';
    const newValue = '현대카드';
    const { result } = renderHook(() => useCardBrand(ALLOWED_BRANDS, initialValue));

    act(() => {
      result.current.handleUpdateBrand(newValue);
    });

    expect(result.current.brand).toBe(newValue);
    expect(result.current.validationResult.isValid).toBe(true);
  });

  it('brand의 상태값이 기존의 카드사 목록에 존재하지 않는 카드사 이름으로 업데이트되면, validationResult의 isValid가 false로 반환되며 반환값에 에러 메시지가 함께 포함되어야 한다.', () => {
    const initialValue = '신한카드';
    const newValue = '마스터카드';
    const { result } = renderHook(() => useCardBrand(ALLOWED_BRANDS, initialValue));

    act(() => {
      result.current.handleUpdateBrand(newValue);
    });

    expect(result.current.brand).toBe(newValue);
    expect(result.current.validationResult.isValid).toBe(false);
    expect(result.current.validationResult.errorMessage).toBe(
      DEFAULT_PARAMS.errorMessages.invalidBrand,
    );
  });
});
