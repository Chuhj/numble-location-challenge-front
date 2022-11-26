import styled from 'styled-components';
import SocialCard from '../SocialCard';

export default function SocialCardList({ gap }: { gap: number }) {
  return (
    <SocialCardListWrap gap={gap}>
      <SocialCard />
      <SocialCard />
      <SocialCard />
      <SocialCard />
      <SocialCard />
    </SocialCardListWrap>
  );
}

export const SocialCardListWrap = styled.ul<{ gap: number }>`
  display: flex;
  flex-direction: column;
  ${({ gap }) => `gap: ${gap}px`};
`;
