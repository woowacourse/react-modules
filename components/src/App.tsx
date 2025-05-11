// import Modal from "./lib/Modal.tsx";
import AlertModal from "./lib/Modal/AlertModal.tsx";

function App() {
  return <div>
    {/*<Modal size='sm' position="center" onClose={() => console.log("close")}/>*/}
    <AlertModal size='sm' message='비밀번호' description='필수입니다' onConfirm={() => console.log("close")}/>
  </div>;
}

export default App;
