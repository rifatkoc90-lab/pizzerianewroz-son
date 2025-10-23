export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-white py-3 px-4 shadow-md sticky top-0 z-40">
      <div className="flex gap-6 justify-center items-center max-w-7xl mx-auto">
        <button
          onClick={() => scrollToSection('meny')}
          className="font-semibold text-red-600 hover:text-red-700 transition-colors"
        >
          Meny
        </button>
        <button
          onClick={() => scrollToSection('kontakt')}
          className="font-semibold text-red-600 hover:text-red-700 transition-colors"
        >
          Kontakt
        </button>
        <button
          onClick={() => scrollToSection('info')}
          className="font-semibold text-red-600 hover:text-red-700 transition-colors"
        >
          Info
        </button>
      </div>
    </nav>
  );
}
