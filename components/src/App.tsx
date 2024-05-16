import { useModal, Modal } from "choco-modal-component";
import React from "react";
import "./App.css";

function App() {
  const { isOpen, openModal, closeModal } = useModal();

  const handleConfirm = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    console.log("Confirmed");
    closeModal(e);
  };

  return (
    <>
      <Modal
        modalPosition="center"
        title="컴포넌트를 어느정도까지 분리 해야할까요? 또 어떤 경우 컴포넌트를 그룹화해서 하나의 컴포넌트처럼 보이게 하는 것이 좋을까요?"
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
        size="large"
        modalType="prompt"
      >
        <div style={{ textAlign: "justify" }}>
          리액트에서의 컴포넌트도 캡슐화 되어 있고, 재사용 및 재구성할 수 있습니다. 리액트를 이용해
          애플리케이션을 개발한다는 것은 레고를 이용해 조립하는 것과 비슷합니다. 차이점은 부품이
          부족할 일이 없고, 반드시 한 번은 재사용할 컴포넌트를 만들어야 한다는 것입니다. 그리고 이
          컴포넌트는 상호작용하며 함께 동작합니다. 그리고 상호작용하는 여러 컴포넌트들을 '조합' 해서
          새로운 형태의 '합성' 컴포넌트를 만들 수 있습니다. 컴포넌트의 조합은 리액트의 가장 큰 장점
          중 하나인데, 컴포넌트를 만든 후에는 재사용을 통해 애플리케이션의 다른 부분에서도 사용할 수
          있습니다. 재사용 가능한 특징은 애플리케이션의 중요한 요소입니다. 복제된 여러 컴포넌트들이
          독립적으로 실행할 수 있을 때 우리는 사이드 이펙트를 줄이고, 개발의 효율성을 더욱 극대화할
          수 있습니다. 페이스북의 경우 서로 여러개의 채팅창을 보여주고 있지만 독립적으로 작동할 수
          있습니다. 이는 재사용 가능한 컴포넌트를 만들었기 때문에 가능한 것이죠.
        </div>
      </Modal>
      <h1>Component Modules</h1>
      <button onClick={openModal}>Open Modal</button>
    </>
  );
}

export default App;
