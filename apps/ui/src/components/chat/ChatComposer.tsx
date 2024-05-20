import {
  Composer,
  ComposerProps,
  IMessage,
  SendProps,
} from 'react-native-gifted-chat';
import * as Device from 'expo-device';

export const ChatComposer = (
  props: ComposerProps & {
    onSend: SendProps<IMessage>['onSend'];
    text: SendProps<IMessage>['text'];
  },
) => (
  <Composer
    {...props}
    textInputProps={{
      ...props.textInputProps,
      blurOnSubmit: Device.deviceType === Device.DeviceType.DESKTOP,
      onSubmitEditing:
        Device.deviceType === Device.DeviceType.DESKTOP
          ? () => {
              if (props.text && props.onSend) {
                props.onSend({ text: props.text.trim() }, true);
              }
            }
          : undefined,
    }}
  />
);
