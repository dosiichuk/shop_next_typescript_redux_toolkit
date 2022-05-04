import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container } from 'react-bootstrap';
import AllProducts from '../components/layout/AllProducts/AllProducts';
import Hero from '../components/layout/Hero/Hero';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Container>
        <h2 className="sectionTitle">Check out our products</h2>
        <div className="row">
          <div className="col-sm-0 col-md-3 col-lg-4"></div>
          <AllProducts />
        </div>
      </Container>
    </div>
  );
};

export default Home;
