import { useUserConversationsQuery } from '../../../../src/graphql/__generated__/graphql';
import { useGraphQlClient } from '../../../../src/hooks/useGraphQlClient';
import { useAuthStore } from '../../../../src/state/useStore';
import React, { useRef } from 'react';
import { Text, View, Pressable, ScrollView } from 'react-native';
import tw from 'twrnc';
import { Image } from 'expo-image';
import LoadingScreen from '../../../../src/components/layout/LoadingScreen';
import { useRouter } from 'expo-router';

const Conversations = () => {
  const router = useRouter();
  const scrollViewRef = useRef<null | ScrollView>(null);
  const { dbUser } = useAuthStore((state) => state);
  const { data, loading, error } = useUserConversationsQuery({
    client: useGraphQlClient(),
    variables: {
      userId: dbUser?.id as number,
    },
  });

  const handleNavigateToChat = (conversationId: number) => {
    console.log('conversationId', conversationId);
    router.push(`/chat/${conversationId}`);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      ref={(ref) => {
        scrollViewRef.current = ref;
      }}
      contentInsetAdjustmentBehavior="automatic"
      onStartShouldSetResponder={() => true}
    >
      <View style={tw`flex-col justify-center items-center mt-2`}>
        {data?.conversation_users?.map((item, index) => (
          <Pressable
            key={item.conversation.id}
            onPress={() => handleNavigateToChat(item.conversation.id)}
            style={({ pressed }) => [
              tw`py-3 px-10 my-2 mr-1 rounded-lg shadow-lg flex-row items-center`,
              pressed ? tw`bg-gray-200 opacity-90 ` : tw`bg-white opacity-100 `,
            ]}
          >
            <View
              style={tw`flex flex-row max-w-50 items-center justify-between py-1 px-1 mx-2 rounded-lg shadow-lg opacity-100`}
            >
              <Image
                contentFit="scale-down"
                source={{
                  uri: item.conversation.conversation_users[index].user
                    .profile_image as string,
                }}
                style={tw`w-20 h-20 pr-12 rounded-full mr-4`}
              />
              <View style={tw`pl-12 pr-10`}>
                <Text style={tw`text-lg font-semibold`}>
                  {
                    item.conversation.conversation_users.filter(
                      (user) => user.user.name !== dbUser?.name,
                    )[0]?.user?.name
                  }
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default Conversations;
