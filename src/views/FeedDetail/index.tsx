import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetFeed } from '../../api/feed';
import HeaderWithBack from '../../common/components/HeaderWithBack';
import EachFeedDetail from './EachFeedDetail';

export default function FeedDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, refetch } = useGetFeed(id);
  console.log(data);

  useEffect(() => {
    if (id) refetch();
  }, [refetch, id]);

  return (
    <div style={{ marginTop: '85px' }}>
      <HeaderWithBack title="" onClickBack={() => navigate(-1)} />
      <div style={{ width: 'fit-content', margin: '0 auto' }}>{data ? <EachFeedDetail feed={data} /> : null}</div>
    </div>
  );
}
