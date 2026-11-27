import { Laptop } from 'lucide-react';

export function SmashburgareBanner() {
  const goToOnlineOrder = () => {
    window.open(
      "https://qopla.com/restaurant/pizzeria-newroz/qVxeKOq9ZD/order",
      "_blank"
    );
  };

  return (
    <div className="mb-6">
      <div className="relative overflow-hidden rounded-2xl bg-black border-2 border-yellow-500 p-5 md:p-8 text-center shadow-xl">
        {/* Kırmızı glow efektleri */}
        <div className="absolute -top-12 -left-12 w-52 h-52 bg-red-600/40 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-red-600/40 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-4">
          {/* Restoran adı */}
          <div className="flex items-center gap-3 w-full justify-center">
            <span className="h-px w-8 md:w-16 bg-yellow-500" />
            <p className="text-yellow-400 font-extrabold tracking-wide text-lg md:text-2xl m-0">
              PIZZERIA NEWROZ
            </p>
            <span className="h-px w-8 md:w-16 bg-yellow-500" />
          </div>

          {/* Ana mesaj */}
          <div className="flex items-center justify-center gap-3">
            <Laptop className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 flex-shrink-0" />
            <div className="text-left">
              <h2 className="text-white font-black text-2xl md:text-4xl leading-tight m-0">
                Beställ på hemsidan
              </h2>
              <p className="text-yellow-400 font-bold text-lg md:text-2xl m-0">
                Enkelt & smidigt!
              </p>
            </div>
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
