import React from "react";
import Modal from "./lib/Modal";
import styled from "styled-components";

function App() {
  const handleClose=(e : React.MouseEvent) => {
    console.log(e)
    console.log('취소');
  }
  const handleConfirm = (e : React.MouseEvent) => {
    console.log(e)
    console.log('확인');
  }
  return (
    <> 
      <Modal buttonLayout='column' position="bottom" title="제목입니다." isXButton={true}   closeButtonContent = '닫기'
  confirmButtonContent='확인' handleConfirm={handleConfirm} handleClose={handleClose}>{<Temp><input></input>dasdfasdfasdfs</Temp>}</Modal>
    </>
  );
}

export const Temp = styled.div`
height: 50vh;
background-color: red;
`

export const Wide = styled.div`
width:500vw;
  height:500vh;
  background-color: red;
`

export default App;
