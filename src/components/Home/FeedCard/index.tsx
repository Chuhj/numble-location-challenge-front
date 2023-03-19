import { useNavigate } from 'react-router-dom';
import { Feed } from '../../../api/types';
import likeWhite from '../../../common/styles/assets/like_white.svg';
import { Image, Like, FeedCardWrap, FeedContents } from './styles';

export default function FeedCard({ feed }: { feed: Feed }) {
  const navigate = useNavigate();

  return (
    <FeedCardWrap onClick={() => navigate(`/feed/detail/${feed.postId}`)}>
      <Image>
        <img src={feed.thumbnail.imagePath} alt="feedImg" />
        <Like>
          <img src={likeWhite} alt="likeWhite" />
        </Like>
      </Image>
      <FeedContents>{feed.contents}</FeedContents>
    </FeedCardWrap>
  );
}
