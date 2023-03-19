import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { fontStyle } from '../../../common/styles/FontStyle';

export const Social = styled.div`
  height: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 6px;
  margin-top: 12px;
  display: flex;
  align-items: center;
`;

export const SocialImg = styled.img`
  height: 100%;
  width: 6.4rem;
  border-radius: 6px 0 0 6px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const SocialInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 14px;

  span: nth-child(1) {
    ${fontStyle(12, 'bold')}
  }
  span: nth-child(2) {
    ${fontStyle(10, undefined, 'placeholder')}
  }
`;

export const FeedWrap = styled.div`
  width: 36rem;
  padding-bottom: 30px;
`;

export const FeedTop = styled.div`
  height: 7.1rem;
  padding: 0 0 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.div`
  display: flex;
`;

export const ProfileImg = styled.img`
  height: 3.4rem;
  width: 3.4rem;
  margin-top: 2px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  span: nth-child(1) {
    ${fontStyle(14, 'bold')}
  }
  span: nth-child(2) {
    ${fontStyle(12, undefined, 'placeholder')}
  }
`;

export const MoreButton = styled.button`
  padding: 16px;
  background: inherit;
`;

export const Image = styled.img`
  height: 36rem;
  width: 36rem;
  background-color: white;
  object-fit: contain;
`;

export const FeedContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  padding: 14px 4px 17px 4px;

  p {
    line-height: 1.9rem;
    ${fontStyle(13)}
    word-break: break-all;
  }
`;

export const LikeButton = styled.button`
  background: inherit;
  padding-right: 6px;
  img {
    height: 15px;
    width: 17px;
  }
`;

export const CommentButton = styled(LikeButton)`
  height: 17px;
`;

export const LikeComment = styled.div`
  display: flex;
  gap: 16px;
  ${fontStyle(14, 'bold')}

  div {
    display: flex;
    align-items: center;
  }
`;

export const Comment = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

export const CommentContents = styled.div`
  width: 100%;
  height: min-content;
  margin: auto 0;
  margin-left: 10px;
  ${fontStyle(12)}
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CommentImg = styled(ProfileImg)`
  height: 2.8rem;
  width: 2.8rem;
`;

export const CommentTextarea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 6.5px;
  margin-left: 10px;
  font-family: Noto Sans, sans-serif;
  ${fontStyle(12)}
  border: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
