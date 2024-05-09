/* eslint-disable @nx/enforce-module-boundaries */
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useAuthStore } from '../../../state/useStore';
import { useRef } from 'react';
import { useRouter } from 'expo-router';
import { useGraphQlClient } from '../../../hooks/useGraphQlClient';
import { useAddUserMutation } from 'apps/ui/src/graphql/__generated__/graphql';
import TextInputLabel from '../../../components/user-input/TextInputLabel';

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
        router.replace('/home-page');
      } catch (error) {
        router.replace('/sign-up');
        console.log({ error });
      }
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
            <TextInputLabel label="Επωνυμία επιχείρησης" />

            <TextInputLabel
              label="Email"
              onChangeText={(text) => (emailRef.current = text)}
              style={tw`bg-gray-100 py-4 rounded-xl shadow-lg mb-5`}
            />

            <TextInputLabel
              label="Κωδικός"
              onChangeText={(text) => (passwordRef.current = text)}
              secureTextEntry
            />

            <TextInputLabel
              label="Επιβεβαίωση κωδικού"
              onChangeText={(text) => (passwordRef.current = text)}
              secureTextEntry
            />

            <Text style={tw`font-light text-xs mb-5`}>
              Ο κωδικός πρέπει να περιέχει τουλάχιστον 8 χαρακτήρες.
            </Text>
          </View>

          {/* Create Account Button */}
          <TouchableOpacity
            style={tw`bg-teal-700 rounded-lg py-2 mt-8`}
            onPress={async () => await handleRegister()}
          >
            <Text style={tw`text-center font-semibold text-white text-lg`}>
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
