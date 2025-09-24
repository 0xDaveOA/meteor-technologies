import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;


