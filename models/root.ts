import {create} from 'zustand';

type State = {
  currentTheme: string;
};

type Action = {
  toggleTheme: () => void;
};

export const useRootStore = create<State & Action>(set => ({
  currentTheme: 'light',
  toggleTheme: () =>
    set(state =>
      state.currentTheme === 'light'
        ? {currentTheme: 'dark'}
        : {currentTheme: 'light'},
    ),
}));
