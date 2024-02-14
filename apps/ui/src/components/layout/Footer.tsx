import tw from 'twrnc';
import { View, Text } from 'react-native';

export const Footer = () => (
  <View
    style={tw`flex items-center justify-center bottom-0 left-0 right-0 min-h-15 bg-slate-500`}
  >
    <Text style={tw`text-4xl text-white m-4`}>This is a Footer</Text>
  </View>
);

export default Footer;
