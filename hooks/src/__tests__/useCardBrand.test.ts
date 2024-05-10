import { renderHook } from '@testing-library/react';

import useCardBrand from './../lib/hooks/useCardBrand';

describe('useCardBrand', () => {
  describe('카드 브랜드 판단', () => {
    describe('비자카드', () => {
      it('앞의 숫자가 4로 시작하며 숫자가 16자리이면, 비자카드이다', () => {
        const { result } = renderHook(() => useCardBrand({ cardNumbers: [4123, 4567, 8901, 2345].join('') }));
        expect(result.current.brand).toBe('visa');
      });

      it('앞의 숫자가 4로 시작하지만 숫자가 16자리가 아니면, 비자카드가 아니다.', () => {
        const { result } = renderHook(() => useCardBrand({ cardNumbers: [4123, 4567, 8901, 234].join('') }));
        expect(result.current.brand !== 'visa').toBeTruthy();
      });
      it('16자리이지만 앞의 숫자가 4로 시작하지 않으면 비자카드가 아니다.', () => {
        const { result } = renderHook(() => useCardBrand({ cardNumbers: [8123, 4567, 8901, 2354].join('') }));
        expect(result.current.brand !== 'visa').toBeTruthy();
      });
    });
    describe('마스터 카드', () => {
      describe('앞의 숫자가 51~55로 시작하며 숫자가 16자리이면, 비자카드이다', () => {
        test.each([[5111, 1111, 1111, 1111].join(''), [5511, 5555, 5555, 5555].join('')])(
          '%s는 마스터 카드이다.',
          (cardNumbers) => {
            const { result } = renderHook(() => useCardBrand({ cardNumbers }));
            expect(result.current.brand).toBe('master');
          },
        );
      });

      it('앞의 숫자가 51~55로 시작하지만 숫자가 16자리가 아니면, 마스터 카드가 아니다.', () => {
        const { result } = renderHook(() => useCardBrand({ cardNumbers: [5123, 4567, 8901, 234].join('') }));
        expect(result.current.brand !== 'master').toBeTruthy();
      });
      it('16자리 이지만 앞의 숫자가 51~55로 시작하지않으면, 마스터 카드가 아니다.', () => {
        const { result } = renderHook(() => useCardBrand({ cardNumbers: [5623, 4567, 8901, 2354].join('') }));
        expect(result.current.brand !== 'master').toBeTruthy();
      });
    });
    describe('다이너스 카드', () => {
      it('앞의 숫자가 36로 시작하며 숫자가 14자리이면, 다이너스 카드이다', () => {
        const { result } = renderHook(() => useCardBrand({ cardNumbers: [3623, 4567, 8901, 23].join('') }));
        expect(result.current.brand).toBe('diners');
      });
      it('앞의 숫자가 36로 시작하지만 숫자가 14자리가 아니면, 다이너스 카드가 아니다.', () => {
        const { result } = renderHook(() => useCardBrand({ cardNumbers: [3623, 4567, 8901, 234].join('') }));
        expect(result.current.brand !== 'diners').toBeTruthy();
      });
      it('14자리 이지만 앞의 숫자가 36로 시작하지않으면, 다이너스 카드가 아니다.', () => {
        const { result } = renderHook(() => useCardBrand({ cardNumbers: [3723, 4567, 8901, 23].join('') }));
        expect(result.current.brand !== 'diners').toBeTruthy();
      });
    });
    describe('아멕스 카드', () => {
      describe('앞의 숫자가 34,35로 시작하며 숫자가 15자리이면, 아멕스 카드이다', () => {
        test.each([[3411, 1111, 1111, 111].join(''), [3411, 1111, 1111, 111].join('')])(
          '%s는 아멕스 카드이다.',
          (cardNumbers) => {
            const { result } = renderHook(() => useCardBrand({ cardNumbers }));
            expect(result.current.brand).toBe('amex');
          },
        );
      });
      describe('앞의 숫자가 34,35로 시작하지만 숫자가 15자리가 아니면, 아멕스 카드이다', () => {
        test.each([[3411, 1111, 1111, 11].join(''), [3411, 1111, 1111, 1111].join('')])(
          '%s는 아멕스 카드가 아니다..',
          (cardNumbers) => {
            const { result } = renderHook(() => useCardBrand({ cardNumbers }));
            expect(result.current.brand !== 'amex').toBeTruthy();
          },
        );
      });

      it('15자리 이지만 앞의 숫자가 34,35로 시작하지않으면, 아멕스 카드가 아니다.', () => {
        const { result } = renderHook(() => useCardBrand({ cardNumbers: [3723, 4567, 8901, 234].join('') }));
        expect(result.current.brand !== 'amex').toBeTruthy();
      });
    });
  });

  describe('만족하는 카드 브랜드가 없다면, null 값을 반환한다.', () => {
    test.each([[9123, 4567, 8901, 2345].join(''), ''])('%S에 대한 카드 브랜드를 찾을 수 없다.', (cardNumbers) => {
      const { result } = renderHook(() => useCardBrand({ cardNumbers }));
      expect(result.current.brand).toBe(null);
    });
  });
});
