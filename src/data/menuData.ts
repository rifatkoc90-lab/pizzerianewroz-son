import { Category } from "../types/menu";

export const menuData: Category[] = [

{
id: "klass1",
title: "Pizzor Klass 1",
info: "Familjepizza 330:-",
subs: [
{
title: "Klass 1",
items: [
{ name: "Margherita", price: "130:-", desc: "Tomatsås och ost" },
{ name: "La Bamba", price: "130:-", desc: "Tomatsås, ost, bacon och lök" },
{ name: "Vesuvio", price: "130:-", desc: "Tomatsås, ost och skinka" },
{ name: "Funghi", price: "130:-", desc: "Tomatsås, ost och färska champinjoner" }
]
}
]
},

{
id: "klass2",
title: "Pizzor Klass 2",
info: "Familjepizza 345:-",
subs: [
{
title: "Klass 2",
items: [
{ name: "Bussola", price: "135:-", desc: "Tomatsås, ost, skinka och räkor" },
{ name: "Hawaii", price: "135:-", desc: "Tomatsås, ost, skinka och ananas" },
{ name: "Paradiso", price: "135:-", desc: "Tomatsås, ost, champinjoner och räkor" },
{ name: "Vegetariana", price: "135:-", desc: "Tomatsås, ost, champinjoner, paprika, lök, oliver och kronärtskocka" },
{ name: "Altono", price: "135:-", desc: "Tomatsås, ost, tonfisk och lök" },
{ name: "Calzone", price: "135:-", desc: "Inbakad. Tomatsås, ost och skinka" },
{ name: "Marinara", price: "135:-", desc: "Tomatsås, ost, musslor och räkor" },
{ name: "Pescatora", price: "135:-", desc: "Tomatsås, ost, tonfisk och räkor" },
{ name: "Bolognese", price: "135:-", desc: "Tomatsås, ost, köttfärssås och lök" },
{ name: "Capricciosa", price: "135:-", desc: "Tomatsås, ost, skinka och champinjoner" },
{ name: "Opera", price: "135:-", desc: "Tomatsås, ost, skinka och tonfisk" },
{ name: "Romana", price: "135:-", desc: "Inbakad. Tomatsås, ost och köttfärssås" }
]
}
]
},

{
id: "klass3",
title: "Pizzor Klass 3",
info: "Familjepizza 360:-",
subs: [
{
title: "Klass 3",
items: [
{ name: "Prima Vera", price: "140:-", desc: "Tomatsås, ost, bacon, lök och ägg" },
{ name: "Gorgonzola", price: "140:-", desc: "Tomatsås, ost, skinka, lök och gorgonzolaost" },
{ name: "Portofino", price: "140:-", desc: "Tomatsås, ost, skinka, räkor och tonfisk" },
{ name: "Riviera", price: "140:-", desc: "Stark! Tomatsås, ost, skinka, bacon och feferoni" },
{ name: "Blanco", price: "140:-", desc: "Tomatsås, ost, salami, paprika och oliver" },
{ name: "Orientale", price: "140:-", desc: "Tomatsås, ost, köttfärssås och ägg" },
{ name: "Quattro Stagioni", price: "140:-", desc: "Tomatsås, ost, skinka, räkor, musslor och oliver" },
{ name: "Sole Mio", price: "140:-", desc: "Tomatsås, ost, champinjoner, räkor och tonfisk" },
{ name: "Fantasia", price: "140:-", desc: "Tomatsås, ost, skinka, ananas, banan och curry" },
{ name: "Pompei", price: "140:-", desc: "Tomatsås, ost, skinka, räkor och ananas" },
{ name: "Rhodos", price: "140:-", desc: "Tomatsås, ost, champinjoner, bacon och oliver" },
{ name: "Västkust", price: "140:-", desc: "Tomatsås, ost, musslor, räkor och tonfisk" }
]
}
]
},

{
id: "klass4",
title: "Pizzor Klass 4",
info: "Familjepizza 390:-",
subs: [
{
title: "Klass 4",
items: [
{ name: "Milano", price: "145:-", desc: "Tomatsås, ost, champinjoner, räkor och skinka" },
{ name: "Amore", price: "145:-", desc: "Tomatsås, ost, champinjoner, lök, salami, gorgonzolaost och skinka" },
{ name: "Mexicana", price: "145:-", desc: "Stark! Tomatsås, ost, köttfärssås, lök, tomater och feferoni" },
{ name: "Flamingo", price: "145:-", desc: "Tomatsås, ost, paprika, salami, tomater, fetaost, oliver och lök" },
{ name: "Newroz", price: "145:-", desc: "Tomatsås, ost, skinka, pommes frites och vitlökssås" },
{ name: "Calzone Special", price: "145:-", desc: "Tomatsås, ost, champinjoner, räkor och skinka" },
{ name: "Rustica", price: "145:-", desc: "Tomatsås, ost, champinjoner, köttfärssås, bacon och lök" },
{ name: "Quattro Formaggi", price: "145:-", desc: "Tomatsås, ost, gorgonzolaost, fetaost, oliver och mozzarellaost" },
{ name: "Korfu", price: "145:-", desc: "Tomatsås, ost, tomater, feferoni, skinka, salami och oliver" },
{ name: "Venedig", price: "145:-", desc: "Tomatsås, ost, salami, köttfärssås, paprika, feferoni och lök" },
{ name: "Bacus", price: "145:-", desc: "Tomatsås, ost, salami, bacon, kronärtskocka och champinjoner" }
]
}
]
,
{
id: "special",
title: "Specialpizzor",
info: "Familjepizza 400:-",
subs: [
{
title: "Special",
items: [
{ name: "Canda Special", price: "155:-", desc: "Ost, oxfilé, pommes frites och bearnaisesås" },
{ name: "Mariefred's Special", price: "155:-", desc: "Ost, oxfilé, fläskfilé, tomater och bearnaisesås" },
{ name: "Maxim", price: "155:-", desc: "Ost, oxfilé, champinjoner, skinka och bearnaisesås" },
{ name: "Favoriten", price: "155:-", desc: "Ost, oxfilé, räkor, kronärtskocka och bearnaisesås" },
{ name: "St Tropez", price: "155:-", desc: "Ost, kyckling, banan, ananas, curry och bearnaisesås" },
{ name: "Strängnäs Special", price: "155:-", desc: "Ost, pepperonikorv, tomater, lök, feferoni och cayennepeppar" },
{ name: "Oxfile Pizza", price: "155:-", desc: "Ost, oxfilé, champinjoner, tomater, paprika och bearnaisesås" },
{ name: "Trocadero (Inbakad)", price: "155:-", desc: "Ost, oxfilé, vitlök, champinjoner och bearnaisesås" },
{ name: "Tropicana", price: "155:-", desc: "Ost, skinka, fläskfilé, räkor och banan" },
{ name: "Shish Kebab (Halv inbakad)", price: "155:-", desc: "Ost, oxfilé, paprika, tomater, lök, champinjoner och bearnaisesås" },
{ name: "Valentina Special", price: "155:-", desc: "Ost, oxfilé, champinjoner, lök, gorgonzolaost och bearnaisesås" },
{ name: "Napoli", price: "155:-", desc: "Ost, oxfilé, lök, gorgonzolaost och vitlök" },
{ name: "Mama Rosa", price: "155:-", desc: "Tomatsås, ost, fläskfilé, ananas, banan, curry och bearnaisesås" }
]
}
]
},
{
id: "mexikanska",
title: "Mexikanska Pizzor",
info: "Familjepizza 400:-",
subs: [
{
title: "Mexikanska",
items: [
{ name: "Azteka", price: "155:-", desc: "Tomatsås, ost, skinka, tacosås, jalapeños och vitlökssås" },
{ name: "Amigo", price: "155:-", desc: "Tomatsås, ost, salami, köttfärssås, lök och jalapeños" },
{ name: "Inferno", price: "155:-", desc: "Tomatsås, ost, skinka, salami, jalapeños och vitlökssås" },
{ name: "Acapulco", price: "155:-", desc: "Tomatsås, ost, oxfilé, champinjoner, jalapeños och vitlökssås" },
{ name: "Mexico", price: "155:-", desc: "Tomatsås, ost, köttfärssås, bacon, paprika och jalapeños" },
{ name: "San Luis", price: "155:-", desc: "Tomatsås, ost, kyckling, ananas, jalapeños och vitlökssås" }
]
}
]
},

{
id: "kebabpizzor",
title: "Kebabpizzor",
info: "Familjepizza 400:-",
subs: [
{
title: "Kebabpizzor",
items: [
{ name: "Kebabpizza", price: "145:-", desc: "Tomatsås, ost, kebabkött, sallad, tomat, lök, feferoni och vitlökssås" },
{ name: "Super Kebabpizza", price: "155:-", desc: "Tomatsås, ost, kebabkött, pommes, sallad, tomat och vitlökssås" },
{ name: "Gyrospizza Special", price: "155:-", desc: "Tomatsås, ost, gyroskött, pommes, sallad och vitlökssås" },
{ name: "Kebab båt mix", price: "155:-", desc: "Tomatsås, ost, gyroskött, kycklingkebab och vitlökssås" },
{ name: "Viking Kebab", price: "145:-", desc: "Inbakad. Tomatsås, ost, kebabkött och vitlökssås" },
{ name: "Viking Special", price: "155:-", desc: "Inbakad. Tomatsås, ost, kebabkött, pommes och fetaost" },
{ name: "Kycklingkebab pizza", price: "145:-", desc: "Tomatsås, ost, kycklingkebab, sallad och vitlökssås" },
{ name: "Gyroskebab pizza", price: "145:-", desc: "Tomatsås, ost, gyroskött, sallad och vitlökssås" }
]
}
]
},

{
id: "kebabratter",
title: "Kebabrätter, Gyros & Falafel",
subs: [
{
title: "Rätter",
items: [
{ name: "Kebab Med Bröd", price: "130:-", desc: "Kebabkött, sallad, tomat, lök och vitlökssås" },
{ name: "Kebabtallrik", price: "145:-", desc: "Kebabkött, pommes eller ris, sallad och sås" },
{ name: "Kebabtallrik Mix", price: "155:-", desc: "Kebabkött, kycklingkebab, pommes eller ris" },
{ name: "Kebabskrovmål", price: "145:-", desc: "Kebabkött med pommes, sallad och sås" },
{ name: "Kyckling Med Bröd", price: "130:-", desc: "Kyckling, sallad, tomat, lök och vitlökssås" },
{ name: "Kebabrulle", price: "145:-", desc: "Kebabkött i rulle med sallad och sås" },
{ name: "Kycklingtallrik", price: "145:-", desc: "Kyckling, pommes eller ris, sallad och sås" },
{ name: "Gyros Med Bröd", price: "130:-", desc: "Gyroskött, sallad, tomat och vitlökssås" },
{ name: "Gyrosrulle", price: "145:-", desc: "Gyroskött i rulle med sallad och sås" },
{ name: "Gyrosskrovmål", price: "145:-", desc: "Gyroskött med pommes och sås" },
{ name: "Gyroskebabtallrik", price: "145:-", desc: "Gyroskött, pommes eller ris och sås" },
{ name: "Falafel med bröd", price: "130:-", desc: "Falafel, sallad, tomat och vitlökssås" },
{ name: "Falafelrulle", price: "145:-", desc: "Falafel i rulle med sallad och sås" },
{ name: "Falafelskrovmål", price: "145:-", desc: "Falafel med pommes och sås" },
{ name: "Falafeltallrik", price: "145:-", desc: "Falafel, pommes eller ris och sås" }
]
}
]
},

{
id: "sallader",
title: "Sallader",
info: "Isbergssallad, tomat, gurka, ost, dressing och bröd ingår",
subs: [
{
title: "Sallader",
items: [
{ name: "Ost- & Skinksallad", price: "145:-", desc: "Skinka, paprika, ananas och majs" },
{ name: "Avokadosallad", price: "145:-", desc: "Skinka, räkor, avokado, ägg och majs" },
{ name: "Grekisk Sallad", price: "145:-", desc: "Fetaost, rödlök, oliver och paprika" },
{ name: "Räksallad", price: "145:-", desc: "Räkor, ägg, citron och majs" },
{ name: "Tonfisksallad", price: "145:-", desc: "Tonfisk, rödlök, oliver och ägg" },
{ name: "Kebabsallad", price: "145:-", desc: "Kebabkött, rödlök och kebabsås" },
{ name: "Gyrossallad", price: "145:-", desc: "Gyroskött, rödlök och vitlökssås" },
{ name: "Kycklingsallad", price: "145:-", desc: "Kyckling, paprika, ananas och majs" }
]
}
]
}
