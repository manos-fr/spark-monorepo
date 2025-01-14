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
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

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
  const router = useRouter();

  return (
    <ScrollView style={tw`mt-2 p-2`}>
      <Pressable onPress={() => router.back()}>
        <Ionicons name="chevron-back-outline" size={26} color="black" />
      </Pressable>
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
                    activeSupplyCategory === item && tw`text-white`,
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
    </ScrollView>
  );
};
export default SupplierDetail;
