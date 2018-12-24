import styled from 'styled-components'
import LeftImage from '../../../../../assets/mission1.jpg'
import { bp } from '../../../../../helpers/styleHelper'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  margin: 60px 0 20px 0;
  ${bp('md')`
    margin: 20px 0;
    flex-direction: column;
  `}
`

export const Left = styled.div`
  width: 300px;
  background: url(${LeftImage}) no-repeat 0% 0% / cover;
`

export const Right = styled.div`  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  padding-top: 35px;
  ${bp('md')`
    width: auto;
  `}
  > p {
    padding: 20px 40px 0 40px;
    color: #9a9a9a;
    font-size: 14px;
    line-height: 1.1;
    text-align: justify;
  }
`

export const ImagesWrapper = styled.div`
  display: flex;
  margin-left: 10px;
  
  > img {
    margin-right: 5px;
    height: 190px;
    width: 190px;
    ${bp('md')`
      height: 170px;
      width: 170px;
    `}
  }

  ${bp('md')`
    margin: 0;
    justify-content: space-evenly;

    > img {
      margin: 0;
    }
  `}
`