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
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

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
  const router = useRouter();
  const [activeSupplyCategory, setActiveSupplyCategory] = useState(
    supplyCategory[0],
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`px-4 mt-8`}>
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
                      activeSupplyCategory === item &&
                        tw` bg-teal-700 rounded-lg`,
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SupplierDetail;
