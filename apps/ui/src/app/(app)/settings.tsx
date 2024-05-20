import React from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { useAuthStore } from '../../state/useStore';
import { router } from 'expo-router';
import { Auth } from 'firebase/auth';

const SettingsPage = () => {
  const { auth, appSignOut } = useAuthStore((state) => state);
  const handlePress = (buttonLabel: any) => {
    console.log({ buttonLabel });
  };

  const handleSignOut = async () => {
    try {
      const isLoggedIn = (await appSignOut(auth as Auth))?.isLoggedIn;
      if (!isLoggedIn) {
        router.replace('/welcome');
      }
    } catch (error) {
      console.log('Error signing out the user', { error });
    }
  };

  const settingsOptions = [
    {
      label: 'Ο λογαριασμός μου',
      onPress: () => handlePress('Account button pressed'),
    },
    {
      label: 'Ειδοποιήσεις',
      onPress: () => handlePress('Notifications button pressed'),
    },
    {
      label: 'Επικοινωνία',
      onPress: () => handlePress('Contact button pressed'),
    },
    {
      label: 'Αποσύνδεση',
      onPress: async () => await handleSignOut(),
    },
  ];

  return (
    <View style={tw`flex-1 bg-white p-4 mt-12`}>
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
      {settingsOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
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
