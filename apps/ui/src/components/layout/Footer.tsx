import tw from 'twrnc';
import { View, Text } from 'react-native';

export const Footer = () => (
  <View
    style={tw`flex items-center absolute bottom-0 left-0 right-0 min-h-15 bg-teal-700`}
  >
    <Text style={tw`text-xl text-white m-4`}>This is a Footer</Text>
  </View>
);

export default Footer;
