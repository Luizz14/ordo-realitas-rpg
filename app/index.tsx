import { Stack, Link } from 'expo-router';

import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';
import { supabase } from 'utils/supabase';
import { CharacterCard } from '~/components/character-card';
import { ScrollView } from 'tamagui';

export default function Page() {
  async function handleSignIn() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
    console.log(data, error);
    // const { data, error } = await supabase.auth.signInWithOAuth({
    //   provider: 'google',
    //   options: {
    //     queryParams: {
    //       access_type: 'offline',
    //       prompt: 'consent',
    //     },
    //   },
    // });
  }

  return (
    <Container>
      <Main>
        <Stack.Screen options={{ title: 'Início' }} />

        <ScrollView p={24}>
          <Link href={{ pathname: '/character-sheet' }} asChild>
            <CharacterCard />
          </Link>
        </ScrollView>

        <Link href={{ pathname: '/character-sheet' }} asChild>
          <Button bg={'#252525'}>
            <ButtonText>Show Details</ButtonText>
          </Button>
        </Link>
      </Main>
    </Container>
  );
}
