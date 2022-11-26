import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Button from '../../common/components/Button';
import ContentsArea from '../../common/components/ContentsArea';
import HeaderWithBack from '../../common/components/HeaderWithBack';
import { fontStyle } from '../../common/styles/FontStyle';
import { TAG_LIST } from './tagList';

export default function SocialSearch() {
  const [select, setSelect] = useState('');
  const navigate = useNavigate();

  const handleClickTags = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName !== 'LI') return;
    const { id } = target;
    setSelect(id);
  };

  return (
    <SearchWrap>
      <HeaderWithBack title="모임 검색" onClickBack={() => navigate('/home')} />
      <ContentsArea>
        <Text>관심있는 태그를 선택해주세요.</Text>
        <TagsWrap>
          {Object.keys(TAG_LIST).map((category) => (
            <div key={TAG_LIST[category].id}>
              <Category>{TAG_LIST[category].title}</Category>
              <Tags onClick={handleClickTags}>
                {TAG_LIST[category].list.map((tag: { id: number; name: string }) => (
                  <Tag key={tag.id} id={String(tag.id)} selected={select === String(tag.id)}>
                    {tag.name}
                  </Tag>
                ))}
              </Tags>
            </div>
          ))}
        </TagsWrap>
      </ContentsArea>
      <SearchButton onClick={() => console.log('next')}>다음</SearchButton>
    </SearchWrap>
  );
}

export const SearchWrap = styled.div`
  padding-bottom: 123px;
`;

export const SearchButton = styled(Button)`
  position: fixed;
  bottom: 0;
`;

export const Text = styled.div`
  ${fontStyle(17, 'bold')}
  margin-top: 36px;
`;

export const TagsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 28px;
`;

export const Category = styled.span`
  ${fontStyle(14, 'bold')}
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

export const Tag = styled.li<{ selected: boolean }>`
  padding: 6px 20px;
  height: 3.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${fontStyle(13)}
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `};
  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid #584ef1;
    `}

  background-color: #f5f4ff;
  border-radius: 20px;
  cursor: pointer;
`;
