import styled from 'styled-components'
import Logo from '../../../../../assets/logo.svg'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div``

export const BoxWrapper = styled.div`
  margin: 30px 50px;  
  display: flex;
  justify-content: flex-end;
  ${bp('md')`
    margin: 30px 0;
    justify-content: flex-start;
  `}
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

  ${bp('md')`
    background: none;

    > div {
      flex-direction: column;
      align-items: center;
    }  
  `}
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;

  .image-wrapper {
    position: relative;
    > img { 
      position: relative;
      z-index: 2;
    }   
  }

  .circles-1 {
    z-index: 1;
    > div {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 50px;
      left: 30px;
    }

    > p {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 60px;
      right: 30px;
    }
  }

  .circles-2 {
    z-index: 1;
    > div {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 30px;
      right: 40px;
    }

    > p {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 60px;
      left: 30px;
    }
  }

  .circles-3 {
    z-index: 1;
    > div {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 35px;
      right: 50px;
    }

    > p {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: ${props => props.theme.greenShade};
      top: 60px;
      left: 20px;
    }
  }



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