import styled from 'styled-components';
import { fontStyle } from '../../../common/styles/FontStyle';

interface CancelModalProps {
  onClickCancel: React.MouseEventHandler;
  onClickConfirm: () => void;
}

export default function CancelModal({ onClickCancel, onClickConfirm }: CancelModalProps) {
  return (
    <Modal onClick={onClickCancel}>
      <ModalPopup onClick={e => e.stopPropagation()}>
        <Body>
          <Text>회원가입을 취소하시겠어요?</Text>
          <Text sub>작성 중이던 내용이 사라집니다.</Text>
        </Body>
        <Buttons>
          <Button onClick={onClickCancel}>취소</Button>
          <Line />
          <Button onClick={onClickConfirm} confirm>
            확인
          </Button>
        </Buttons>
      </ModalPopup>
    </Modal>
  );
}

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const ModalPopup = styled.div`
  width: 23.6rem;
  height: 11rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  background-color: #fff;
  border-radius: 12px;
  z-index: 2;
`;

export const Body = styled.div`
  height: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div<{ sub?: boolean }>`
  ${({ sub }) => (sub ? fontStyle(10) : fontStyle(14, 'bold'))}
`;

export const Buttons = styled.div`
  height: 4rem;
  display: flex;
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Button = styled.button<{ confirm?: boolean }>`
  height: 100%;
  width: 50%;
  background-color: inherit;
  ${({ confirm }) => (confirm ? fontStyle(13, undefined, 'primary') : fontStyle(13, undefined, 'placeholder'))};
`;

export const Line = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.grey};
`;
