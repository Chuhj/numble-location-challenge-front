import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ContentsArea from '../../common/components/ContentsArea';
import Header from './Header';
import Tabs from './Tabs';
import SocialList from './SocialList';
import FeedList from './FeedList';
import { useGetDeadlineSocialList, useGetPopularSocialList, useGetRecentSocialList } from '../../api/social';
import BottomNav from './BottomNav';

const BASE_URL = '/home/list';

export default function Home() {
  const { data: popularData } = useGetPopularSocialList();
  const { data: deadlineData } = useGetDeadlineSocialList();
  const { data: recentData } = useGetRecentSocialList();
  const navigate = useNavigate();
  console.log(popularData, deadlineData, recentData);

  return (
    <HomeWrapper>
      <Header />
      <ContentsArea>
        <Tabs />
        <SocialList title="인기 모임" marginTop={18} onClickHeader={() => navigate(`${BASE_URL}/popular`)} />
        <SocialList title="마감 임박 모임 🔥" marginTop={100} onClickHeader={() => navigate(`${BASE_URL}/deadline`)} />
        <FeedList title="주목받는 피드 ✨" />
        <SocialList title="최신 모임" marginTop={54} onClickHeader={() => navigate(`${BASE_URL}/recent`)} />
      </ContentsArea>
      <BottomNav />
    </HomeWrapper>
  );
}

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 75px;
`;
