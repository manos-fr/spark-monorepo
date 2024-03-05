import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

export const ForgotPassword = () => (
  <SafeAreaView style={tw`bg-white flex-1 mx-1`}>
    <ScrollView>
      <View style={tw`px-4 mt-18`}>
        <Link href="/login">
          <Ionicons name="chevron-back-outline" size={26} color="black" />
        </Link>
        <Text style={tw`font-extrabold text-black text-xl text-left mb-3 mt-8`}>
          Ξέχασες τον κωδικό σου; Κανένα πρόβλημα!
        </Text>
        <Text style={tw`font-light text-black text-left mb-10`}>
          Συμπλήρωσε το email σου και εμείς θα σου στείλουμε τις οδηγίες για τα
          επόμενα βήματα.
        </Text>

        <View>
          <Text style={tw`font-semibold text-gray-600 mb-2`}>Email</Text>
          <TextInput style={tw`bg-gray-100 py-3 rounded-lg mb-5`} />
        </View>

        <TouchableOpacity style={tw`bg-teal-700 rounded-lg py-2 mt-8`}>
          <Text style={tw`text-center font-semibold text-white text-lg`}>
            Λήψη κωδικού
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default ForgotPassword;
