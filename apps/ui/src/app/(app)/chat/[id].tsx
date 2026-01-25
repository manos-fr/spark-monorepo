import { Bubble, GiftedChat, IMessage } from 'react-native-gifted-chat';
import {
  Order_By,
  useInsertMessagesMutation,
  useMessagesSubscriptionSubscription,
} from '../../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../../hooks/useGraphQlClient';
import { useEffect, useRef, useState, useMemo } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  FlatList,
} from 'react-native';
import tw from 'twrnc';
import { useAuthStore, useErrorStore } from '../../../state/useStore';
import * as Device from 'expo-device';
import { ChatComposer } from '../../../components/chat/ChatComposer';
import { useLocalSearchParams } from 'expo-router';

/**
 * Safely parse conversation ID from route params
 */
function parseConversationId(id: string | string[] | undefined): number | null {
  if (!id) return null;
  const idString = Array.isArray(id) ? id[0] : id;
  const parsed = parseInt(idString, 10);
  return isNaN(parsed) ? null : parsed;
}

/**
 * Safely parse JSON with fallback
 */
function safeParseOrderJson(text: string | undefined): string[] {
  if (!text) return [];
  try {
    const parsed = JSON.parse(text);
    return Object.keys(parsed);
  } catch {
    return ['Invalid order data'];
  }
}

export const Chat = () => {
  const { dbUser } = useAuthStore((state) => state);
  const { setError } = useErrorStore((state) => state);
  const params = useLocalSearchParams();
  const giftedChatRef = useRef<FlatList<IMessage>>(null);
  const isBrowser = Device.deviceType === Device.DeviceType.DESKTOP;
  const messagesOrderBy: Order_By = isBrowser ? Order_By.Asc : Order_By.Desc;

  const conversationId = useMemo(
    () => parseConversationId(params?.id),
    [params?.id],
  );

  useEffect(() => {
    if (conversationId === null) {
      setError('No conversation id provided');
    }
  }, [conversationId, setError]);

  useEffect(() => {
    if (isBrowser && giftedChatRef.current) {
      giftedChatRef.current.scrollToIndex({ index: 0 });
    }
  }, [isBrowser, dbUser]);

  const client = useGraphQlClient();

  const { data, loading } = useMessagesSubscriptionSubscription({
    client,
    skip: conversationId === null,
    variables: {
      conversationId: conversationId ?? 0,
      limit: 50,
      offset: 0,
      order_by: messagesOrderBy,
    },
  });

  const [insertMessagesMutation] = useInsertMessagesMutation({
    client,
  });

  const [text, setText] = useState('');

  return (
    <View style={tw`flex-1`}>
      <GiftedChat
        keyboardShouldPersistTaps={'handled'}
        renderComposer={ChatComposer}
        scrollToBottom={false}
        messageContainerRef={giftedChatRef}
        infiniteScroll
        isTyping
        loadEarlier
        onLoadEarlier={() => {
          console.log('loading earlier');
        }}
        isLoadingEarlier={loading}
        bottomOffset={-10}
        inverted={!isBrowser}
        user={{
          ...dbUser,
          _id: dbUser?.id as number,
          name: dbUser?.name as string,
        }}
        onSend={async (messages: IMessage[]) => {
          if (
            !messages.length ||
            !messages[0].text ||
            conversationId === null
          ) {
            return;
          }

          try {
            const objects = [
              {
                text: messages[0].text,
                sender_id: dbUser?.id ?? 0,
                conversation_id: conversationId,
              },
            ];

            await insertMessagesMutation({
              variables: { objects },
            });
          } catch (error) {
            setError(error);
          }
        }}
        renderBubble={(props) =>
          props.currentMessage?.is_order ? (
            <Pressable>
              <Bubble
                {...props}
                onPress={() => console.log('View to order')}
                renderMessageText={(e) => (
                  <Text
                    style={tw`py-1 px-5 text-lg rounded-xl text-white bg-teal-700`}
                  >
                    {safeParseOrderJson(e?.currentMessage?.text).join(', ')}
                  </Text>
                )}
                wrapperStyle={{
                  left: {
                    backgroundColor: 'rgba(15, 118, 110, 1)',
                  },
                  right: {
                    backgroundColor: 'rgba(15, 118, 110, 1)',
                  },
                }}
              />
            </Pressable>
          ) : (
            <Bubble {...props} />
          )
        }
        renderLoadEarlier={() =>
          loading && <ActivityIndicator size="large"></ActivityIndicator>
        }
        messagesContainerStyle={tw`bg-slate-200 rounded-t-3xl p-4`}
        onInputTextChanged={(text) => {
          setText(text);
        }}
        showUserAvatar
        messages={
          data?.messages.map((mes, index) => ({
            ...mes,
            _id: mes.id ?? index,
            createdAt: new Date(mes.timestamp),
            user: {
              ...mes.user,
              avatar: mes.user?.profile_image ?? '',
              _id: mes.user?.id ?? 0,
              name: mes.user?.name ?? '',
            },
          })) ?? []
        }
        text={text}
      />
    </View>
  );
};

export default Chat;
