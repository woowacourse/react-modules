import './App.css';
import ModalContents from './ModalContents';
import ModalTypeContents from './ModalTypeContents';
import ModalSizeContents from './ModalSizeContents';

function App() {
  return (
    <>
      <h1 style={{ color: 'black', margin: '20px 50px' }}>Step1 Modal</h1>
      <ModalContents />
      <h1 style={{ color: 'black', margin: '20px 50px' }}>Step2 Modal</h1>
      <h2 style={{ color: 'black', margin: '20px 50px' }}>Modal Types</h2>
      <ModalTypeContents />
      <h2 style={{ color: 'black', margin: '20px 50px' }}>Modal Size Option</h2>
      <ModalSizeContents />
    </>
  );
}

export default App;
