import { MapPin, Phone, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <section id="kontakt" className="mt-8 scroll-mt-20">
      <h2 className="text-2xl font-bold text-red-600 border-b-4 border-red-600 inline-block pb-2 mb-4">
        Kontakt
      </h2>
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900">Adress</p>
            <a
              href="https://maps.app.goo.gl/THDeTocZSJsEKQBX8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Ruddammsgatan 2, 647 32 Mariefred
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900">Telefon</p>
            <a href="tel:0159-13111" className="text-gray-600 hover:text-red-600 transition-colors">
              0159-131 11
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-gray-900">Öppettider</p>
            <p className="text-gray-600">Mån–Tors: 11:00–21:00</p>
            <p className="text-gray-600">Fre–Sön: 11:00–21:00</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 pt-2 border-t border-gray-200">
          Beställ online via knappen nere till höger.
        </p>
      </div>
    </section>
  );
}
