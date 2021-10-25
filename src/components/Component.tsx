import { ReactNode } from 'react';
import { Text, Flex } from '@chakra-ui/react';

type IProps = {
  children?: ReactNode;
  text?: string;
};

export function Component({ children, text = 'This is the default title' }: IProps) {
  return (
    <Flex w="100%" h="100vh" justifyContent="center" alignItems="center" flexDirection="column">
      <Text fontSize="30px">{text}</Text>
      {children}
    </Flex>
  );
}
