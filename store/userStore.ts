import { create } from 'zustand';

type UserStore = {
  hasFinishedOnboarding: boolean;
  toggleHasOnboarded: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  hasFinishedOnboarding: false,
  toggleHasOnboarded: () =>
    set((state) => ({
      hasFinishedOnboarding: !state.hasFinishedOnboarding
    }))
}));
