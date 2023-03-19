import { useGetHotFeeds } from '../../../api/feed';
import more from '../../../common/styles/assets/more.svg';
import FeedCard from '../FeedCard';
import { Header } from '../SocialList/styles';
import { Title, FeedListWrap, FeedCardList } from './styles';

export default function FeedList({ title, onClickHeader }: { title: string; onClickHeader?: React.MouseEventHandler }) {
  const { data } = useGetHotFeeds();
  return (
    <FeedListWrap>
      <Header onClick={onClickHeader}>
        <Title>{title}</Title>
        <img src={more} alt="more" />
      </Header>
      <FeedCardList>
        {data?.data.map((feed) => (
          <FeedCard key={feed.postId} feed={feed} />
        ))}
      </FeedCardList>
    </FeedListWrap>
  );
}
