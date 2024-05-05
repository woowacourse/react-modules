import React from 'react';
import { CARD_COMPANIES } from '../constants/cards';

import styled from 'styled-components';

function CardCompanySelector() {
  return (
    <CardCompanyContainer>
      {CARD_COMPANIES.map((company) => (
        <CardCompanyBox key={company.name}>
          <CardCompanyImg src={company.img} alt={company.name} />
          <CardCompanyName>{company.name}</CardCompanyName>
        </CardCompanyBox>
      ))}
    </CardCompanyContainer>
  );
}

export default CardCompanySelector;

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

const CardCompanyName = styled.div`
  font-size: 1.2rem;
`;
