import './App.css';

import NavData from './Data/NavData'
import FooterData from './Data/FooterData'
import HomePage from './Data/HomePage'

import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import ThreeCallouts from './Components/ThreeCallouts'
import CategoryTiles from './Components/CategoryTiles'

function App() {
  return (
    <main>  
        <Nav data={NavData}></Nav>
        <Hero data={HomePage.hero} />
        <ThreeCallouts data={HomePage.threeCallouts} />
        <CategoryTiles data={HomePage.categoryTiles} />
        <Footer data={FooterData}></Footer>
    </main>
  );
}

export default App;
