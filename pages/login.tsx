import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Filter from '../components/features/Filter/Filter';
import AllProducts from '../components/layout/AllProducts/AllProducts';
import Hero from '../components/layout/Hero/Hero';

const Login: NextPage = () => {
  return (
    <div>
      <Hero />
      <Container>
        <h2 className="sectionTitle">Login</h2>
      </Container>
    </div>
  );
};

export default Login;
