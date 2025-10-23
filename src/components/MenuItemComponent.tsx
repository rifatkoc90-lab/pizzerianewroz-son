import { MenuItem } from '../types/menu';

interface MenuItemComponentProps {
  item: MenuItem;
}

export function MenuItemComponent({ item }: MenuItemComponentProps) {
  const renderPrice = () => {
    if (item.priceS && item.priceM) {
      return (
        <div className="text-right">
          <div className="text-sm">S: {item.priceS}</div>
          <div className="text-sm">M: {item.priceM}</div>
        </div>
      );
    }

    if (item.prices) {
      return (
        <div className="text-right">
          {item.prices['100g'] && (
            <div className="text-sm">
              100 g: {item.prices['100g']}
            </div>
          )}
          {item.prices['200g'] && (
            <div className="text-sm">
              200 g: {item.prices['200g']}
            </div>
          )}
          {item.prices['300g'] && (
            <div className="text-sm">
              300 g: {item.prices['300g']}
            </div>
          )}
        </div>
      );
    }

    if (item.price && item.price.includes('/')) {
      const sizes = [100, 200, 300];
      const prices = item.price.split('/');
      return (
        <div className="text-right">
          {sizes.map((size, idx) => (
            <div key={idx} className="text-sm">
              {size} g: {prices[idx] || prices[prices.length - 1]}
            </div>
          ))}
        </div>
      );
    }

    return <div>{item.price}</div>;
  };

  return (
    <div className="flex justify-between items-start py-3 border-b border-dashed border-gray-200 last:border-b-0">
      <div className="flex-1">
        <div className="font-semibold text-gray-900">{item.name}</div>
        {item.desc && (
          <div className="text-sm text-gray-600 mt-1">{item.desc}</div>
        )}
      </div>
      <div className="ml-4 font-semibold text-gray-900 whitespace-nowrap">
        {renderPrice()}
      </div>
    </div>
  );
}
