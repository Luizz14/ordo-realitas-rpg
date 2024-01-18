import { Stack, Text, XStack, YStack } from 'tamagui';
import { Subtitle, Title } from 'tamagui.config';

export default function Page() {
  return (
    <Stack bg={'#1F1F1F'} f={1}>
      <YStack p={24}>
        <Title>Hello World</Title>

        <XStack>
          <Text color={'#FFF'}>Elizabeth Webber</Text>
        </XStack>
      </YStack>
    </Stack>
  );
}
