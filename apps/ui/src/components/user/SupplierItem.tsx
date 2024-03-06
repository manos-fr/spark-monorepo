import { View, Text } from 'react-native';
import tw from 'twrnc';

interface SupplyListProps {
  category: string;
}

export const SupplierItem = ({ category }: SupplyListProps) => {
  const dummyData = [
    { id: '1', name: 'Item 1', price: '$2.99' },
    { id: '2', name: 'Item 2', price: '$4.50' },
  ];

  return (
    <View>
      <Text style={tw`text-xl font-bold mb-6 text-center`}>{category}</Text>
      {dummyData.map((item) => (
        <View
          key={item.id}
          style={tw`flex flex-row items-center p-2 border rounded mb-3 mx-3`}
        >
          <View style={tw`w-full justify-between flex-row`}>
            <Text style={tw`mx-3 text-lg`}>{item.name}</Text>
            <Text style={tw`mx-3 text-lg`}>{item.price}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
