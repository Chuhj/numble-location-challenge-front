import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useGetDeadlineSocialList, useGetPopularSocialList, useGetRecentSocialList } from '../../api/social';
import HeaderWithBack from '../../common/components/HeaderWithBack';
import SocialCardList from '../Home/SocialCardList';

const TITLE = {
  recent: '최신 모임',
  deadline: '마감 임박 모임',
  popular: '인기 모임',
};

export default function SocialList() {
  const { data: popularData } = useGetPopularSocialList();
  const { data: deadlineData } = useGetDeadlineSocialList();
  const { data: recentData } = useGetRecentSocialList();
  const { sort } = useParams<{ sort: 'recent' | 'deadline' | 'popular' }>();
  const navigate = useNavigate();
  console.log(popularData);

  if (sort && !TITLE[sort]) return <>잘못된 URL입니다.</>;
  return (
    <SocialListWrap>
      <HeaderWithBack title={sort ? TITLE[sort] : ''} onClickBack={() => navigate('/')} />
      <ContentsArea>
        <SocialCardList gap={16} />
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
