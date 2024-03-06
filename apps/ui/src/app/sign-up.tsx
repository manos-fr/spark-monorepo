import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Link } from 'expo-router';
import tw from 'twrnc';
import { useAuthStore } from '../state/useStore';
import { useRef } from 'react';
import { useRouter } from 'expo-router';
import { useGraphQlClient } from '../hooks/useGraphQlClient';
import { useAddUserMutation } from '../graphql/__generated__/graphql';

export const SignUp = () => {
  const { auth, appRegister } = useAuthStore((state) => state);
  const router = useRouter();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [addUserMutation, { loading, error }] = useAddUserMutation({
    client: useGraphQlClient(),
  });

  const handleRegister = async () => {
    const { user } = await appRegister(auth, {
      email: emailRef.current,
      password: passwordRef.current,
    });
    if (user) {
      try {
        const objects = {
          objects: {
            uid: user.uid,
            email: user.email,
            name: user.displayName || '',
          },
        };

        const { data: userId } = await addUserMutation({ variables: objects });

        useAuthStore.setState(() => ({
          dbUser: {
            ...user,
            id: userId?.insert_users?.returning?.[0].id || undefined,
          },
        }));
        router.replace('/home');
      } catch (error) {
        router.replace('/sign-up');
        console.log({ error });
      }
    }
  };

  return (
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
            <TextInput
              onChangeText={(text) => (emailRef.current = text)}
              style={tw`bg-gray-100 py-4 rounded-xl shadow-lg mb-5`}
            />

            <Text style={tw`font-semibold text-gray-500 text-lg mb-2`}>
              Κωδικός σύνδεσης
            </Text>
            <TextInput
              onChangeText={(text) => (passwordRef.current = text)}
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
            onPress={async () => await handleRegister()}
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
          </TouchableOpacity>

          {/* Already have an account */}
          <View>
            <Link
              href="/Login"
              style={tw`text-center text-blue-500 font-semibold mb-10`}
            >
              Έχω ήδη λογαριασμό
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
