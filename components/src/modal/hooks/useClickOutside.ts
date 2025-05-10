import { useEffect, useRef } from 'react';

/**
 * 특정 요소 바깥을 클릭했을 때 콜백 함수를 실행하는 훅입니다.
 *
 * @template T - 참조할 요소(Element)의 타입입니다. 기본값은 HTMLElement입니다.
 * @param callback - 요소 외부를 클릭했을 때 호출할 함수입니다.
 * @param enabled - 외부 클릭 감지 기능을 활성화할지 여부입니다.
 *                  false이면 이벤트 리스너를 등록하지 않습니다. (기본값: true)
 * @returns 대상 요소에 연결할 ref 객체를 반환합니다.
 */
function useClickOutside<T extends HTMLElement = HTMLElement>(
  callback: (event: Event) => void,
  enabled: boolean = true
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled) return;

    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener('click', listener, true);
    return () => {
      document.removeEventListener('click', listener, true);
    };
  }, [enabled, callback]);

  return ref;
}

export default useClickOutside;
