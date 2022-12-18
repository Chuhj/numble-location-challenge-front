import menudots from '../../../common/styles/assets/menudots.svg';
import { CommentType } from '../../../api/types';
import { formatRelativeDate } from '../../../common/utils/formatDate';
import { CommentWrap, Profile, ProfileImg, MoreButton, CommentContents, Reply } from './styles';

export default function Comment({
  comment,
  isReply,
  onClickReply,
  replyId,
}: {
  comment: CommentType;
  isReply?: boolean;
  onClickReply: (comment: CommentType) => void;
  replyId?: number;
}) {
  return (
    <CommentWrap isReply={isReply}>
      <Profile>
        <div style={{ display: 'flex' }}>
          <ProfileImg src={comment.user.profile} alt="profile" />
          <span>{comment.user.nickname}</span>
          <span>
            {comment.regionName}·{formatRelativeDate(comment.createDate)}
          </span>
        </div>
        <MoreButton type="button">
          <img src={menudots} alt="" />
        </MoreButton>
      </Profile>
      <CommentContents>{comment.contents}</CommentContents>
      {comment.commentId === replyId ? (
        <Reply onClick={() => onClickReply(comment)}>취소하기</Reply>
      ) : (
        <Reply onClick={() => onClickReply(comment)}>답글 쓰기</Reply>
      )}
    </CommentWrap>
  );
}
