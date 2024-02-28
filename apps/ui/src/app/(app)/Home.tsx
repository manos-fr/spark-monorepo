import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import tw from 'twrnc';
import WelcomeWidget from '../../components/home/WelcomeWidget';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import { useAuthStore } from '../../state/useStore';
import { Auth, User } from 'firebase/auth';
import { useRouter } from 'expo-router';
import firebase from 'firebase/messaging';
import {
  useGetUsersQuery,
  useGetUserQuery,
} from '../../graphql/__generated__/graphql';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Home = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const router = useRouter();

  const { appSignOut, auth, user } = useAuthStore((state) => state);

  const { data: dbUserId } = useGetUserQuery({
    client: useGraphQlClient(),
    skip: !user,
    variables: { uid: { _eq: user?.uid } },
  });
  const { data, error } = useGetUsersQuery({ client: useGraphQlClient() });

  AsyncStorage.getAllKeys((err, keys: any) =>
    AsyncStorage.multiGet(keys, (error, stores) => {
      stores?.map((result, i, store) => {
        console.log({ [store[i][0]]: JSON.parse(store[i][1] as string) });
        return true;
      });
    }),
  );

  useEffect(() => {
    useAuthStore.setState(() => ({
      dbUser: {
        ...(user as User),
        id: dbUserId?.users?.[0]?.id,
      },
    }));
  }, [dbUserId?.users]);

  useEffect(() => {
    if (error) {
      useAuthStore.setState(() => ({ generalError: error }));
    }
  }, [error]);

  const handleSignOut = async () => {
    const signOutResponse = await appSignOut(auth as Auth);
    if (!signOutResponse.isLoggedIn) {
      router.replace('/');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        ref={(ref) => {
          scrollViewRef.current = ref;
        }}
        contentInsetAdjustmentBehavior="automatic"
        style={tw`bg-white`}
        onStartShouldSetResponder={() => true}
      >
        <View style={tw` bg-slate-300 m-3 p-3 rounded-md bg-opacity-60`}>
          <TouchableOpacity
            style={tw`py-5 bg-blue-500 mx-20 rounded-xl shadow-2xl`}
            onPress={async () => await handleSignOut()}
          >
            <Text style={tw`text-center font-semibold text-black text-2xl`}>
              Sign out
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw` bg-slate-300 m-3 p-3 rounded-md bg-opacity-60`}>
          <Text style={tw`text-black text-2xl font-medium`}>Hello there,</Text>
          <Text style={tw`font-bold p-10 text-5xl`} testID="heading">
            Welcome Ui{'👋'}
          </Text>
          <WelcomeWidget />
        </View>
        <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
          <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
            <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
              <Svg
                width={32}
                height={32}
                stroke="hsla(162, 47%, 50%, 1)"
                fill="none"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </Svg>
              <Text>You're up and running</Text>
            </View>
          </View>
        </View>
        <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
          <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
            <Text>Learning materials</Text>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://nx.dev/getting-started/intro?utm_source=nx-project',
                )
              }
            >
              <Svg
                width={24}
                height={24}
                stroke="#000000"
                fill="none"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </Svg>
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
                <Text>Everything is in there</Text>
              </View>
              <Svg
                width={18}
                height={18}
                stroke="#000000"
                fill="none"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://blog.nrwl.io/?utm_source=nx-project')
              }
            >
              <Svg
                width={24}
                height={24}
                stroke="#000000"
                fill="none"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </Svg>
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
                <Text />
                <Text>Changelog, features & events</Text>
              </View>
              <Svg
                width={18}
                height={18}
                stroke="#000000"
                fill="none"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://www.youtube.com/@NxDevtools/videos?utm_source=nx-project',
                )
              }
            >
              <Svg width={24} height={24} fill="#000000" viewBox="0 0 24 24">
                <Path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </Svg>
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
                <Text />
                <Text>Nx Show, talks & tutorials</Text>
              </View>
              <Svg
                width={18}
                height={18}
                stroke="#000000"
                fill="none"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </Svg>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://nx.dev/react-tutorial/1-code-generation?utm_source=nx-project',
                )
              }
            >
              <Svg
                width={24}
                height={24}
                stroke="#000000"
                fill="none"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </Svg>
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
                <Text />
                <Text>Create an app, step by step</Text>
              </View>
              <Svg
                width={18}
                height={18}
                stroke="#000000"
                fill="none"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></Path>
              </Svg>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
