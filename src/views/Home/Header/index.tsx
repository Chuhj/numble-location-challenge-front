import { useNavigate } from 'react-router-dom';
import { ButtonWrapper } from '../../../common/components/HeaderWithBack';
import { HomeHeaderWrapper, Logo, SearchButton } from './styles';
import search from '../../../common/styles/assets/search.svg';

export default function Header() {
  const navigate = useNavigate();

  return (
    <HomeHeaderWrapper>
      <Logo>로고</Logo>
      <ButtonWrapper>
        <SearchButton onClick={() => navigate('/home/search')}>
          <img src={search} alt="search" />
        </SearchButton>
      </ButtonWrapper>
    </HomeHeaderWrapper>
  );
}
