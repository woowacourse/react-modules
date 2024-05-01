import React from 'react';
import styled from 'styled-components';
import { CARD_COMPANIES } from '../constants/cards';

const CardCompanyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.2rem;
  grid-row-gap: 1.6rem;
  color: #0a0d13;
`;

const CardCompanyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

const CardCompanyImg = styled.img`
  width: 3.2rem;
  height: 3.2rem;
`;

function CardCompanySelector() {
  return (
    <CardCompanyContainer>
      {CARD_COMPANIES.map((company) => (
        <CardCompanyBox key={company.name}>
          <CardCompanyImg src={company.img} alt={company.name} />
          <div>{company.name}</div>
        </CardCompanyBox>
      ))}
    </CardCompanyContainer>
  );
}

export default CardCompanySelector;
