import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyles from "@/style/global";
import { theme } from "@/style/theme";
import { Modal } from "./lib";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Modal isOpen={true} position="center" onClose={() => {}}>
        <Modal.Title> 약관에 동의해 주세요</Modal.Title>
        <Modal.CloseIcon onClick={() => {}}>닫기</Modal.CloseIcon>
        <Modal.Content>[필수] 개인정보 수집약관 동의</Modal.Content>
        <Modal.StyledButton
          label="동의"
          onClickEvent={() => {}}
          backgroundColor="black"
        />
        <Modal.CloseButton label="닫기" onClose={() => {}} />
      </Modal>
    </ThemeProvider>
  );
}

export default App;
