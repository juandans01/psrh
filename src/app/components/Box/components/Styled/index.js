import styled from 'styled-components'

export const Wrapper = styled.div`
  width: ${props => props.boxWidth};
`

export const Title = styled.div`
  display: inline-block;
  line-height: 1.8;
  font-family: 'Montserrat';
  font-size: ${props => props.fontSize ? props.fontSize : "65px"};
  font-style: ${props => props.fontStyle ? props.fontStyle : "normal"}
  color: ${props => props.fontColor ? props.fontColor : props.theme.greyShade};
  font-weight: 700;
  border-bottom: 3px solid ${props => props.theme.blueShade}
`

export const LineSeparator = styled.div`
  margin-top: 10px;
  height: 3px;
  background-color: ${props => props.theme.blueShade};
`

export const BigSeparator = styled.div`
  height: 3px;
  width: 100px;
  background-color: ${props => props.theme.blueShade};
`