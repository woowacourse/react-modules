import AlertDialog from './components/AlertDialog/AlertDialog';
import CardTypeDialog from './components/CardTypeDialog/CardTypeDialog';
import ConfirmDialog from './components/ConfirmDialog/ConfirmDialog';
import DialogSizeExample from './components/DialogSizeExample/DialogSizeExample';
import PromptDialog from './components/PromptDialog/PromptDialog';
function App() {
  return (
    <>
      <CardTypeDialog />
      <AlertDialog />
      <ConfirmDialog />
      <PromptDialog />
      <DialogSizeExample />
    </>
  );
}

export default App;
