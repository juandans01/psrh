import styled from 'styled-components'


export const Wrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  margin: 30px 0;
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