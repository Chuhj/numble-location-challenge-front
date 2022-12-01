import styled from 'styled-components';
import { useGetFeeds } from '../../api/feed';
import BottomNav from '../../common/components/BottomNav';
import Header from '../../common/components/Header';
import EachFeed from '../HomeFeedList/EachFeed';
import plus from '../../common/styles/assets/plus.svg';
import { useNavigate } from 'react-router-dom';

export default function Feed() {
  const { data } = useGetFeeds();
  const feeds = data?.data;
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: '85px', marginBottom: '40px' }}>
      <Header tabName="피드" />
      <div style={{ width: 'fit-content', margin: '0 auto' }}>
        {feeds?.map((feed) => (
          <EachFeed feed={feed} />
        ))}
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
