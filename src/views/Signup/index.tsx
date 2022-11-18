import React, { useCallback, useState } from 'react';
import axiosInstance from '../../api/config/axios';
import HeaderWithBack from '../../common/components/HeaderWithBack';
import ContentsArea from '../../common/components/ContentsArea';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import { SignupWrapper, SubmitButton } from './styles';
import { isEmailValid, isPhoneValid } from '../../common/utils/validate';

export interface Inputs {
  email: string;
  password: string;
  username: string;
  phoneNumber: string;
  nickname: string;
}

export default function Signup() {
  const [page, setPage] = useState(1);
  const [inputs, setInputs] = useState<Inputs>({
    email: '',
    password: '',
    username: '',
    phoneNumber: '',
    nickname: '',
  });
  console.log(inputs);

  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (page !== 2 && isEmailValid(inputs.email)) setPage(prev => prev + 1);
    if (page === 2) {
      submit();
    }
  };

  const submit = () => {};

  const handleChangeInputs = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setInputs({ ...inputs, [id]: value });
    },
    [inputs]
  );

  const isButtonAvailable =
    (page === 1 && inputs.email !== '' && isEmailValid(inputs.email) && inputs.password !== '') ||
    (page === 2 && inputs.username !== '' && inputs.phoneNumber !== '' && isPhoneValid(inputs.phoneNumber) && inputs.nickname !== '');

  return (
    <SignupWrapper>
      <HeaderWithBack>{page === 3 ? '동네인증' : '회원가입'}</HeaderWithBack>
      <form>
        <ContentsArea>
          {page === 1 && <FirstForm inputs={inputs} handleChangeInputs={handleChangeInputs} />}
          {page === 2 && <SecondForm inputs={inputs} handleChangeInputs={handleChangeInputs} />}
        </ContentsArea>
        <SubmitButton onClick={handleClickButton} disabled={!isButtonAvailable}>
          {page === 3 ? '가입완료' : '다음'}
        </SubmitButton>
      </form>
    </SignupWrapper>
  );
}
