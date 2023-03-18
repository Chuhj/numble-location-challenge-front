const DAY: { [key: number]: string } = {
  0: '일',
  1: '월',
  2: '화',
  3: '수',
  4: '목',
  5: '금',
  6: '토',
};

export const formatDate = (dateString: string) => {
  const fromDate = new Date(dateString);
  const month = fromDate.getMonth() + 1;
  const date = fromDate.getDate();
  const day = DAY[fromDate.getDay()];
  return `${month}.${date} (${day})`;
};

export const formatRelativeDate = (dateString: string) => {
  const diff = new Date().getTime() - new Date(dateString).getTime();
  const diffSec = Math.round(diff / 1000);
  const diffMinutes = Math.round(diffSec / 60);
  const diffHours = Math.round(diffMinutes / 60);
  const diffDays = Math.round(diffHours / 24);
  const diffWeeks = diffDays >= 7 ? Math.round(diffDays / 7) : 0;
  const diffMonths = diffWeeks >= 5 ? Math.round(diffWeeks / 5) : 0;
  const diffYears = diffMonths >= 12 ? Math.round(diffMonths / 12) : 0;

  if (diffYears > 0) {
    return `${diffYears}년 전`;
  } else if (diffMonths > 0) {
    return `${diffMonths}달 전`;
  } else if (diffWeeks > 0) {
    return `${diffWeeks}주 전`;
  } else if (diffDays > 0) {
    return `${diffDays}일 전`;
  } else if (diffHours > 0) {
    return `${diffHours}시간 전`;
  } else if (diffMinutes > 0) {
    return `${diffMinutes}분 전`;
  } else if (diffSec > 0) {
    return `${diffSec}초 전`;
  } else {
    return `방금 전`;
  }
};
