import React from 'react';
import { View } from 'react-native';
import { SupplierItem } from './SupplierItem';

interface SupplyListProps {
  category: string;
}

const SupplierList = ({ category }: SupplyListProps) => (
  <View>
    <SupplierItem category={category} />
  </View>
);
export default SupplierList;
