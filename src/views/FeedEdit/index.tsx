import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useEditFeed, useGetFeed } from '../../api/feed';
import camera from '../../common/styles/assets/camera.svg';
import down from '../../common/styles/assets/down.svg';
import cross from '../../common/styles/assets/cross.svg';
import HeaderWithBack from '../../common/components/HeaderWithBack';
import { useLocation, useNavigate } from 'react-router-dom';
import ContentsArea from '../../common/components/ContentsArea';
import { FeedContents, FeedAddWrap, ImgArea, ImgInput, PreviewImg, DeleteButton, SocialInput, Line, Count } from '../FeedAdd/styles';
import { uploadFile } from '../../common/utils/upload';
import { queryClient } from '../../api/config/queryClient';

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

export default function FeedEdit() {
  const { state } = useLocation();
  const { data } = useGetFeed({ id: state.postId });
  const inputRef = useRef<HTMLInputElement>(null);
  const [imgFiles, setImgFiles] = useState<File[]>([]);
  const [imgPreviews, setImgPreviews] = useState<{ filename?: string; src: string }[]>([]);
  const [contents, setContents] = useState('');
  const { mutate } = useEditFeed();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) return;
    setContents(data.contents);
    setImgPreviews(
      data.images.map((image) => ({
        src: image.imagePath,
      }))
    );
  }, [data]);

  const handleEditFeed = async () => {
    if (contents.length === 0 || imgPreviews.length === 0) {
      alert('사진이나 내용을 작성해주세요.');
      return;
    }
    const imagePaths = data?.images.filter((image) => imgPreviews.some(({ src }) => src === image.imagePath)) || [];
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
      { id: state.postId, body: { contents, images: imagePaths } },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('feeds').then(() => navigate(`/feed`));
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
    const target = e.currentTarget as HTMLButtonElement;
    const { filename } = target.dataset;
    const id = Number(target.id);

    setImgFiles((files) => files.filter((file) => file.name !== filename));
    setImgPreviews((previews) => previews.filter((_, i) => i !== id));
  };

  const handleUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || imgPreviews.length >= 3) {
        return;
      }
      const files = e.target.files;

      for (const file of Array.from(files)) {
        setImgFiles((prev) => {
          if (prev.length >= 3) return prev;
          return [...prev, file];
        });
        setImgPreviews((prev) => {
          if (prev.length >= 3) return prev;
          return [...prev, { filename: file.name, src: URL.createObjectURL(file) }];
        });
      }
    },
    [imgPreviews]
  );

  const handleClickInput = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <FeedAddWrap>
      <HeaderWithBack title="피드 수정" onClickBack={() => navigate(-1)} isAdd={true} onAdd={handleEditFeed} />
      <ContentsArea>
        <input type="file" accept="image/*" ref={inputRef} onChange={handleUploadImage} multiple />
        <ImgArea>
          <ImgInput onClick={handleClickInput}>
            <img src={camera} alt="" />
            {`${imgPreviews.length} / 3`}
          </ImgInput>
          {imgPreviews.length === 0 ? (
            <span>사진을 한 개 이상 첨부해 주세요</span>
          ) : (
            imgPreviews.map(({ filename, src }, i) => (
              <div key={i}>
                <PreviewImg src={src} alt="" />
                <DeleteButton data-filename={filename} id={String(i)} onClick={handleDeletePreview}>
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
        <FeedContents value={contents} onChange={handleChangeContents} placeholder="피드에 올릴 게시글 내용을 작성해주세요." />
        <Count>
          <span>{contents.length}</span> / <span>{MAX_CONTENT}</span>
        </Count>
      </ContentsArea>
    </FeedAddWrap>
  );
}
