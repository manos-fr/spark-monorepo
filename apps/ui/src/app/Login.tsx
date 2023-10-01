import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { Link } from 'expo-router';
import tw from 'twrnc';

export const Auth = () => (
  <SafeAreaView style={tw`bg-white flex-1`}>
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={tw`p-5`}>
      <View style={tw`mb-5`}>
        <Text style={tw`font-bold text-black text-3xl mb-10 pl-5`}>
          Σύνδεση
        </Text>

        {/* Input fields */}
        <View style={tw`px-5 mb-10`}>
          <Text style={tw`font-semibold text-gray-500 text-lg mb-2`}>
            Email
          </Text>
          <TextInput style={tw`bg-gray-100 py-4 rounded-xl shadow-lg mb-10`} />

          <Text style={tw`font-semibold text-gray-500 text-lg mb-2`}>
            Κωδικός σύνδεσης
          </Text>
          <TextInput
            secureTextEntry
            style={tw`bg-gray-100 py-4 rounded-xl shadow-lg`}
          />
          {/* Forgot Password */}
          <View>
            <Link
              href="/ForgotPassword"
              style={tw`text-right font-semibold text-blue-500 mt-4`}
            >
              Ξέχασα τον κωδικό μου
            </Link>
          </View>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          style={tw`py-5 bg-blue-500 mx-20 rounded-xl shadow-2xl`}
        >
          <Text style={tw`text-center font-semibold text-white text-2xl`}>
            Σύνδεση
          </Text>
        </TouchableOpacity>

        {/* Google Login */}
        <View>
          <Text style={tw`text-center font-semibold text-gray-500 my-5`}>
            - Σύνδεση μέσω Google Account -
          </Text>
        </View>
        <TouchableOpacity style={tw`mb-8`}>
          {/* TODO: Google Logo should NOT be pressed across the whole block */}
          <Image
            source={require('apps/ui/assets/google-logo.png')}
            style={tw`h-10 w-10 p-8 mx-auto`}
          ></Image>
        </TouchableOpacity>

        {/* Create an account */}
        <View>
          <Link
            href="/CreateAccount"
            style={tw`text-center text-blue-500 text-md font-semibold`}
          >
            Δημιουργία λογαριασμού
          </Link>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default Auth;
