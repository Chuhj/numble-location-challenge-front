import proj4 from 'proj4';
import center_coordinate from './center_coordinate.json';

export const caculate = (lat: number, long: number) => {
  const { data } = center_coordinate;
  const wgsProjection = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs'; // from WGS84 경위도
  const utmkProjection = '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs'; // to UTM-K
  const xy = proj4(wgsProjection, utmkProjection, [long, lat]); // from 경위도
  console.log(data);
  // 경위도?
  const [x, y] = xy;

  const dongList = [];
  for (const dong of data) {
    const dongX = Number(dong.X);
    const dongY = Number(dong.Y);
    const distance = Math.sqrt(Math.pow(x - dongX, 2) + Math.pow(y - dongY, 2));
    if (distance <= 6000) {
      const longLat = proj4(utmkProjection, wgsProjection, [dongX, dongY]);
      const [long, lat] = longLat;

      dongList.push({ dongName: dong.ADMNM, dongCode: Number(dong.ADMCD), lat, long, distance });
    }
  }

  return dongList;
};
