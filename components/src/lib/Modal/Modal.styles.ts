import {css} from '@emotion/react';
import styled from '@emotion/styled';

type ModalStyledProps = {
  $position: 'center' | 'bottom' | undefined;
  $backgroundColor?: string;
  $titleText?: string;
  $color?: string;
  $size?: number;
};

export const Backdrop = styled.div<Pick<ModalStyledProps, '$position'>>`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: ${({$position}) => ($position === 'center' ? 'center' : 'end')};
  background-color: rgba(0, 0, 0, 0.3);
  inset: 0;
`;

export const ModalBox = styled.div<
  Pick<ModalStyledProps, '$position' | '$backgroundColor'>
>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  background-color: ${({$backgroundColor}) => $backgroundColor ?? '#fff'};
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  ${({$position}) =>
    $position === 'bottom' &&
    css`
      width: 100%;
      border-radius: 10px 10px 0 0;
    `}
`;

export const TopWrapper = styled.div<Pick<ModalStyledProps, '$titleText'>>`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: ${({$titleText}) => ($titleText ? 'space-between' : 'end')};
`;

export const Title = styled.h1<Pick<ModalStyledProps, '$color' | '$size'>>`
  margin: 0;
  color: ${({$color}) => $color ?? '#000'};
  font-size: ${({$size}) => ($size ? `${$size}px` : '24px')};
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;
