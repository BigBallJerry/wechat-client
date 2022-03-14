import { User } from 'firebase/auth';
//An easy state machine
import create from 'zustand';

interface StoreType {
  currentUser: undefined | null | User;
  setCurrentUser: (user: User | null) => void;
  currentTheme: undefined | null | string;
  setCurrentTheme: (color: string | null) => void;
  currentChatId: undefined | null | string;
  setCurrentChatId: (color: string | null) => void;
}

export const useStore = create<StoreType>((set: any) => ({
  currentUser: undefined,
  currentTheme: undefined,
  currentChatId: undefined,
  setCurrentUser: (user) => set({ currentUser: user }),
  setCurrentTheme: (color) => set({ currentTheme: color }),
  setCurrentChatId: (chatId) => set({ currentChatId: chatId }),
}));
