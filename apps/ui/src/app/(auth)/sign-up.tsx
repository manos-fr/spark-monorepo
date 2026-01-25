import { SafeAreaView, ScrollView, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useState, useCallback } from 'react';
import { useAuthStore, useErrorStore } from '../../state/useStore';
import { useRouter } from 'expo-router';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import { useAddUserMutation } from '../../graphql/__generated__/graphql';
import TextInputLabel from '../../components/user-input/TextInputLabel';

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validates email format
 */
function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

/**
 * Checks if password meets minimum requirements
 */
function isValidPassword(password: string): { valid: boolean; error?: string } {
  if (password.length < 8) {
    return {
      valid: false,
      error: 'Ο κωδικός πρέπει να περιέχει τουλάχιστον 8 χαρακτήρες',
    };
  }
  return { valid: true };
}

export const SignUp = () => {
  const { auth, appRegister } = useAuthStore((state) => state);
  const { setError } = useErrorStore((state) => state);
  const router = useRouter();
  const [hidePassword, setHidePassword] = useState(true);
  const [addUserMutation, { loading, error }] = useAddUserMutation({
    client: useGraphQlClient(),
  });

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formValidationState, setFormValidationState] = useState<{
    emailError?: string;
    passwordError?: string;
    confirmPasswordError?: string;
    usernameError?: string;
  }>({
    emailError: undefined,
    passwordError: undefined,
    confirmPasswordError: undefined,
    usernameError: undefined,
  });

  const { username, email, password, confirmPassword } = formState;
  const { confirmPasswordError, emailError, passwordError, usernameError } =
    formValidationState;

  const handleRegister = useCallback(async () => {
    // Clear previous validation errors
    setFormValidationState({
      emailError: undefined,
      passwordError: undefined,
      confirmPasswordError: undefined,
      usernameError: undefined,
    });

    // Validate username
    const trimmedUsername = username.trim();
    if (!trimmedUsername) {
      setFormValidationState((prevState) => ({
        ...prevState,
        usernameError: 'Το όνομα χρήστη είναι υποχρεωτικό',
      }));
      return;
    }

    // Validate email format
    const trimmedEmail = email.trim();
    if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
      setFormValidationState((prevState) => ({
        ...prevState,
        emailError: 'Μη έγκυρο email',
      }));
      return;
    }

    // Validate password
    const passwordValidation = isValidPassword(password);
    if (!passwordValidation.valid) {
      setFormValidationState((prevState) => ({
        ...prevState,
        passwordError: passwordValidation.error,
      }));
      return;
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      setFormValidationState((prevState) => ({
        ...prevState,
        confirmPasswordError: 'Οι κωδικοί δεν είναι ίδιοι',
      }));
      return;
    }

    try {
      // Pass displayName to appRegister so it gets set on the user profile
      const result = await appRegister(auth, {
        email: trimmedEmail,
        password,
        displayName: trimmedUsername,
      });

      const user = result?.user;

      if (user) {
        const variables = {
          objects: {
            uid: user.uid,
            email: user.email ?? trimmedEmail,
            name: trimmedUsername,
          },
        };

        const { data: userId } = await addUserMutation({ variables });

        useAuthStore.setState(() => ({
          dbUser: {
            ...user,
            id: userId?.insert_users?.returning?.[0]?.id ?? undefined,
            name: trimmedUsername,
          },
        }));

        router.replace('/home-page');
      }
    } catch (error) {
      setError(error);
    }
  }, [
    username,
    email,
    password,
    confirmPassword,
    auth,
    appRegister,
    addUserMutation,
    setError,
    router,
  ]);

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
              onChangeText={(text) => {
                setFormState({ ...formState, username: text });
                text.length &&
                  setFormValidationState((prevState) => ({
                    ...prevState,
                    usernameError: undefined,
                  }));
              }}
              value={username}
              labelStyle={usernameError ? tw`text-red-500` : null}
              icon={
                username ? (
                  <Ionicons
                    name="close-circle-outline"
                    size={24}
                    onPress={() => setFormState({ ...formState, username: '' })}
                  />
                ) : null
              }
            />
            {usernameError ? (
              <Text style={tw`text-red-500 text-xs mb-2`}>{usernameError}</Text>
            ) : null}

            <TextInputLabel
              label="Email"
              onChangeText={(text) => {
                setFormState({ ...formState, email: text });
                text.length &&
                  setFormValidationState((prevState) => ({
                    ...prevState,
                    emailError: undefined,
                  }));
              }}
              value={email}
              labelStyle={emailError ? tw`text-red-500` : null}
              autoCapitalize="none"
              icon={
                email ? (
                  <Ionicons
                    name="close-circle-outline"
                    size={24}
                    onPress={() => setFormState({ ...formState, email: '' })}
                  />
                ) : null
              }
            />
            {emailError ? (
              <Text style={tw`text-red-500 text-xs mb-2`}>{emailError}</Text>
            ) : null}

            <TextInputLabel
              label="Κωδικός"
              onChangeText={(text) => {
                text.length >= 8 &&
                  setFormValidationState((prevState) => ({
                    ...prevState,
                    passwordError: undefined,
                  }));
                setFormState({ ...formState, password: text });
              }}
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
              onChangeText={(text) =>
                setFormState({ ...formState, confirmPassword: text })
              }
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
              {passwordError || confirmPasswordError}
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
