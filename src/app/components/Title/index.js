import styled from 'styled-components'

export default styled.div`
  font-family: 'Montserrat';
  font-size: ${props => props.fontSize ? props.fontSize : "65px"};
  font-style: ${props => props.fontStyle ? props.fontStyle : "normal"}
  color: ${props => props.fontColor ? props.fontColor : props.theme.greyShade};
  font-weight: 700;
`