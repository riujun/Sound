import { create } from 'zustand';

export const useStore = create<{ name: string }>((Set) => ({
  name: '',
}));
