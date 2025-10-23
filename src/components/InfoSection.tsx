import { Info } from 'lucide-react';

export function InfoSection() {
  return (
    <section id="info" className="mt-8 scroll-mt-20">
      <h2 className="text-2xl font-bold text-red-600 border-b-4 border-red-600 inline-block pb-2 mb-4">
        Information
      </h2>
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="text-gray-600">
            <p className="font-semibold">GLUTENFRI PIZZA BOTTEN +30:-</p>
            <p className="font-semibold">BARNPIZZOR 10:- AVDRAG</p>
          </div>
        </div>
      </div>
    </section>
  );
}
