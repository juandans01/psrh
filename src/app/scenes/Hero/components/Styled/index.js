import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 800px;
`

export const BackWrapper = styled.div`
  z-index: 1;
  min-height: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(to right top, #00c2be, #71d8bf);  
`

export const Left = styled.div`
  width: 400px;

  > p {
    line-height: 1.4;
  }
`

export const Right = styled.div`
  z-index: 3;
  > img {
      width: 350px;
      height: 350px;
  }
`

export const Dots = styled.img`
  z-index: 1;
  position: absolute;
  height: 500px;
  width: 500px;
  right: -100px;
  bottom: 0px;
`

export const MenuWrapper = styled.div`
  z-index: 5;
  position: absolute;  
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const MenuTitle = styled.div`  
  margin-left: 60px;
  > img {
    width: 260px;
    margin-top: 5px;
  }

  ${bp('ts')`
    margin-left: 10px;
  `}
`

export const Menu = styled.div`
  color: white;
  float: right;
  margin-right: 80px;

  > div {    
    display: inline;
    padding: 5px 10px;
    cursor: pointer;
    position: relative;
    ${bp('ts')`
      display: none;
    `}
  }

  ${bp('ts')`
    position: absolute;
    margin: 5px 10px;
    right: 0;
    top: 50px;        
    background: ${props => props.theme.greenShade};
    color: white;    

    visibility: hidden;
    opacity: 0;
    transition: opacity 200ms ease, visibility 0ms 200ms;

    &.mobile-visible {
      visibility: visible;
      opacity: 1;
      transition: opacity 200ms ease, visibility 0ms 0ms;
    }

    border-radius: 2px;

    > div { 
      display: block;
      padding: 12px;
    }
  `}
`

export const MobileMenu = styled.div`
  display: inline-block;
  vertical-align: top;
  
  button {
    margin: 0 0 0 220px;
    width: 60px;
    height: 40px;
    background: transparent;
    border-radius: 1px;
    border: none;
    box-sizing: border-box;
    transition: background 300ms ease 0ms;
    outline: unset !important;
    cursor: pointer;

    ${bp('ts')`
      margin-left: 30px;
    `}
  }

  svg {
    fill: white;
    width: 40px;
    height: 40px;
  }

  path {
    stroke: white;
    stroke-width: 6;
  }

  ${bp('ts', 'min-width')`
    display: none;  
  `}
`