import { Link } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

export default function Page() {
  return (
    <SafeAreaView style={tw`bg-white flex-1 mx-5`}>
      <TouchableOpacity>
        <Link href="/Login" style={tw`font-bold text-blue-500 text-4xl mt-50`}>
          Σύνδεση
        </Link>
        <View>
          <Text>Λήψη 4ψήφιου κωδικού στο email: trelakipaok@paok.fc</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
