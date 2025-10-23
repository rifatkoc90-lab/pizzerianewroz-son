import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Category } from '../types/menu';
import { MenuItemComponent } from './MenuItemComponent';

interface MenuCategoryProps {
  category: Category;
}

export function MenuCategory({ category }: MenuCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const allItems = category.subs.flatMap(sub => sub.items);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 transition-shadow hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <div className="text-left">
          <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
          {category.info && (
            <p className="text-sm text-gray-600 mt-1">{category.info}</p>
          )}
        </div>
        <div className="ml-4 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-600" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-gray-200 px-5 pb-4 bg-white">
          {allItems.map((item, idx) => (
            <MenuItemComponent key={idx} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
