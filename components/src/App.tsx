import Modal from "./lib/Modal.tsx";

function App() {
  return <div>
    <Modal size='sm' position="center" onClose={() => console.log("close")}/>
  </div>;
}

export default App;
