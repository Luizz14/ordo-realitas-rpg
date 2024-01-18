import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';

import config from '../tamagui.config';

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Architects: require('../assets/fonts/ArchitectsDaughter-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Stack
        screenOptions={{
          headerBlurEffect: 'systemUltraThinMaterialLight',
          title: 'Personagem',
          headerTitleStyle: {
            color: '#fff',
          },
          autoHideHomeIndicator: true,
          headerStyle: {
            backgroundColor: '#1A1A1A',
          },
          contentStyle: {
            backdropFilter: 'blur(10px)',
            backgroundColor: '#1F1F1F',
          },
        }}
      />
    </TamaguiProvider>
  );
}
