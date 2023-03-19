import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { useGetFeeds } from '../../api/feed';
import BottomNav from '../../common/components/BottomNav';
import Header from '../../common/components/Header';
import EachFeed from '../../components/HomeFeedList/EachFeed';
import plus from '../../common/styles/assets/plus.svg';

export default function Feed() {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useGetFeeds();

  const feeds = useMemo(
    () =>
      data?.pages.reduce<any[]>((acc, data) => {
        return [...acc, ...data.data];
      }, []),
    [data]
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (inView && data?.pages[data?.pages.length - 1].hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div style={{ marginTop: '85px', marginBottom: '40px' }}>
      <Header tabName="피드" />
      <div style={{ width: 'fit-content', margin: '0 auto' }}>
        {feeds?.map((feed) => (
          <EachFeed key={feed.postId} feed={feed} />
        ))}
        <div ref={ref}></div>
      </div>
      <AddButton onClick={() => navigate('/feed/add')}>
        <img src={plus} alt="" />
      </AddButton>
      <BottomNav />
    </div>
  );
}

const AddButton = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 68px;
  right: 16px;
  img {
    filter: invert(100%);
  }
`;
