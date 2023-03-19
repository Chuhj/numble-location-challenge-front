import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SignupInputs } from '../../views/Signup';
import { fontStyle } from '../../common/styles/FontStyle';
import { caculate } from '../../common/utils/caculateDistance';

declare global {
  interface Window {
    kakao: any;
  }
}
const { kakao } = window;

export default function ThirdForm({ inputs, setInputs }: { inputs: SignupInputs; setInputs: (value: any) => void }) {
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    let curLat = 37.566752112760476;
    let curLong = 126.97859568416706;

    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(curLat, curLong),
      level: 9,
    };
    const map = new kakao.maps.Map(container, options);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const curLat = coords.latitude;
        const curLong = coords.longitude;
        const curPosition = new kakao.maps.LatLng(curLat, curLong);
        map.setCenter(curPosition);

        const dongList = caculate(curLat, curLong);

        dongList.sort((a, b) => a.distance - b.distance);
        setSelectedLocation(dongList[0].dongName);
        setInputs({ ...inputs, dongName: dongList[0].dongName, dongCode: dongList[0].dongCode });

        for (const dong of dongList) {
          const content = `<div style="font-size: 11px;">${dong.dongName}</div>`;
          const position = new kakao.maps.LatLng(dong.lat, dong.long);
          const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position, // 마커를 표시할 위치
            title: dong.dongName, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            clickable: true,
          });

          const infowindow = new kakao.maps.InfoWindow({
            content, // 인포윈도우에 표시할 내용
          });

          kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
          kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
          kakao.maps.event.addListener(marker, 'click', makeClickListener(dong));
        }

        // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
        function makeOverListener(map: any, marker: any, infowindow: any) {
          return function () {
            infowindow.open(map, marker);
          };
        }

        // 인포윈도우를 닫는 클로저를 만드는 함수입니다
        function makeOutListener(infowindow: any) {
          return function () {
            infowindow.close();
          };
        }

        function makeClickListener(dong: any) {
          return function () {
            setSelectedLocation(dong.dongName);
            setInputs({ ...inputs, dongName: dong.dongName, dongCode: dong.dongCode });
          };
        }
      });
    }
  }, []);

  return (
    <>
      <div id="map" style={{ height: '230px', width: '100%', zIndex: 0 }} />
      <LocationLabel>{selectedLocation}</LocationLabel>
      <Help>
        <span>동네 인증을 마친 지역</span>(6km 이내) 에서만 활동할 수 있어요. 현재 위치가 맞는지 확인해주세요.
      </Help>
    </>
  );
}

const LocationLabel = styled.div`
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${fontStyle(14, 'bold', 'white')}
  background-color: ${({ theme }) => theme.colors.black};
`;

const Help = styled.div`
  ${fontStyle(13)}
  span {
    font-weight: 700;
  }
  padding: 22px 30px 0 16px;
`;
