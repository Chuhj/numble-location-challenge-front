import { useNavigate, useParams } from 'react-router-dom';
import { useGetFeed } from '../../api/feed';
import HeaderWithBack from '../../common/components/HeaderWithBack';
import EachFeedDetail from '../../components/FeedDetail/EachFeedDetail';

export default function FeedDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetFeed({ id });

  return (
    <div style={{ marginTop: '85px' }}>
      <HeaderWithBack title="" onClickBack={() => navigate(-1)} />
      <div style={{ width: 'fit-content', margin: '0 auto' }}>{data ? <EachFeedDetail feed={data} /> : null}</div>
    </div>
  );
}
