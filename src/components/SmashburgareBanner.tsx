import { Laptop } from 'lucide-react';

// Kampanya 30 Kasım gece yarısı biter (İsveç saati)
const CAMPAIGN_END = new Date("2026-12-01T00:00:00+01:00");

export function SmashburgareBanner() {
  const goToOnlineOrder = () => {
    window.open(
      "https://qopla.com/restaurant/pizzeria-newroz/qVxeKOq9ZD/order",
      "_blank"
    );
  };

  if (new Date() >= CAMPAIGN_END) return null;

  return (
    <div className="mb-6">
      <div className="relative overflow-hidden rounded-2xl bg-black border-2 border-yellow-500 p-5 md:p-8 text-center shadow-xl">
        {/* Kırmızı glow efektleri */}
        <div className="absolute -top-12 -left-12 w-52 h-52 bg-red-600/40 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-red-600/40 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-3">
          {/* Restoran adı */}
          <div className="flex items-center gap-3 w-full justify-center">
            <span className="h-px w-8 md:w-16 bg-yellow-500" />
            <p className="text-yellow-400 font-extrabold tracking-wide text-lg md:text-2xl m-0">
              PIZZERIA NEWROZ
            </p>
            <span className="h-px w-8 md:w-16 bg-yellow-500" />
          </div>

          {/* Ana başlık */}
          <h2 className="text-white font-black italic uppercase leading-none text-4xl md:text-6xl m-0">
            Black Friday
          </h2>
          <div className="bg-red-600 -skew-x-6 px-6 py-1 shadow-lg">
            <h2 className="text-white font-black italic uppercase leading-none text-4xl md:text-6xl m-0 skew-x-6">
              Pizza Deal
            </h2>
          </div>

          <p className="text-yellow-400 font-extrabold text-2xl md:text-4xl m-0">
            Köp 3, betala för 2!
          </p>

          {/* Rabattkod */}
          <div className="bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 rounded-xl px-6 py-2">
            <p className="text-black font-black text-lg md:text-2xl m-0">
              RABATTKOD: NEWROZ
            </p>
          </div>

          {/* Enkelt & smidigt */}
          <div className="my-2">
            <p className="text-white font-extrabold text-2xl md:text-4xl m-0">
              Beställ på hemsidan
            </p>
            <p className="text-yellow-400 font-bold text-xl md:text-3xl m-0 mt-1">
              Enkelt & smidigt!
            </p>
          </div>

          {/* Uyarı çubuğu */}
          <div className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-800 via-red-600 to-red-800 border-2 border-yellow-500 rounded-2xl px-4 py-3">
            <Laptop className="w-8 h-8 md:w-10 md:h-10 text-white flex-shrink-0" />
            <div className="text-left md:text-center">
              <p className="text-white font-extrabold uppercase text-sm md:text-xl m-0">
                Gäller bara på hemsidan
              </p>
              <p className="text-yellow-300 font-extrabold uppercase text-base md:text-2xl m-0">
                och bara pizzor
              </p>
            </div>
          </div>

          {/* Tarih */}
          <div className="flex items-center gap-3 w-full justify-center">
            <span className="h-px w-8 md:w-16 bg-yellow-500" />
            <p className="text-white font-semibold text-lg md:text-2xl m-0">
              Gäller 20–30 november
            </p>
            <span className="h-px w-8 md:w-16 bg-yellow-500" />
          </div>

          {/* Buton */}
          <button
            onClick={goToOnlineOrder}
            className="bg-red-600 hover:bg-red-700 text-white font-black text-lg md:text-xl py-3 px-8 rounded-xl border-2 border-yellow-400 transition-colors w-full md:w-auto"
          >
            Beställ Online 🔥
          </button>

          {/* Ödeme yöntemleri */}
          <div className="flex flex-wrap items-center justify-center gap-2 border border-yellow-500 rounded-xl px-3 py-2">
            <span className="text-white text-xs md:text-sm font-semibold">
              Betala enkelt med:
            </span>
            {["Swish", "Mastercard", "VISA", "Klarna"].map((p) => (
              <span
                key={p}
                className="bg-white text-black text-xs md:text-sm font-bold px-3 py-1 rounded-md"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
