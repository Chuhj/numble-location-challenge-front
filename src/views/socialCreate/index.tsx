import { useState } from 'react'
import Header from '../../common/components/Header'
import Tag from '../../common/components/Tag'
import { ContentInput, FileInput, Input, InputWrap, SocialCrateWrap, StepBtn, TabItem, Title } from './socialCreate'
import { TAG_LIST } from './socialCreate.constant'

export default function SocialCrate() {
  const [step, setStep] = useState(0)

  const [titleState, setTitleState] = useState('')
  const [contentState, setContentState] = useState('')

  return (
    <>
      <Header isBack tabName="모임 개설" />
      <SocialCrateWrap>
        {step === 0 && (
          <>
            <Title> 모임의 이름을 정해주세요.</Title>
            <InputWrap>
              <Input
                maxLength={30}
                value={titleState}
                onChange={(e) => setTitleState(e.target.value)}
                placeholder="다같이 영화보러 가실 분!"
              />
              <span>{titleState.length}/30</span>
            </InputWrap>
          </>
        )}
        {step === 1 && (
          <>
            <Title> 모임을 대표할 사진을 정하고, 소개글을 입력해주세요.</Title>
            <InputWrap>
              <FileInput type="file" />
              <ContentInput
                maxLength={200}
                value={titleState}
                onChange={(e) => setTitleState(e.target.value)}
                placeholder="모임을 소개하는 글을 작성해주세요."
              />
              <span>{contentState.length}/200</span>
            </InputWrap>
          </>
        )}
        {step === 2 && (
          <>
            <Title> 모임의 태그를 정해주세요. ( 최대 3개 선택 가능 ) </Title>
            {Object.keys(TAG_LIST).map((tag) => (
              <TabItem>
                <strong>{TAG_LIST[tag].title}</strong>
                <div>
                  {TAG_LIST[tag].list.map((item: any) => (
                    <Tag name={item.name} />
                  ))}
                </div>
              </TabItem>
            ))}
          </>
        )}
        <StepBtn onClick={() => setStep(step + 1)}>다음</StepBtn>
      </SocialCrateWrap>
    </>
  )
}
