import React, { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import ContentsArea from '../../../common/components/ContentsArea';
import menudots from '../../../common/styles/assets/menudots.svg';
import like from '../../../common/styles/assets/like.svg';
import likeFill from '../../../common/styles/assets/like_fill.svg';
import comment from '../../../common/styles/assets/comment.svg';
import up from '../../../common/styles/assets/up.svg';
import { CommentType, FeedDetail } from '../../../api/types';
import { formatDate, formatRelativeDate } from '../../../common/utils/formatDate';
import FeedMoreModal from '../../../common/components/FeedMoreModal';
import { userState } from '../../../common/atoms';
import { useGetFeed, useLike, useAddComment, useReplyComment } from '../../../api/feed';
import {
  FeedWrap,
  FeedTop,
  Profile,
  ProfileImg,
  Info,
  MoreButton,
  Social,
  SocialImg,
  SocialInfo,
  FeedContents,
  LikeComment,
  LikeButton,
  CommentButton,
  CommentsArea,
  DetailCommentTextarea,
  WriteButton,
  Image,
} from './styles';
import Comment from '../Comment';
import Carousel from '../Carousel';

interface Props {
  feed: FeedDetail;
}
export default function EachFeedDetail({ feed }: Props) {
  const { id } = useRecoilValue(userState);
  const [commentContents, setCommentContents] = useState('');
  const [isShowMore, setisShowMore] = useState(false);
  const [isLiked, setLiked] = useState(feed.liked);
  const [replyInfo, setReplyInfo] = useState<{ commentId?: number; nickname?: string }>({});
  const { mutate: mutateComment } = useAddComment();
  const { mutate: mutateLike } = useLike();
  const { mutate: mutateReply } = useReplyComment();
  const { refetch } = useGetFeed({ id: String(feed.postId) });
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const groupComments = feed.comments.reduce((acc: { [key: number]: any[] }, comment) => {
    if (!acc[comment.cgroup]) acc[comment.cgroup] = [];
    acc[comment.cgroup].push(comment);
    return acc;
  }, []);

  const handleClickReply = (comment: CommentType) => {
    focusInput();
    setReplyInfo((prev) => {
      if (prev.commentId) return {};
      return { commentId: comment.commentId, nickname: comment.user.nickname };
    });
  };

  const handleLike = () => {
    setLiked((prev) => !prev);
    mutateLike({ id: feed.postId }, { onSettled: () => refetch() });
  };

  const focusInput = () => {
    // 댓글 버튼 클릭시 input focus
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(commentContents);
    if (replyInfo.commentId) {
      mutateReply(
        { id: feed.postId, commentId: replyInfo.commentId, contents: commentContents },
        {
          onSuccess: () => {
            refetch().then(() => setCommentContents(''));
          },
          onError: () => {
            alert('댓글 달기에 실패했습니다.');
          },
        }
      );
    } else {
      mutateComment(
        { id: feed.postId, contents: commentContents },
        {
          onSuccess: () => {
            refetch().then(() => setCommentContents(''));
          },
          onError: () => {
            alert('댓글 달기에 실패했습니다.');
          },
        }
      );
    }
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
        <MoreButton onClick={() => setisShowMore(true)}>
          <img src={menudots} alt="" />
        </MoreButton>
      </FeedTop>
      <Carousel images={feed.images} />
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
        <FeedContents>
          <p>{feed.contents}</p>
          <LikeComment>
            <div>
              <LikeButton onClick={handleLike}>
                <img src={isLiked ? likeFill : like} alt="" />
              </LikeButton>
              <span>{feed.likes}</span>
            </div>
            <div>
              <CommentButton onClick={focusInput}>
                <img src={comment} alt="" />
              </CommentButton>
              <span>{feed.comments.length}</span>
            </div>
          </LikeComment>
        </FeedContents>

        <CommentsArea>
          {feed.comments.length === 0 ? (
            <span className="placeholder">댓글을 작성해보세요!</span>
          ) : (
            <>
              {Object.values(groupComments)
                .flat()
                .map((comment: CommentType) =>
                  comment.level === 1 ? (
                    <Comment key={comment.commentId} comment={comment} isReply={true} onClickReply={handleClickReply} replyId={replyInfo.commentId} />
                  ) : (
                    <Comment key={comment.commentId} comment={comment} onClickReply={handleClickReply} replyId={replyInfo.commentId} />
                  )
                )}
            </>
          )}
        </CommentsArea>
        <form onSubmit={handleSubmitComment}>
          <div
            style={{
              display: 'flex',
              position: 'fixed',
              bottom: 0,
              padding: '11px 0',
              background: 'white',
            }}
          >
            {replyInfo.nickname ? <>{replyInfo.nickname}</> : null}
            <DetailCommentTextarea
              ref={inputRef}
              value={commentContents}
              onChange={(e) => setCommentContents(e.target.value)}
              placeholder="댓글을 작성해주세요"
            />
            <WriteButton>
              <img src={up} alt="write" />
            </WriteButton>
          </div>
        </form>
      </ContentsArea>
      {isShowMore ? <FeedMoreModal onCancel={() => setisShowMore(false)} mine={id === feed.user.id} postId={feed.postId} /> : null}
    </FeedWrap>
  );
}
