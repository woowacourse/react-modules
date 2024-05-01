import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./lib/Modal"

function App() {
  const [open, setOpen] = useState(false);
  const handleClose=(e : React.MouseEvent) => {
    console.log(e);
    setOpen(false);
    console.log('취소');
  }
  const handleConfirm = (e : React.MouseEvent) => {
    console.log(e)
    setOpen(false)
    console.log('확인');
  }
  return (
    <> 
    <button onClick={()=>setOpen(true)}></button>
    { open&& <Modal buttonLayout='column' position="bottom" title="제목입니다." isXButton={true}   closeButtonContent = '닫기'
  confirmButtonContent='확인' handleConfirm={handleConfirm} handleClose={handleClose}>{<Temp><input></input>dasdfasdfasdfs</Temp>}</Modal>}
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
