import { css } from '@emotion/css';

export const ButtonStyle = (buttonType: 'confirm' | 'cancel', width: string) => css`
  all: unset;
  background-color: ${buttonType === 'confirm' ? '#333333' : 'white'};
  color: ${buttonType === 'confirm' ? 'white' : '#333333BF'};
  width: ${width};
  height: 44px;
  border: ${buttonType === 'cancel' && '1px solid #8b95a1'};
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  &:focus {
    border: ${buttonType === 'cancel' ? '1px solid #333333' : '1px solid #8b95a1'};
    outline: none;
  }

  &:hover {
    border: ${buttonType === 'cancel' && '1px solid #333333'};
  }
`;
