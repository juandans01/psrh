import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  height: 150px;
`

export const Slide = styled.div`  

  > div {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      width: 250px;
      ${bp('md')`
        width: 150px;
      `}
    }
  }
` 