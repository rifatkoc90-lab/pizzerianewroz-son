export function Header() {
  return (
    <header className="bg-gradient-to-r from-red-800 to-red-600 text-white py-7 px-4">
      <div className="flex items-center gap-4 max-w-7xl mx-auto">
        <div
          className="w-20 h-20 rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
          style={{ backgroundColor: '#E8DCC4' }}
        >
          <img
            src="/Logo.jpg"
            alt="Pizzeria Newroz Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold m-0">
            Pizzeria Newroz
          </h1>

          {/* Ana slogan */}
          <p className="text-sm md:text-base opacity-95 m-0 mt-1">
            Äkta pizzor, kebab & grill
          </p>

          {/* YENİ SATIŞ SATIRI */}
          <p className="text-xs md:text-sm mt-1 font-medium opacity-90">
• Har du allergier eller specialkost? Fråga oss.          </p>
        </div>
      </div>
    </header>
  );
}
