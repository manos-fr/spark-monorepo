import { View, Text, ScrollView, Pressable } from 'react-native';
import SupplierCard from '../../components/user/SupplierCard';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { useAuthStore } from '../../state/useStore';
import { useGetUserQuery } from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import { User } from 'firebase/auth';
import Conversations from '../../components/chat/conversations';
import Chat from '../../components/chat/chat';

const dummySuppliers = [
  {
    id: '1',
    name: 'Μανωλιός',
    imageUrl: 'https://picsum.photos/seed/696/3000/2000',
    address: 'Κονταξακη 8, Τουμπα',
  },
  {
    id: '2',
    name: 'Πατατάς',
    imageUrl: 'https://picsum.photos/seed/692/3000/2000',
    address: 'Παμε λιγο 25, Τουμπα',
  },
  {
    id: '3',
    name: 'Μπέλμπας',
    imageUrl: 'https://picsum.photos/seed/699/3000/2000',
    address: 'Στο ετσι το αλλιως, 25 Παοκ',
  },
  {
    id: '4',
    name: 'Αλανιάρα κότα',
    imageUrl: 'https://picsum.photos/seed/691/3000/2000',
    address: 'Ωπα λαλα 42, Καλαμαριά',
  },
  {
    id: '5',
    name: 'Πάμε λίγο',
    imageUrl: 'https://picsum.photos/seed/681/3000/2000',
    address: 'Καπου εκει κοντα τριγυρω περιπου 49, Τουμπα',
  },
];

const HomePage = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const router = useRouter();
  const { user } = useAuthStore((state) => state);
  const [isConversationsOpen, setConversationsOpen] = useState(false);
  const [isChatOpen, setChatOpen] = useState(false);
  const [conversationId, setConversationId] = useState<number>(0);

  const { data: dbUser } = useGetUserQuery({
    client: useGraphQlClient(),
    skip: !user,
    variables: { uid: { _eq: user?.uid } },
  });

  const handleOpenChat = (conversationId: number) => {
    setConversationId(conversationId);
    setChatOpen(!isChatOpen);
  };

  useEffect(() => {
    useAuthStore.setState(() => ({
      dbUser: {
        ...(user as User),
        id: dbUser?.users?.[0]?.id,
      },
    }));
  }, [dbUser?.users, user]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      ref={(ref) => {
        scrollViewRef.current = ref;
      }}
      contentInsetAdjustmentBehavior="automatic"
      onStartShouldSetResponder={() => true}
    >
      <View style={tw`flex-1 m-4`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Οι προμηθευτές μου</Text>
        <View style={tw`flex-row flex-wrap justify-between`}>
          {dummySuppliers.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => router.push(`/supplier/${item.id}`)}
            >
              <SupplierCard
                name={item.name}
                imageUrl={item.imageUrl}
                address={item.address}
              />
            </Pressable>
          ))}
        </View>
        <View style={tw`mt-10 justify-end items-end mb-10`}>
          <Pressable
            onPressIn={() => setConversationsOpen(!isConversationsOpen)}
            style={tw`bg-slate-400 rounded-lg`}
          >
            <Text style={tw`px-5 py-2 justify-center items-center`}>
              Conversations
            </Text>
          </Pressable>
          {isConversationsOpen && (
            <Conversations handleOpenChat={handleOpenChat} />
          )}
          {isChatOpen && <Chat conversationId={conversationId} />}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
