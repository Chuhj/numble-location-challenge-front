import styled from 'styled-components';
import { fontStyle } from '../styles/FontStyle';
import home from '../../common/styles/assets/home.svg';
import homeFill from '../../common/styles/assets/home_fill.svg';
import people from '../../common/styles/assets/people.svg';
import peopleFill from '../../common/styles/assets/people_fill.svg';
import feed from '../../common/styles/assets/feed.svg';
import feedFill from '../../common/styles/assets/feed_fill.svg';
import like from '../../common/styles/assets/like.svg';
import my from '../../common/styles/assets/my.svg';
import myFill from '../../common/styles/assets/my_fill.svg';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BottomNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav>
      <BottomNavWrap>
        <NavItem onClick={() => navigate('/home')}>
          <img src={pathname === '/home' ? homeFill : home} alt="" /> 홈
        </NavItem>
        <NavItem onClick={() => navigate('/social')}>
          <img src={pathname === '/social' ? peopleFill : people} alt="" /> 모임
        </NavItem>
        <NavItem onClick={() => navigate('/feed')}>
          <img src={pathname === '/feed' ? feedFill : feed} alt="" /> 피드
        </NavItem>
        <NavItem>
          <img src={like} alt="" /> 저장
        </NavItem>
        <NavItem onClick={() => navigate('/my')}>
          <img src={pathname === '/my' ? myFill : my} alt="" /> MY
        </NavItem>
      </BottomNavWrap>
    </nav>
  );
}

const BottomNavWrap = styled.ul`
  position: fixed;
  bottom: 0;
  display: flex;
  height: 5.3rem;
  width: 100vw;
  max-width: 720px;
  background-color: white;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 20px 20px 0px 0px;
`;

const NavItem = styled.li`
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
`;
