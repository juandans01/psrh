import styled from 'styled-components'
import Image1 from '../../../../../assets/hero.jpg'
import Image2 from '../../../../../assets/slide2.png'
import { bp } from '../../../../../helpers/styleHelper'

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
      font-weight: 600;
      line-height: 1.4;
      text-align: center;
    }
  }  
`

export const SecondBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image2}) no-repeat 0% 100% / cover;  
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
      font-weight: 600;
      line-height: 1.4;
      text-align: center;
    }
  }  
`

export const MapWrapper = styled.div`  
  position: absolute;
  top: 70%;
  ${bp('md')`
    top: 75%;
  `}
  width: 100%;
  display: flex;
  justify-content: center;  

  > div {
    position: relative;
    > img { 
      height: 350px;

      ${bp('md')`
        height: 200px;
      `}
    }



    .chile {
      position: absolute;
      bottom: 40px;
      left: 155px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #303180;
      ${bp('md')`
        display:none;
      `}
    }

    .argentina {
      position: absolute;
      bottom: 50px;
      left: 170px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #303180;
      ${bp('md')`
        display:none;
      `}
    }

    .colombia {
      position: absolute;
      bottom: 120px;
      left: 150px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #303180;
      ${bp('md')`
        display:none;
      `}
    }

    .peru {
      position: absolute;
      bottom: 90px;
      left: 145px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #303180;
      ${bp('md')`
        display:none;
      `}
    }

    .usa {
      position: absolute;
      top: 160px;
      left: 110px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #303180;
      ${bp('md')`
        display:none;
      `}
    }
  }
`