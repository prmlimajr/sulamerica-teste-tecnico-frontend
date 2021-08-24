import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 100px 0;
`

export const CarImageContainer = styled.div`
  width: 70%;
  max-width: 800px;
  height: 600px;
  background: var(--color-secondary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  margin-right: 20px;
`

export const CarImage = styled.img`
  width: 80%;
`

export const CarInfoContainer = styled.div`
  width: 30%;
  max-width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background: var(--color-secondary);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
`

export const CarInfoHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  align-self: flex-start;
`

export const GoBack = styled.div`
  font-weight: 700;
  font-size: 0.9rem;
`

export const CarName = styled.h1`
  margin-top: 20px;
  font-size: 2.2rem;
`

export const CarInfo = styled.span`
  font-weight: 700;
`

export const CarRate = styled.h1`
  color: var(--color-highlight);
  margin: 30px 0;
`

export const CarReservationArea = styled.div`
  display: flex;
  margin-top: 20px;
`

export const ReservationDates = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`

export const TotalContainer = styled.div`
  margin-left: 20px;
  width: 48%;
`
export const Centered = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`