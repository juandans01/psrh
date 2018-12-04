import styled from 'styled-components'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  
  .right {
    margin-top: 80px;
  }

  ${bp('md')`
    flex-direction: column;
    justify-content: space-evenly;

    .right {
      margin: 0
    }
  `}
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  > img {
    height: 150px;
    width: 150px;
  }

  > p {
    width: 250px;
    color: #9c9b9b;
    font-size: 14px;
    line-height: 1.4;
  }
  
`

export const Foot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #9c9b9b;
  font-size: 14px;
  line-height: 1.4;
  width: 200px;
  text-align: center;

  > img {
    height: 75px;
    width: 75px;
  }
`