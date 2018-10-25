import styled from 'styled-components'
import ContactLeft from '../../../../../assets/contact-left.png'
import ContactRight from '../../../../../assets/contact-right.png'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  height: 600px;
  position: relative;

  ${bp('ts')`
      display: flex;
      flex-direction: column;
      height: 700px;
  `}

  > div {
    width: 100%;
    position: relative;
    height: 100%;
    overflow-x: hidden;

    ${bp('ts', 'min-width')`
      position: absolute;      
    `}
  }
`

export const LeftForm = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: white;
  width: 50%;
  ${bp('ts')`
    width: 100%;
  `}
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    > h2 {
      font-size: 20px;
      margin: 10px;
      color: ${props => props.theme.greenShade};
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > input {        
        -webkit-appearance: none;
        border: none;
        border-radius: 1px;
        outline: none;
        padding: 10px 5px;
        color: ${props => props.theme.greyShade};
        background-color: #d5efee;
        margin: 10px;
        width: 200px;
      }
      > input::placeholder {
        color: ${props => props.theme.greyShade};
      }

      > select {
        -webkit-appearance: none;
        border: none;
        outline: none;
        padding: 10px 5px;
        color: ${props => props.theme.greyShade};
        background-color: #d5efee;
        margin: 10px;
        width: 210px;
      }
    }
  }

  > button {
    outline: none;
    cursor: pointer;
    background:rgba(0,0,0,0);
    border: 1px solid ${props => props.theme.greenShade};
    margin: 10px;
    border-radius: 5px;
    color: ${props => props.theme.greenShade};
    padding: 10px 15px;
  }
`

export const LeftQuestion = styled.div`
  transition-property: left;
  transition-duration: 1s;  

  position: absolute;
  top: 0;    

  height: 100%;
  background: url(${ContactLeft}) no-repeat 50% 50% / cover;  
  z-index: ${props => props.leftIndex};

  width: 50%;
  ${bp('ts')`
    width: 100%;
    left: ${props => props.asked ? '100%' : '0'};
  `}

  ${bp('ts', 'min-width')`
    width: 50%;
    left: ${props => props.asked ? '50%' : '0'};
  `}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    color: white;
    font-family: 'Montserrat';
    font-weight: 900;
    font-size: 30px;
  }  

  > button {
    outline: none;
    cursor: pointer;
    background:rgba(0,0,0,0);
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    padding: 10px 15px;
  }
`

export const LeftArrow = styled.div`
  
  visibility: ${props => props.asked ? 'visible' : 'hidden'};
  opacity: ${props => props.asked ? '1' : '0'};
  transition: visibility 0s linear 0.5s,opacity 0.5s linear;  
  position: absolute;
  left: 10px;
  top: 50%;
  > img {
    height: 50px;
    width: 50px;
  }
`

export const RightForm = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background: white;
  width: 50%;
  ${bp('ts')`
    width: 100%;
  `}
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    > h2 {
      font-size: 20px;
      margin: 10px;
      color: ${props => props.theme.blueShade};
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > input {        
        -webkit-appearance: none;
        border: none;
        border-radius: 1px;
        outline: none;
        padding: 10px 5px;
        color: white;
        background-color: #7f96a0;
        margin: 10px;
        width: 200px;
      }
      > input::placeholder {
        color: white;
      }
    }
  }

  > button {
    outline: none;
    cursor: pointer;
    background:rgba(0,0,0,0);
    border: 1px solid ${props => props.theme.blueShade};
    margin: 10px;
    border-radius: 5px;
    color: ${props => props.theme.blueShade};
    padding: 10px 15px;
  }
`

export const RightQuestion = styled.div`
  transition-property: right;
  transition-duration: 1s;  

  position: absolute;
  top: 0;
  height: 100%;
  background: url(${ContactRight}) no-repeat 50% 50% / cover;
  
  width: 50%;
  ${bp('ts')`
    width: 100%;
    right: ${props => props.asked ? '100%' : '0'};
  `}

  ${bp('ts', 'min-width')`
    width: 50%;
    right: ${props => props.asked ? '50%' : '0'};
  `}

  z-index: ${props => props.rightIndex};


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  > h2 {
    color: white;
    font-family: 'Montserrat';
    font-weight: 900;
    font-size: 30px;
  }  

  > button {
    outline: none;
    cursor: pointer;
    background:rgba(0,0,0,0);
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    padding: 10px 15px;
  }
`

export const RightArrow = styled.div`

  visibility: ${props => props.asked ? 'visible' : 'hidden'};
  opacity: ${props => props.asked ? '1' : '0'};
  transition: visibility 0s linear 0.5s,opacity 0.5s linear;
  position: absolute;
  right: 10px;
  top: 50%;
  > img {
    height: 50px;
    width: 50px;
  }
`