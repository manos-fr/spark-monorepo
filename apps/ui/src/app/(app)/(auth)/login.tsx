import { SafeAreaView, ScrollView, View, Text, Pressable } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import TextInputLabel from '../../../components/user-input/TextInputLabel';
import { useAuthStore } from '../../../state/useStore';

export const Login = () => {
  const { auth, appLogin } = useAuthStore((state) => state);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = async () => {
    try {
      const { user } = await appLogin(auth, {
        email,
        password,
      });
      if (user) {
        router.push('/home-page');
      }
    } catch (error) {
      setInvalidCredentials(true);
    }
  };

  return (
    <SafeAreaView style={tw`bg-white flex-1 mx-1`}>
      <ScrollView keyboardShouldPersistTaps="always">
        <View style={tw`px-4 mt-8`}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back-outline" size={26} color="black" />
          </Pressable>
          <Text
            style={tw`font-extrabold text-black text-2xl text-left mt-8 mb-10`}
          >
            Κάνε σύνδεση.
          </Text>

          <View>
            <TextInputLabel
              label="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              labelStyle={invalidCredentials ? tw`text-red-500` : null}
              autoCapitalize="none"
              icon={
                email !== '' ? (
                  <Ionicons
                    name="close-circle-outline"
                    size={24}
                    onPress={() => {
                      setEmail('');
                    }}
                  />
                ) : null
              }
            />

            <TextInputLabel
              label="Κωδικός"
              onChangeText={(text) => setPassword(text)}
              labelStyle={invalidCredentials ? tw` text-red-500` : null}
              secureTextEntry={hidePassword}
              icon={
                password !== '' ? (
                  <Ionicons
                    name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    onPress={() => setHidePassword((prevState) => !prevState)}
                  />
                ) : null
              }
            />

            {invalidCredentials ? (
              <Text style={tw`font-semibold text-red-500 mb-8`}>
                Το email ή ο κωδικός είναι λανθασμένα!
              </Text>
            ) : null}

            <Pressable onPress={() => router.push('forgot-password')}>
              <Text style={tw`font-semibold text-teal-700 mb-5`}>
                Ξέχασα τον κωδικό μου.
              </Text>
            </Pressable>
          </View>

          <Pressable
            style={tw`bg-teal-700 rounded-lg py-2 mt-8`}
            onPress={async () => await handleLogin()}
          >
            <Text style={tw`text-center font-semibold text-white text-lg`}>
              Σύνδεση
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
