import styled from 'styled-components'
// import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div``

export const Slide = styled.div`
  height: 350px;
  background-color: ${props => props.theme.blueShade};    
  text-align: center;  
  color: white;  
`

export const SlideContent = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    padding: 20px 0;
    font-size: 24px;
  }

  .content {
    font-style: italic;
    line-height: 1.6;
    width: 300px;
    padding: 10px 0;
  }

  .author {
    font-style: italic;
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
    background-color: #323232;
  }
  
  > div {
    display: flex;
    justify-content: center;
    position: absolute;
    top: -50px;

    > li {
      background-color: white;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      list-style-type: none;
      margin: 5px;
      cursor: pointer;      
    }    
  }
`
