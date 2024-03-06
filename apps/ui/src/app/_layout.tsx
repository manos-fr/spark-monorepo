import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { useAuthStore } from '../state/useStore';
import { useEffect } from 'react';
import { auth } from '../firebase-config';
import { Auth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'expo-router';
import SignUp from '../../src/app/(app)/(auth)/sign-up';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
    mutations: {
      onError: (error) => {
        console.log({ error });
      },
    },
  },
});

export default function Root() {
  const router = useRouter();

  useEffect(() => {
    useAuthStore.setState(() => ({ auth }));

    const unSubscribeOnAuthStateChanged = onAuthStateChanged(
      auth satisfies Auth,
      async (user) => {
        if (user) {
          useAuthStore.setState(() => ({
            user,
            isLoggedIn: user ? true : false,
            initialized: true,
          }));
          router.replace('/home-page');
        } else {
          return <SignUp />;
        }
      },
    );

    const unSubState = useAuthStore.subscribe(async (state) => {
      console.log({ state });
      if (state.generalError || state.loginError || state.registerError) {
        if (state.generalError?.includes('Could not verify JWT: JWTExpired')) {
          await auth?.currentUser?.getIdToken(true);
        } else {
          router.push('/error');
        }
      }
    });

    return () => {
      unSubscribeOnAuthStateChanged();
      unSubState();
    };
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}
