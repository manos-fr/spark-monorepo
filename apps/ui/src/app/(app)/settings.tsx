import React, { useCallback, useMemo } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useAuthStore, useErrorStore } from '../../state/useStore';
import { router } from 'expo-router';

interface SettingsOption {
  id: string;
  label: string;
  onPress: () => void;
}

const SettingsPage = () => {
  const { auth, appSignOut } = useAuthStore((state) => state);
  const { setError } = useErrorStore((state) => state);

  const handlePress = useCallback((buttonLabel: string) => {
    if (__DEV__) {
      console.log({ buttonLabel });
    }
  }, []);

  const handleSignOut = useCallback(async () => {
    try {
      const result = await appSignOut(auth);
      if (result && !result.isLoggedIn) {
        router.replace('/welcome');
      }
    } catch (error) {
      setError(error);
    }
  }, [auth, appSignOut, setError]);

  const settingsOptions: SettingsOption[] = useMemo(
    () => [
      {
        id: 'account',
        label: 'Ο λογαριασμός μου',
        onPress: () => handlePress('Account button pressed'),
      },
      {
        id: 'notifications',
        label: 'Ειδοποιήσεις',
        onPress: () => handlePress('Notifications button pressed'),
      },
      {
        id: 'contact',
        label: 'Επικοινωνία',
        onPress: () => handlePress('Contact button pressed'),
      },
      {
        id: 'signout',
        label: 'Αποσύνδεση',
        onPress: handleSignOut,
      },
    ],
    [handlePress, handleSignOut],
  );

  return (
    <View style={tw`flex-1 mt-2 p-2`}>
      <Pressable onPress={() => router.back()} style={tw`mb-4`}>
        <Ionicons name="chevron-back-outline" size={26} color="black" />
      </Pressable>
      <View style={tw`flex-row items-center justify-between mb-5`}>
        <Text style={tw`font-extrabold text-2xl text-gray-800 mb-2`}>
          Ονομασία Επιχείρησης
        </Text>
        <Ionicons
          name="person-outline"
          size={34}
          color="black"
          style={tw`bg-teal-200 p-1`}
        />
      </View>
      {settingsOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          onPress={option.onPress}
          style={tw`flex py-3 border-b border-gray-200`}
        >
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-lg font-semibold`}>{option.label}</Text>
            <Ionicons name="chevron-forward-outline" size={22} color="black" />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SettingsPage;
