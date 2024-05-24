import { Bubble, GiftedChat, IMessage } from 'react-native-gifted-chat';
import {
  Order_By,
  useInsertMessagesMutation,
  useMessagesSubscriptionSubscription,
} from '../../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../../hooks/useGraphQlClient';
import { useEffect, useRef, useState } from 'react';
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

export const Chat = () => {
  const { dbUser } = useAuthStore((state) => state);
  const { setError } = useErrorStore((state) => state);
  const params = useLocalSearchParams();
  const giftedChatRef = useRef<FlatList<IMessage>>(null);
  const isBrowser = Device.deviceType === Device.DeviceType.DESKTOP;
  const messagesOrderBy: Order_By = isBrowser ? Order_By.Asc : Order_By.Desc;

  const conversationId = params?.id;
  if (!conversationId) setError('No conversation id provided');

  useEffect(() => {
    isBrowser && giftedChatRef?.current?.scrollToIndex({ index: 0 });
    if (!dbUser) return;
  }, [isBrowser, dbUser]);

  const { data, loading } = useMessagesSubscriptionSubscription({
    client: useGraphQlClient(),
    variables: {
      conversationId: !isNaN(conversationId as unknown as number)
        ? (conversationId as unknown as number)
        : 0,
      limit: 50,
      offset: 0,
      order_by: messagesOrderBy,
    },
  });

  const [insertMessagesMutation] = useInsertMessagesMutation({
    client: useGraphQlClient(),
  });

  const [text, setText] = useState('');

  //workaround for defaultProps warning
  const error = console.error;
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <View style={tw`flex-1`}>
      <GiftedChat
        renderComposer={ChatComposer}
        scrollToBottom={false}
        messageContainerRef={giftedChatRef}
        // infiniteScroll
        isTyping
        // loadEarlier
        // onLoadEarlier={() => {
        //   console.log('loading earlier');
        // }}
        // isLoadingEarlier={loading}
        inverted={isBrowser ? false : true}
        user={{ ...dbUser, _id: dbUser?.id as number }}
        onSend={async (messages: IMessage[]) => {
          if (!isBrowser) {
            giftedChatRef?.current?.scrollToIndex({
              animated: true,
              index: 0,
            });
          }
          try {
            const objects = [
              {
                text: messages[0].text,
                sender_id: dbUser?.id || 0,
                conversation_id: conversationId as unknown as number,
              },
            ];
            console.log({ objects });

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
                    {...props}
                    style={tw`py-1 px-5 text-lg rounded-xl text-white bg-teal-700`}
                  >{`${Object.keys(JSON.parse(e?.currentMessage?.text as string))}`}</Text>
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
          (data?.messages.map((mes, index) => ({
            ...mes,
            _id: index,
            createdAt: mes.timestamp,
            user: {
              ...mes.user,
              avatar: mes.user?.profile_image || '',
              _id: mes.user?.id || 0,
            },
          })) as any) || []
        }
        text={text}
      />
    </View>
  );
};

export default Chat;
