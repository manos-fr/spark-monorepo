import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import {
  useInsertMessageMutation,
  useMessagesSubscriptionSubscription,
} from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import tw from 'twrnc';
import { useAuthStore } from '../../state/useStore';

export const Chat = ({ chatUserId }: { chatUserId: string }) => {
  const { dbUser } = useAuthStore((state) => state);
  const { data, loading } = useMessagesSubscriptionSubscription({
    client: useGraphQlClient(),
    variables: { userId1: +chatUserId || 0, userId2: dbUser?.id || 0 },
  });
  const [insertMessageMutation] = useInsertMessageMutation({
    client: useGraphQlClient(),
  });

  const [text, setText] = useState('');

  return (
    <View style={tw`w-full h-1/2`}>
      <GiftedChat
        isTyping
        loadEarlier
        renderUsernameOnMessage
        user={{ ...dbUser, _id: dbUser?.id || 0 }}
        renderLoadEarlier={() =>
          loading && <ActivityIndicator size="large"></ActivityIndicator>
        }
        messagesContainerStyle={tw`bg-slate-200 rounded-lg p-2`}
        onSend={async (messages: IMessage[]) => {
          const object = {
            text: messages[0].text,
            user_id: dbUser?.id || 0,
          };
          await insertMessageMutation({
            variables: { object },
          });
        }}
        onInputTextChanged={(text) => {
          setText(text);
        }}
        showUserAvatar
        messages={
          (data?.messages.map((mes, index) => ({
            ...mes,
            _id: index,
            user: { ...mes.user, avatar: mes.user?.profile_image || '' },
          })) as any) || []
        }
        text={text}
      />
    </View>
  );
};

export default Chat;
