import styled from 'styled-components'
import { fontStyle } from '../../common/styles/FontStyle'
import kakaoJoinImg from '../../common/styles/assets/kakao_join.png'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate()

  return (
    <MainWrap>
      <ButtonsWrap>
        <EmailButton onClick={() => navigate('/signup')}>이메일로 시작</EmailButton>
        <KakaoButton>
          <img src={kakaoJoinImg} alt="" /> <span>카카오톡으로 시작</span>
        </KakaoButton>
        <LoginButton onClick={() => navigate('/login')}>이미 계정이 있나요? 로그인</LoginButton>
      </ButtonsWrap>
    </MainWrap>
  )
}

export const MainWrap = styled.div`
  ${({ theme }) => `padding: 0 ${theme.margin} 0 ${theme.margin};`}
`

export const ButtonsWrap = styled.div`
  margin-top: 533px;
`

export const EmailButton = styled.div`
  height: 4.4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${fontStyle(16, 'bold', 'white')}
  background: #584ef1;
  border-radius: 5px;
  cursor: pointer;
`

export const KakaoButton = styled.div`
  height: 4.4rem;
  width: 100%;
  margin-top: 11px;
  display: flex;
  align-items: center;
  ${fontStyle(16, 'bold')}
  color: #3B1E1E;
  background: #f8d706;
  border-radius: 5px;
  img {
    position: absolute;
    margin-left: 8px;
  }
  span {
    margin: 0 auto;
  }
  cursor: pointer;
`

export const LoginButton = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 25px;
  ${fontStyle(13, undefined)}
  background: inherit;
  cursor: pointer;
`
