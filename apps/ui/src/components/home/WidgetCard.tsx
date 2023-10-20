import { ReactNode } from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

interface WidgetCardProps {
  children: ReactNode;
  title?: string;
}
export const WidgetCard = ({ children, title }: WidgetCardProps) => (
  <View style={tw`p-3 rounded-lg bg-gray-50 h-full flex flex-col gap-3`}>
    {title && <View style={tw`text-sm font-medium`}>{title}</View>}
    {children}
  </View>
);

export default WidgetCard;
