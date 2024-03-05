import React from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import tw from 'twrnc';

interface TextInputLabelProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  label: string;
}

const TextInputLabel = ({
  containerStyle,
  labelStyle,
  label,
  ...textInputLabelProps
}: TextInputLabelProps) => (
  <View style={[tw`mb-3`, containerStyle]}>
    <Text style={[tw`font-semibold mb-1`, labelStyle]}>{label}</Text>
    <TextInput
      style={tw`bg-gray-100 py-3 rounded-lg mb-5 hover:border-black`}
      placeholderTextColor="#A0AEC0"
      {...textInputLabelProps}
    />
  </View>
);

export default TextInputLabel;
