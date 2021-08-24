import styled from 'styled-components'
import backgroundImage from '../../assets/corvette.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background);
  min-height: 100vh;
`

export const BackgroundImage = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage}) no-repeat center center/cover;
  height: 50vh;
  width: 100%;
`

export const Content = styled.div`
  margin-top: -250px;
` 

export const GreetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 50px;
`

export const GreetingTitle = styled.h1`
  color: var(--color-secondary);
  font-size: 3rem;
`

export const GreetingMessage = styled.p`
  color: var(--color-secondary);
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px 60px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: var(--color-card);
  width: 400px;

`

export const FormTitle = styled.h2`
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const ValidationError = styled.span`
  font-weight: 700;
  color: var(--color-highlight)
` 