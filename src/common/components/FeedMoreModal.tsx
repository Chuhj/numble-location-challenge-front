import styled from 'styled-components';
import { fontStyle } from '../../common/styles/FontStyle';

interface Props {
  onCancel: () => void;
  mine: boolean;
  postId: number;
}

export default function FeedMoreModal({ onCancel, mine, postId }: Props) {
  return (
    <Modal onClick={onCancel}>
      <Menus onClick={(e) => e.stopPropagation()}>
        {mine ? (
          <>
            <Menu>수정</Menu>
            <RedMenu>삭제</RedMenu>
          </>
        ) : (
          <RedMenu>신고</RedMenu>
        )}
      </Menus>
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
