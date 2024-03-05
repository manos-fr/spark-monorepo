import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import tw from 'twrnc';

interface SupplierCardProps {
  name: string;
  address: string;
  imageUrl: string;
}

const SupplierCard = ({ name, address, imageUrl }: SupplierCardProps) => (
  <View style={tw`mx-2 my-4`}>
    <Image source={imageUrl} style={tw`border rounded w-40 h-40`} />
    <View style={tw`flex items-start mt-2`}>
      <Text style={tw`text-black text-lg font-semibold`}>{name}</Text>
      <Text style={tw`w-38 text-black text-xs font-light`}>{address}</Text>
    </View>
  </View>
);

export default SupplierCard;
