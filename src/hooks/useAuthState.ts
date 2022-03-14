import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState as useAuthStateOriginal } from 'react-firebase-hooks/auth';

export type AuthState = {
  isSignedIn: boolean;
  isLoading: boolean;
  userId?: string;
  userName?: string;
  email?: string;
  error?: Error;
};

const InitiateValues: AuthState = {
  isSignedIn: false,
  isLoading: true,
  userId: undefined,
  userName: undefined,
  email: undefined,
};

export const useAuthState = (): AuthState => {
  const [authState, setAuthState] = useState(InitiateValues);
  const [user, loading, error] = useAuthStateOriginal(getAuth());
  useEffect(() => {
    if (user) {
      setAuthState({
        isSignedIn: true,
        isLoading: loading,
        userId: user.uid,
        userName: user.displayName || undefined,
        email: user.email || undefined,
        error,
      });
    } else {
      setAuthState({ ...InitiateValues, isLoading: loading });
    }
  }, [user, loading, error]);

  return authState;
};
