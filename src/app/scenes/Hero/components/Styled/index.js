import styled from 'styled-components'
import Image from '../../../../../assets/hero.png'

export const Wrapper = styled.div`
  min-height: 600px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: url(${Image}) no-repeat 100% 100% / cover;
`

export const Left = styled.div`
  width: 400px;
`

export const Right = styled.div`
  width: 400px;
`