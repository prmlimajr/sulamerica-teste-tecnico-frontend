import styled from 'styled-components';
import { shade } from 'polished'


export const Container = styled.button`
  background: var(--color-primary);
  color: var(--color-secondary);
  height: 56px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 16px;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: ${shade(0.7, "#FFF")};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
