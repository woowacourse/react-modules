import { useEffect, useRef } from "react";
import { domainToUnicode } from "url";

//LEARN: 컴포넌트 생명주기에 대해서 공부(마운트)
const useFocusTrap = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousActiveElement = document.activeElement;

    //포커스 가능한 요소를 찾기
    function getFocusableElements() {
      if (!ref.current) return [];

      //포커스 가능한 CSS 선택자들
      const focusableSelectors = [
        'a[href]:not([tabindex="-1"])',
        'button:not([disabled]):not([tabindex="-1"])',
        'textarea:not([disabled]):not([tabindex="-1"])',
        'input:not([disabled]):not([tabindex="-1"])',
        'select:not([disabled]):not([tabindex="-1"])',
        '[tabindex]:not([tabindex="-1"])',
      ];

      //위에 맞는 모든 요소
      const elements = ref.current.querySelectorAll<HTMLElement>(
        focusableSelectors.join(",") //이렇게 하면 한번에 받아올수있다.
      );

      return Array.from(elements);
    }

    const setInitialFocus = () => {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
        console.log("포커스 설정됨:", focusableElements[0]); // 디버깅용
      } else {
        console.log("포커스 가능한 요소 없음"); // 디버깅용
      }
    };

    // 약간의 지연 후 초기 포커스 설정 (DOM이 완전히 렌더링된 후)
    const timeoutId = setTimeout(() => {
      setInitialFocus();
    }, 50);

    const focusableElements = getFocusableElements();
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (firstElement) firstElement.focus(); //모달이 열리자 마자 첫번째에 포커스

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key != "Tab") return;
      if (!ref.current) return;

      //포커스 가능한 요소를 다시 가져오고
      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault(); //브라우저의 기본 포커스 이동 취소(돌아오기 로직이 없응께)
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);

    //clean-up 함수, useEffect가 실행된뒤에 나중에 호출되는 부분임
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("keydown", handleTabKey);
      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus();
      }
    };
  }, []);
  return ref;
};

export default useFocusTrap;
