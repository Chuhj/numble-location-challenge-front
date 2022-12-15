import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ContentsArea from '../../common/components/ContentsArea';
import Header from '../../components/Home/Header';
import Tabs from '../../components/Home/Tabs';
import SocialList from '../../components/Home/SocialList';
import FeedList from '../../components/Home/FeedList';
import BottomNav from '../../common/components/BottomNav';

const BASE_URL = '/home/list';

export default function Home() {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleClickTabs = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const id = Number(target.id);
    setTab(id);
  }, []);

  return (
    <HomeWrapper>
      <Header />
      <ContentsArea>
        <Tabs tab={tab} onClickTabs={handleClickTabs} />
        <SocialList
          title="인기 모임"
          tab={tab}
          kind={'popular'}
          marginTop={18}
          onClickHeader={() => navigate(`${BASE_URL}/popular`, { state: { tab } })}
        />
        <SocialList
          title="마감 임박 모임 🔥"
          tab={tab}
          kind={'deadline'}
          marginTop={100}
          onClickHeader={() => navigate(`${BASE_URL}/deadline`, { state: { tab } })}
        />
        <FeedList title="주목받는 피드 ✨" onClickHeader={() => navigate(`${BASE_URL}/feed`)} />
        <SocialList
          title="최신 모임"
          tab={tab}
          marginTop={54}
          kind={'recent'}
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
