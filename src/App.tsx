import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { SmashburgareBanner } from './components/SmashburgareBanner';
import { MenuCategory } from './components/MenuCategory';
import { ContactInfo } from './components/ContactInfo';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { FloatingOrderButton } from './components/FloatingOrderButton';
import { menuData } from './data/menuData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full max-w-md">
        <Header />
        <Navigation />

        <main className="px-4 py-8 pb-24">
        <SmashburgareBanner />

        <section id="meny" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-red-600 border-b-4 border-red-600 inline-block pb-2 mb-6">
            Meny
          </h2>

          <div id="categories">
            {menuData.map((category, idx) => (
              <MenuCategory key={idx} category={category} />
            ))}
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Vid hemkörning tillkommer alltid 10 kr per maträtt samt en körningsavgift.
          </p>
        </section>

        <ContactInfo />
        <InfoSection />
      </main>

        <Footer />
        <FloatingOrderButton />
      </div>
    </div>
  );
}

export default App;
