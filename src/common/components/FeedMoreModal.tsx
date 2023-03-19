import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { queryClient } from '../../api/config/queryClient';
import { useDeleteFeed } from '../../api/feed';
import { fontStyle } from '../../common/styles/FontStyle';
import DeleteModal from './DeleteModal';

interface Props {
  onCancel: () => void;
  mine: boolean;
  postId: number;
}

export default function FeedMoreModal({ onCancel, mine, postId }: Props) {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const { mutate } = useDeleteFeed();
  const navigate = useNavigate();

  const handleDelete = () => {
    mutate(
      { id: postId },
      {
        onSuccess: () => {
          setIsShowDeleteModal(false);
          Promise.all([queryClient.invalidateQueries(['feeds']), queryClient.invalidateQueries(['feed', String(postId)])]).then(() =>
            navigate('/feed')
          );
        },
        onError: () => {
          alert('피드 삭제에 실패했습니다.');
        },
      }
    );
  };
  return (
    <Modal onClick={onCancel}>
      <Menus onClick={(e) => e.stopPropagation()}>
        {mine ? (
          <>
            <Menu onClick={() => navigate('/feed/edit', { state: { postId } })}>수정</Menu>
            <RedMenu onClick={() => setIsShowDeleteModal(true)}>삭제</RedMenu>
          </>
        ) : (
          <RedMenu>신고</RedMenu>
        )}
      </Menus>
      {isShowDeleteModal ? <DeleteModal onClickCancel={() => setIsShowDeleteModal(false)} onClickConfirm={handleDelete} /> : null}
    </Modal>
  );
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const Menus = styled.ul`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Menu = styled.li`
  ${fontStyle(17)}
  padding: 18px 0 18px 19px;
  background-color: white;
  cursor: pointer;
`;

const RedMenu = styled(Menu)`
  color: #ed6653;
`;
