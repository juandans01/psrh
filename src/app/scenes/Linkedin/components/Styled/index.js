import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 30px 0;

  ${bp('md')`
    flex-direction: column;
    height: 700px;
  `}
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 80px;

  .face {
    height: 125px;
    width: 125px;
    border-radius: 50%;
    margin: 5px;
  }

  .name {
    margin: 10px;
    color: ${props => props.theme.greenShade};
    font-weight: 900;
  }

  .logo {
    margin: 10px;
    width: 50px;
    height: 50px;
  }
  
`