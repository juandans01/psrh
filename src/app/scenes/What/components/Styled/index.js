import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  
  > p {
    margin-top: 20px;
    width: 600px;
    ${bp('md')`
      width: auto;
    `}
    
    color: #9c9b9b;
    font-size: 14px;
    line-height: 1.6;
  }
`