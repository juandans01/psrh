import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 28px;
  font-weight: 900;
  color: ${props => props.color === 'primary' ? '#41badf' : 'white'}
`

export const Border = styled.div`
  background: ${props => props.borderWhite ? 'white' : '#a4a4a4'};
  margin-top: 10px;
  padding: 0.5px;
  width: 80px;
`