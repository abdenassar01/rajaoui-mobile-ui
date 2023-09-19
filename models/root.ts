import {create} from 'zustand';
import {storeTheme} from '../app/theme/theme';

type State = {
  currentTheme: string;
};

type Action = {
  toggleTheme: () => void;
};

export const useRootStore = create<State & Action>(set => ({
  currentTheme: 'light',
  toggleTheme: () =>
    set(state => {
      if (state.currentTheme === 'light') {
        storeTheme('dark');
        return {currentTheme: 'dark'};
      } else {
        storeTheme('light');
        return {currentTheme: 'light'};
      }
    }),
}));
