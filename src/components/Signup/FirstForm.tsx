import React from 'react';
import { SignupInputs } from '../../views/Signup';
import { Info, Label, Input } from './styles';

export interface Props {
  inputs: SignupInputs;
  onChangeInputs: React.ChangeEventHandler<HTMLInputElement>;
}

export default function FirstForm({ inputs, onChangeInputs }: Props) {
  return (
    <>
      <Info>
        로그인에 사용할
        <br /> 이메일과 비밀번호를 알려주세요.
      </Info>
      <Label htmlFor="email">이메일</Label>
      <Input type="email" id="email" value={inputs.email} placeholder="이메일을 입력하세요" onChange={onChangeInputs} />

      <Label htmlFor="password">비밀번호</Label>
      <Input type="password" id="password" value={inputs.password} placeholder="비밀번호를 입력하세요" onChange={onChangeInputs} />
    </>
  );
}
