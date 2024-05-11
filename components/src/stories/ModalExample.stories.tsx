import { Modal } from "../lib";
import { CardCompanyType, CardCompanies } from "../data/CardCompany.ts";
import styled from "styled-components";
import DeleteIcon from "../assets/deleteIcon.svg?react";
import { StoryObj } from "@storybook/react";
import { ModalMainProps } from "@/lib/Modal/Modal/Modal.tsx";

export default { title: "Modal/Example", component: Modal };

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 10px;
`;

const OneCardCompanyBox = styled.div`
  width: 58px;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
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

const CardSelectModal = (args: ModalMainProps) => {
  return (
    <Modal {...args}>
      <Modal.Title> 카드사 선택 </Modal.Title>
      <Modal.CloseIcon onClick={() => {}}>
        <DeleteIcon />
      </Modal.CloseIcon>
      <Modal.Content contentPosition="center">
        <CardCompaniesBox />
      </Modal.Content>
    </Modal>
  );
};

export const CardSelectModalExample: Story = {
  args: {
    position: "bottom",
    isOpen: true,
  },
  parameters: {
    docs: {
      description: "경고 모달입니다.",
    },
    argTypes: {
      position: {
        control: { type: "radio" },
        option: ["bottom", "center"],
      },
    },
  },
  render: (args) => <CardSelectModal {...args} />,
};

const MultiButtonModal = (args: ModalMainProps) => {
  return (
    <Modal {...args}>
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <Modal.Footer>
        <Modal.StyledButton
          label="동의"
          onClickEvent={() => {}}
          backgroundColor="black"
          size={"small"}
        />
        <Modal.StyledButton
          label="거부"
          onClickEvent={() => {}}
          backgroundColor="white"
          size={"small"}
        />
        <Modal.StyledButton
          label="초기화"
          onClickEvent={() => {}}
          backgroundColor="#ce7272"
          textColor="white"
          size={"small"}
        />
        <Modal.CloseButton label="닫기" onClose={() => {}} size={"small"} />
      </Modal.Footer>
    </Modal>
  );
};

export const MultiButtonModalExample: Story = {
  args: {
    position: "bottom",
    isOpen: true,
  },
  parameters: {
    docs: {
      description: "경고 모달입니다.",
    },
    argTypes: {
      position: {
        control: { type: "radio" },
        option: ["bottom", "center"],
      },
    },
  },
  render: (args) => <MultiButtonModal {...args} />,
};

const NoCloseButtonModal = (args: ModalMainProps) => {
  return (
    <Modal {...args}>
      <Modal.Title> 약관에 동의해 주세요</Modal.Title>
      <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
      <Modal.Footer>
        <Modal.StyledButton
          label="동의"
          onClickEvent={() => {}}
          backgroundColor="black"
          size={"small"}
        />
        <Modal.CloseButton label="닫기" onClose={() => {}} size={"small"} />
      </Modal.Footer>
    </Modal>
  );
};

type Story = StoryObj<typeof Modal>;

export const NoCloseButtonModalExample: Story = {
  args: {
    position: "bottom",
    isOpen: true,
  },
  parameters: {
    docs: {
      description: "경고 모달입니다.",
    },
    argTypes: {
      position: {
        control: { type: "radio" },
        option: ["bottom", "center"],
      },
    },
  },
  render: (args) => <NoCloseButtonModal {...args} />,
};
