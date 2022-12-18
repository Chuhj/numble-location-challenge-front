import styled, { css } from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';

export const CommentWrap = styled.div<{ isReply?: boolean }>`
  width: 100%;
  ${({ isReply }) =>
    isReply &&
    css`
      padding-left: 38px;
      img {
        width: 22px;
        height: 22px;
        margin-top: -3px;
      }
    `}
`;

export const ProfileImg = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  margin-top: -5px;
  background: ${({ theme }) => theme.colors.grey};
`;

export const Profile = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;

  span:nth-child(2) {
    ${fontStyle(12, 'bold')}
    margin-left: 10px;
  }

  span:nth-child(3) {
    ${fontStyle(12)}
    color: ${({ theme }) => theme.colors.placeholder};
    margin-left: 8px;
  }
`;

export const MoreButton = styled.button`
  background: inherit;
  padding-left: 10px;
  img {
    height: 17px;
    width: 17px;
  }
`;

export const CommentContents = styled.div`
  margin-left: 38px;
  ${fontStyle(14)}
`;

export const Reply = styled.div`
  display: inline-block;
  margin-top: 4px;
  margin-left: 38px;
  ${fontStyle(10)}
  color: #7b7b7b;
  cursor: pointer;
`;
