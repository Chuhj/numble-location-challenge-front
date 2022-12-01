import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetSocialList } from '../../api/social';
import HeaderWithBack from '../../common/components/HeaderWithBack';
import SocialCardList from '../Home/SocialCardList';

const TITLE = {
  recent: '최신 모임',
  deadline: '마감 임박 모임',
  popular: '인기 모임',
};

export default function SocialList() {
  const {
    state: { tab },
  } = useLocation();
  const { sort } = useParams<{ sort: 'recent' | 'deadline' | 'popular' }>();
  const navigate = useNavigate();
  const { data, refetch } = useGetSocialList(sort as string, tab);

  useEffect(() => {
    refetch();
  }, []);

  if (sort && !TITLE[sort]) return <>잘못된 URL입니다.</>;
  return (
    <SocialListWrap>
      <HeaderWithBack title={sort ? TITLE[sort] : ''} onClickBack={() => navigate('/')} />
      <ContentsArea>
        <SocialCardList gap={16} socials={data} />
      </ContentsArea>
    </SocialListWrap>
  );
}

export const ContentsArea = styled.div`
  padding: ${({ theme }) => ` 0 ${theme.margin} 0 ${theme.margin}`};
  margin-top: 8px;
`;

export const SocialListWrap = styled.div`
  padding-bottom: 30px;
`;
