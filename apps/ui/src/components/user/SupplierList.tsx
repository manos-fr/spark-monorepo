import React from 'react';
import { View } from 'react-native';
import { SupplierItem } from './SupplierItem';

interface SupplyListProps {
  category: string;
}

const SupplierList: React.FC<SupplyListProps> = ({ category }) => (
  <View>
    <SupplierItem category={category} />
  </View>
);
export default SupplierList;
