import tw from 'twrnc';
import { View, Text } from 'react-native';

export const Header = () => (
  <View style={tw`flex items-center justify-center mb-2 min-h-35 bg-slate-500`}>
    <Text style={tw`text-4xl text-white mt-10`}>This is a header</Text>
  </View>
);

export default Header;
