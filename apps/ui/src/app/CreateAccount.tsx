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
      <View>
        <Text style={tw`font-bold text-black text-2xl text-left pl-5 my-6`}>
          Δημιουργία Λογαριασμού
        </Text>

        {/* Input fields */}
        <View style={tw`px-5`}>
          <Text style={tw`font-semibold text-gray-500 text-lg mb-2`}>
            Επωνυμία Επιχείρησης
          </Text>
          <TextInput style={tw`bg-gray-100 py-4 rounded-xl shadow-lg mb-5`} />

          <Text style={tw`font-semibold text-gray-500 text-lg mb-2`}>
            Κινητό Τηλέφωνο
          </Text>
          <TextInput style={tw`bg-gray-100 py-4 rounded-xl shadow-lg mb-5`} />

          <Text style={tw`font-semibold text-gray-500 text-lg mb-2`}>
            Email
          </Text>
          <TextInput style={tw`bg-gray-100 py-4 rounded-xl shadow-lg mb-5`} />

          <Text style={tw`font-semibold text-gray-500 text-lg mb-2`}>
            Κωδικός σύνδεσης
          </Text>
          <TextInput
            secureTextEntry
            style={tw`bg-gray-100 py-4 rounded-xl shadow-lg mb-5`}
          />

          <Text style={tw`font-semibold text-gray-500 text-lg mb-2`}>
            Επιβεβαίωση κωδικού σύνδεσης
          </Text>
          <TextInput
            secureTextEntry
            style={tw`bg-gray-100 py-4 rounded-xl shadow-lg mb-10`}
          />
        </View>

        {/* Create Account Button */}
        <TouchableOpacity
          style={tw`py-5 bg-blue-500 mx-20 rounded-xl shadow-2xl`}
        >
          <Text style={tw`text-center font-semibold text-white text-2xl`}>
            Εγγραφή
          </Text>
        </TouchableOpacity>

        {/* Google Login */}
        <View>
          <Text style={tw`text-center text-gray-500 font-semibold my-5`}>
            - Εγγραφή μέσω Google Account -
          </Text>
        </View>
        <TouchableOpacity style={tw`mb-8`}>
          {/* TODO: Google Logo should NOT be pressed across the whole block */}
          <Image
            source={require('apps/ui/assets/google-logo.png')}
            style={tw`h-10 w-10 p-8 mx-auto`}
          ></Image>
        </TouchableOpacity>

        {/* Already have an account */}
        <View>
          <Link
            href="/Login"
            style={tw`text-center text-blue-500 text-md font-semibold mb-10`}
          >
            Έχω ήδη λογαριασμό
          </Link>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default Auth;
