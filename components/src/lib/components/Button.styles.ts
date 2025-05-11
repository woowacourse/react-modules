import { css } from '@emotion/css';

export const ButtonStyle = (type: 'confirm' | 'cancel', width: string) => css`
  all: unset;
  background-color: ${type === 'confirm' ? '#333333' : 'white'};
  color: ${type === 'confirm' ? 'white' : '#333333BF'};
  width: ${width};
  height: 44px;
  border: ${type === 'cancel' && '1px solid #8b95a1'};
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    border: ${type === 'cancel' ? '1px solid #333333' : '1px solid #8b95a1'};
    outline: none;
  }

  &:hover {
    border: ${type === 'cancel' && '1px solid #333333'};
  }
`;
