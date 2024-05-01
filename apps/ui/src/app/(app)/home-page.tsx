import { View, Text, ScrollView, Pressable } from 'react-native';
import SupplierCard from '../../components/user/SupplierCard';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useMessagesSubscriptionSubscription } from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import { useAuthStore } from '../../state/useStore';

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
  const { dbUser, user } = useAuthStore((state) => state);

  const { data } = useMessagesSubscriptionSubscription({
    client: useGraphQlClient(),
    variables: {},
  });

  console.log(data?.messages[0].text);

  return (
    <>
      <View style={tw`flex-row justify-end mt-12`}>
        <Pressable onPress={() => router.push('/settings')}>
          <Ionicons
            name="settings-outline"
            size={26}
            color="black"
            style={tw`m-5`}
          />
        </Pressable>
      </View>
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
          <View style={tw`flex flex-row flex-wrap justify-between`}>
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
        </View>
      </ScrollView>
    </>
  );
};

export default HomePage;
