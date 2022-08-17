import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const App = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default App;
