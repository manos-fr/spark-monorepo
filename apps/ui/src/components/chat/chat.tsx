import { Bubble, GiftedChat, IMessage } from 'react-native-gifted-chat';
import {
  Order_By,
  useInsertMessageMutation,
  useMessagesSubscriptionSubscription,
} from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
  FlatList,
} from 'react-native';
import tw from 'twrnc';
import { useAuthStore, useErrorStore } from '../../state/useStore';
import * as Device from 'expo-device';
import { ChatComposer } from './ChatComposer';

export const Chat = ({ conversationId }: { conversationId: number }) => {
  const { dbUser } = useAuthStore((state) => state);
  const { setError } = useErrorStore((state) => state);

  const giftedChatRef = useRef<FlatList<IMessage>>(null);

  const isBrowser =
    Device.deviceType === Device.DeviceType.DESKTOP ? true : false;
  const messagesOrderBy: Order_By = isBrowser ? Order_By.Asc : Order_By.Desc;

  useEffect(() => {
    isBrowser && giftedChatRef?.current?.scrollToIndex({ index: 0 });
    if (!dbUser) return;
  }, [isBrowser, dbUser]);

  // const { data, loading } = useMessagesSubscriptionSubscription({
  //   client: useGraphQlClient(),
  //   variables: {
  //     userId1: +chatUserId || 0,
  //     userId2: dbUser?.id || 0,
  //     order_by: messagesOrderBy,
  //   },
  // });
  // const [insertMessageMutation] = useInsertMessageMutation({
  //   client: useGraphQlClient(),
  // });

  const [text, setText] = useState('');

  //workaround for defaultProps warning
  const error = console.error;
  console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <View style={tw`w-full h-1/2`}>
      <GiftedChat
        renderComposer={ChatComposer}
        scrollToBottom={false}
        messageContainerRef={giftedChatRef}
        isTyping
        loadEarlier
        inverted={isBrowser ? false : true}
        user={{ ...dbUser, _id: dbUser?.id as number }}
        renderBubble={(props) =>
          props.currentMessage?.is_order ? (
            <Pressable>
              <Bubble
                {...props}
                onPress={() => console.log('View to order')}
                renderMessageText={(e) => (
                  <Text
                    {...props}
                    style={tw`py-1 px-5 text-lg font-roboto text-ellipsis rounded-xl text-white bg-teal-700`}
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
        // renderLoadEarlier={() =>
        //   loading && <ActivityIndicator size="large"></ActivityIndicator>
        // }
        messagesContainerStyle={tw`bg-slate-200 rounded-t-3xl p-4`}
        onSend={async (messages: IMessage[]) => {
          if (!isBrowser) {
            giftedChatRef?.current?.scrollToIndex({
              animated: true,
              index: 0,
            });
          }
          try {
            const object = {
              text: messages[0].text,
              sender_id: dbUser?.id || 0,
            };
            // await insertMessageMutation({
            //   variables: { object },
            // });
          } catch (error) {
            setError(error);
          }
        }}
        onInputTextChanged={(text) => {
          setText(text);
        }}
        showUserAvatar
        // messages={
        //   (data?.messages.map((mes, index) => ({
        //     ...mes,
        //     _id: index,
        //     createdAt: mes.timestamp,
        //     user: {
        //       ...mes.user,
        //       avatar: mes.user?.profile_image || '',
        //       _id: mes.user?.id || 0,
        //     },
        //   })) as any) || []
        // }
        text={text}
      />
    </View>
  );
};

export default Chat;
