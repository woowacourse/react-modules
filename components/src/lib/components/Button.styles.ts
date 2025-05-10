import { css } from '@emotion/css';

export const ButtonStyle = (type: 'confirm' | 'cancel', width: string) => css`
  all: unset;
  background-color: ${type === 'confirm' ? '#333333' : 'white'};
  color: ${type === 'confirm' ? 'white' : '#8b95a1'};
  width: ${width};
  height: 44px;
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
