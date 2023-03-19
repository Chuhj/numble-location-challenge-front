import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import TextTruncate from 'react-text-truncate';
import { useNavigate } from 'react-router-dom';
import ContentsArea from '../../../common/components/ContentsArea';
import menudots from '../../../common/styles/assets/menudots.svg';
import like from '../../../common/styles/assets/like.svg';
import likeFill from '../../../common/styles/assets/like_fill.svg';
import comment from '../../../common/styles/assets/comment.svg';
import { Feed as FeedType } from '../../../api/types';
import { formatDate, formatRelativeDate } from '../../../common/utils/formatDate';
import FeedMoreModal from '../../../common/components/FeedMoreModal';
import { userState } from '../../../common/atoms';
import { useAddComment, useLike } from '../../../api/feed';
import { queryClient } from '../../../api/config/queryClient';
import {
  FeedWrap,
  FeedTop,
  Profile,
  ProfileImg,
  Info,
  MoreButton,
  Image,
  Social,
  SocialImg,
  SocialInfo,
  FeedContents,
  LikeComment,
  LikeButton,
  Comment,
  CommentButton,
  CommentImg,
  CommentContents,
  CommentTextarea,
} from './styles';

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
  const { mutate: mutateLike } = useLike();
  const navigate = useNavigate();

  const handleLike = () => {
    setLiked((prev) => !prev);
    mutateLike(
      { id: feed.postId },
      {
        onSettled: () => queryClient.invalidateQueries('feeds').then(() => setLiked(feed.liked)),
      }
    );
  };

  const handleClickContents = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    if (target.className === 'more') setTruncateLine(0);
    else if (target.tagName === 'SPAN') navigate(`/feed/detail/${feed.postId}`); // 피드 상세로 이동
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitComment();
    }
  };

  const handleSubmitComment = async () => {
    mutate(
      { id: feed.postId, contents: commentContents },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries('feeds').then(() => setCommentContents(''));
        },
        onError: (error) => {
          queryClient.invalidateQueries('feeds');
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
      <Image src={feed.thumbnail.imagePath} />
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
        <Comment>
          <CommentImg />
          <CommentTextarea
            onKeyDown={handleKeyDown}
            value={commentContents}
            onChange={(e) => setCommentContents(e.target.value)}
            placeholder="댓글 달기..."
          />
        </Comment>
      </ContentsArea>
      {showMore ? <FeedMoreModal onCancel={() => setShowMore(false)} mine={id === feed.user.id} postId={feed.postId} /> : null}
    </FeedWrap>
  );
}
