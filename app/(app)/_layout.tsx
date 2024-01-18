import { Tabs } from 'expo-router/tabs';
import { AddressBook, AlignBottom } from 'phosphor-react-native';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        title: 'Personagem',
        headerTitle: 'Personagem',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1A1A1A',
          borderTopWidth: 0,
          paddingTop: 15,
          paddingBottom: 20,
          height: 80,
          margin: 22,
          borderRadius: 22,
        },
        tabBarActiveTintColor: '#bb47ff',
      }}>
      <Tabs.Screen
        name="character-sheet"
        options={{
          href: 'character-sheet',
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => <AddressBook color={color} weight="bold" />,
          tabBarLabelStyle: {
            color: '#FFF',
            fontWeight: '600',
          },
        }}
      />

      <Tabs.Screen
        name="character-skills"
        options={{
          href: 'character-skills',
          tabBarLabel: 'Ficha',
          tabBarIcon: ({ color }) => <AlignBottom color={color} weight="bold" />,
          tabBarLabelStyle: {
            color: '#FFF',
            fontWeight: '600',
          },
        }}
      />
    </Tabs>
  );
}
