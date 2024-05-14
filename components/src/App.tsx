import './App.css';

import React from 'react';
import UsageAlertModal from '../src/usage/UsageAlertModal';
import UsageConfirmModal from '../src/usage/UsageConfirmModal';
import UsageCustomModal from './usage/UsageCustomModal';
import UsageModal from '../src/usage/UsageModal';
import UsagePromptModal from '../src/usage/UsagePromptModal';
import styled from 'styled-components';

function App() {
  return (
    <StyledContainer>
      <UsageModal />
      <UsageAlertModal />
      <UsageConfirmModal />
      <UsagePromptModal />
      <UsageCustomModal />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default App;
