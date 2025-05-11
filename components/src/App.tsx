// import Modal from "./lib/Modal.tsx";
// import AlertModal from "./lib/Modal/AlertModal.tsx";
// import ConfirmModal from "./lib/Modal/ConfirmModal.tsx";
import PromptModal from "./lib/Modal/PromptModal.tsx";

function App() {
  return <div>
    {/*<Modal size='sm' position="center" onClose={() => console.log("close")}/>*/}
    {/*<AlertModal size='sm' message='비밀번호' description='필수입니다' onConfirm={() => console.log("close")}/>*/}
    {/*<ConfirmModal size='sm' message='비밀번호' description='필수입니다' onConfirm={() => console.log("close")}/>*/}
    <PromptModal size='md' message='비밀번호'  onConfirm={() => console.log("close")}/>
  </div>;
}

export default App;
