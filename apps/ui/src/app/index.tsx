import { Redirect, router, useRootNavigationState } from 'expo-router';
import { useAuthStore, useErrorStore } from '../state/useStore';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  const navigationState = useRootNavigationState();
  const { isLoggedIn, user } = useAuthStore((s) => s);
  const { error } = useErrorStore((state) => state);

  useEffect(() => {
    if (!navigationState?.key) return;

    if (
      user &&
      !error &&
      !(error as any)?.response?.errors[0]?.message?.includes(
        'Could not verify JWT: JWSError',
      )
    ) {
      router.replace('/home-page');
    } else {
      router.push('/welcome');
    }
  }, [error, isLoggedIn, user, navigationState?.key]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {!navigationState?.key ? (
        <Text>{'LOADING...'}</Text>
      ) : (
        <Redirect href={'/home-page'}></Redirect>
      )}
    </View>
  );
}
