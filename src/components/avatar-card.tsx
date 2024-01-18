import { Image, XStack, YStack } from 'tamagui';

import Elizabeth from '../assets/Elizabeth.png';
import { TextNeon } from './text-neon';

export function AvatarCard() {
  return (
    <XStack
      shadowRadius={12}
      shadowColor={'#bb47ff'}
      maxHeight={110}
      bg={'#1F1F1F'}
      px={24}
      borderRadius={16}
      mt={55}
      space={14}>
      <Image
        shadowOpacity={0}
        alignSelf="flex-end"
        source={{
          uri: Elizabeth,
        }}
        w={90}
        h={150}
      />

      <YStack alignSelf="center" f={1}>
        <XStack jc={'space-between'}>
          <TextNeon
            neonColor="#bb47ff"
            text="Elizabeth Webber"
            alignSelf="flex-end"
            maxWidth={90}
          />

          <YStack alignItems="flex-end">
            <TextNeon neonColor="#ff4747" text="18/20" />

            <TextNeon neonColor="#47a0ff" text="39/46" />
          </YStack>
        </XStack>
      </YStack>
    </XStack>
  );
}
