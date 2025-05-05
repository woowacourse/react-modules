import { Dialog } from "./lib";

function App() {
  return (
    <>
      <Dialog position="bottom">
        <Dialog.Trigger>
          <button>Open Dialog</button>
        </Dialog.Trigger>
        <Dialog.Root>
          <Dialog.Overlay>
            <Dialog.Content>
              <Dialog.Header style={{ backgroundColor: "red" }}>
                <h1>모달의 헤더입니다.</h1>
                <Dialog.CloseButton>Close</Dialog.CloseButton>
              </Dialog.Header>
              <div style={{ padding: "16px" }}>
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
