import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Lounge from './components/Lounge/Lounge';
import Info from './components/Info/Info';
import Search from './components/Search/Search';
import Travelers from './components/Travelers/Travelers';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Support from './components/Support/Support';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Footer />
    </div>
  );
}

export default App;
