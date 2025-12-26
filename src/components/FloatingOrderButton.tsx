import { Pizza } from 'lucide-react';

export function FloatingOrderButton() {
  return (
    <a
      href="https://qopla.com/restaurant/pizzeria-newroz/qVxeKOq9ZD/order"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-full shadow-xl hover:shadow-2xl transition-all z-50 flex items-center gap-2"
    >
      <Pizza className="w-5 h-5" />
      <span>Beställ Online 🔥</span>
    </a>
  );
}
