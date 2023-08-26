// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon

const countryCodesWithImage = [
  "ao",
  "bg",
  "bo",
  "by",
  "ch",
  "de",
  "ee",
  "ge",
  "hu",
  "iq",
  "ke",
  "kr",
  "ly",
  "mk",
  "mz",
  "nl",
  "sc",
  "sk",
  "tn",
  "ug",
  "ae",
  "az",
  "bz",
  "cu",
  "eg",
  "fk",
  "gp",
  "ir",
  "kg",
  "kw",
  "lk",
  "ma",
  "ml",
  "mt",
  "na",
  "no",
  "pe",
  "ro",
  "sd",
  "us",
  "za",
  "af",
  "ar",
  "ba",
  "br",
  "ca",
  "dk",
  "hk",
  "ie",
  "kh",
  "mm",
  "mu",
  "nc",
  "np",
  "pr",
  "rs",
  "se",
  "sm",
  "sx",
  "th",
  "tr",
  "uy",
  "vn",
  "as",
  "bj",
  "cl",
  "cw",
  "fr",
  "gh",
  "gr",
  "il",
  "it",
  "ki",
  "kz",
  "mn",
  "pg",
  "pt",
  "ru",
  "sg",
  "sn",
  "sy",
  "tt",
  "at",
  "bd",
  "cd",
  "do",
  "es",
  "gi",
  "jm",
  "la",
  "lt",
  "mo",
  "ph",
  "pw",
  "rw",
  "so",
  "tw",
  "al",
  "au",
  "be",
  "cf",
  "cn",
  "cy",
  "dz",
  "et",
  "gb",
  "hr",
  "in",
  "jo",
  "lb",
  "lu",
  "mf",
  "mq",
  "mx",
  "ng",
  "nz",
  "pk",
  "sa",
  "si",
  "ws",
  "am",
  "bn",
  "bw",
  "cz",
  "ec",
  "fi",
  "gd",
  "gu",
  "ht",
  "jp",
  "kp",
  "lv",
  "my",
  "ni",
  "pl",
  "sb",
  "ua",
  "ve",
  "ye",
];

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countries: Country[] = [
  {
    code: "AE",
    latitude: 23.424076,
    longitude: 53.847818,
    name: "Dibba 632-634 AD",
  },
  { code: "AF", latitude: 33.93911, longitude: 67.709953, name: "Wanat, 2008" },
  {
    code: "AL",
    latitude: 41.153332,
    longitude: 20.168331,
    name: "Albulena 1457",
  },
  {
    code: "AM",
    latitude: 40.069099,
    longitude: 45.038189,
    name: "Sardarabad, 1918",
  },
  {
    code: "AO",
    latitude: -11.202692,
    longitude: 17.873887,
    name: "Cuito Cuanavale, 1987",
  },
  {
    code: "AR",
    latitude: -38.416097,
    longitude: -63.616672,
    name: "Los Corrales, 1880",
  },
  {
    code: "AS",
    latitude: -14.270972,
    longitude: -170.132217,
    name: "Samoan Crisis, 1887-9",
  },
  {
    code: "AT",
    latitude: 47.516231,
    longitude: 14.550072,
    name: "Austerlitz, 1805",
  },
  {
    code: "AU",
    latitude: -25.274398,
    longitude: 133.775136,
    name: "Emu War, 1932",
  },
  {
    code: "AZ",
    latitude: 40.143105,
    longitude: 47.576927,
    name: "Ganja, 1804",
  },
  {
    code: "BA",
    latitude: 43.915886,
    longitude: 17.679076,
    name: "Bosnian Highlands, 926",
  },
  { code: "BD", latitude: 23.684994, longitude: 90.356331, name: "Ramu, 1824" },
  {
    code: "BE",
    latitude: 50.503887,
    longitude: 4.469936,
    name: "Waterloo, 1815",
  },
  {
    code: "BG",
    latitude: 42.733883,
    longitude: 25.48583,
    name: "Plevna, 1877",
  },
  { code: "BJ", latitude: 9.30769, longitude: 2.315834, name: "Benin, 1897" },
  {
    code: "BN",
    latitude: 4.535277,
    longitude: 114.727669,
    name: "North Borneo, 1945",
  },
  {
    code: "BO",
    latitude: -16.290154,
    longitude: -63.588653,
    name: "Huarina, 1547",
  },
  {
    code: "BR",
    latitude: -14.235004,
    longitude: -51.92528,
    name: "Guararapes, 1649",
  },
  {
    code: "BW",
    latitude: -22.328474,
    longitude: 24.684866,
    name: "Elands River, 1901",
  },
  {
    code: "BY",
    latitude: 53.709807,
    longitude: 27.953389,
    name: "Polotsk, 1812",
  },
  {
    code: "BZ",
    latitude: 17.189877,
    longitude: -88.49765,
    name: "St. George's Caye, 1798",
  },
  {
    code: "CA",
    latitude: 56.130366,
    longitude: -106.346771,
    name: "The Plains of Abraham, 1759",
  },
  {
    code: "CD",
    latitude: -4.038333,
    longitude: 21.758664,
    name: "Siege of Jadotville, 1961",
  },
  {
    code: "CF",
    latitude: 6.611111,
    longitude: 20.939444,
    name: "Bangui, 2013",
  },
  {
    code: "CH",
    latitude: 46.818188,
    longitude: 8.227512,
    name: "Rheinfelden, 1638",
  },
  {
    code: "CL",
    latitude: -35.675147,
    longitude: -71.542969,
    name: "Chacabuco, 1817",
  },
  {
    code: "CN",
    latitude: 35.86166,
    longitude: 104.195397,
    name: "Red Cliffs, 208",
  },
  {
    code: "CU",
    latitude: 21.521757,
    longitude: -77.781167,
    name: "Bay of Pigs Invasion, 1961",
  },
  {
    code: "CZ",
    latitude: 49.817492,
    longitude: 15.472962,
    name: "White Mountain, 1620",
  },
  {
    code: "DE",
    latitude: 51.165691,
    longitude: 10.451526,
    name: "Teutoberg Forest, 9 AD",
  },
  {
    code: "DK",
    latitude: 56.26392,
    longitude: 9.501785,
    name: "Jutland, 1917",
  },
  {
    code: "DO",
    latitude: 18.735693,
    longitude: -70.162651,
    name: "San Domingo, 1806",
  },
  {
    code: "DZ",
    latitude: 28.033886,
    longitude: 1.659626,
    name: "Algiers, 1956",
  },
  {
    code: "EC",
    latitude: -1.831239,
    longitude: -78.183406,
    name: "Pichincha, 1822",
  },
  {
    code: "EE",
    latitude: 58.595272,
    longitude: 25.013607,
    name: "Narva, 1944",
  },
  {
    code: "EG",
    latitude: 26.820553,
    longitude: 30.802498,
    name: "Siege of Alexandria, 47 BC",
  },
  {
    code: "ES",
    latitude: 40.463667,
    longitude: -3.74922,
    name: "Trafalgar, 1805",
  },
  { code: "ET", latitude: 9.145, longitude: 40.489673, name: "Adwa, 1896" },
  {
    code: "FI",
    latitude: 61.92411,
    longitude: 25.748151,
    name: "Tali-Ihantala, 1944",
  },
  {
    code: "FK",
    latitude: -51.796253,
    longitude: -59.523613,
    name: "Goose Green, 1982",
  },
  {
    code: "FR",
    latitude: 46.227638,
    longitude: 2.213749,
    name: "Verdun, 1916",
  },
  {
    code: "GB",
    latitude: 55.378051,
    longitude: -3.435973,
    name: "Hastings, 1066",
  },
  {
    code: "GD",
    latitude: 12.262776,
    longitude: -61.604171,
    name: "Grenada, 1779",
  },
  {
    code: "GE",
    latitude: 42.315407,
    longitude: 43.356892,
    name: "Didgori, 1121",
  },
  {
    code: "GH",
    latitude: 7.946527,
    longitude: -1.023194,
    name: "Nsamankow, 1824",
  },
  {
    code: "GI",
    latitude: 36.137741,
    longitude: -5.345374,
    name: "Siege of Gibraltar, 1782",
  },
  {
    code: "GP",
    latitude: 16.995971,
    longitude: -62.067641,
    name: "Guadeloupe, 1759",
  },
  {
    code: "GR",
    latitude: 39.074208,
    longitude: 21.824312,
    name: "Thermopylae, 480 BC",
  },
  {
    code: "GU",
    latitude: 13.444304,
    longitude: 144.793731,
    name: "Guam, 1944",
  },
  {
    code: "GZ",
    latitude: 31.354676,
    longitude: 34.308825,
    name: "Suez Crisis, 1956",
  },
  {
    code: "HK",
    latitude: 22.396428,
    longitude: 114.109497,
    name: "Hong Kong, 1941",
  },
  { code: "HR", latitude: 45.1, longitude: 15.2, name: "Vukovar, 1991" },
  {
    code: "HT",
    latitude: 18.971187,
    longitude: -72.285215,
    name: "Vertières, 1803",
  },
  {
    code: "HU",
    latitude: 47.162494,
    longitude: 19.503304,
    name: "Mohács, 1526",
  },
  {
    code: "IE",
    latitude: 53.41291,
    longitude: -8.24389,
    name: "Easter Rising, 1916",
  },
  {
    code: "IL",
    latitude: 31.046051,
    longitude: 34.851612,
    name: "Jerusalem, 1187",
  },
  { code: "IN", latitude: 20.593684, longitude: 78.96288, name: "Diu, 1509" },
  {
    code: "IQ",
    latitude: 33.223191,
    longitude: 43.679291,
    name: "Fallujah, 2004",
  },
  {
    code: "IR",
    latitude: 32.427908,
    longitude: 53.688046,
    name: "Carrhae, 53 BC",
  },
  {
    code: "IT",
    latitude: 41.87194,
    longitude: 12.56738,
    name: "Cannae, 216 BC",
  },
  {
    code: "JM",
    latitude: 18.109581,
    longitude: -77.297508,
    name: "Capture of Jamaica, 1655",
  },
  { code: "JO", latitude: 30.585164, longitude: 36.238414, name: "Fahl, 634" },
  {
    code: "JP",
    latitude: 36.204824,
    longitude: 138.252924,
    name: "Sekigahara, 1600",
  },
  {
    code: "KE",
    latitude: -0.023559,
    longitude: 37.906193,
    name: "Siege of Mombasa, 1696",
  },
  {
    code: "KH",
    latitude: 12.565679,
    longitude: 104.990963,
    name: "Fall of Angkor, 1431",
  },
  {
    code: "KI",
    latitude: -3.370417,
    longitude: -168.734039,
    name: "Tarawa, 1943",
  },
  {
    code: "KP",
    latitude: 40.339852,
    longitude: 127.510093,
    name: "Pyongyang, 1894",
  },
  {
    code: "KR",
    latitude: 35.907757,
    longitude: 127.766922,
    name: "Incheon, 1950",
  },
  {
    code: "KW",
    latitude: 29.31166,
    longitude: 47.481766,
    name: "Khafji, 1991",
  },
  {
    code: "KZ",
    latitude: 48.019573,
    longitude: 66.923684,
    name: "Añyraqai, 1730",
  },
  {
    code: "LA",
    latitude: 19.85627,
    longitude: 102.495496,
    name: "La Drang, 1965",
  },
  {
    code: "LB",
    latitude: 33.854721,
    longitude: 35.862285,
    name: "Siege of Beirut, 1982",
  },
  {
    code: "LK",
    latitude: 7.873054,
    longitude: 80.771797,
    name: "Trincomalee, 1782",
  },
  {
    code: "LT",
    latitude: 55.169438,
    longitude: 23.881275,
    name: "Wilno, 1939",
  },
  {
    code: "LU",
    latitude: 49.815273,
    longitude: 6.129583,
    name: "The Bulge, 1944",
  },
  {
    code: "LV",
    latitude: 56.879635,
    longitude: 24.603189,
    name: "Saule, 1236",
  },
  {
    code: "LY",
    latitude: 26.3351,
    longitude: 17.228331,
    name: "Tripoli, 1943",
  },
  {
    code: "MA",
    latitude: 31.791702,
    longitude: -7.09262,
    name: "El Alamein, 1942",
  },
  {
    code: "MK",
    latitude: 41.608635,
    longitude: 21.745275,
    name: "The Vardar, 1918",
  },
  {
    code: "ML",
    latitude: 17.570692,
    longitude: -3.996166,
    name: "Ségou, 1861",
  },
  {
    code: "MT",
    latitude: 35.937496,
    longitude: 14.375416,
    name: "Siege of Malta, 1942",
  },
  {
    code: "MU",
    latitude: -20.348404,
    longitude: 57.552152,
    name: "Grand Port, 1810",
  },
  {
    code: "MX",
    latitude: 23.634501,
    longitude: -102.552784,
    name: "Puebla, 1862",
  },
  {
    code: "MY",
    latitude: 4.040255,
    longitude: 109.091912,
    name: "Malaya, 1942",
  },
  {
    code: "MZ",
    latitude: -18.665695,
    longitude: 35.529562,
    name: "Marracuene, 1895",
  },
  {
    code: "NA",
    latitude: -22.95764,
    longitude: 18.49041,
    name: "Waterberg, 1904",
  },
  { code: "NG", latitude: 9.081999, longitude: 8.675277, name: "Okeh, 1968" },
  {
    code: "NI",
    latitude: 12.865416,
    longitude: -85.207229,
    name: "San Jacinto, 1856",
  },
  {
    code: "NL",
    latitude: 52.132633,
    longitude: 5.291266,
    name: "Arnhem, 1944",
  },
  {
    code: "NO",
    latitude: 60.472024,
    longitude: 8.468946,
    name: "Narvik, 1940",
  },
  {
    code: "NP",
    latitude: 28.394857,
    longitude: 84.124008,
    name: "Kirtipur, 1767",
  },
  {
    code: "NZ",
    latitude: -40.900557,
    longitude: 174.885971,
    name: "Gate Pā, 1864",
  },
  {
    code: "PE",
    latitude: -9.189967,
    longitude: -75.015152,
    name: "Ayacucho, 1824",
  },
  {
    code: "PG",
    latitude: -6.314993,
    longitude: 143.95555,
    name: "The Bismarck Sea, 1942",
  },
  {
    code: "PH",
    latitude: 12.879721,
    longitude: 121.774017,
    name: "Manila Bay, 1898",
  },
  {
    code: "PK",
    latitude: 30.375321,
    longitude: 69.345116,
    name: "Chawinda, 1965",
  },
  {
    code: "PL",
    latitude: 51.919438,
    longitude: 19.145136,
    name: "Grunwald, 1410",
  },
  {
    code: "PR",
    latitude: 18.220833,
    longitude: -66.590149,
    name: "San Juan, 1625",
  },
  {
    code: "PS",
    latitude: 31.952162,
    longitude: 35.233154,
    name: "Gaza, 1917",
  },
  {
    code: "PT",
    latitude: 39.399872,
    longitude: -8.224454,
    name: "Aljubarrota, 1385",
  },
  {
    code: "PW",
    latitude: 7.51498,
    longitude: 134.58252,
    name: "Peleliu, 1944",
  },
  {
    code: "RO",
    latitude: 45.943161,
    longitude: 24.96676,
    name: "Mărăști, 1917",
  },
  {
    code: "RS",
    latitude: 44.016521,
    longitude: 21.005859,
    name: "Kosovo, 1389",
  },
  {
    code: "RU",
    latitude: 61.52401,
    longitude: 105.318756,
    name: "Stalingrad, 1942",
  },
  {
    code: "RW",
    latitude: -1.940278,
    longitude: 29.873888,
    name: "Kigali, 1994",
  },
  {
    code: "SA",
    latitude: 23.885942,
    longitude: 45.079162,
    name: "Khafji, 1991",
  },
  {
    code: "SB",
    latitude: -9.64571,
    longitude: 160.156194,
    name: "The Eastern Solomons, 1942",
  },
  { code: "SC", latitude: -4.679574, longitude: 55.491977, name: "Mahé, 1801" },
  {
    code: "SD",
    latitude: 15.8905231,
    longitude: 30.7671933,
    name: "Suakin, 1541",
  },
  { code: "SE", latitude: 60.128161, longitude: 18.643501, name: "Lund, 1676" },
  {
    code: "SG",
    latitude: 1.352083,
    longitude: 103.819836,
    name: "Singapore, 1942",
  },
  {
    code: "SK",
    latitude: 48.669026,
    longitude: 19.699024,
    name: "Pressburg 907",
  },
  {
    code: "SM",
    latitude: 43.94236,
    longitude: 12.457777,
    name: "San Marino, 1944",
  },
  {
    code: "SN",
    latitude: 14.497401,
    longitude: -14.452362,
    name: "Capture of Senegal, 1758",
  },
  {
    code: "SO",
    latitude: 5.152149,
    longitude: 46.199616,
    name: "Mogadishu, 1993",
  },
  {
    code: "SY",
    latitude: 34.802075,
    longitude: 38.996815,
    name: "Gaugamela, 331 BC",
  },
  {
    code: "TH",
    latitude: 15.870032,
    longitude: 100.992541,
    name: "Bang Rachan, 1766",
  },
  {
    code: "TN",
    latitude: 33.886917,
    longitude: 9.537499,
    name: "Zama, 202 BC",
  },
  {
    code: "TR",
    latitude: 38.963745,
    longitude: 35.243322,
    name: "Antioch, 1098",
  },
  {
    code: "TT",
    latitude: 10.691803,
    longitude: -61.222503,
    name: "Action of March, 1677",
  },
  {
    code: "TW",
    latitude: 23.69781,
    longitude: 120.960515,
    name: "Liaoluo Bay, 1633",
  },
  {
    code: "UA",
    latitude: 48.379433,
    longitude: 31.16558,
    name: "Balaklava, 1854",
  },
  {
    code: "UG",
    latitude: 1.373333,
    longitude: 32.290275,
    name: "Lukaya, 1979",
  },
  {
    code: "US",
    latitude: 37.09024,
    longitude: -95.712891,
    name: "Gettysburg, 1863",
  },
  {
    code: "UY",
    latitude: -32.522779,
    longitude: -55.765835,
    name: "Montevideo, 1823",
  },
  {
    code: "VN",
    latitude: 14.058324,
    longitude: 108.277199,
    name: "Tet Offensive, 1968",
  },
  {
    code: "WS",
    latitude: -13.759029,
    longitude: -172.104629,
    name: "Siege of Apia, 1899",
  },
  {
    code: "XK",
    latitude: 42.602636,
    longitude: 20.902977,
    name: "Košare, 1999",
  },
  {
    code: "YE",
    latitude: 15.552727,
    longitude: 48.516388,
    name: "Sanaa, 2011",
  },
  {
    code: "ZA",
    latitude: -30.559482,
    longitude: 22.937506,
    name: "Isandlwana, 1879",
  },
];

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

// Source: https://fr.wikipedia.org/wiki/ISO_3166
const frenchCountryNames: Record<string, string> = {
  AF: "Afghanistan",
  AX: "Åland",
  AL: "Albanie",
  DZ: "Algérie",
  AS: "Samoa américaines",
  AD: "Andorre",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctique",
  AG: "Antigua-et-Barbuda",
  AR: "Argentine",
  AM: "Arménie",
  AW: "Aruba",
  AU: "Australie",
  AT: "Autriche",
  AZ: "Azerbaïdjan",
  BS: "Bahamas",
  BH: "Bahreïn",
  BD: "Bangladesh",
  BB: "Barbade",
  BY: "Bélarus",
  BE: "Belgique",
  BZ: "Belize",
  BJ: "Bénin",
  BM: "Bermudes",
  BT: "Bhoutan",
  BO: "Bolivie",
  BQ: "Bonaire, Saint-Eustache et Saba",
  BA: "Bosnie-Herzégovine",
  BW: "Botswana",
  BV: "Bouvet",
  BR: "Brésil",
  IO: "Indien",
  BN: "Brunéi Darussalam",
  BG: "Bulgarie",
  BF: "Burkina Faso",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodge",
  CM: "Cameroun",
  CA: "Canada",
  KY: "Caïmans",
  CF: "République centrafricaine",
  TD: "Tchad",
  CL: "Chili",
  CN: "Chine",
  CX: "Christmas",
  CC: "Cocos",
  CO: "Colombie",
  KM: "Comores",
  CD: "République démocratique du Congo",
  CG: "Congo",
  CK: "Cook",
  CR: "Costa Rica",
  HR: "Croatie",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Chypre",
  CZ: "Tchéquie",
  DK: "Danemark",
  DJ: "Djibouti",
  DM: "Dominique",
  DO: "République dominicaine",
  EC: "Équateur",
  EG: "Égypte",
  SV: "Salvador",
  GQ: "Guinée équatoriale",
  ER: "Érythrée",
  EE: "Estonie",
  SZ: "Eswatini",
  ET: "Éthiopie",
  FK: "Îles Falkland (Malvinas)",
  FO: "Féroé",
  FJ: "Fidji",
  FI: "Finlande",
  FR: "France",
  GF: "Guyane française",
  PF: "Polynésie française",
  TF: "Terres australes françaises",
  GA: "Gabon",
  GM: "Gambie",
  GE: "Géorgie",
  DE: "Allemagne",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Grèce",
  GL: "Groenland",
  GD: "Grenade",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernesey",
  GN: "Guinée",
  GW: "Guinée-Bissau",
  GY: "Guyana",
  HT: "Haïti",
  HM: "Heard-et-Îles MacDonald",
  VA: "Saint-Siège",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hongrie",
  IS: "Islande",
  IN: "Inde",
  ID: "Indonésie",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Irlande",
  IM: "Île de Man",
  IL: "Israël",
  IT: "Italie",
  CI: "Côte d'Ivoire",
  JM: "Jamaïque",
  JP: "Japon",
  JE: "Jersey",
  JO: "Jordanie",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "Corée du Nord",
  KR: "Corée du Sud",
  KW: "Koweït",
  KG: "Kirghizistan",
  LA: "Lao",
  LV: "Lettonie",
  LB: "Liban",
  LS: "Lesotho",
  LR: "Libéria",
  LY: "Libye",
  LI: "Liechtenstein",
  LT: "Lituanie",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaisie",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malte",
  MH: "Marshall",
  MQ: "Martinique",
  MR: "Mauritanie",
  MU: "Maurice",
  YT: "Mayotte",
  MX: "Mexique",
  FM: "Micronésie",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolie",
  ME: "Monténégro",
  MS: "Montserrat",
  MA: "Maroc",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibie",
  NR: "Nauru",
  NP: "Népal",
  NL: "Pays-Bas",
  NC: "Nouvelle-Calédonie",
  NZ: "Nouvelle-Zélande",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigéria",
  NU: "Niue",
  NF: "Norfolk",
  MK: "Macédoine du Nord",
  MP: "Mariannes du Nord",
  NO: "Norvège",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palaos",
  PS: "Palestine",
  PA: "Panama",
  PG: "Papouasie-Nouvelle-Guinée",
  PY: "Paraguay",
  PE: "Pérou",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Pologne",
  PT: "Portugal",
  PR: "Porto Rico",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Roumanie",
  RU: "Russie",
  RW: "Rwanda",
  BL: "Saint-Barthélemy",
  SH: "Sainte-Hélène, Ascension et Tristan da Cunha",
  KN: "Saint-Kitts-et-Nevis",
  LC: "Sainte-Lucie",
  MF: "Saint-Martin",
  PM: "Saint-Pierre-et-Miquelon",
  VC: "Saint-Vincent-et-les Grenadines",
  WS: "Samoa",
  SM: "Saint-Marin",
  ST: "Sao Tomé-et-Principe",
  SA: "Arabie saoudite",
  SN: "Sénégal",
  RS: "Serbie",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapour",
  SX: "Saint-Martin",
  SK: "Slovaquie",
  SI: "Slovénie",
  SB: "Salomon",
  SO: "Somalie",
  ZA: "Afrique du Sud",
  GS: "Géorgie du Sud-et-les Îles Sandwich du Sud",
  SS: "Soudan du Sud",
  ES: "Espagne",
  LK: "Sri Lanka",
  SD: "Soudan",
  SR: "Suriname",
  SJ: "Svalbard et l'Île Jan Mayen",
  SE: "Suède",
  CH: "Suisse",
  SY: "Syrie",
  TW: "Taïwan",
  TJ: "Tadjikistan",
  TZ: "Tanzanie",
  TH: "Thaïlande",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinité-et-Tobago",
  TN: "Tunisie",
  TR: "Turquie",
  TM: "Turkménistan",
  TC: "Turks-et-Caïcos",
  TV: "Tuvalu",
  UG: "Ouganda",
  UA: "Ukraine",
  AE: "Émirats arabes unis",
  GB: "Royaume-Uni",
  UM: "Îles mineures éloignées des États-Unis",
  US: "États-Unis d'Amérique",
  UY: "Uruguay",
  UZ: "Ouzbékistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Vierges britanniques",
  VI: "Vierges des États-Unis",
  WF: "Wallis-et-Futuna",
  EH: "Sahara occidental",
  YE: "Yémen",
  ZM: "Zambie",
  ZW: "Zimbabwe",
  AN: "Antilles néerlandaises",
  GZ: "Bande de Gaza",
  XK: "Kosovo",
};

export function getCountryName(language: string, country: Country) {
  if (language === "fr") {
    return frenchCountryNames[country.code];
  }
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
