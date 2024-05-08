// Create SupplierDetail.tsx in the supplier folder
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import tw from 'twrnc';
import SupplierList from '../../../components/user/SupplierList';
import { Chat } from '../../../components/chat/chat';
import { useLocalSearchParams } from 'expo-router';

const supplyCategory = [
  'Λαχανικά',
  'Φρούτα',
  'Ζυμαρικά',
  'Αρτοσκευάσματα',
  'Γαλακτοκομικά',
  'Χαρτικά',
  'Καθαριστικά',
];

const SupplierDetail = () => {
  const [activeSupplyCategory, setActiveSupplyCategory] = useState(
    supplyCategory[0],
  );
  const [isChatOpen, setChatOpen] = useState(false);
  const searchParams = useLocalSearchParams();

  return (
    <ScrollView>
      <View style={tw`items-center`}>
        <Text style={tw`text-2xl font-bold`}>Supplier Detail Page</Text>
        <Text style={tw`text-lg`}>Supplier ID:</Text>
        <View style={tw`flex flex-row mt-5`}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={supplyCategory}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  tw`p-2 mx-2 `,
                  activeSupplyCategory === item && tw` bg-teal-700 rounded-lg`,
                ]}
                onPress={() => setActiveSupplyCategory(item)}
              >
                <Text
                  style={[
                    tw`text-lg`,
                    activeSupplyCategory === item && tw` text-white`,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <SupplierList category={activeSupplyCategory} />
      </View>
      <Pressable
        onPressIn={() => {
          setChatOpen(!isChatOpen);
        }}
        style={tw`self-center mb-5 bg-teal-700 rounded-md max-h-12 min-w-20`}
      >
        <Text style={tw`text-center font-semibold text-white text-lg`}>
          Chat
        </Text>
      </Pressable>
      {isChatOpen && <Chat chatUserId={searchParams.id as string} />}
    </ScrollView>
  );
};
export default SupplierDetail;
