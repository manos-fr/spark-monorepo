import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Link, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

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
          <Text style={tw`font-semibold text-gray-600 mb-2`}>Email</Text>
          <TextInput style={tw`bg-gray-100 py-3 rounded-lg mb-5`} />

          <Text style={tw`font-semibold text-gray-600 mb-2`}>Κωδικός</Text>
          <TextInput
            secureTextEntry
            style={tw`bg-gray-100 py-2 rounded-lg mb-3`}
          />

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
