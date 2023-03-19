import { useGetSocialList } from '../../../api/social';
import more from '../../../common/styles/assets/more.svg';
import SocialCard from '../SocialCard';
import { CardListWrap, Header, SocialListWrap, Title } from './styles';

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
      <Header onClick={onClickHeader}>
        <Title>{title}</Title>
        <img src={more} alt="more" />
      </Header>
      <CardListWrap gap={gap}>
        {data?.map((social) => (
          <SocialCard key={social.id} social={social} />
        ))}
      </CardListWrap>
    </SocialListWrap>
  );
}
