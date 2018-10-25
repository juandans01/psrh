import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div``

export const Slide = styled.div`
  height: 400px;
  ${bp('ts')`
    height: 450px;
  `}
  background-color: ${props => props.customBackground};    
  text-align: center;  
  color: white;  
`

export const SlideContent = styled.div`  
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 400px;

  .content-wrapper {
    position: relative
  }


  .up {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 0;
    left: -150px;
    ${bp('ts')`
      display: none;
    `}
  }

  .low {
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: -50px;
    right: -130px;
    ${bp('ts')`
      display: none;
    `}
  }

  .title {
    padding: 40px 0;
    font-size: 30px;
    font-weight: 900;
  }

  .content {
    font-style: italic;
    line-height: 1.6;
    width: 500px;
    ${bp('ts')`
      width: auto;
      padding: 0 25px;
    `}
  }

  .author {
    font-style: italic;
    font-size: 14px;
    padding: 40px;
    font-weight: 900;
  }
`

export const Dots = styled.ul`  
  text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 0;
  margin: 0;

  .active {
    background-color: white;
  }
  
  > div {
    display: flex;
    justify-content: center;
    position: absolute;
    top: -50px;

    > li {      
      background-color: ${props => props.backgroundColor === 'green' ? "#248f88" : "#325667"};
      height: 10px;
      width: 10px;
      border-radius: 50%;
      list-style-type: none;
      margin: 5px;
      cursor: pointer;      
    }    
  }
`
