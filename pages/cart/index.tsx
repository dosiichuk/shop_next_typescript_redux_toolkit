import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

import Cart from '../../components/features/Cart/Cart';

const CartPage: NextPage = () => {
  return (
    <div>
      <Container>
        <h2 className="sectionTitle">Your cart</h2>
        <Cart />
      </Container>
    </div>
  );
};

export default CartPage;
