import tw from 'twrnc';
import { View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export const Header = () => {
  const router = useRouter();
  return (
    <View style={tw`flex justify-center top-0 left-0 right-0 p-6 bg-teal-700`}>
      <View style={tw`flex-row justify-end bg-teal-700`}>
        <Pressable onPress={() => router.push('/settings')}>
          <Ionicons
            name="settings-outline"
            size={26}
            color="black"
            style={tw`pt-10 pr-1`}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
