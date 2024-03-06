import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SupplierCard from '../../components/user/SupplierCard';
import tw from 'twrnc';
import { useRouter } from 'expo-router';

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
  const router = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 mx-5 mb-20`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={tw`text-2xl font-bold my-3`}>Οι προμηθευτές μου</Text>
        <View style={tw`flex flex-row flex-wrap justify-between`}>
          {dummySuppliers.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => router.push(`/supplier/${item.id}`)}
            >
              <SupplierCard
                name={item.name}
                imageUrl={item.imageUrl}
                address={item.address}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
