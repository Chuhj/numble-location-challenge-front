import styled from 'styled-components'

export const SocialDetailWrap = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  padding: 101px 16px 70px 16px;
  overflow-y: scroll;
`

export const Title = styled.strong`
  font-weight: 700;
  font-size: 17px;
  line-height: 25px;
  color: #242424;
  padding-top: 6px;
  width: 100%;
  text-align: center;
  margin-bottom: 8px;
`

export const OptionList = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 50px;
`

export const Content = styled.p`
  flex-direction: column;
  display: block;
  width: 100%;
  max-height: 400px;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  overflow: hidden;
  text-overflow: ellipsis;

  img {
    object-fit: cover;
    width: 100%;
    height: 200px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
`

export const ExtraInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  width: 100%;
  strong {
    text-align: start;
  }
  margin-top: 52px;
`

export const InfoList = styled.div`
  display: flex;
  flex-flow: column;
  gap: 12px;
`

export const Member = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 150px;
  gap: 10px;
  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
  }
  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #242424;
  }
`

export const JoinBar = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 7px 16px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  max-height: 720px;
  gap: 14px;
  max-width: 720px;
  button {
    cursor: pointer;
  }
  background-color: white;
`

export const LikeBtn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid #584ef1;
  border-radius: 10px;
`

export const JoinBtn = styled.button<{ isJoin: boolean }>`
  width: 100%;
  height: 40px;
  background: #584ef1;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }

  ${({ isJoin }) => isJoin && `background-color:  #ED6653`}
`
