import { Flame } from 'lucide-react';

export function SmashburgareBanner() {
  const scrollToSmash = () => {
    const element = document.getElementById('categories');
    if (element?.firstElementChild) {
      element.firstElementChild.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="mb-6">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start gap-3">
          <Flame className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-green-600 m-0">
              Smashburgare — Se våra burgare!
            </h2>
            <p className="text-gray-600 text-sm m-0 mt-1">
              Våra burgare är gjorda av färsk högrev.
            </p>
          </div>
        </div>
        <button
          onClick={scrollToSmash}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-5 rounded-lg transition-colors whitespace-nowrap self-stretch md:self-auto text-center"
        >
          Se Smashburgare
        </button>
      </div>
    </div>
  );
}
