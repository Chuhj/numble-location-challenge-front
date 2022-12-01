import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useGetSocialList } from '../../api/social';
import { useGetHotFeeds } from '../../api/feed';
import ContentsArea from '../../common/components/ContentsArea';
import Header from './Header';
import Tabs from './Tabs';
import SocialList from './SocialList';
import FeedList from './FeedList';
import BottomNav from '../../common/components/BottomNav';

const BASE_URL = '/home/list';

export default function Home() {
  const [tab, setTab] = useState(0);
  const { data: recentData } = useGetSocialList('recent', tab);
  const { data: deadlineData } = useGetSocialList('deadline', tab);
  const { data: popularData } = useGetSocialList('popular', tab);
  const { data: feedsData } = useGetHotFeeds();
  const navigate = useNavigate();

  const handleClickTabs = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const id = Number(target.id);
    setTab(id);
  }, []);

  useEffect(() => {}, [tab]);

  return (
    <HomeWrapper>
      <Header />
      <ContentsArea>
        <Tabs tab={tab} onClickTabs={handleClickTabs} />
        <SocialList
          title="인기 모임"
          socials={popularData?.slice(0, 3)}
          marginTop={18}
          onClickHeader={() => navigate(`${BASE_URL}/popular`, { state: { tab } })}
        />
        <SocialList
          title="마감 임박 모임 🔥"
          socials={deadlineData?.slice(0, 3)}
          marginTop={100}
          onClickHeader={() => navigate(`${BASE_URL}/deadline`, { state: { tab } })}
        />
        <FeedList title="주목받는 피드 ✨" feeds={feedsData} onClickHeader={() => navigate(`${BASE_URL}/feed`)} />
        <SocialList
          title="최신 모임"
          socials={recentData?.slice(0, 3)}
          marginTop={54}
          onClickHeader={() => navigate(`${BASE_URL}/recent`, { state: { tab } })}
        />
      </ContentsArea>
      <BottomNav />
    </HomeWrapper>
  );
}

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 75px;
  margin-top: 128px;
`;
