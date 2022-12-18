import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetHotFeeds } from '../../api/feed';
import { Feed as FeedType } from '../../api/types';
import HeaderWithBack from '../../common/components/HeaderWithBack';
import EachFeed from '../../components/HomeFeedList/EachFeed';

export default function FeedList() {
  const navigate = useNavigate();
  const { data, refetch } = useGetHotFeeds();
  const feedsData = data?.data;

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <HeaderWithBack title="주목받는 피드" onClickBack={() => navigate('/home')} />
      <div style={{ width: 'fit-content', margin: '0 auto', marginTop: '85px' }}>
        {feedsData ? feedsData.map((feed: FeedType) => <EachFeed key={feed.postId} feed={feed} />) : null}
      </div>
    </>
  );
}
