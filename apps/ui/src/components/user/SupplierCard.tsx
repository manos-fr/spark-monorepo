import React from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
import tw from 'twrnc';

interface SupplierCardProps {
  name: string | undefined | null;
  imageUrl: string | undefined | null;
  address: string | undefined | null;
}

const SupplierCard = ({ name, imageUrl, address }: SupplierCardProps) => (
  <View style={tw`w-36 mx-2 mt-4`}>
    <Image
      source={imageUrl}
      contentFit="cover"
      style={tw`border rounded-lg w-36 h-36`}
    />
    <View style={tw`flex mt-2`}>
      <Text style={tw`text-black font-bold`}>{name}</Text>
      <Text style={tw`text-black text-xs overflow-hidden mt-2`}>{address}</Text>
    </View>
  </View>
);

export default SupplierCard;
