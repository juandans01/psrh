import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  padding-top: 30px;
  background: ${props => props.secondBack ? '#303180' : '#41badf'};
  height: 350px;
  ${bp('md')`
    height: 500px;
  `}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const Slide = styled.div`
  height: 300px;
  ${bp('md')`
    height: 400px;    
  `}
  > div {    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    ${bp('md')`
      height: 100%;
      justify-content: center;
    `}
    > div {
      max-width: 600px;
      ${bp('md')`
        padding: 10px;
      `}
      > p {        
        text-align: justify;
        font-size: 14px;
        color: white
        line-height: 1.4;
      }
    }
  }
`

export const PTitle = styled.div`
  font-size: 16px;
  display: inline;
`

export const Dots = styled.div`
  
  > div {
    display: flex;
    flex-direction: column;    
    position: absolute;
    top: calc(50% - 67px);
    right: 30px;

    > li {
      background-color: white;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      list-style-type: none;
      margin: 15px 15px;
      cursor: pointer;
    }    

    ${bp('md')`
      flex-direction: row;
      bottom: 10px;
      top: auto;
      right: auto;
      left: calc(50% - 67px);    
      > li {
        height: 15px;
        width: 15px;
      }
    `}
  }  
`