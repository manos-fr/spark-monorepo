import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useCartStore } from '../state/useStore';
import { faker } from '@faker-js/faker';
import tw from 'twrnc';
import { useState } from 'react';
import { useGetSuppliersQuery } from '../graphql/generated';
import { useGraphQlClient } from '../hooks/useGraphQlClient';
import { Link } from 'expo-router';

export default function Page() {
  const { products, addProduct, emptyCart, removeProduct } = useCartStore();
  const [isFocus, setFocus] = useState<boolean>(false);

  const { data: suppliersData } = useGetSuppliersQuery(useGraphQlClient());

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={tw`font-bold my-10 `}>{JSON.stringify(products)}</Text>
        <View style={tw`my-6`}>
          {suppliersData && (
            <View>
              {suppliersData.suppliers.map((e) => (
                <Text style={tw`text-xl font-bold`}>{e.name}</Text>
              ))}
            </View>
          )}
        </View>
        <TextInput
          placeholder="Text Input"
          placeholderTextColor={'gray'}
          editable
          focusable
          onFocus={() => setFocus(true)}
          onEndEditing={() => setFocus(false)}
          style={tw.style(
            [
              'text-lg font-bold text-black px-10 p-2 rounded-md w-1/2 border-2',
            ],
            [isFocus ? 'border-red-500' : 'border-gray-500']
          )}
        />
        <Pressable
          onPress={() =>
            addProduct({
              id: Math.floor(Math.random() * 10),
              name: faker.commerce.product(),
              category: faker.commerce.productMaterial(),
              price: +faker.commerce.price(),
              description: faker.commerce.productDescription(),
              supplier_id: Math.floor(Math.random() * 10),
            })
          }
        >
          <Text>Add product</Text>
        </Pressable>
        <Pressable onPress={() => emptyCart()}>
          <Text>Empty Cart</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            const randomInt = Math.floor(Math.random() * 10);
            console.log(randomInt);
            removeProduct(randomInt);
          }}
        >
          <Text>Remove Product</Text>
        </Pressable>
        <View>
          <Link href="/Login">Auth Page</Link>
        </View>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 36,
    color: '#38434D',
  },
});
