import {atom, selector} from 'recoil';

export const isLoadingState = atom({
  key: 'isLoadingState',
  default: false,
});

export const notiCount = atom({
  key: 'notiCount',
  default: 1,
});

export const themeState = atom({
  key: "themeState",
  default: "dark",
});

export const userDataState = atom({
  key: "userDataState",
  default: null,
});