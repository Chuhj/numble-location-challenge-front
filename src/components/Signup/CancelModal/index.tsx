import { Modal, ModalPopup, Body, Text, Buttons, Button, Line } from './styles';

interface CancelModalProps {
  onClickCancel: React.MouseEventHandler;
  onClickConfirm: () => void;
}

export default function CancelModal({ onClickCancel, onClickConfirm }: CancelModalProps) {
  return (
    <Modal onClick={onClickCancel}>
      <ModalPopup onClick={(e) => e.stopPropagation()}>
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
