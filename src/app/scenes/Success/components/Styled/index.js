import styled from 'styled-components'

export const Wrapper = styled.div`
  padding-top: 30px;
  background: #41badf;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const Slide = styled.div`
  height: 300px;  
  > div {    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    > p {
      max-width: 600px;
      text-align: justify;
      font-size: 14px;
      color: white
      line-height: 1.4;
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
    top: 42%;
    right: 30px;

    > li {
      background-color: white;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      list-style-type: none;
      margin: 15px 5px;
      cursor: pointer;      
    }    
  }
`