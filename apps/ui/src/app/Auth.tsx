import tw from 'twrnc';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { useRef } from 'react';

export const Auth = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={tw`text-4xl`}>Auth</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Auth;
