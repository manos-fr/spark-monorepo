import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import TextInputLabel from '../../../components/user-input/TextInputLabel';

export const Login = () => (
  <SafeAreaView style={tw`bg-white flex-1 mx-1`}>
    <ScrollView>
      <View style={tw`px-4 mt-18`}>
        <Link href="/welcome">
          <Ionicons name="chevron-back-outline" size={26} color="black" />
        </Link>
        <Text
          style={tw`font-extrabold text-black text-2xl text-left mt-8 mb-10`}
        >
          Κάνε σύνδεση.
        </Text>

        <View>
          <TextInputLabel label="Email" />

          <TextInputLabel label="Κωδικός" secureTextEntry />

          <Link href="/forgot-password">
            <Text style={tw`font-semibold text-teal-700 mb-5`}>
              Ξέχασα τον κωδικό μου.
            </Text>
          </Link>
        </View>

        <TouchableOpacity
          style={tw`bg-teal-700 rounded-lg py-2 mt-8`}
          onPress={() => router.replace('/home-page')}
        >
          <Text style={tw`text-center font-semibold text-white text-lg`}>
            Σύνδεση
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default Login;
