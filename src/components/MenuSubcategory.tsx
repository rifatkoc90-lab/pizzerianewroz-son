import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Subcategory } from '../types/menu';
import { MenuItemComponent } from './MenuItemComponent';

interface MenuSubcategoryProps {
  subcategory: Subcategory;
}

export function MenuSubcategory({ subcategory }: MenuSubcategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{subcategory.title}</span>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-600" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-4 bg-white">
          {subcategory.items.map((item, idx) => (
            <MenuItemComponent key={idx} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
