import React, { ReactNode } from 'react';
import { View } from 'react-native';
import debounce from 'lodash.debounce';
import { useGraphQlClient } from '../hooks/useGraphQlClient';
import { useAuthStore } from '../state/useStore';
import { useUpdateUserLastSeenMutation } from '../graphql/__generated__/graphql';

interface IProps {
  children: ReactNode;
}

const TouchHandler = ({ children }: IProps) => {
  const { dbUser, user } = useAuthStore((state) => state);

  const [updateUserLastSeenMutation] = useUpdateUserLastSeenMutation({
    client: useGraphQlClient(),
  });

  const handlePress = debounce(async () => {
    const userId = dbUser?.id;
    if (!userId || !user) return;
    console.log('Screen Pressed!');

    try {
      const { data } = await updateUserLastSeenMutation({
        variables: { id: userId },
      });
      console.log({ data: data?.update_users_by_pk });
    } catch (error) {
      console.log('Error updating user last seen', { error });
    }
  }, 5000);
  return <View onTouchStart={handlePress}>{children}</View>;
};

export default TouchHandler;
