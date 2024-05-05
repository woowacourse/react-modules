import styled from "styled-components";
import { ContainerPositionType } from "./Container";

const POSITION_STYLES = {
  top: `
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);

    width: 100%;
    
    border-radius: 0px 0px 10px 10px;
    `,
  center: `
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    width: 80%;
    
    border-radius: 8px;
    `,
  bottom: `
    top: 100%;
    left: 50%;
    transform: translate(-50%,-100%);

    width: 100%;
  
    border-radius: 10px 10px 0px 0px;
    `,
};

export const Container = styled.div<{ $position: ContainerPositionType }>`
  position: fixed;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${(props) => props.theme.color.white};
  ${({ $position }) => POSITION_STYLES[$position]};
`;
