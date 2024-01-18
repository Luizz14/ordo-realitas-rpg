import { TouchableOpacity } from 'react-native';
import { ScrollView, Text, XStack, YStack } from 'tamagui';

import { AvatarCard } from '~/components/avatar-card';
import { Button } from '~/components/button';

export default function Page() {
  return (
    <ScrollView f={1} bg={'#1F1F1F'} px={24} space={22}>
      <AvatarCard />

      <YStack f={1} ai={'center'} space>
        <Text color={'#FFF'} fontWeight={'600'} fontSize={'$6'}>
          Inventário
        </Text>

        <XStack f={1} jc={'center'} ai={'center'} p={14} my={14}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text color={'#FFF'} fontWeight={'600'} fontSize={'$6'}>
              Adicionar item
            </Text>
          </TouchableOpacity>
        </XStack>
      </YStack>

      <Button type="outline" text="Clicai" />
    </ScrollView>
  );
}
