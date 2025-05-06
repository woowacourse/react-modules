import { Dialog } from './lib';

function App() {
  return (
    <>
      <Dialog>
        <Dialog.Trigger>Open Dialog</Dialog.Trigger>
        <Dialog.Root>
          <Dialog.Overlay>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.CloseButton>Close</Dialog.CloseButton>
              </Dialog.Header>
              <div style={{ padding: '16px' }}>
                <p>Dialog Content</p>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Root>
      </Dialog>
    </>
  );
}

export default App;
