import { ReactNode } from 'react';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import NavbarComponent from '../Navbar/Navbar';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <ContactSection />
      <Footer />
    </>
  );
};

export default Layout;
