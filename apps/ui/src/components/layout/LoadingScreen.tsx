import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import tw from 'twrnc';

const LoadingScreen = () => (
  <View style={tw.style('flex-1 justify-center items-center bg-gray-50')}>
    <ActivityIndicator size="large" color="black" />
  </View>
);

export default LoadingScreen;
