import { Flame } from 'lucide-react';

export function SmashburgareBanner() {

  const goToOnlineOrder = () => {
    window.open(
      "https://qopla.com/restaurant/pizzeria-newroz/qVxeKOq9ZD/order",
      "_blank"
    );
  };

  return (
    <div className="mb-6">
      <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
        
        <div className="flex items-start gap-3">
          <Flame className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-red-700 m-0">
              Beställ online – bättre pris vid onlinebeställning
            </h2>
            <p className="text-gray-600 text-sm m-0 mt-1">
              Beställ via hemsidan och spara 5–15 kr per maträtt.
            </p>
          </div>
        </div>

        <button
          onClick={goToOnlineOrder}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded-lg transition-colors whitespace-nowrap self-stretch md:self-auto text-center"
        >
          Beställ Online 🔥
        </button>

      </div>
    </div>
  );
}
