import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { router } from 'expo-router';

const ErrorComponent = (error: any) => (
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     router.push('/sign-up');
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  <View style={tw`flex items-center`}>
    <View style={tw`bg-red-400 p-4 rounded-xl mb-2`}>
      <Text style={tw`text-gray-200 font-semibold text-lg`}>
        {error?.error?.toString() || 'An error occurred'}
      </Text>
    </View>
  </View>
);
export default ErrorComponent;
