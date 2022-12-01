import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentsArea from '../../common/components/ContentsArea';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import HeaderWithBack from '../../common/components/HeaderWithBack';
import { SignupWrapper, SubmitButton } from './styles';
import { isEmailValid, isPhoneValid } from '../../common/utils/validate';
import CancelModal from './CancelModal';
import { useSignup } from '../../api/auth';
import ThirdForm from './ThirdForm';

export interface SignupInputs {
  email: string;
  password: string;
  username: string;
  phoneNumber: string;
  nickname: string;
  dongCode: string;
  dongName: string;
}

export default function Signup() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [inputs, setInputs] = useState<SignupInputs>({
    email: '',
    password: '',
    username: '',
    phoneNumber: '',
    nickname: '',
    dongCode: '',
    dongName: '',
  });
  const [isModalShow, setIsModalShow] = useState(false);
  const { mutate } = useSignup();

  const handleSignup = useCallback(() => {
    mutate(
      { ...inputs, userType: 'DEFAULT' },
      {
        onSuccess: () => {
          alert('회원가입에 성공했습니다.');
          navigate('/login');
        },
        onError: (data) => {
          const errorCode = data.response?.data.errorCode;
          if (data.response?.status === 400) {
            if (errorCode === -101) alert('이메일이 이미 존재합니다.');
            if (errorCode === -102) alert('닉네임이 이미 존재합니다.');
            if (errorCode === -103) alert('이메일과 닉네임이 이미 존재합니다.');
          } else {
            alert('회원가입에 실패했습니다.');
          }
        },
      }
    );
  }, [inputs, mutate, navigate]);

  const handleClickButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (page !== 3 && isEmailValid(inputs.email)) setPage((prev) => prev + 1);
      if (page === 3) {
        handleSignup();
      }
    },
    [page, inputs.email, handleSignup]
  );

  const handleChangeInputs = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setInputs({ ...inputs, [id]: value });
    },
    [inputs]
  );

  const handleClickBack = useCallback(() => {
    if (page === 1) setIsModalShow(true);
    else setPage((prev) => prev - 1);
  }, [page]);

  const isButtonAvailable =
    (page === 1 && inputs.email !== '' && isEmailValid(inputs.email) && inputs.password !== '') ||
    (page === 2 && inputs.username !== '' && inputs.phoneNumber !== '' && isPhoneValid(inputs.phoneNumber) && inputs.nickname !== '') ||
    (page === 3 && inputs.dongName !== '' && inputs.dongCode);

  return (
    <SignupWrapper>
      <HeaderWithBack title={page === 3 ? '동네인증' : '회원가입'} onClickBack={handleClickBack} />
      <form>
        <ContentsArea>
          {page === 1 && <FirstForm inputs={inputs} onChangeInputs={handleChangeInputs} />}
          {page === 2 && <SecondForm inputs={inputs} onChangeInputs={handleChangeInputs} />}
        </ContentsArea>
        {page === 3 && <ThirdForm inputs={inputs} setInputs={setInputs} />}
        <SubmitButton onClick={handleClickButton} disabled={!isButtonAvailable}>
          {page === 3 ? '가입완료' : '다음'}
        </SubmitButton>
      </form>
      {isModalShow ? (
        <CancelModal
          onClickCancel={(e) => {
            setIsModalShow(false);
          }}
          onClickConfirm={() => navigate('/')}
        />
      ) : null}
    </SignupWrapper>
  );
}
