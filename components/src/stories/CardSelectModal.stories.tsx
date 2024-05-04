import { Modal } from "../lib";
import { CardCompanyType, CardCompanies } from "../data/CardCompany.ts";
import styled from "styled-components";
import DeleteIcon from "../assets/deleteIcon.svg?react";
import { StoryObj } from "@storybook/react";

export default { title: "Components/Modal", component: Modal };

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 10px;
`;

const OneCardCompanyBox = styled.div`
  width: 80px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CardCompany = ({ company }: { company: CardCompanyType }) => {
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
      {CardCompanies.map((company: CardCompanyType) => (
        <CardCompany key={company.id} company={company} />
      ))}
    </Grid>
  );
};

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

export const CardSelectModalExample: Story = {
  render: () => <CardSelectModal />,
};
