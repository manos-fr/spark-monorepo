import { Slot } from 'expo-router';
import { Footer } from '../../components/layout/Footer';
import { StatusBar, SafeAreaView, AppState } from 'react-native';
import tw from 'twrnc';
import { useCallback, useEffect } from 'react';
import { useAuthStore, useErrorStore } from '../../state/useStore';
import { useUpdateUserLastSeenMutation } from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import * as Device from 'expo-device';
import Header from '../../components/layout/Header';

export default function AppLayout() {
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

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
        animated={true}
      />
      {Device.deviceType !== Device.DeviceType.DESKTOP && <Header />}
      <SafeAreaView style={tw`bg-white`} />
      <Slot />
      <SafeAreaView style={tw`bg-white`} />
      {Device.deviceType !== Device.DeviceType.DESKTOP && <Footer />}
    </>
  );
}
