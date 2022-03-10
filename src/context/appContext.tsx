import { createContext, useContext, useState } from 'react';
import * as React from 'react';

type appContextType = {
  currentUserId: string;
  updateCurrentUserId: (currentUserId: string) => void;
  currentChatId: string;
  updateCurrentChatId: (currentChatId: string) => void;
};

const appContextDefaultValues: appContextType = {
  currentUserId: '',
  updateCurrentUserId: () => {},
  currentChatId: '',
  updateCurrentChatId: () => {},
};

const AppContext = createContext<appContextType>(appContextDefaultValues);
export const useAppContext = () => useContext(AppContext);

type Props = {
  children: ReactNode;
};

const AppContextProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState<string>('dummy');
  const [chatId, setChatId] = useState<string>('dummy');

  return (
    <>
      <AppContext.Provider
        value={{
          currentUserId: userId,
          updateCurrentUserId: setUserId,
          currentChatId: chatId,
          updateCurrentChatId: setChatId,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppContextProvider;
