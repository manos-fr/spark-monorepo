import { View, Text } from 'react-native';
import { WidgetCard } from './WidgetCard';
import tw from 'twrnc';

export const WelcomeWidget = () => (
  <View>
    <WidgetCard>
      <Text style={tw`text-2xl font-medium`}>Imported Component</Text>
    </WidgetCard>
  </View>
);
export default WelcomeWidget;
