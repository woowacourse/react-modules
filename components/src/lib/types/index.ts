export interface ChildrenProps {
  /** 자식 요소 (JSX.Element 또는 문자열 등) */
  children: React.ReactNode;
}

export interface ModalProps extends ChildrenProps {
  /** 모달을 보여줄지 여부 */
  show: boolean;

  /** 모달을 닫는 함수 (배경 클릭이나 X 버튼 클릭 시 호출) */
  onHide: () => void;

  /** 배경 어두움 여부  */
  background?: boolean;

  /** 모달 위치 설정: 가운데(center), 상단(top), 하단(bottom) */
  position?: "center" | "top" | "bottom";

  /** 모달 내부의 flex 간격 설정 */
  gap?: number;
}

export interface ModalHeaderProps extends ChildrenProps {
  /** 닫기 버튼(X)을 표시할지 여부 */
  closeButton?: boolean;
}

export interface ModalTitleProps extends ChildrenProps {
  /** 텍스트 색상 설정 */
  color?: string;
}
