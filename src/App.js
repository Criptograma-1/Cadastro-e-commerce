import './App.css';
import Footer from './components/Footer';
import Routes from './routes'
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Home />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
