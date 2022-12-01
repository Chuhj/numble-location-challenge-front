import styled from 'styled-components';
import { Social } from '../../../api/types';
import SocialCard from '../SocialCard';

interface SocialCardListProps {
  gap: number;
  socials?: Social[];
}

export default function SocialCardList({ gap, socials }: SocialCardListProps) {
  return (
    <SocialCardListWrap gap={gap}>
      {socials?.map((social) => (
        <SocialCard key={social.id} social={social} />
      ))}
    </SocialCardListWrap>
  );
}

export const SocialCardListWrap = styled.ul<{ gap: number }>`
  display: flex;
  flex-direction: column;
  ${({ gap }) => `gap: ${gap}px`};
`;
