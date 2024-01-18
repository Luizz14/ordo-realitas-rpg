import { Image, XStack } from 'tamagui';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import Elizabeth from '../assets/Elizabeth.png';
import { TextNeon } from './text-neon';

interface CharacterCardProps extends TouchableOpacityProps {}

export function CharacterCard({ ...props }: CharacterCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} {...props}>
      <XStack
        shadowRadius={3}
        shadowColor={'#bb47ff'}
        maxHeight={80}
        bg={'#1F1F1F'}
        px={24}
        borderRadius={16}
        space={14}
        ai={'center'}
        jc={'center'}>
        <Image
          shadowOpacity={0}
          alignSelf="flex-end"
          source={{
            uri: Elizabeth,
          }}
          w={75}
          h={110}
        />

        <TextNeon neonColor="#bb47ff" text="Elizabeth Webber" />
      </XStack>
    </TouchableOpacity>
  );
}
