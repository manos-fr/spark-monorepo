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
import { useAuthStore } from '../state/useStore';
import { useRef } from 'react';
import { useRouter } from 'expo-router';
import { useAddUserMutation } from '../graphql/generated';
import { useGraphQlClient } from '../hooks/useGraphQlClient';

export const SignUp = () => {
  const { auth, appRegister } = useAuthStore((state) => state);
  const router = useRouter();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const { mutateAsync } = useAddUserMutation(useGraphQlClient());

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

        await mutateAsync(objects);
      } catch (error) {
        console.log({ error });
      }
      router.replace('/home');
    }
  };

  return (
    <SafeAreaView style={tw`bg-white flex-1 mx-1`}>
      <ScrollView>
        <View style={tw`px-4 mt-18`}>
          <Link href="/welcome">
            <Ionicons name="chevron-back-outline" size={26} color="black" />
          </Link>
          <Text
            style={tw`font-extrabold text-black text-2xl text-left mt-8 mb-10`}
          >
            Κάνε εγγραφή.
          </Text>

          <View>
            <Text style={tw`font-semibold text-gray-600 mb-2`}>
              Επωνυμία Επιχείρησης
            </Text>
            <TextInput style={tw`bg-gray-100 py-3 rounded-lg mb-5`} />

            <Text style={tw`font-semibold text-gray-600 mb-2`}>Email</Text>
            <TextInput
              onChangeText={(text) => (emailRef.current = text)}
              style={tw`bg-gray-100 py-3 rounded-lg mb-5`}
            />

            <Text style={tw`font-semibold text-gray-600 mb-2`}>Κωδικός</Text>
            <TextInput
              onChangeText={(text) => (passwordRef.current = text)}
              secureTextEntry
              style={tw`bg-gray-100 py-2 rounded-lg mb-3`}
            />

            <Text style={tw`font-light text-xs mb-5`}>
              Ο κωδικός πρέπει να περιέχει τουλάχιστον 8 χαρακτήρες.
            </Text>
          </View>

          <TouchableOpacity
            style={tw`bg-teal-700 rounded-lg py-2 mt-8`}
            onPress={async () => await handleRegister()}
          >
            <Text style={tw`text-center font-semibold text-white text-lg`}>
              Εγγραφή
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
