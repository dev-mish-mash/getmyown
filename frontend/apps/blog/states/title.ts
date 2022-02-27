import { atom } from 'recoil';
import { bookNames, BookNameTypes } from '../constants';

export const getRandomBookName = () => bookNames[~~(Math.random() * bookNames.length)];

export const titleAtom = atom<BookNameTypes>({
  key: '@titleAtom',
  default: getRandomBookName(),
});
