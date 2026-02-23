import { Category } from '../types/menu';

export const menuData: Category[] = [

  {
    id: 'lunch',
    title: 'LUNCH 140:-',
    info: `━━━━━━━━ ✦ ✦ ✦ ━━━━━━━━
INKL. SALLAD • SMÖR • BRÖD • DRICKA
Gäller alla pizzor och maträtter
SMASHBURGARE — 100g / 200g / 300g
(Gäller ej American Pan-pizzor)
━━━━━━━━ ✦ ✦ ✦ ━━━━━━━━`,
    subs: []
  },

  {
    id: 'smash',
    title: 'Smashburgare',
    info: 'Våra burgare är gjorda av färsk högrev.',
    subs: [
      {
        id: 'sm1',
        title: 'Smashburgare',
        items: [
          { name: 'Cheeseburgare', prices: { '100g': '145:-', '200g': '165:-', '300g': '185:-' }, desc: 'Cheddarost, sallad, lök, tomat, senap, ketchup, hamburgerdressing och pommes.' },
          { name: 'Cheddar Deluxe', prices: { '100g': '145:-', '200g': '165:-', '300g': '185:-' }, desc: 'Cheddarost, cheddardressing, sallad, lök, tomat och pommes.' },
          { name: 'Tryffelburgare', prices: { '100g': '145:-', '200g': '165:-', '300g': '185:-' }, desc: 'Tryffelmajo, cheddarost, lök, sallad, tomat och pommes.' },
          { name: 'Ost & Bacon Burgare', prices: { '100g': '145:-', '200g': '165:-', '300g': '185:-' }, desc: 'Cheddarost, bacon, sallad, lök, tomat, senap, ketchup, hamburgerdressing och pommes.' },
          { name: 'Hot Burgare', prices: { '100g': '145:-', '200g': '165:-', '300g': '185:-' }, desc: 'Cheddarost, Sriracha Mayo, jalapeños, sallad, lök, tomat och pommes.' },
          { name: 'Mormors Burgare', prices: { '100g': '145:-', '200g': '165:-', '300g': '185:-' }, desc: 'Cheddarost, bacon, ägg, sallad, lök, tomat, ketchup, senap, hamburgerdressing och pommes.' }
        ]
      }
    ]
  },

  {
    id: 'klass1',
    title: 'Pizzor Klass 1',
    info: 'Familjepizza 330:-',
    subs: [
      {
        title: 'Klass 1',
        items: [
          { name: 'Margherita', price: '130:-', desc: 'Tomatsås och ost' },
          { name: 'La Bamba', price: '130:-', desc: 'Tomatsås, ost, bacon och lök' },
          { name: 'Vesuvio', price: '130:-', desc: 'Tomatsås, ost och skinka' },
          { name: 'Funghi', price: '130:-', desc: 'Tomatsås, ost och färska champinjoner' }
        ]
      }
    ]
  },

  {
    id: 'special',
    title: 'Specialpizzor',
    info: 'Familjepizza 400:-',
    subs: [
      {
        title: 'Specialpizzor',
        items: [
          { name: 'Canda Special', price: '155:-', desc: 'Ost, oxfilé, pommes frites och bearnaisesås' },
          { name: 'Maxim', price: '155:-', desc: 'Ost, oxfilé, färska champinjoner, skinka och bearnaisesås' },
          { name: 'Favoriten', price: '155:-', desc: 'Ost, oxfilé, räkor, kronärtskocka och bearnaisesås' },
          { name: 'St Tropez', price: '155:-', desc: 'Ost, kyckling, banan, ananas, curry och bearnaisesås' }
        ]
      }
    ]
  },

  {
    id: 'kebab',
    title: 'Kebabrätter, Gyros & Falafel',
    subs: [

      {
        title: 'Kebabrätter',
        items: [
          { name: 'Kebab Med Bröd', price: '130:-', desc: 'Kebabkött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Kebabtallrik', price: '145:-', desc: 'Kebabkött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Serveras med pommes eller ris.' },
          { name: 'Kebabtallrik Mix', price: '155:-', desc: 'Kebabkött, kycklingkebab, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Serveras med pommes eller ris.' },
          { name: 'Kyckling Med Bröd', price: '130:-', desc: 'Kyckling, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Kebabrulle', price: '145:-', desc: 'Kebabkött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Kycklingtallrik', price: '145:-', desc: 'Kyckling, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Serveras med pommes eller ris.' }
        ]
      },

      {
        title: 'Gyros',
        items: [
          { name: 'Gyros Med Bröd', price: '130:-', desc: 'Gyroskött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Gyrosrulle', price: '145:-', desc: 'Gyroskött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Gyroskebabtallrik', price: '145:-', desc: 'Gyroskött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Serveras med pommes eller ris.' }
        ]
      },

      {
        title: 'Falafel',
        items: [
          { name: 'Falafel med bröd', price: '130:-', desc: 'Falafel, lök, isbergssallad, tomat, feferoni, vitlöksås och starksås.' },
          { name: 'Falafelrulle', price: '145:-', desc: 'Falafel, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås.' },
          { name: 'Falafeltallrik', price: '145:-', desc: 'Falafel, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Serveras med pommes eller ris.' }
        ]
      }

    ]
  },

  {
    id: 'sallader',
    title: 'Sallader',
    info: 'ISBERGSALLAD, TOMAT, GURKA, OST, DRESSING, BRÖD INGÅR',
    subs: [
      {
        title: 'Sallader',
        items: [
          { name: 'Ost- & Skinksallad', price: '145:-', desc: 'Skinka, paprika, ananas och majs.' },
          { name: 'Avokadosallad', price: '145:-', desc: 'Skinka, räkor, avokado, ägg, citron, ananas och majs.' },
          { name: 'Grekisk Sallad', price: '145:-', desc: 'Fetaost, rödlök, oliver, paprika och feferoni.' },
          { name: 'Räksallad', price: '145:-', desc: 'Räkor, paprika, ananas, citron, ägg och majs.' },
          { name: 'Tonfisksallad', price: '145:-', desc: 'Tonfisk, rödlök, oliver, paprika, ananas, ägg, citron och majs.' },
          { name: 'Kebabsallad', price: '145:-', desc: 'Kebabkött, rödlök, kebabsås och feferoni.' },
          { name: 'Gyrossallad', price: '145:-', desc: 'Gyroskött, rödlök, feferoni, vitlökssås och kebabstarksås.' },
          { name: 'Kycklingsallad', price: '145:-', desc: 'Kyckling, rödlök, paprika, ananas och majs.' }
        ]
      }
    ]
  }

];
