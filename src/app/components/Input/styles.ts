import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: var(--color-detail);
  margin: 20px 0;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
` 

export const TextInput = styled.input`
  width: 100%;
  background: var(--color-detail);
  height: 30px;
  border: none;
  padding: 0 10px;
`