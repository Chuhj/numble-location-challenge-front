import styled from 'styled-components';
import back from '../styles/assets/back.svg';

interface HeaderProps {
  children?: React.ReactNode;
}

export default function HeaderWithBack({ children }: HeaderProps) {
  return (
    <HeaderWrapper>
      <ButtonWrapper>
        <BackButton>
          <img src={back} alt="back" />
        </BackButton>
      </ButtonWrapper>
      <Text>{children}</Text>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  height: 8.5rem;
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.margin} 12px ${theme.margin}`};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

const BackButton = styled.button`
  background-color: inherit;
  margin-bottom: 4px;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500%;
    height: 200%;
  }
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 2.5rem;
  margin: 0 auto;
`;
