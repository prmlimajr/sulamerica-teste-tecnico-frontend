import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
`

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const CarList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

export const CarListItem = styled.li`
  list-style: none;
`
