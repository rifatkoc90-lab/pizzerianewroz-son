import { Flame } from 'lucide-react';

export function SmashburgareBanner() {
  return (
    <div className="mb-6">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
        
        <div className="flex items-start gap-3">
          <Flame className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-green-700 m-0">
              Beställ online – spara 5–15 kr per rätt
            </h2>
            <p className="text-gray-600 text-sm m-0 mt-1">
              Bättre pris på online beställning.
            </p>
          </div>
        </div>

        <a
          href="https://qopla.com/restaurant/pizzeria-newroz/qVxeKOq9ZD/order"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded-lg transition-colors whitespace-nowrap self-stretch md:self-auto text-center"
        >
          Beställ online
        </a>

      </div>
    </div>
  );
}
