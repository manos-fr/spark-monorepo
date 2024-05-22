import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useErrorStore } from '../../state/useStore';
import * as Device from 'expo-device';

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
          {error?.error?.toString() || 'An error occurred'}
        </Text>
      </View>
    </View>
  );
};
export default ErrorComponent;
