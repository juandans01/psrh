import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  height: 200px;
  ${bp('md')`
    height: auto;
  `}
  width: 100%;
  background: linear-gradient(to right, ${props => props.theme.blueShade}, ${props => props.theme.greenShade});  
`
export const Logo = styled.div`
  height: 200px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;  
  > img {
    height: 150px;
    width: 300px;
  }
`

export const Info = styled.div`
  color: white;
  margin-left: 50px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  .email {
    padding: 5px;
  }

  .address {
    padding: 5px;
  }
  .link {
    > img {
      width: 50px;
      height: 50px;
    }
  }
`