import styled from "styled-components"

export const DimArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CloseArea = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const ModalTitle = styled.h2`

`
