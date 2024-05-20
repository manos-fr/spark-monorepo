/* eslint-disable @nx/enforce-module-boundaries */
import { SafeAreaView, ScrollView, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useState } from 'react';
import { useAuthStore, useErrorStore } from '../../state/useStore';
import { useRef } from 'react';
import { useRouter } from 'expo-router';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import { useAddUserMutation } from 'apps/ui/src/graphql/__generated__/graphql';
import TextInputLabel from '../../components/user-input/TextInputLabel';

export const SignUp = () => {
  const { auth, appRegister } = useAuthStore((state) => state);
  const { setError } = useErrorStore((state) => state);
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const displayNameRef = useRef('');
  const [addUserMutation, { loading, error }] = useAddUserMutation({
    client: useGraphQlClient(),
  });

  const handleRegister = async () => {
    setUsernameError('');
    setEmailError('');
    setPasswordError(false);
    setConfirmPasswordError('');

    if (username === '') {
      setUsernameError('Παρακαλώ συμπληρώστε την Ονομασία Επιχείρησης');
    }

    if (password.length < 8) {
      setPasswordError(true);
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Οι κωδικοί δεν ταιριάζουν');
    }

    try {
      const user = (
        await appRegister(auth, {
          email,
          password,
        })
      )?.user;

      if (user) {
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
      }
    } catch (error: any) {
      handleFirebaseError(error.code);
      console.log(error.code);
    }
  };

  const handleFirebaseError = (error: string) => {
    switch (error) {
      case 'auth/email-already-in-use':
        setEmailError('Το email χρησιμοποιείται ήδη. Κάνε σύνδεση.');
        break;
      case 'auth/invalid-email':
        setEmailError('Μη έγκυρο email');
        break;
      case 'auth/missing-email':
        setEmailError('Μη έγκυρο email');
        break;
      default:
        console.log(error);
        break;
    }
  };

  return (
    <SafeAreaView style={tw`bg-white flex-1 mx-1`}>
      <ScrollView>
        <View style={tw`px-4 mt-8`}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back-outline" size={26} color="black" />
          </Pressable>
          <Text
            style={tw`font-extrabold text-black text-2xl text-left mt-8 mb-10`}
          >
            Κάνε εγγραφή.
          </Text>

          <View>
            <TextInputLabel
              label="Ονομασία Επιχείρησης"
              onChangeText={(text) => setUsername(text)}
              value={username}
              labelStyle={usernameError ? tw`text-red-500` : null}
              icon={
                username ? (
                  <Ionicons
                    name="close-circle-outline"
                    size={24}
                    onPress={() => setUsername('')}
                  />
                ) : null
              }
            />
            {usernameError ? (
              <Text style={tw`text-red-500 text-xs mb-2`}>{usernameError}</Text>
            ) : null}

            <TextInputLabel
              label="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              labelStyle={emailError ? tw`text-red-500` : null}
              autoCapitalize="none"
              icon={
                email ? (
                  <Ionicons
                    name="close-circle-outline"
                    size={24}
                    onPress={() => setEmail('')}
                  />
                ) : null
              }
            />
            {emailError ? (
              <Text style={tw`text-red-500 text-xs mb-2`}>{emailError}</Text>
            ) : null}

            <TextInputLabel
              label="Κωδικός"
              onChangeText={(text) => setPassword(text)}
              value={password}
              labelStyle={passwordError ? tw`text-red-500` : null}
              secureTextEntry={hidePassword}
              icon={
                <Ionicons
                  name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                  size={24}
                  onPress={() => setHidePassword(!hidePassword)}
                />
              }
            />

            <TextInputLabel
              label="Επιβεβαίωση κωδικού"
              onChangeText={(text) => setConfirmPassword(text)}
              value={confirmPassword}
              labelStyle={confirmPasswordError ? tw`text-red-500` : null}
              secureTextEntry={hidePassword}
            />
            {confirmPasswordError ? (
              <Text style={tw`text-xs text-red-500 mb-2`}>
                {confirmPasswordError}
              </Text>
            ) : null}

            <Text
              style={
                passwordError
                  ? tw`text-xs font-light mb-5 text-red-500`
                  : tw`text-xs font-light mb-5`
              }
            >
              Ο κωδικός πρέπει να περιέχει τουλάχιστον 8 χαρακτήρες.
            </Text>
          </View>

          <Pressable
            style={tw`bg-teal-700 rounded-lg py-2 mt-8`}
            onPress={handleRegister}
          >
            <Text style={tw`text-center font-semibold text-white text-lg`}>
              Εγγραφή
            </Text>
          </Pressable>

          <Pressable onPress={() => router.push('/login')}>
            <Text style={tw`text-center text-blue-500 font-semibold my-10`}>
              Έχω ήδη λογαριασμό
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
