import home from '../../../common/styles/assets/home.svg';
import homeFill from '../../../common/styles/assets/home_fill.svg';
import people from '../../../common/styles/assets/people.svg';
import peopleFill from '../../../common/styles/assets/people_fill.svg';
import feed from '../../../common/styles/assets/feed.svg';
import feedFill from '../../../common/styles/assets/feed_fill.svg';
import like from '../../../common/styles/assets/like.svg';
import likeFill from '../../../common/styles/assets/like_fill.svg';
import my from '../../../common/styles/assets/my.svg';
import myFill from '../../../common/styles/assets/my_fill.svg';
import { BottomNavWrap, NavItem } from './styles';

export default function BottomNav() {
  return (
    <nav>
      <BottomNavWrap>
        <NavItem>
          <img src={homeFill} alt="" /> 홈
        </NavItem>
        <NavItem>
          <img src={people} alt="" /> 모임
        </NavItem>
        <NavItem>
          <img src={feed} alt="" /> 피드
        </NavItem>
        <NavItem>
          <img src={like} alt="" /> 저장
        </NavItem>
        <NavItem>
          <img src={my} alt="" /> MY
        </NavItem>
      </BottomNavWrap>
    </nav>
  );
}
