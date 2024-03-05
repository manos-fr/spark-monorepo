import tw from 'twrnc';
import { View } from 'react-native';
import { Image } from 'expo-image';
import logo from '../../assets/logo/spark-logo-horizontal.png';

export const Header = () => (
  <View style={tw`flex items-center justify-center h-30 bg-teal-700`}>
    <Image source={logo} style={tw`w-60 h-60 mt-10`} />
  </View>
);

export default Header;
