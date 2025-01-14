import tw from 'twrnc';
import { View, Text } from 'react-native';

export const Footer = () => (
  <View
    style={tw`flex justify-center items-center bottom-0 left-0 right-0 p-4 bg-teal-700`}
  >
    <Text style={tw`text-sm text-white p-4`}>This is a Footer</Text>
  </View>
);

export default Footer;
