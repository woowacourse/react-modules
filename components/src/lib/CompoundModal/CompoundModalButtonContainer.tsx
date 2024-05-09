import { ButtonContainerAlign } from '../types/type';
import CompoundModalButton from './CompoundModalButton';
import styled from '@emotion/styled';

interface props {
  children:
    | React.ReactElement<typeof CompoundModalButton>
    | React.ReactElement<typeof CompoundModalButton>[];
  align?: ButtonContainerAlign;
}

export default function CompoundModalButtonContainer({
  children,
  align = 'center',
}: props) {
  return <ButtonContainer align={align}>{children}</ButtonContainer>;
}

interface ButtonContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  align: ButtonContainerAlign;
}

const containerStyle = {
  left: {
    width: '100%',
    display: 'flex',
    gap: '10px',
    '&>button': {
      width: '80px',
    },
  },
  center: {
    width: '100%',
    display: 'flex',
    gap: '10px',
  },
  right: {
    width: '100%',
    display: 'flex',
    gap: '10px',
    justifyContent: 'flex-end',
    '&>button': {
      width: '80px',
    },
  },
};

const ButtonContainer = styled.div<ButtonContainerProps>(({ align }) => {
  return containerStyle[align];
});
