import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useAuthStore } from '../../state/useStore';
import { router } from 'expo-router';

const ErrorComponent = () => {
  const error = useAuthStore(
    (s) => s.registerError || s.loginError || s.generalError,
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      useAuthStore.setState({ generalError: null });
      router.push('/sign-up');
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [error]);

  return (
    <View style={tw`bg-black`}>
      <View style={tw`bg-red-400 p-4 rounded-xl absolute top-40`}>
        <Text style={tw`text-gray-200 font-semibold text-lg`}>
          {error?.toString() || 'An error occurred'}
        </Text>
      </View>
    </View>
  );
};

export default ErrorComponent;
