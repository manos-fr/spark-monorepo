import { Slot } from 'expo-router';
import { Footer } from '../../components/layout/Footer';
import { StatusBar, SafeAreaView, AppState, Platform } from 'react-native';
import tw from 'twrnc';
import { useCallback, useEffect } from 'react';
import { useAuthStore, useErrorStore } from '../../state/useStore';
import { useUpdateUserLastSeenMutation } from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import Header from '../../components/layout/Header';
import { usePathname } from 'expo-router';

export default function AppLayout() {
  const path = usePathname();
  const { dbUser, user } = useAuthStore((state) => state);
  const { setError } = useErrorStore((state) => state);

  const [updateUserLastSeenMutation] = useUpdateUserLastSeenMutation({
    client: useGraphQlClient(),
  });

  const updateUserLastSeen = useCallback(async () => {
    const userId = dbUser?.id;
    if (!userId || !user) return;

    try {
      const { data } = await updateUserLastSeenMutation({
        variables: { id: userId },
      });
      console.log({ data: data?.update_users_by_pk });
    } catch (error) {
      setError(error);
    }
  }, [dbUser?.id, updateUserLastSeenMutation, user, setError]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (AppState.currentState === 'active') {
        await updateUserLastSeen();
      }
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleAppStateChange = useCallback(async (nextAppState: any) => {
    if (nextAppState === 'active') {
      await updateUserLastSeen();
    }
  }, []);

  useEffect(() => {
    const listener = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      listener.remove();
    };
  }, [handleAppStateChange]);

  const isBrowser = Platform.OS === 'web';

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
        animated={true}
      />
      {!isBrowser && <Header />}
      <SafeAreaView style={tw`bg-white`} />
      <Slot />

      {!path.includes('/chat') && <SafeAreaView style={tw`bg-white`} />}
      {!isBrowser && !path.includes('/chat') && <Footer />}
    </>
  );
}
