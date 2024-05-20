/* eslint-disable @nx/enforce-module-boundaries */
import { useUserConversationsQuery } from 'apps/ui/src/graphql/__generated__/graphql';
import { useGraphQlClient } from 'apps/ui/src/hooks/useGraphQlClient';
import { useAuthStore } from 'apps/ui/src/state/useStore';
import React from 'react';
import { Text, View, Pressable } from 'react-native';
import tw from 'twrnc';
import { Image } from 'expo-image';

const Conversations = ({
  handleOpenChat,
}: {
  handleOpenChat: (conversationId: number) => void;
}) => {
  const { dbUser } = useAuthStore((state) => state);
  const { data, loading, error } = useUserConversationsQuery({
    client: useGraphQlClient(),
    variables: {
      userId: dbUser?.id as number,
    },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return data?.conversation_users?.map((item) => (
    <Pressable
      key={item.conversation.id}
      onPress={() =>
        // handleOpenChat(item.conversation.id);
        console.log('Conversation pressed')
      }
      style={({ pressed }) => [
        tw`p-4 my-2 mr-1 rounded-lg shadow-lg flex-row items-center`,
        pressed ? tw`bg-gray-200 opacity-90 ` : tw`bg-white opacity-100 `,
      ]}
    >
      <View
        style={tw`p-4 my-2 mx-4 rounded-lg shadow-lg flex-row items-center opacity-100`}
      >
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={tw`w-12 h-12 rounded-full mr-4`}
        />
        <View>
          <Text style={tw`text-lg font-semibold`}>
            {item.conversation.name}
          </Text>
          <Text style={tw`text-gray-500`}>Last message preview...</Text>
        </View>
      </View>
    </Pressable>
  ));
};

export default Conversations;
