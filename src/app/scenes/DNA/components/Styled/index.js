import styled from 'styled-components'
import Logo from '../../../../../assets/logo.svg'

export const Wrapper = styled.div``

export const BoxWrapper = styled.div`
  margin: 30px 50px;
  display: flex;
  justify-content: flex-end;
`

export const Items = styled.div`
  background: url(${Logo}) no-repeat 50% 50% / auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    display: flex;
    justify-content: center;
    margin: 30px;
  }

  .second {
    width: 400px;
  }

  .third {
    width: 200px;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;

  > div {
    font-family: 'Montserrat';
    font-weight: 900;
    font-size: 14px;    

  }

  > p {
    text-align: center;
    font-size: 14px;
    line-height: 1.4;
  }  
`