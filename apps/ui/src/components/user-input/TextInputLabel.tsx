import React, { ReactElement, ReactNode } from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
} from 'react-native';
import tw from 'twrnc';

interface TextInputLabelProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  icon?: ReactNode | null;
  onIconPress?: () => void;
  label: string;
}

const TextInputLabel = ({
  containerStyle,
  labelStyle,
  textInputStyle,
  label,
  icon,
  onIconPress,
  ...textInputProps
}: TextInputLabelProps) => (
  <View style={[tw`mb-3`, containerStyle]}>
    <Text style={[tw`font-semibold mb-1`, labelStyle]}>{label}</Text>
    <View style={tw`relative`}>
      <TextInput
        style={[tw`bg-gray-100 p-3 rounded-lg font-semibold`, textInputStyle]}
        placeholderTextColor="#A0AEC0"
        {...textInputProps}
      />
      {icon && (
        <Pressable
          style={tw`absolute inset-y-0 right-0 flex items-center justify-center pr-3`}
          onPress={onIconPress}
        >
          {icon}
        </Pressable>
      )}
    </View>
  </View>
);

export default TextInputLabel;
