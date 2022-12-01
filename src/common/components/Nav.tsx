import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { fontStyle } from '../styles/FontStyle'
import home from '../styles/assets/home.svg'
import homeFill from '../styles/assets/home_fill.svg'
import people from '../styles/assets/people.svg'
import peopleFill from '../styles/assets/people_fill.svg'
import feed from '../styles/assets/feed.svg'
import feedFill from '../styles/assets/feed_fill.svg'
import like from '../styles/assets/like.svg'
import likeFill from '../styles/assets/like_fill.svg'
import my from '../styles/assets/my.svg'
import myFill from '../styles/assets/my_fill.svg'

export default function Nav({ curr }: { curr: string }) {
  const navigate = useNavigate()

  return (
    <BottomNavWrap>
      <NavItem>
        <img src={curr === 'home' ? homeFill : home} alt="" onClick={() => navigate('/home')} /> 홈
      </NavItem>
      <NavItem>
        <img src={curr === 'social' ? peopleFill : people} alt="" onClick={() => navigate('/social')} /> 모임
      </NavItem>
      <NavItem>
        <img src={curr === 'feed' ? feedFill : feed} alt="" /> 피드
      </NavItem>
      <NavItem>
        <img src={curr === 'like' ? likeFill : like} alt="" /> 저장
      </NavItem>
      <NavItem>
        <img src={curr === 'my' ? myFill : my} alt="" onClick={() => navigate('/my')} /> MY
      </NavItem>
    </BottomNavWrap>
  )
}

export const BottomNavWrap = styled.nav`
  position: fixed;
  bottom: 0;
  display: flex;
  height: 5.3rem;
  width: 100vw;
  max-width: 720px;
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 20px 20px 0px 0px;
`

export const NavItem = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 17px;
    width: 17px;
    margin-bottom: 2px;
  }
  ${fontStyle(10)}
  cursor: pointer;
`
