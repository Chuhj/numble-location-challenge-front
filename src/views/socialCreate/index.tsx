import { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { queryClient } from '../../api/config/queryClient'
import { makePost } from '../../api/makeRequest'
import Header from '../../common/components/Header'
import Tag from '../../common/components/Tag'
import { uploadFile } from '../../common/utils/upload'
import { ContentInput, FileInput, Input, InputWrap, SocialCrateWrap, StepBtn, TabItem, Title } from './socialCreate'
import { TAG_LIST } from './socialCreate.constant'

export default function SocialCrate() {
  const [img, setImg] = useState()
  const [step, setStep] = useState(0)
  const [titleState, setTitleState] = useState('')
  const [contentState, setContentState] = useState('')
  const [selectTag, setSelectTag] = useState('')
  const [endDate, setEndDate] = useState('')
  const [cnt, setCnt] = useState('')
  const [call, setCall] = useState('')

  const nav = useNavigate()

  const { mutate } = useMutation((body: any) => makePost({ endpoint: '/social', body }), {
    onSuccess: () => {
      queryClient.invalidateQueries('/social')
      Swal.fire('모임이 등록되었습니다.')
      nav('/social')
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: '모임을 등록하지 못했습니다.',
      })
    },
  })

  const onPostSocial = async () => {
    const imgLocation = await uploadFile(img)
    const params = {
      title: titleState,
      contents: contentState,
      startDate: '2022-11-30T18:29:43.772Z',
      endDate: new Date(endDate),
      limitedNums: cnt,
      contact: call,
      tags: [
        {
          tag: selectTag,
        },
      ],
      images: [
        {
          imagePath: 'https://content.surfit.io/thumbs/image/3jmqK/RveOk/8189222306383605d8482d/cover-center-2x.webp',
        },
      ],
    }

    mutate(params)
  }

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
              <FileInput type="file" onChange={(e: any) => setImg(e.target.files[0])} />
              <ContentInput
                maxLength={200}
                value={contentState}
                onChange={(e) => setContentState(e.target.value)}
                placeholder="모임을 소개하는 글을 작성해주세요."
              />
              <span>{contentState.length}/200</span>
            </InputWrap>
          </>
        )}
        {step === 2 && (
          <>
            <Title> 모임의 태그를 정해주세요. </Title>
            <div style={{ paddingBottom: '80px' }}>
              {Object.keys(TAG_LIST).map((tag) => (
                <TabItem>
                  <strong>{TAG_LIST[tag].title}</strong>
                  <div>
                    {TAG_LIST[tag].list.map((item: any) => (
                      <Tag name={item.name} handler={() => setSelectTag(item.name)} isSelect={item.name === selectTag} />
                    ))}
                  </div>
                </TabItem>
              ))}
            </div>
          </>
        )}
        {step === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Title> 모임의 세부 계획을 알려주세요. </Title>
            <Input value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="모집 마감일" type="date" />
            <Input value={cnt} onChange={(e) => setCnt(e.target.value)} placeholder="모집 인원" type="number" />
            <Input value={call} onChange={(e) => setCall(e.target.value)} placeholder="연락 수단" />
          </div>
        )}
        {step < 3 ? <StepBtn onClick={() => setStep(step + 1)}>다음</StepBtn> : <StepBtn onClick={onPostSocial}>완료</StepBtn>}
      </SocialCrateWrap>
    </>
  )
}
