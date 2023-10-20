import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { useAuthStore } from '../../../state/useStore';

const ErrorComponent = () => {
  const error = useAuthStore(
    (s) => s.registerError || s.loginError || s.generalError,
  );

  return (
    <View style={tw` h-screen bg-black`}>
      <View style={tw`bg-red-400 p-4 rounded-xl absolute top-40`}>
        <Text style={tw`text-gray-200 font-semibold text-lg`}>
          {error?.toString()}
        </Text>
      </View>
    </View>
  );
};

export default ErrorComponent;
