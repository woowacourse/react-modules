// import { Meta, StoryFn } from "@storybook/react";
// import { Modal, useModalHandler } from "../lib";

// // 스토리 메타 정보 설정
// const meta: Meta<typeof Modal> = {
//   title: "Modal",
//   component: Modal,

//   tags: ["autodocs"],
//   argTypes: {
//     title: {
//       control: "text",
//     },
//     backgroundColor: {
//       description: "모달창 색 설정.",
//       color: /(background|color)$/i,
//     },

//     buttonContent: {
//       description: "모달의 버튼 내용",
//       control: "text",
//     },
//     contents: {
//       description: "모달 내용",
//       control: "text",
//     },
//     position: {
//       description: "모달 위치 설정.",
//       control: { type: "select", options: ["bottom", "center"] },
//     },
//     modalSize: {
//       description: "모달 크기 설정",
//       control: { type: "select", options: ["S", "M", "L"] },
//     },

//     children: { table: { disable: true } },
//   },
// } as Meta;

// export default meta;

// export const Template: StoryFn<typeof meta> = (args) => {
//   const { modalOpen, openModal, closeModal } = useModalHandler();

//   return (
//     <>
//       <button onClick={openModal}>모달 열기</button>
//       {modalOpen && (
//         <Modal
//           setModalClose={openModal}
//           backgroundColor={args.backgroundColor}
//           position={args.position}
//           modalSize={args.modalSize}
//         >
//           <Modal.Header title={args.title} setModalClose={closeModal} />
//           <Modal.Content>{args.contents}</Modal.Content>
//           <Modal.Footer>
//             <Modal.Button
//               content={args.buttonContent}
//               onClick={closeModal}
//               buttonSize="S"
//             />
//           </Modal.Footer>
//         </Modal>
//       )}
//     </>
//   );
// };

// export const AlertModal = Template.bind({});
// AlertModal.args = {
//   title: "아이디를 입력해 주세요.",
//   contents: "아이디는 필수로 입력해야 합니다.",
//   buttonSize: "S",
// };
export default {};
