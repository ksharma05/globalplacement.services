import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;