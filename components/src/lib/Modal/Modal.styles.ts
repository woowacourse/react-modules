import {css} from '@emotion/react';
import styled from '@emotion/styled';

type ModalStyledProps = {
  $position: 'center' | 'bottom';
  $backgroundColor?: string;
  $size?: 'small' | 'medium' | 'large';
};

type TitleStyledProps = {
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
  Pick<ModalStyledProps, '$position' | '$backgroundColor' | '$size'>
>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: ${({$backgroundColor}) => $backgroundColor ?? '#fff'};
  color: #000;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  ${({$size}) =>
    $size === 'small' &&
    css`
      width: 380px;
      max-width: 380px;
    `}
  ${({$size}) =>
    $size === 'medium' &&
    css`
      width: 480px;
      max-width: 480px;
    `}
  ${({$size}) =>
    $size === 'large' &&
    css`
      width: 600px;
      max-width: 600px;
    `}

  ${({$position}) =>
    $position === 'bottom' &&
    css`
      width: 100%;
      border-radius: 10px 10px 0 0;
    `}
`;

export const TopWrapper = styled.div<Pick<TitleStyledProps, '$titleText'>>`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: ${({$titleText}) => ($titleText ? 'space-between' : 'end')};
`;

export const Title = styled.h1<Pick<TitleStyledProps, '$color' | '$size'>>`
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
