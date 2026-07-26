import BackgroundVideo from './components/BackgroundVideo';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import ProofOfWork from './components/ProofOfWork';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white">
      <BackgroundVideo />
      <main className="relative z-10">
        <Hero />
        <WhatIDo />
        <ProofOfWork />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
