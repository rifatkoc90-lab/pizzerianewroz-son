import { Category } from '../types/menu';

export const menuData: Category[] = [

  // LUNCH HEADER
  {
    id: 'lunch',
    title:       'LUNCH 140:-',
    info: `━━━━━━━━ ✦ ✦ ✦ ━━━━━━━━
INKL. SALLAD • SMÖR • BRÖD • DRICKA
Gäller alla pizzor och maträtter

SMASHBURGARE — 100g / 200g / 300g
(Gäller ej American Pan-pizzor)
━━━━━━━━ ✦ ✦ ✦ ━━━━━━━━`,
    subs: []
  },

  // SMASHBURGARE
  {
    id: 'smash',
    title: 'Smashburgare',
    info: 'Våra burgare är gjorda av färsk högrev.',
    subs: [
      {
        id: 'sm1',
        title: 'Smashburgare',
        items: [
          { name: 'Cheeseburgare', prices: { '100g': '140:-', '200g': '160:-', '300g': '180:-' }, desc: 'Cheddarost, sallad, lök, tomat, senap, ketchup, hamburgerdressing och pommes.' },
          { name: 'Cheddar Deluxe', prices: { '100g': '140:-', '200g': '160:-', '300g': '180:-' }, desc: 'Cheddarost, cheddardressing, sallad, lök, tomat och pommes.' },
          { name: 'Tryffelburgare', prices: { '100g': '140:-', '200g': '160:-', '300g': '180:-' }, desc: 'Tryffelmajo, cheddarost, lök, sallad, tomat och pommes.' },
          { name: 'Ost & Bacon Burgare', prices: { '100g': '140:-', '200g': '160:-', '300g': '180:-' }, desc: 'Cheddarost, bacon, sallad, lök, tomat, senap, ketchup, hamburgerdressing och pommes.' },
          { name: 'Hot Burgare', prices: { '100g': '140:-', '200g': '160:-', '300g': '180:-' }, desc: 'Cheddarost, Sriracha Mayo, jalapeños, sallad, lök, tomat och pommes.' },
          { name: 'Mormors Burgare', prices: { '100g': '140:-', '200g': '160:-', '300g': '180:-' }, desc: 'Cheddarost, bacon, ägg, sallad, lök, tomat, ketchup, senap, hamburgerdressing och pommes.' },
          { name: 'The Classic', prices: { '100g': '140:-', '200g': '160:-', '300g': '180:-' }, desc: 'Kycklingburgare med tryffelmajonnäs, sallad, tomat, lök och pommes.' },
          { name: 'Royal Kyckling', prices: { '100g': '140:-', '200g': '160:-', '300g': '180:-' }, desc: 'Kycklingburgare med Sriracha Mayo, jalapeños, sallad, lök, tomat och pommes.' }
        ]
      }
    ]
  },

  // KLASS 1
  {
    id: 'klass1',
    title: 'Pizzor Klass 1',
    info: 'Familjepizza 320:-',
    subs: [
      {
        title: 'Klass 1',
        items: [
          { name: 'Margherita', price: '125:-', desc: 'Tomatsås och ost' },
          { name: 'La Bamba', price: '125:-', desc: 'Tomatsås, ost, bacon och lök' },
          { name: 'Vesuvio', price: '125:-', desc: 'Tomatsås, ost och skinka' },
          { name: 'Funghi', price: '125:-', desc: 'Tomatsås, ost och färska champinjoner' }
        ]
      }
    ]
  },

  // KLASS 2
  {
    id: 'klass2',
    title: 'Pizzor Klass 2',
    info: 'Familjepizza 335:-',
    subs: [
      {
        title: 'Klass 2',
        items: [
          { name: 'Bussola', price: '130:-', desc: 'Tomatsås, ost, skinka och räkor' },
          { name: 'Hawaii', price: '130:-', desc: 'Tomatsås, ost, skinka och ananas' },
          { name: 'Paradiso', price: '130:-', desc: 'Tomatsås, ost, färska champinjoner och räkor' },
          { name: 'Vegetariana', price: '130:-', desc: 'Tomatsås, ost, färska champinjoner, paprika, lök, oliver, färska tomater och kronärtskocka' },
          { name: 'Altono', price: '130:-', desc: 'Tomatsås, ost, tonfisk och lök' },
          { name: 'Calzone', price: '130:-', desc: 'Inbakad. Tomatsås, ost och skinka' },
          { name: 'Marinara', price: '130:-', desc: 'Tomatsås, ost, musslor och räkor' },
          { name: 'Pescatora', price: '130:-', desc: 'Tomatsås, ost, tonfisk och räkor' },
          { name: 'Bolognese', price: '130:-', desc: 'Tomatsås, ost, köttfärssås och lök' },
          { name: 'Capricciosa', price: '130:-', desc: 'Tomatsås, ost, skinka och färska champinjoner' },
          { name: 'Opera', price: '130:-', desc: 'Tomatsås, ost, skinka och tonfisk' },
          { name: 'Romana', price: '130:-', desc: 'Inbakad. Tomatsås, ost och köttfärssås' }
        ]
      }
    ]
  },

  // KLASS 3
  {
    id: 'klass3',
    title: 'Pizzor Klass 3',
    info: 'Familjepizza 350:-',
    subs: [
      {
        title: 'Klass 3',
        items: [
          { name: 'Prima Vera', price: '135:-', desc: 'Tomatsås, ost, bacon, lök och ägg' },
          { name: 'Gorgonzola', price: '135:-', desc: 'Tomatsås, ost, skinka, lök, gorgonzolaost och färsk tomat' },
          { name: 'Portofino', price: '135:-', desc: 'Tomatsås, ost, skinka, räkor och tonfisk' },
          { name: 'Riviera', price: '135:-', desc: 'Stark! Tomatsås, ost, skinka, bacon, lök och feferoni' },
          { name: 'Blanco', price: '135:-', desc: 'Tomatsås, ost, salami, lök, paprika, oliver och feferoni' },
          { name: 'Orientale', price: '135:-', desc: 'Tomatsås, ost, lök, köttfärssås och ägg' },
          { name: 'Quattro Stagioni', price: '135:-', desc: 'Tomatsås, ost, färska champinjoner, skinka, räkor, musslor, oliver och kronärtskocka' },
          { name: 'Sole Mio', price: '135:-', desc: 'Tomatsås, ost, färska champinjoner, räkor och tonfisk' },
          { name: 'Fantasia', price: '135:-', desc: 'Tomatsås, ost, skinka, ananas, banan och curry' },
          { name: 'Pompei', price: '135:-', desc: 'Tomatsås, ost, skinka, räkor och ananas' },
          { name: 'Rhodos', price: '135:-', desc: 'Tomatsås, ost, färska champinjoner, bacon, oliver och feferoni' },
          { name: 'Västkust', price: '135:-', desc: 'Tomatsås, ost, musslor, räkor och tonfisk' }
        ]
      }
    ]
  },

  // KLASS 4
  {
    id: 'klass4',
    title: 'Pizzor Klass 4',
    info: 'Familjepizza 390:-',
    subs: [
      {
        title: 'Klass 4',
        items: [
          { name: 'Milano', price: '140:-', desc: 'Tomatsås, ost, färska champinjoner, räkor och skinka,' },
          { name: 'Amore', price: '140:-', desc: 'Tomatsås, ost, färska champinjoner, lök, salami, gorgonzolaost och skinka' },
          { name: 'Mexicana', price: '140:-', desc: 'Stark! Tomatsås, ost, köttfärssås, lök, färska tomater och feferoni' },
          { name: 'Flamingo', price: '140:-', desc: 'Tomatsås, ost, färsk paprika, salami, färska tomater, fetaost, oliver och lök' },
          { name: 'Newroz', price: '140:-', desc: 'Tomatsås, ost, skinka, pommes frites och vitlökssås' },
          { name: 'Calzone Special', price: '140:-', desc: 'Tomatsås, ost, färska champinjoner, räkor och skinka' },
          { name: 'Rustica', price: '140:-', desc: 'Tomatsås, ost, färska champinjoner, köttfärssås, bacon och lök' },
          { name: 'Quattro Formaggi', price: '140:-', desc: 'Tomatsås, ost, gorgonzolaost, fetaost, oliver och mozzarellaost' },
          { name: 'Korfu', price: '140:-', desc: 'Tomatsås, ost, färska tomater, feferoni, skinka, salami och oliver' },
          { name: 'Venedig', price: '140:-', desc: 'Tomatsås, ost, salami, köttfärssås, färsk paprika, feferoni och lök' },
          { name: 'Bacus', price: '140:-', desc: 'Tomatsås, ost, salami, bacon, kronärtskocka och färska champinjoner' }
        ]
      }
    ]
  },

  // SPECIALPIZZOR — 395:-
  {
    id: 'special',
    title: 'Specialpizzor',
    info: 'Familjepizza 395:-',
    subs: [
      {
        title: 'Specialpizzor',
        items: [
          { name: 'Canda Special', price: '150:-', desc: 'Ost, oxfilé, pommes frites och bearnaisesås' },
          { name: 'Mariefred\'s Special', price: '150:-', desc: 'Ost, oxfilé, fläskfilé, färska tomater och bearnaisesås' },
          { name: 'Maxim', price: '150:-', desc: 'Ost, oxfilé, färska champinjoner, skinka och bearnaisesås' },
          { name: 'Favoriten', price: '150:-', desc: 'Ost, oxfilé, räkor, kronärtskocka och bearnaisesås' },
          { name: 'St Tropez', price: '150:-', desc: 'Ost, kyckling, banan, ananas, curry och bearnaisesås' },
          { name: 'Strängnäs Special', price: '150:-', desc: 'Ost, pepperonikorv, färska tomater, lök, feferoni och cayennepeppar' },
          { name: 'Oxfile Pizza', price: '150:-', desc: 'Ost, oxfilé, färska champinjoner, färska tomater, färsk paprika och bearnaisesås' },
          { name: 'Trocadero (Inbakad)', price: '150:-', desc: 'Ost, oxfilé, färsk vitlök, färska champinjoner och bearnaisesås' },
          { name: 'Tropicana', price: '150:-', desc: 'Ost, skinka, fläskfilé, räkor och banan' },
          { name: 'Shish Kebab (Halv inbakad)', price: '150:-', desc: 'Ost, oxfilé, paprika, färska tomater, lök, färska champinjoner och bearnaisesås' },
          { name: 'Valentina Special', price: '150:-', desc: 'Ost, oxfilé, färska champinjoner, lök, gorgonzolaost och bearnaisesås' },
          { name: 'Napoli', price: '150:-', desc: 'Ost, oxfilé, lök, gorgonzolaost och vitlök' },
          { name: 'Mama Rosa', price: '150:-', desc: 'Tomatsås, ost, fläskfilé, ananas, banan, curry och bearnaisesås' }
        ]
      }
    ]
  },

  // MEXIKANSKA — 395:-
  {
    id: 'mexikanska',
    title: 'Mexikanska Pizzor',
    info: 'Familjepizza 395:-',
    subs: [
      {
        title: 'Mexikanska Pizzor',
        items: [
          { name: 'Azteka', price: '150:-', desc: 'Tomatsås, ost, skinka, tacosås, tacokryddmix, jalapeños och vitlökssås' },
          { name: 'Amigo', price: '150:-', desc: 'Tomatsås, ost, salami, pepperonikorv, köttfärssås, lök, jalapeños, tacokryddmix och vitlökssås' },
          { name: 'Inferno', price: '150:-', desc: 'Tomatsås, ost, skinka, salami, tacosås, tacokryddmix, jalapeños, färsk vitlök och vitlökssås' },
          { name: 'Acapulco', price: '150:-', desc: 'Tomatsås, ost, oxfilé, färska champinjoner, tacosås, tacokryddmix, jalapeños, lök, färsk vitlök och vitlökssås' },
          { name: 'Mexico', price: '150:-', desc: 'Tomatsås, ost, köttfärssås, bacon, paprika, tacosås, tacokryddmix, jalapeños och vitlökssås' },
          { name: 'San Luis', price: '150:-', desc: 'Tomatsås, ost, kyckling, ananas, tacosås, tacokryddmix, jalapeños, färsk vitlök och vitlökssås' }
        ]
      }
    ]
  },

  // DUBBELINBAKADE
  {
    id: 'dubbelinbakade',
    title: 'Dubbelinbakade Pizzor',
    subs: [
      {
        title: 'Dubbelinbakade Pizzor',
        items: [
          { name: 'Disco', price: '165:-', desc: 'Tomatsås, ost, skinka, färska champinjoner och räkor' },
          { name: 'Globen', price: '165:-', desc: 'Tomatsås, ost, oxfilé, färska champinjoner, lök och bearnaisesås' },
          { name: 'Ufo', price: '165:-', desc: 'Tomatsås, ost, skinka, kebabkött, lök och vitlökssås' }
        ]
      }
    ]
  },

  // MOZARELLA — 395:-
  {
    id: 'mozzarella',
    title: 'Mozzarellapizzor',
    info: 'Familjepizza 395:-',
    subs: [
      {
        title: 'Mozzarellapizzor',
        items: [
          { name: 'Alpesto', price: '150:-', desc: 'Tomatsås, mozzarellaost, färska champinjoner, pesto, paprika, lufttorkad skinka, soltorkade tomater och ruccolasallad' },
          { name: 'Parma', price: '150:-', desc: 'Tomatsås, mozzarellaost, lufttorkad skinka, soltorkade tomater, oliver och ruccolasallad' },
          { name: 'Cacciator', price: '150:-', desc: 'Tomatsås, mozzarellaost, färska champinjoner, paprika och salami' },
          { name: 'Papa Gola', price: '150:-', desc: 'Tomatsås, mozzarellaost, salami, oliver och pesto' },
          { name: 'Mezze Luna', price: '150:-', desc: 'Halvinbakad. Tomatsås, mozzarellaost och skinka. Andra halvan: mozzarellaost, lufttorkad skinka och ruccolasallad' },
          { name: 'Ruccola', price: '150:-', desc: 'Tomatsås, mozzarellaost, ruccolasallad, olivolja och salt' }
        ]
      }
    ]
  },

  // KEBABPIZZOR — 395:-
  {
    id: 'kebabpizzor',
    title: 'Kebabpizzor',
    info: 'Familjepizza 395:-',
    subs: [
      {
        title: 'Kebabpizzor',
        items: [
          { name: 'Kebabpizza', price: '140:-', desc: 'Tomatsås, ost, kebabkött, isbergssallad, tomater, lök, feferoni, vitlöksås och starksås' },
          { name: 'Super Kebabpizza', price: '150:-', desc: 'Tomatsås, ost, kebabkött, isbergssallad, pommes frites, tomater, lök, feferoni, vitlöksås och starksås' },
          { name: 'Gyrospizza Special', price: '150:-', desc: 'Tomatsås, ost, gyroskött, isbergssallad, tomater, lök, feferoni, pommes frites, vitlöksås och starksås' },
          { name: 'Kebab båt mix (Inbakad)', price: '150:-', desc: 'Tomatsås, ost, Gyroskött, kycklingkebab, isbergssallad, tomater, lök, feferoni, vitlöksås och starksås' },
          { name: 'Viking Kebab', price: '140:-', desc: 'Inbakad. Tomatsås, ost, kebabkött, isbergssallad, tomater, lök, feferoni, vitlöksås och starksås' },
          { name: 'Viking Special', price: '150:-', desc: 'Inbakad. Tomatsås, ost, kebabkött, isbergssallad, tomater, lök, pommes frites, fetaost, feferoni, vitlöksås och starksås' },
          { name: 'Kycklingkebab pizza', price: '140:-', desc: 'Tomatsås, ost, kycklingkebab, isbergssallad, tomater, lök, feferoni, vitlöksås och starksås' },
          { name: 'Gyroskebab pizza', price: '140:-', desc: 'Tomatsås, ost, gyroskött, isbergssallad, tomater, lök, feferoni, vitlöksås och starksås' }
        ]
      }
    ]
  },

  // AMERIKANSKA (FAMILJEPIZZA YOK)
  {
    id: 'amerikanska',
    title: 'Amerikanska Panpizzor',
    subs: [
      {
        title: 'Amerikanska Panpizzor',
        items: [
          { name: 'Honolulu', priceS: '190:-', priceM: '275:-', desc: 'Tomatsås, ost, skinka, räkor, ananas, banan och curry' },
          { name: 'Arizona', priceS: '190:-', priceM: '275:-', desc: 'Tomatsås, ost, skinka, bacon, räkor, färska champinjoner, färska tomater och lök' },
          { name: 'American', priceS: '190:-', priceM: '275:-', desc: 'Tomatsås, ost, lufttorkad skinka, soltorkade tomater, pesto, svartpeppar, mozzarellaost och ruccolasallad' },
          { name: 'San Fransisco', priceS: '190:-', priceM: '275:-', desc: 'Tomatsås, ost, skinka, färska champinjoner, färska tomater, färsk paprika och lök' },
          { name: 'Las Vegas', priceS: '190:-', priceM: '275:-', desc: 'Tomatsås, ost, skinka, salami, färska champinjoner, färska tomater, köttfärs och ananas' },
          { name: 'Washington', priceS: '190:-', priceM: '275:-', desc: 'Tomatsås, ost, soltorkade tomater, pesto, färska champinjoner, mozzarellaost, svartpeppar, lufttorkad skinka och ruccolasallad' },
          { name: 'Indiana', priceS: '190:-', priceM: '275:-', desc: 'Tomatsås, ost, skinka, gorgonzolaost, färska tomater och lök' },
          { name: 'Dallas', priceS: '190:-', priceM: '275:-', desc: 'Tomatsås, ost, oxfilé, färska champinjoner, färska tomater och bearnaisesås' },
          { name: 'Texas', priceS: '190:-', priceM: '275:-', desc: 'Tomatsås, ost, kebabkött, lök, tomat, feferoni, vitlöksås och starksås' }
        ]
      }
    ]
  },

  // KEBAB / GYROS / FALAFEL
  {
    title: 'Kebabrätter, Gyros & Falafel',
    subs: [
      {
        title: 'Kebabrätter',
        items: [
          { name: 'Kebab Med Bröd', price: '125:-', desc: 'Kebabkött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Kebabtallrik', price: '140:-', desc: 'Kebabkött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Servera med pommes frites eller ris.' },
          { name: 'Kebabtallrik Mix', price: '150:-', desc: 'Kebabkött, kycklingkebab, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Servera med pommes frites eller ris.' },
          { name: 'Kebabskrovmål', price: '140:-', desc: 'Kebabkött, isbergssallad, pommes frites, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Kyckling Med Bröd', price: '125:-', desc: 'Kyckling, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Kebabrulle', price: '140:-', desc: 'Kebabkött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Kycklingtallrik', price: '140:-', desc: 'Kyckling, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Servera med pommes frites eller ris.' }
        ]
      },

      {
        title: 'Gyros',
        items: [
          { name: 'Gyros Med Bröd', price: '125:-', desc: 'Gyroskött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Gyrosrulle', price: '140:-', desc: 'Gyroskött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Gyrosskrovmål', price: '140:-', desc: 'Gyroskött, isbergssallad, pommes frites, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Gyroskebabtallrik', price: '140:-', desc: 'Gyroskött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Servera med pommes frites eller ris.' }
        ]
      },

      {
        title: 'Falafel',
        items: [
          { name: 'Falafel med bröd', price: '125:-', desc: 'Falafel, lök, isbergssallad, tomat, feferoni, vitlöksås och starksås.' },
          { name: 'Falafelrulle', price: '140:-', desc: 'Falafel, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Falafelskrovmål', price: '140:-', desc: 'Falafel, isbergssallad, pommes frites, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Falafeltallrik', price: '140:-', desc: 'Falafel, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Servera med pommes frites eller ris.' }
        ]
      }
    ]
  },

  // SALLADER
  {
    title: 'Sallader',
    info: 'ISBERGSALLAD, TOMAT, GURKA, OST, DRESSING, SMÖR & BRÖD INGÅR I ALLA SALLADER',
    subs: [
      {
        title: 'Sallader',
        items: [
          { name: 'Ost- & Skinksallad', price: '140:-', desc: 'Skinka, paprika, ananas och majs.' },
          { name: 'Avokadosallad', price: '140:-', desc: 'Skinka, räkor, avokado, ägg, citron, ananas och majs.' },
          { name: 'Grekisk Sallad', price: '140:-', desc: 'Fetaost, rödlök, oliver, paprika och feferoni.' },
          { name: 'Räksallad', price: '140:-', desc: 'Räkor, paprika, ananas, citron, ägg och majs.' },
          { name: 'Tonfisksallad', price: '140:-', desc: 'Tonfisk, rödlök, oliver, paprika, ananas, ägg, citron och majs.' },
          { name: 'Kebabsallad', price: '140:-', desc: 'Kebabkött, rödlök, kebabsås och feferoni.' },
          { name: 'Gyrossallad', price: '140:-', desc: 'Gyröskött, rödlök, feferoni, vitlökssås och kebabstarksås.' },
          { name: 'Kycklingsallad', price: '140:-', desc: 'Kyckling, rödlök, paprika, ananas och majs.' },
          { name: 'Västkustsallad', price: '140:-', desc: 'Räkor, musslor, tonfisk, paprika, ananas, ägg, citron och majs.' }
        ]
      }
    ]
  },

  // GRILL
  {
    title: 'Grill / À la Carte',
    subs: [
      {
        title: 'Grill / À la Carte',
        items: [
          { name: 'Schintzel', price: '140:-', desc: 'Serveras med grönsallad, bearnaisesås och pommes frites.' },
          { name: 'Souvlaki kyckling på spett', price: '140:-', desc: 'Serveras med grönsallad och pommes. Välj sås i nästa.' }
        ]
      }
    ]
  }
];
