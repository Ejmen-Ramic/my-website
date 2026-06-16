import {
  Box,
  Button,
  Text,
  Input,
  VStack,
  HStack,
  Stack,
} from '@chakra-ui/react';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const products: CartItem[] = [
  { id: 1, title: 'Bread', price: 3, quantity: 0 },
  { id: 2, title: 'Cereal', price: 5, quantity: 0 },
  { id: 3, title: 'Meat', price: 10, quantity: 0 },
  { id: 4, title: 'Fruits', price: 20, quantity: 0 },
];

const Test: FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: CartItem) => {
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

  const handleDeleteAll = () => {
    setCart([]);
  };

  const handleRemoveItem = (product: CartItem) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const totalSum = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  const totalQuantity = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  return (
    <VStack w={'full'} alignContent={'center'} pt={'200px'}>
      <Button onClick={handleDeleteAll}>Delete All</Button>
      {products.map((product) => (
        <HStack w={'full'} maxW={'300px'} key={product.id}>
          <Text>{product.title}</Text>
          <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
        </HStack>
      ))}
      {cart.map((item) => (
        <VStack key={item.id}>
          <HStack>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            <Text>{item.quantity}</Text>
            <Button onClick={() => handleRemoveItem(item)}>Remove</Button>
          </HStack>
        </VStack>
      ))}
      <Text>Total summed price: {totalSum}</Text>
      <Text>Total amount of items: {totalQuantity}</Text>
    </VStack>
  );
};

export default Test;
