import { SafeAreaView, ScrollView, View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import tw from 'twrnc';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export const Welcome = () => (
  <SafeAreaView style={tw`bg-white flex-1 mx-1`}>
    <ScrollView>
      <View style={tw`px-4 mt-18`}>
        <Text style={tw`font-extrabold text-black text-xl text-left mb-3 mt-8`}>
          Είσαι προμηθευτής; Σε έχουμε! Εστιατόριο; Κι εσένα σε έχουμε!
        </Text>
        <Text style={tw`font-light text-black text-left mb-10`}>
          Μπες στη νέα εποχή και κάνε τις παραγγελίες σου πιο γρήγορα από ποτέ
        </Text>

        {/* Doesn't work - Need to figure out images */}
        <Image
          style={tw`flex-1`}
          source="/assets/logo/spark-spash-horizontal"
          placeholder={blurhash}
          contentFit="cover"
        />

        <Pressable
          onPress={() => router.push('/login')}
          style={tw`bg-teal-700 rounded-lg py-2 mt-8`}
        >
          <Text style={tw`text-center font-semibold text-white text-lg`}>
            Σύνδεση
          </Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('sign-up')}
          style={tw`bg-gray-200 rounded-lg py-2 mt-4`}
        >
          <Text style={tw`text-center font-semibold text-teal-700 text-lg`}>
            Εγγραφή
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default Welcome;
