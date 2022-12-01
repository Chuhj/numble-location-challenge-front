import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import TextTruncate from 'react-text-truncate';
import TextareaAutosize from 'react-textarea-autosize';
import { useNavigate } from 'react-router-dom';
import { fontStyle } from '../../../common/styles/FontStyle';
import ContentsArea from '../../../common/components/ContentsArea';
import menudots from '../../../common/styles/assets/menudots.svg';
import like from '../../../common/styles/assets/like.svg';
import likeFill from '../../../common/styles/assets/like_fill.svg';
import comment from '../../../common/styles/assets/comment.svg';
import { Feed as FeedType } from '../../../api/types';
import { formatDate, formatRelativeDate } from '../../../common/utils/formatDate';
import FeedMoreModal from '../../../common/components/FeedMoreModal';
import { userState } from '../../../common/atoms';
import { useAddComment, useGetHotFeeds, useLike } from '../../../api/feed';

interface Props {
  feed: FeedType;
}
export default function EachFeed({ feed }: Props) {
  const { id } = useRecoilValue(userState);
  const [truncateLine, setTruncateLine] = useState(2);
  const [commentContents, setCommentContents] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [isLiked, setLiked] = useState(feed.liked);
  const { mutate } = useAddComment();
  const { refetch } = useGetHotFeeds();
  const { mutate: mutateLike } = useLike();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  console.log(isLiked);

  const handleLike = () => {
    setLiked((prev) => !prev);
    mutateLike({ id: feed.postId }, { onSettled: () => refetch() });
  };

  const handleClickContents = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    console.log(target.tagName);

    if (target.className === 'more') setTruncateLine(0);
    else if (target.tagName === 'SPAN') navigate(`/feed/detail/${feed.postId}`); // 피드 상세로 이동
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && formRef.current) {
      handleSubmitComment();
    }
  };

  const handleSubmitComment = async () => {
    mutate(
      { id: feed.postId, contents: commentContents },
      {
        onSuccess: (data) => {
          console.log(data);
          refetch();
          setCommentContents('');
        },
        onError: (error) => {
          alert('댓글 달기에 실패했습니다.');
        },
      }
    );
  };

  return (
    <FeedWrap>
      <FeedTop>
        <Profile>
          <ProfileImg src={feed.user.profile} alt="" />
          <Info>
            <span>{feed.user.nickname}</span>
            <span>
              {feed.regionName && feed.regionName + '·'}
              {formatRelativeDate(feed.createTime)}
            </span>
          </Info>
        </Profile>
        <MoreButton onClick={() => setShowMore(true)}>
          <img src={menudots} alt="" />
        </MoreButton>
      </FeedTop>
      <Image />
      <ContentsArea>
        {feed.social ? (
          <Social>
            <SocialImg src={feed.social.thumbnail.imagePath} />
            <SocialInfo>
              <span>{feed.social.title}</span>
              <span>
                {feed.social.regionName} · {formatDate(feed.social.startDate)}
              </span>
            </SocialInfo>
          </Social>
        ) : null}
        <FeedContents onClick={handleClickContents}>
          <TextTruncate
            line={truncateLine}
            element="p"
            truncateText=""
            text={feed.contents}
            textTruncateChild={
              <span className="more" style={{ cursor: 'pointer', color: '#bdbdbd' }}>
                ...더보기
              </span>
            }
          />
          <LikeComment>
            <div>
              <LikeButton onClick={handleLike}>
                <img src={isLiked ? likeFill : like} alt="" />
              </LikeButton>
              <span>{feed.likes}</span>
            </div>
            <div>
              <CommentButton>
                <img src={comment} alt="" />
              </CommentButton>
              <span>{feed?.comments_cnt}</span>
            </div>
          </LikeComment>
        </FeedContents>
        {feed?.comment ? (
          <Comment>
            <CommentImg src={feed?.comment.user.profile} />
            <CommentContents>{feed?.comment.contents}</CommentContents>
          </Comment>
        ) : null}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitComment();
          }}
          ref={formRef}
        >
          <Comment>
            <CommentImg />
            <CommentTextarea
              onKeyDown={handleKeyDown}
              value={commentContents}
              onChange={(e) => setCommentContents(e.target.value)}
              placeholder="댓글 달기..."
            />
          </Comment>
        </form>
      </ContentsArea>
      {showMore ? <FeedMoreModal onCancel={() => setShowMore(false)} mine={id === feed.user.id} postId={feed.postId} /> : null}
    </FeedWrap>
  );
}

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
  background-color: ${({ theme }) => theme.colors.grey};
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
