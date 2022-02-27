export const bookNames = [
  '떨림과 울림',
  '상자 밖에 있는 사람',
  '난 왜 아가리로만 할까',
  '제텔카스텐',
  '파인만의 물리학 강의',
] as const;

export type BookNameTypes = typeof bookNames[number];
