import styled from 'styled-components'
import Image1 from '../../../../../assets/hero.jpg'
import Image2 from '../../../../../assets/mission2.jpg'

export const Wrapper = styled.div`
  height: 600px;
  position: relative;
`

export const FirstBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image1}) no-repeat 0% 100% / cover;
  height: 600px;

  > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    > p {
      max-width: 600px;
      color: white;
      font-size: 20px;
      font-weight: 900;
      line-height: 1.4;
      text-align: center;
    }
  }  
`

export const SecondBackground = styled.div`
  background: background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image2}) no-repeat 50% 50% / contain;
  transform: rotate(90deg);
  height: 600px;
  > div {
    height: 100%;
    transform: rotate(270deg);
    display: flex;
    justify-content: center;
    align-items: center;

    > p {
      max-width: 600px;
      color: white;
      font-size: 20px;
      font-weight: 900;
      line-height: 1.4;
      text-align: center;
    }
  }  
`

export const MapWrapper = styled.div`
  position: absolute;
  top: 70%;
  width: 100%;
  display: flex;
  justify-content: center;

  > img { 
    height: 350px;
  }  
`