import { Category } from "../types/menu";

export const menuData: Category[] = [
  {
    id: "lunch",
    title: "LUNCH 140:-",
    info: "INKL. SALLAD • SMÖR • BRÖD • DRICKA. Gäller alla pizzor och maträtter. SMASHBURGARE 100g / 200g (Gäller ej American Pan-pizzor)",
    subs: []
  },
  {
    id: "paninfo",
    title: "AMERIKANSKA PANPIZZOR",
    info: "Alla pizzor kan fås som panpizza • Small 195:- • Medium 280:-",
    subs: []
  },
  {
    id: "smash",
    title: "Smashburgare",
    info: "Saftiga burgare av hög kvalitet — dricka ingår.",
    subs: [
      {
        title: "Smashburgare",
        items: [
          {
            name: "Cheeseburgare",
            prices: { "100g": "145:-", "200g": "165:-", "300g": "185:-" },
            desc: "Cheddarost, sallad, lök, tomat, senap, ketchup, hamburgerdressing och pommes."
          },
          {
            name: "Cheddar Deluxe",
            prices: { "100g": "145:-", "200g": "165:-", "300g": "185:-" },
            desc: "Cheddarost, cheddardressing, sallad, lök, tomat och pommes."
          },
          {
            name: "Tryffelburgare",
            prices: { "100g": "145:-", "200g": "165:-", "300g": "185:-" },
            desc: "Tryffelmajo, cheddarost, lök, sallad, tomat och pommes."
          },
          {
            name: "Ost & Bacon Burgare",
            prices: { "100g": "145:-", "200g": "165:-", "300g": "185:-" },
            desc: "Cheddarost, bacon, sallad, lök, tomat, senap, ketchup, hamburgerdressing och pommes."
          },
          {
            name: "Hot Burgare",
            prices: { "100g": "145:-", "200g": "165:-", "300g": "185:-" },
            desc: "Cheddarost, Sriracha Mayo, jalapeños, sallad, lök, tomat och pommes."
          },
          {
            name: "Mormors Burgare",
            prices: { "100g": "145:-", "200g": "165:-", "300g": "185:-" },
            desc: "Cheddarost, bacon, ägg, sallad, lök, tomat, ketchup, senap, hamburgerdressing och pommes."
            }
  ]
  }
  ]
  },

{
id: "klass1",
title: "Pizzor Klass 1",
info: "Familjepizza 330:-",
subs: [{
title: "Klass 1",
items: [
{ name: "Margherita", price: "130:-", desc: "Tomatsås och ost" },
{ name: "La Bamba", price: "130:-", desc: "Tomatsås, ost, bacon och lök" },
{ name: "Vesuvio", price: "130:-", desc: "Tomatsås, ost och skinka" },
{ name: "Funghi", price: "130:-", desc: "Tomatsås, ost och färska champinjoner" }
]
}]
},

{
id: "klass2",
title: "Pizzor Klass 2",
info: "Familjepizza 345:-",
subs: [{
title: "Klass 2",
items: [
{ name: "Bussola", price: "135:-", desc: "Tomatsås, ost, skinka och räkor" },
{ name: "Hawaii", price: "135:-", desc: "Tomatsås, ost, skinka och ananas" },
{ name: "Paradiso", price: "135:-", desc: "Tomatsås, ost, färska champinjoner och räkor" },
{ name: "Vegetariana", price: "135:-", desc: "Tomatsås, ost, färska champinjoner, paprika, lök, oliver, färska tomater och kronärtskocka" },
{ name: "Altono", price: "135:-", desc: "Tomatsås, ost, tonfisk och lök" },
{ name: "Calzone", price: "135:-", desc: "Inbakad. Tomatsås, ost och skinka" },
{ name: "Marinara", price: "135:-", desc: "Tomatsås, ost, musslor och räkor" },
{ name: "Pescatora", price: "135:-", desc: "Tomatsås, ost, tonfisk och räkor" },
{ name: "Bolognese", price: "135:-", desc: "Tomatsås, ost, köttfärs och lök" },
{ name: "Capricciosa", price: "135:-", desc: "Tomatsås, ost, skinka och färska champinjoner" },
{ name: "Opera", price: "135:-", desc: "Tomatsås, ost, skinka och tonfisk" },
]
}]
},

{
id: "klass3",
title: "Pizzor Klass 3",
info: "Familjepizza 360:-",
subs: [{
title: "Klass 3",
items: [
{ name: "Prima Vera", price: "140:-", desc: "Tomatsås, ost, bacon, lök och ägg" },
{ name: "Gorgonzola", price: "140:-", desc: "Tomatsås, ost, skinka, lök, gorgonzolaost och färsk tomat" },
{ name: "Portofino", price: "140:-", desc: "Tomatsås, ost, skinka, räkor och tonfisk" },
{ name: "Riviera", price: "140:-", desc: "Stark! Tomatsås, ost, skinka, bacon, lök och feferoni" },
{ name: "Blanco", price: "140:-", desc: "Tomatsås, ost, salami, lök, paprika, oliver och feferoni" },
{ name: "Orientale", price: "140:-", desc: "Tomatsås, ost, lök, köttfärssås och ägg" },
{ name: "Quattro Stagioni", price: "140:-", desc: "Tomatsås, ost, färska champinjoner, skinka, räkor, musslor, oliver och kronärtskocka" },
{ name: "Sole Mio", price: "140:-", desc: "Tomatsås, ost, färska champinjoner, räkor och tonfisk" },
{ name: "Fantasia", price: "140:-", desc: "Tomatsås, ost, skinka, ananas, banan och curry" },
{ name: "Pompei", price: "140:-", desc: "Tomatsås, ost, skinka, räkor och ananas" },
{ name: "Rhodos", price: "140:-", desc: "Tomatsås, ost, färska champinjoner, bacon, oliver och feferoni" },
{ name: "Västkust", price: "140:-", desc: "Tomatsås, ost, musslor, räkor och tonfisk" }
]
}]
},

{
id: "klass4",
title: "Pizzor Klass 4",
info: "Familjepizza 390:-",
subs: [{
title: "Klass 4",
items: [
{ name: "Milano", price: "145:-", desc: "Tomatsås, ost, färska champinjoner, räkor och skinka" },
{ name: "Amore", price: "145:-", desc: "Tomatsås, ost, färska champinjoner, lök, salami, gorgonzolaost och skinka" },
{ name: "Mexicana", price: "145:-", desc: "Stark! Tomatsås, ost, köttfärs, lök, färska tomater och feferoni" },
{ name: "Flamingo", price: "145:-", desc: "Tomatsås, ost, färsk paprika, salami, färska tomater, fetaost, oliver och lök" },
{ name: "Newroz", price: "145:-", desc: "Tomatsås, ost, skinka, pommes frites och vitlökssås" },
{ name: "Calzone Special", price: "145:-", desc: "Tomatsås, ost, färska champinjoner, räkor och skinka" },
{ name: "Rustica", price: "145:-", desc: "Tomatsås, ost, färska champinjoner, köttfärssås, bacon" },
]
}]
},
  
{
id: "special",
title: "Specialpizzor",
info: "Familjepizza 400:-",
subs: [{
title: "Special",
items: [
{ name: "Canda Special", price: "155:-", desc: "Ost, oxfilé, pommes frites och bearnaisesås" },
{ name: "Maxim", price: "155:-", desc: "Ost, oxfilé, färska champinjoner, skinka och bearnaisesås" },
{ name: "Favoriten", price: "155:-", desc: "Ost, oxfilé, räkor, kronärtskocka och bearnaisesås" },
{ name: "St Tropez", price: "155:-", desc: "Ost, kyckling, banan, ananas, curry och bearnaisesås" },
{ name: "Strängnäs Special", price: "155:-", desc: "Ost, pepperonikorv, färska tomater, lök, feferoni och cayennepeppar" },
{ name: "Oxfile Pizza", price: "155:-", desc: "Ost, oxfilé, färska champinjoner, färska tomater, färsk paprika och bearnaisesås" },
{ name: "Valentina Special", price: "155:-", desc: "Ost, oxfilé, färska champinjoner, lök, gorgonzolaost och bearnaisesås" },
{ name: "Napoli", price: "155:-", desc: "Ost, oxfilé, lök, gorgonzolaost och vitlök" }
]
}]
},

{
id: "mexikanska",
title: "Mexikanska Pizzor",
info: "Familjepizza 400:-",
subs: [{
title: "Mexikanska",
items: [
{ name: "Azteka", price: "155:-", desc: "Tomatsås, ost, skinka, tacosås, tacokryddmix, jalapeños och vitlökssås" },
{ name: "Amigo", price: "155:-", desc: "Tomatsås, ost, salami, pepperonikorv, köttfärs, lök, jalapeños, tacokryddmix och vitlökssås" },
{ name: "Inferno", price: "155:-", desc: "Tomatsås, ost, skinka, salami, tacosås, tacokryddmix, jalapeños, färsk vitlök och vitlökssås" },
{ name: "Acapulco", price: "155:-", desc: "Tomatsås, ost, oxfilé, färska champinjoner, tacosås, tacokryddmix, jalapeños, lök, färsk vitlök och vitlökssås" },
{ name: "Mexico", price: "155:-", desc: "Tomatsås, ost, köttfärs, bacon, paprika, tacosås, tacokryddmix, jalapeños och vitlökssås" },
{ name: "San Luis", price: "155:-", desc: "Tomatsås, ost, kyckling, ananas, tacosås, tacokryddmix, jalapeños, färsk vitlök och vitlökssås" }
]
}]
},
{
id: "dubbelinbakade",
title: "Dubbelinbakade Pizzor",
subs: [{
title: "Dubbelinbakade",
items: [
{ name: "Disco", price: "165:-", desc: "Tomatsås, ost, skinka, färska champinjoner och räkor" },
{ name: "Globen", price: "165:-", desc: "Tomatsås, ost, oxfilé, färska champinjoner, lök och bearnaisesås" },
{ name: "Ufo", price: "165:-", desc: "Tomatsås, ost, skinka, kebabkött, lök och vitlökssås" }
]
}]
},

{
id: "kebabpizzor",
title: "Kebabpizzor",
info: "Familjepizza 400:-",
subs: [{
title: "Kebabpizzor",
items: [
{ name: "Kebabpizza", price: "145:-", desc: "Tomatsås, ost, kebabkött, isbergssallad, tomater, lök, feferoni, vitlöksås och starksås" },
{ name: "Super Kebabpizza", price: "155:-", desc: "Tomatsås, ost, kebabkött, isbergssallad, pommes frites, tomater, lök, feferoni, vitlöksås och starksås" },
{ name: "Gyrospizza Special", price: "155:-", desc: "Tomatsås, ost, gyroskött, isbergssallad, tomater, lök, feferoni, pommes frites, vitlöksås och starksås" },
{ name: "Viking Kebab", price: "145:-", desc: "Inbakad. Tomatsås, ost, kebabkött, isbergssallad, tomater, lök, feferoni, vitlöksås och starksås" },
{ name: "Viking Special", price: "155:-", desc: "Inbakad. Tomatsås, ost, kebabkött, isbergssallad, tomater, lök, pommes frites, fetaost, feferoni, vitlöksås och starksås" },
{ name: "Kycklingkebab pizza", price: "145:-", desc: "Tomatsås, ost, kycklingkebab, isbergssallad, tomater, lök, feferoni, vitlöksås och starksås" },
{ name: "Gyroskebab pizza", price: "145:-", desc: "Tomatsås, ost, gyroskött, isbergssallad, tomater, lök, feferoni, vitlöksås och starksås" }
]
}]
},

{
id: "kebabratter",
title: "Kebabrätter, Gyros & Falafel",
subs: [{
title: "Rätter",
items: [
{ name: "Kebab Med Bröd", price: "130:-", desc: "Kebabkött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås" },
{ name: "Kebabtallrik", price: "145:-", desc: "Kebabkött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Serveras med pommes frites" },
{ name: "Kebabrulle", price: "145:-", desc: "Kebabkött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås" },
{ name: "Kebabtallrik Mix", price: "155:-", desc: "Kebabkött, kycklingkebab, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Serveras med pommes frites" },
{ name: "Kyckling Med Bröd", price: "130:-", desc: "Kyckling, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås" },
{ name: "Kycklingrulle", price: "145:-", desc: "Kyckling, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås" },
{ name: "Kycklingtallrik", price: "145:-", desc: "Kyckling, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Serveras med pommes frites" },
{ name: "Gyros Med Bröd", price: "130:-", desc: "Gyroskött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås" },
{ name: "Gyrosrulle", price: "145:-", desc: "Gyroskött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås" },
{ name: "Gyroskebabtallrik", price: "145:-", desc: "Gyroskött, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Serveras med pommes frites" },
{ name: "Falafel med bröd", price: "130:-", desc: "Falafel, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås" },
{ name: "Falafelrulle", price: "145:-", desc: "Falafel, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås" },
{ name: "Falafeltallrik", price: "145:-", desc: "Falafel, isbergssallad, tomat, feferoni, lök, vitlöksås och starksås. Serveras med pommes frites" }
]
}]
},

{
id: "sallader",
title: "Sallader",
info: "Isbergssallad, tomat, gurka, ost, dressing och bröd ingår i alla sallader",
subs: [{
title: "Sallader",
items: [
{ name: "Ost- & Skinksallad", price: "145:-", desc: "Skinka, paprika, ananas och majs" },
{ name: "Avokadosallad", price: "145:-", desc: "Skinka, räkor, avokado, ägg, citron, paprika och majs" },
{ name: "Grekisk Sallad", price: "145:-", desc: "Fetaost, rödlök, oliver, paprika och feferoni" },
{ name: "Räksallad", price: "145:-", desc: "Räkor, paprika, ananas, citron, ägg och majs" },
{ name: "Tonfisksallad", price: "145:-", desc: "Tonfisk, rödlök, oliver, paprika, ananas, ägg, citron och majs" },
{ name: "Kebabsallad", price: "145:-", desc: "Kebabkött, rödlök, kebabsås och feferoni" },
{ name: "Gyrossallad", price: "145:-", desc: "Gyroskött, rödlök, feferoni, vitlökssås och kebabstarksås" },
{ name: "Kycklingsallad", price: "145:-", desc: "Kyckling, rödlök, paprika, ananas och majs" }
]
}]
}

];
