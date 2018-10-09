import styled from 'styled-components'
import Image from '../../../../../assets/contact-hero.png'

export const Wrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Image}) no-repeat 50% 50% / cover;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  > h2 {
    font-family: 'Montserrat';
    color: white;
    font-size: 30px;
    font-weight: 900;
  }
`