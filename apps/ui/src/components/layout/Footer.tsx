import tw from 'twrnc';
import { View, Text } from 'react-native';

export const Footer = ({ bottomInset }: { bottomInset: number }) => (
  <View
    style={tw`items-center absolute bottom-0 left-0 right-0 h-${bottomInset} bg-teal-700 opacity-90`}
  >
    <Text style={tw`text-sm text-white p-4`}>This is a Footer</Text>
  </View>
);

export default Footer;
