import { TextProps } from 'tamagui';
import { Title } from 'tamagui.config';

interface TextNeonProps extends TextProps {
  neonColor: string;
  text: string;
}

export function TextNeon({ neonColor, text, ...props }: TextNeonProps) {
  return (
    <Title
      shadowRadius={5}
      shadowColor={neonColor}
      shadowOpacity={100}
      shadowOffset={{
        width: 0,
        height: 0,
      }}
      opacity={1}
      fontFamily={'$architects'}
      fontSize={22}
      color={'#F8ECFE'}
      {...props}>
      {text}
    </Title>
  );
}
