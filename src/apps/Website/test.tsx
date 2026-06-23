import {
  Button,
  Input,
  VStack,
  Text,
  Select,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { title } from 'process';
import { FC, useMemo, useState } from 'react';

interface CartProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const products: CartProps[] = [
  { id: 1, title: 'Apple', price: 2.5, quantity: 0 },
  { id: 2, title: 'Banana', price: 1.2, quantity: 0 },
  { id: 3, title: 'Bread', price: 3.8, quantity: 0 },
  { id: 4, title: 'Milk', price: 4.5, quantity: 0 },
  { id: 5, title: 'Eggs', price: 5.0, quantity: 0 },
];
const Test: FC = () => {
  const [cart, setCart] = useState<CartProps[]>([]);

  const handleAddToCart = (product: CartProps) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveAll = () => {
    setCart([]);
  };

  const handleRemoveCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalQuantity = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity + item.price, 0);
  }, [cart]);

  return (
    <VStack w={'full'} alignContent={'center'} mt={'300px'}>
      <VStack
        w={'full'}
        maxW={'800px'}
        gap={'30px'}
        border={'1px'}
        borderColor={'gray'}
        borderRadius={'10px'}
        alignItems={'center'}
        p={'35px'}
      >
        <Button onClick={handleRemoveAll}>Remove All </Button>

        <HStack w={'full'} maxW={'500px'} justifyContent={'space-between'}>
          {products.map((prod) => (
            <HStack key={prod.id}>
              <Text>{prod.title}</Text>
              <Button onClick={() => handleAddToCart(prod)}>✓</Button>
            </HStack>
          ))}
        </HStack>

        <VStack w={'full'} maxW={'400px'}>
          {cart.map((item) => (
            <HStack key={item.id}>
              <Text>{item.title}</Text>
              <Text>{item.quantity}</Text>

              <Button onClick={() => handleRemoveCart(item.id)}>
                Remove Item
              </Button>
              <Text>{item.price}</Text>
            </HStack>
          ))}
          <Text>{totalQuantity}</Text>
          <Text>{totalPrice}</Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Test;
