/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import tw from 'twrnc';
import WelcomeWidget from '../../components/home/WelcomeWidget';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

export const App = () => {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const [userId, setCount] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={tw`bg-white`}
        >
          <View style={tw` bg-slate-300 m-3 p-3 rounded-md bg-opacity-60`}>
            <Text style={tw`text-black text-2xl font-medium`}>
              Hello there,
            </Text>
            <Text style={tw`font-bold p-10 text-5xl`} testID="heading">
              Welcome Ui 👋
            </Text>

            {/* Imported Component */}
            <WelcomeWidget />

            <Link
              href={{
                pathname: '/user/[id]',
                params: { id: userId },
              }}
              asChild
            >
              <TouchableOpacity
                style={tw` bg-cyan-400 rounded-xl flex-inline self-start bg-opacity-60`}
                onPress={() => console.log('Presssss')}
              >
                <Text style={tw`text-2xl font-medium px-2 py-1`}>
                  Go to user
                </Text>
              </TouchableOpacity>
            </Link>
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
                <Text style={tw`outline-pink-900`}>You're up and running</Text>
              </View>
              <TouchableOpacity
                style={tw` outline-pink-900`}
                onPress={() => {
                  scrollViewRef.current?.scrollTo({
                    x: 0,
                    y: whatsNextYCoord,
                  });
                }}
              >
                <Text style={tw`outline-pink-900`}>What's next?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
            <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
              <Text style={tw`outline-pink-900`}>Learning materials</Text>
              <TouchableOpacity
                style={tw`outline-pink-900`}
                onPress={() =>
                  Linking.openURL(
                    'https://nx.dev/getting-started/intro?utm_source=nx-project'
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
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw`outline-pink-900`}>
                    Everything is in there
                  </Text>
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
                style={tw`outline-pink-900`}
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
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw`outline-pink-900`} />
                  <Text style={tw`outline-pink-900`}>
                    Changelog, features & events
                  </Text>
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
                style={tw`outline-pink-900`}
                onPress={() =>
                  Linking.openURL(
                    'https://www.youtube.com/@NxDevtools/videos?utm_source=nx-project'
                  )
                }
              >
                <Svg width={24} height={24} fill="#000000" viewBox="0 0 24 24">
                  <Path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </Svg>
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw`outline-pink-900`} />
                  <Text style={tw`outline-pink-900`}>
                    Nx Show, talks & tutorials
                  </Text>
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
                style={tw`outline-pink-900`}
                onPress={() =>
                  Linking.openURL(
                    'https://nx.dev/react-tutorial/1-code-generation?utm_source=nx-project'
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
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw`outline-pink-900`} />
                  <Text style={tw`outline-pink-900`}>
                    Create an app, step by step
                  </Text>
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
              <TouchableOpacity
                style={tw`outline-pink-900`}
                onPress={() =>
                  Linking.openURL(
                    'https://nxplaybook.com/?utm_source=nx-project'
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
                  <Path d="M12 14l9-5-9-5-9 5 9 5z"></Path>
                  <Path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></Path>
                  <Path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></Path>
                </Svg>
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw`outline-pink-900`} />
                  <Text style={tw`outline-pink-900`}>Nx custom courses</Text>
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
          <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console&utm_source=nx-project'
                )
              }
            >
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
                <Svg
                  width={48}
                  height={48}
                  fill="rgba(0, 122, 204, 1)"
                  viewBox="0 0 24 24"
                >
                  <Path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                </Svg>
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw`outline-pink-900`}>
                    Install Nx Console for VSCode
                  </Text>
                  <Text style={tw`outline-pink-900`}>
                    The official VSCode plugin for Nx.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://plugins.jetbrains.com/plugin/21060-nx-console'
                )
              }
            >
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
                <Svg
                  width={48}
                  height={48}
                  fill="rgba(0, 122, 204, 1)"
                  viewBox="0 0 24 24"
                >
                  <Path d="M0 0v24h24V0zm3.723 3.111h5v1.834h-1.39v6.277h1.39v1.834h-5v-1.834h1.444V4.945H3.723zm11.055 0H17v6.5c0 .612-.055 1.111-.222 1.556-.167.444-.39.777-.723 1.11-.277.279-.666.557-1.11.668a3.933 3.933 0 0 1-1.445.278c-.778 0-1.444-.167-1.944-.445a4.81 4.81 0 0 1-1.279-1.056l1.39-1.555c.277.334.555.555.833.722.277.167.611.278.945.278.389 0 .721-.111 1-.389.221-.278.333-.667.333-1.278zM2.222 19.5h9V21h-9z" />
                </Svg>
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw`outline-pink-900`}>
                    Install Nx Console for JetBrains
                  </Text>
                  <Text style={tw`outline-pink-900`}>
                    Available for WebStorm, Intellij IDEA Ultimate and more!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://nx.app/?utm_source=nx-project')
              }
            >
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Svg
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="transparent"
                  >
                    <Path
                      strokeWidth="2"
                      d="M23 3.75V6.5c-3.036 0-5.5 2.464-5.5 5.5s-2.464 5.5-5.5 5.5-5.5 2.464-5.5 5.5H3.75C2.232 23 1 21.768 1 20.25V3.75C1 2.232 2.232 1 3.75 1h16.5C21.768 1 23 2.232 23 3.75Z"
                    />
                    <Path
                      strokeWidth="2"
                      d="M23 6v14.1667C23 21.7307 21.7307 23 20.1667 23H6c0-3.128 2.53867-5.6667 5.6667-5.6667 3.128 0 5.6666-2.5386 5.6666-5.6666C17.3333 8.53867 19.872 6 23 6Z"
                    />
                  </Svg>
                  <View
                    style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                  >
                    <Text style={tw`outline-pink-900`}>Nx Cloud</Text>
                    <Text style={tw`outline-pink-900`}>
                      Enable faster CI & better DX
                    </Text>
                  </View>
                </View>
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw`outline-pink-900`} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://nx.app/?utm_source=nx-project')
              }
            >
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
                <Svg width={48} height={48} fill="#000000" viewBox="0 0 24 24">
                  <Path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </Svg>
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw`outline-pink-900`}>Nx is open source</Text>
                  <Text style={tw`outline-pink-900`}>
                    Love Nx? Give us a star!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={tw` outline-pink-900`}
            onLayout={(event) => {
              const layout = event.nativeEvent.layout;
              setWhatsNextYCoord(layout.y);
            }}
          >
            <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
              <Text style={tw`outline-pink-900`}>Next steps</Text>
              <Text style={tw`outline-pink-900`}>
                Here are some things you can do with Nx:
              </Text>
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
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
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </Svg>
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw` outline-pink-900`}>Add UI library</Text>
                </View>
              </View>
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
                <Text style={tw`outline-pink-900`}># Generate UI lib</Text>
                <Text style={tw`outline-pink-900`}>nx g @nx/expo:lib ui</Text>
                <Text style={tw`outline-pink-900`}># Add a component</Text>
                <Text style={tw`outline-pink-900`} />
                <Text style={tw`outline-pink-900`}>@nx/expo:component \</Text>
                <Text style={tw`outline-pink-900`}>button --project ui</Text>
              </View>
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
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
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </Svg>
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw` outline-pink-900`}>
                    View interactive project graph
                  </Text>
                </View>
              </View>
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
                <Text style={tw`outline-pink-900`} />
              </View>
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
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
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </Svg>
                <View
                  style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}
                >
                  <Text style={tw` outline-pink-900`}>
                    Run affected commands
                  </Text>
                </View>
              </View>
              <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
                <Text style={tw`outline-pink-900`}>
                  # See what's affected by changes
                </Text>
                <Text style={tw`outline-pink-900`}>nx affected:graph</Text>
                <Text style={tw`outline-pink-900`}>
                  # run tests for current changes
                </Text>
                <Text style={tw`outline-pink-900`}>nx affected:text</Text>
                <Text style={tw`outline-pink-900`}>
                  # run e2e tests for current
                </Text>
                <Text style={tw`outline-pink-900`}># changes</Text>
                <Text style={tw`outline-pink-900`}>nx affected:e2e</Text>
              </View>
            </View>
            <View style={tw` bg-slate-400 m-3 p-3 rounded-md bg-opacity-60`}>
              <Text style={tw` outline-pink-900`}>Carefully crafted with </Text>
              <Svg
                width={24}
                height={24}
                fill="rgba(252, 165, 165, 1)"
                stroke="none"
                viewBox="0 0 24 24"
              >
                <Path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </Svg>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: '#ffffff',
//   },
//   codeBlock: {
//     backgroundColor: 'rgba(55, 65, 81, 1)',
//     marginVertical: 12,
//     padding: 12,
//     borderRadius: 4,
//   },
//   monospace: {
//     color: '#ffffff',
//     fontFamily: 'Courier New',
//     marginVertical: 4,
//   },
//   comment: {
//     color: '#cccccc',
//   },
//   marginBottomSm: {
//     marginBottom: 6,
//   },
//   marginBottomMd: {
//     marginBottom: 18,
//   },
//   marginBottomLg: {
//     marginBottom: 24,
//   },
//   textLight: {
//     fontWeight: '300',
//   },
//   textBold: {
//     fontWeight: '500',
//   },
//   textCenter: {
//     textAlign: 'center',
//   },
//   text2XS: {
//     fontSize: 12,
//   },
//   textXS: {
//     fontSize: 14,
//   },
//   textSm: {
//     fontSize: 16,
//   },
//   textMd: {
//     fontSize: 18,
//   },
//   textLg: {
//     fontSize: 24,
//   },
//   textXL: {
//     fontSize: 48,
//   },
//   textContainer: {
//     marginVertical: 12,
//   },
//   textSubtle: {
//     color: '#6b7280',
//   },
//   section: {
//     marginVertical: 24,
//     marginHorizontal: 12,
//   },
//   shadowBox: {
//     backgroundColor: 'white',
//     borderRadius: 24,
//     shadowColor: 'black',
//     shadowOpacity: 0.15,
//     shadowOffset: {
//       width: 1,
//       height: 4,
//     },
//     shadowRadius: 12,
//     padding: 24,
//     marginBottom: 24,
//   },
//   listItem: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   listItemTextContainer: {
//     marginLeft: 12,
//     flex: 1,
//   },
//   appTitleText: {
//     paddingTop: 12,
//     fontWeight: '500',
//   },
//   hero: {
//     borderRadius: 12,
//     backgroundColor: '#143055',
//     padding: 36,
//     marginBottom: 24,
//   },
//   heroTitle: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   heroTitleText: {
//     color: '#ffffff',
//     marginLeft: 12,
//   },
//   heroText: {
//     color: '#ffffff',
//     marginVertical: 12,
//   },
// });

export default App;
