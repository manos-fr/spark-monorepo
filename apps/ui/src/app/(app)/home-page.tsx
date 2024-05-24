import { View, Text, ScrollView, Pressable } from 'react-native';
import SupplierCard from '../../components/user/SupplierCard';
import tw from 'twrnc';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import { useAuthStore } from '../../state/useStore';
import {
  useGetUserQuery,
  useGetUserSuppliersQuery,
} from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import { User } from 'firebase/auth';

const HomePage = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const router = useRouter();
  const { user } = useAuthStore((state) => state);

  const client = useGraphQlClient();

  const { data: dbUser } = useGetUserQuery({
    client,
    skip: !user,
    variables: { uid: { _eq: user?.uid } },
  });

  useEffect(() => {
    useAuthStore.setState(() => ({
      dbUser: {
        ...(user as User),
        id: dbUser?.users?.[0]?.id,
        name: dbUser?.users?.[0]?.name,
      },
    }));
  }, [dbUser?.users, user]);

  const {
    data: connectedSuppliers,
    loading: loadingConnectedSuppliers,
    error: errorFetchingConnectedSuppliers,
  } = useGetUserSuppliersQuery({
    client,
    variables: { id: dbUser?.users?.[0]?.id || 0 },
  });

  if (loadingConnectedSuppliers) {
    return <Text>Loading data...</Text>;
  }

  if (errorFetchingConnectedSuppliers) {
    return (
      <Text>
        Error fetching suppliers: {errorFetchingConnectedSuppliers.message}
      </Text>
    );
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
      <View style={tw`flex-1 m-4`}>
        <Text style={tw`text-2xl font-bold mb-4`}>Οι προμηθευτές μου</Text>
        <View style={tw`flex-row flex-wrap justify-between`}>
          {connectedSuppliers?.user_relationships.map((user) => (
            <Pressable
              key={user.supplier.id}
              onPress={() => router.push(`/supplier/${user.supplier.id}`)}
            >
              <SupplierCard
                name={user.supplier.name}
                imageUrl={user.supplier.profile_image}
                address={user.supplier.address}
              />
            </Pressable>
          ))}
        </View>
        <View style={tw`mt-10 justify-end items-end mb-10`}>
          <Pressable
            onPressIn={() => router.push('/conversations')}
            style={tw`bg-slate-400 rounded-lg`}
          >
            <Text style={tw`px-5 py-2 justify-center items-center`}>
              Conversations
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
