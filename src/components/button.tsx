import { Text, XStack } from 'tamagui';
import { TamagButton, TamagButtonProps } from 'tamagui.config';

interface ButtonProps extends TamagButtonProps {
  text: string;
}

export function Button({ text, type, ...props }: ButtonProps) {
  return (
    <TamagButton type={type} {...props}>
      <Text color={type === 'outline' ? '#F8ECFE' : '#1A1A1A'} fontSize={18} fontWeight={'500'}>
        {text}
      </Text>
    </TamagButton>
  );
}
