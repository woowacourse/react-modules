import { CARD_COMPANIES, CardCompany } from '@/data/CardCompany';
import styled from 'styled-components';
import Theme from '@/style/theme';
import DeleteIcon from '@/assets/deleteIcon.svg?react';
import Modal from '@/lib/Modal/Modal.tsx';

// CloseIconModal
export const CloseIconModal = () => {
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

// NoCloseIconModal
export const NoCloseIconModal = () => {
  return (
    <Modal isOpen={true} position="bottom" onClose={() => {}}>
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <Modal.ConfirmButton label="동의" onConfirm={() => {}} />
      <Modal.CloseButton label="닫기" onClose={() => {}} />
    </Modal>
  );
};

// CardSelectModal
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
  width: 100px;
  font-size: ${Theme.font.size.small};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardSelectModal = () => {
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

// PromptInputModal
const RightBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
`;

export const PromptInputModal = () => {
  return (
    <Modal isOpen={true} position="center" onClose={() => {}}>
      <Modal.Title> 쿠폰 번호를 등록해주세요. </Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>

      <Modal.PromptInput value="" placeholder="ADFHBEDXD" onChange={() => {}} />

      <RightBox>
        <Modal.CloseButton label="닫기" size="small" onClose={() => {}} />
        <Modal.ConfirmButton label="동의" size="small" onConfirm={() => {}} />
      </RightBox>
    </Modal>
  );
};

// Size

const Content = () => {
  return (
    <>
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.CloseButton label="닫기" size="large" onClose={() => {}} />
    </>
  );
};

export const SmallModal = () => {
  return (
    <Modal isOpen={true} position="center" size="small" onClose={() => {}}>
      <Content />
    </Modal>
  );
};

export const MediumModal = () => {
  return (
    <Modal isOpen={true} position="center" size="medium" onClose={() => {}}>
      <Content />
    </Modal>
  );
};

export const LargeModal = () => {
  return (
    <Modal isOpen={true} position="center" size="large" onClose={() => {}}>
      <Content />
    </Modal>
  );
};
