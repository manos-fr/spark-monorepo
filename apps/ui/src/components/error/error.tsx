import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useErrorStore } from '../../state/useStore';
import * as Device from 'expo-device';
import { FirebaseErrors } from '@spark-monorepo/spark-shared';

const ErrorComponent = (error: any) => {
  const { clearError } = useErrorStore((state) => state);

  useEffect(() => {
    const timeout = setTimeout(() => {
      clearError();
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const displayFirebaseError: { [key: string]: string } = {
    [FirebaseErrors.AUTH_EMAIL_ALREADY_IN_USE]: 'Email already in use',
    [FirebaseErrors.AUTH_INVALID_EMAIL]: 'Invalid email',
    [FirebaseErrors.AUTH_WRONG_PASSWORD]: 'Invalid password',
    [FirebaseErrors.AUTH_USER_NOT_FOUND]: 'User not found',
    [FirebaseErrors.AUTH_INVALID_PASSWORD]: 'Invalid password',
  };

  return (
    <View
      {...tw.style(
        'absolute bottom-0 top-3/4 left-0 right-0 justify-center items-center',
      )}
    >
      <View
        style={tw.style(
          `bg-red-400 py-2 px-4 rounded-xl max-w-md mb-2 ${Device.deviceType === Device.DeviceType.DESKTOP ? 'bottom-0 left-2/4 right-0 top-0 justify-center items-center' : ''}`,
          Device.deviceType === Device.DeviceType.DESKTOP && {
            transform: [{ translateX: '-50%' }],
          },
        )}
      >
        <Text style={tw`text-gray-200 font-semibold text-lg`}>
          {(error?.error?.name === 'FirebaseError' &&
            displayFirebaseError[`${error?.error?.code}`]) ||
            'An error occurred'}
        </Text>
      </View>
    </View>
  );
};
export default ErrorComponent;
