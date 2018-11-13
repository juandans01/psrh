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
    background: url(${props => props.pic}) no-repeat 50% 50% / cover; 
    border-radius: 50%;
    margin: 5px;
  }

  .name {
    margin: 10px;
    color: ${props => props.theme.greenShade};
    font-weight: 900;
  }

  .images {
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .linkedin-logo {
    margin: 10px 0;    
    height: 45px;
  }
  

  .skype-logo {
    margin: 10px;
    width: 25px;
  }
`