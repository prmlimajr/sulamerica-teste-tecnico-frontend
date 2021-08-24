import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin-bottom: 20px;
`;

export const CarImage = styled.img`
  max-width: 280px;
  height: 200px;
`;

export const CarInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CarDescription = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  line-height: 1.5;
`;
