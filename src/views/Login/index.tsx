import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import HeaderWithBack from '../../common/components/HeaderWithBack';
import ContentsArea from '../../common/components/ContentsArea';
import { Input, Label, SubmitButton } from '../Signup/styles';
import { Logo } from './styles';
import { setHeadersToken, useLogin } from '../../api/auth';
import { isLoginState } from '../../common/atoms';

export interface LoginInputs {
  email: string;
  password: string;
}

export default function Login() {
  const [inputs, setInputs] = useState<LoginInputs>({ email: '', password: '' });
  const { mutate } = useLogin();
  const setIsLogin = useSetRecoilState(isLoginState);
  const navigate = useNavigate();

  const handleClickBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleChangeInputs = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setInputs({ ...inputs, [id]: value });
    },
    [inputs]
  );

  const handleLogin = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      mutate(inputs, {
        onSuccess: (data) => {
          setHeadersToken(data);
          if (data.data.success) setIsLogin(true);
        },
        onError: (data) => {
          const errorCode = data.response?.data.errorCode;
          if (errorCode === -111) alert('존재하지 않는 계정입니다.');
          else alert('로그인에 실패했습니다.');
          setIsLogin(false);
        },
      });
    },
    [inputs, mutate, setIsLogin]
  );

  return (
    <>
      <HeaderWithBack title="로그인" onClickBack={handleClickBack} />
      <Logo />
      <form>
        <ContentsArea>
          <Label htmlFor="email">이메일</Label>
          <Input type="email" id="email" value={inputs.email} onChange={handleChangeInputs} placeholder="이메일을 입력하세요" />

          <Label htmlFor="password">비밀번호</Label>
          <Input type="password" id="password" value={inputs.password} onChange={handleChangeInputs} placeholder="비밀번호를 입력하세요" />
        </ContentsArea>
        <SubmitButton onClick={handleLogin}>로그인</SubmitButton>
      </form>
    </>
  );
}
