import React, { useCallback, useRef, useState } from 'react';
import { useAddFeed } from '../../api/feed';
import camera from '../../common/styles/assets/camera.svg';
import down from '../../common/styles/assets/down.svg';
import cross from '../../common/styles/assets/cross.svg';
import HeaderWithBack from '../../common/components/HeaderWithBack';
import { useNavigate } from 'react-router-dom';
import ContentsArea from '../../common/components/ContentsArea';
import {
  FeedContents,
  FeedAddWrap,
  ImgArea,
  ImgInput,
  PreviewImg,
  DeleteButton,
  SocialInput,
  Line,
  Count,
} from './styles';
import { uploadFile } from '../../common/utils/upload';

export interface AddFeedBody {
  contents: string;
  socialId?: number | null;
  images: {
    imagePath: string;
  }[];
  regions?: number;
  regionName?: string;
}

const MAX_CONTENT = 200;

export default function FeedAdd() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imgFiles, setImgFiles] = useState<File[]>([]);
  const [imgPreviews, setImgPreviews] = useState<string[]>([]);
  const [contents, setContents] = useState('');
  const { mutate } = useAddFeed();
  const navigate = useNavigate();

  const handleAddFeed = async () => {
    if (contents.length === 0 || imgFiles.length === 0) {
      alert('사진이나 내용을 작성해주세요.');
      return;
    }
    const imagePaths = [];
    try {
      for (const file of imgFiles) {
        const imagePath = await uploadFile(file);
        if (!imagePath) throw new Error('path is null');
        imagePaths.push({ imagePath });
      }
    } catch (error) {
      alert(`이미지 업로드에 문제가 있습니다. ${error}`);
      return;
    }

    mutate(
      {
        contents,
        images: imagePaths,
      },
      {
        onSuccess: () => {
          navigate(`/feed`);
        },
        onError: () => {
          alert('피드 작성에 실패했습니다.');
        },
      }
    );
  };

  const handleChangeContents = (e: React.ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    if (contents.length >= MAX_CONTENT) {
      setContents(target.value.slice(0, 200));
    } else {
      setContents(target.value);
    }
  };

  const handleDeletePreview = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    const id = Number(target.id);
    setImgFiles((files) => files.filter((_, i) => i !== id));
    setImgPreviews((previews) => previews.filter((_, i) => i !== id));
  };

  const handleUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const files = e.target.files;
    console.log(files);
    for (const file of Array.from(files)) {
      setImgFiles((prev) => {
        if (prev.length >= 3) return prev;
        return [...prev, file];
      });
      setImgPreviews((prev) => {
        if (prev.length >= 3) return prev;
        return [...prev, URL.createObjectURL(file)];
      });
    }
  }, []);

  const handleClickInput = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <FeedAddWrap>
      <HeaderWithBack
        title="피드 작성"
        onClickBack={() => navigate(-1)}
        isAdd={true}
        onAdd={handleAddFeed}
      />
      <ContentsArea>
        <input type="file" accept="image/*" ref={inputRef} onChange={handleUploadImage} multiple />
        <ImgArea>
          <ImgInput onClick={handleClickInput}>
            <img src={camera} alt="" />
            {`${imgFiles.length} / 3`}
          </ImgInput>
          {imgPreviews.length === 0 ? (
            <span>사진을 한 개 이상 첨부해 주세요</span>
          ) : (
            imgPreviews.map((src, i) => (
              <div key={i}>
                <PreviewImg src={src} alt="" />
                <DeleteButton id={String(i)} onClick={handleDeletePreview}>
                  <img src={cross} alt="" />
                </DeleteButton>
              </div>
            ))
          )}
        </ImgArea>
        <SocialInput>
          모임 선택 안함 <img src={down} alt="down" />
        </SocialInput>
        <Line />
        <FeedContents
          value={contents}
          onChange={handleChangeContents}
          placeholder="피드에 올릴 게시글 내용을 작성해주세요."
        />
        <Count>
          <span>{contents.length}</span> / <span>{MAX_CONTENT}</span>
        </Count>
      </ContentsArea>
    </FeedAddWrap>
  );
}
