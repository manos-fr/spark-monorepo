import { Slot } from 'expo-router';
import { Footer } from '../../components/layout/Footer';
import { StatusBar, SafeAreaView, View, AppState } from 'react-native';
import tw from 'twrnc';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCallback, useEffect } from 'react';
import { useAuthStore } from '../../state/useStore';
import { useUpdateUserLastSeenMutation } from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';

export default function AppLayout() {
  const insets = useSafeAreaInsets();
  const { dbUser, user } = useAuthStore((state) => state);

  const [updateUserLastSeenMutation] = useUpdateUserLastSeenMutation({
    client: useGraphQlClient(),
  });

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

  const updateUserLastSeen = useCallback(async () => {
    const userId = dbUser?.id;
    if (!userId || !user) return;

    try {
      const { data } = await updateUserLastSeenMutation({
        variables: { id: userId },
      });
      console.log({ data: data?.update_users_by_pk });
    } catch (error) {
      console.log('Error updating user last seen', { error });
    }
  }, [dbUser?.id, updateUserLastSeenMutation, user]);

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent={true}
        animated={true}
      />
      <SafeAreaView style={tw`bg-white flex-1 max-h-${insets.top}`} />
      <View
        style={tw`z-50 absolute top-0 left-0 right-0 h-${insets.top / 4} bg-teal-700 opacity-95`}
      />
      <Slot />
      <SafeAreaView style={tw`bg-white flex-1 min-h-${insets.bottom * 0.4}`} />
      <Footer bottomInset={insets.bottom * 0.4} />
    </>
  );
}
