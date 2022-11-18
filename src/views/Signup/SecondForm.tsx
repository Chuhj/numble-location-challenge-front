import { Props } from './FirstForm';
import { Info, Input, Label } from './styles';

export default function SecondForm({ inputs, handleChangeInputs }: Props) {
  return (
    <>
      <Info>
        이름과 핸드폰 번호,
        <br /> 활동에 사용할 닉네임을 알려주세요.
      </Info>

      <Label htmlFor="name">이름</Label>
      <Input type="text" id="username" value={inputs.username} placeholder="이름을 입력하세요" onChange={handleChangeInputs} />

      <Label htmlFor="phone">핸드폰 번호</Label>
      <Input type="tel" id="phoneNumber" value={inputs.phoneNumber} placeholder="010-0000-0000" onChange={handleChangeInputs} />

      <Label htmlFor="nickname">닉네임</Label>
      <Input type="text" id="nickname" value={inputs.nickname} placeholder="닉네임을 입력하세요" onChange={handleChangeInputs} />
    </>
  );
}
