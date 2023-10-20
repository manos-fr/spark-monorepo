import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { useAuthStore } from '../state/useStore';
import { useEffect } from 'react';
import { auth } from '../firebase-config';
import { Auth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'expo-router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

export default function Root() {
  const router = useRouter();

  useEffect(() => {
    useAuthStore.setState(() => ({ auth }));

    const unSubscribe = onAuthStateChanged(auth as Auth, async (user) => {
      useAuthStore.setState(() => ({
        user,
        isLoggedIn: user ? true : false,
        initialized: true,
      }));
    });

    const unSub = useAuthStore.subscribe((state) => {
      console.log(state);
      if (state.generalError || state.loginError || state.registerError) {
        router.replace('/error');
      }
    });

    return () => {
      unSubscribe();
      unSub();
    };
  }, [router]);

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}
