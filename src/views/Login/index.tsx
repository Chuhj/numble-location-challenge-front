import HeaderWithBack from '../../common/components/HeaderWithBack';
import ContentsArea from '../../common/components/ContentsArea';
import { Input, Label, SubmitButton } from '../Signup/styles';
import { Logo } from './styles';

export default function Login() {
  return (
    <>
      <HeaderWithBack>로그인</HeaderWithBack>
      <Logo />
      <form>
        <ContentsArea>
          <Label htmlFor="email">이메일</Label>
          <Input type="email" id="email" value="" placeholder="이메일을 입력하세요" />

          <Label htmlFor="password">비밀번호</Label>
          <Input type="password" id="password" value="" placeholder="비밀번호를 입력하세요" />
          <SubmitButton onClick={e => console.log('click')}>로그인</SubmitButton>
        </ContentsArea>
      </form>
    </>
  );
}
