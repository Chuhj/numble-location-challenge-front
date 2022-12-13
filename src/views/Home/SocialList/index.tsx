import styled from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';
import more from '../../../common/styles/assets/more.svg';
import SocialCardList from '../SocialCardList';
import { useGetSocialList } from '../../../api/social';

interface SocialListProps {
  title: string;
  tab: number;
  kind: string;
  marginTop?: number;
  gap?: number;
  onClickHeader?: React.MouseEventHandler;
}

export default function SocialList({ title, tab, kind, marginTop = 0, gap = 12, onClickHeader }: SocialListProps) {
  const { data } = useGetSocialList(kind, tab);

  return (
    <SocialListWrap marginTop={marginTop}>
      <SocialListHeader onClick={onClickHeader}>
        <Title>{title}</Title>
        <img src={more} alt="more" />
      </SocialListHeader>
      <SocialCardList gap={gap} socials={data} />
    </SocialListWrap>
  );
}

export const SocialListWrap = styled.div<{ marginTop: number }>`
  display: flex;
  flex-direction: column;
  ${({ marginTop }) => `margin-top: ${marginTop}px`};
`;
export const SocialListHeader = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const CardListWrap = styled.ul<{ gap: number }>`
  display: flex;
  flex-direction: column;
  ${({ gap }) => `gap: ${gap}px`};
`;

export const Title = styled.span`
  ${fontStyle(17, 'bold')}
`;
