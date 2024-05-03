import Modal from '@/lib/Modal/Modal';
import DeleteIcon from '@/assets/deleteIcon.svg?react';
import type { StoryObj } from '@storybook/react';
import { CARD_COMPANIES, CardCompany } from '@/data/CardCompany';
import styled from 'styled-components';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const DefaultModal = () => {
  return (
    <Modal isOpen={true} position="bottom" onClose={() => {}}>
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <Modal.ConfirmButton label="동의" onConfirm={() => {}} />
      <Modal.CloseButton label="닫기" onClose={() => {}} />
    </Modal>
  );
};

const NoCloseButtonModal = () => {
  return (
    <Modal isOpen={true} position="bottom" onClose={() => {}}>
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <Modal.ConfirmButton label="동의" onConfirm={() => {}} />
      <Modal.CloseButton label="닫기" onClose={() => {}} />
    </Modal>
  );
};

const CardCompanyBox = ({ company }: { company: CardCompany }) => {
  const { name, logo: Logo } = company;
  return (
    <OneCardCompanyBox>
      <Logo />
      <h3>{name}</h3>
    </OneCardCompanyBox>
  );
};

const CardCompaniesBox = () => {
  return (
    <Grid>
      {CARD_COMPANIES.map((company: CardCompany) => (
        <CardCompanyBox key={company.id} company={company} />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`;

const OneCardCompanyBox = styled.div`
  width: 80px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardSelectModal = () => {
  return (
    <Modal isOpen={true} position="center" onClose={() => {}}>
      <Modal.Title> 카드사 선택 </Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content>
        <CardCompaniesBox />
      </Modal.Content>
    </Modal>
  );
};

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => <DefaultModal />,
};

export const NoCloseButtonModalExample: Story = {
  render: () => <NoCloseButtonModal />,
};

export const CardSelectModalExample: Story = {
  render: () => <CardSelectModal />,
};
