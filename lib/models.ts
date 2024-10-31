export type Trip = {
  id: string;
  location: string;
  days: number;
  price: string;
  highlights: string[];
};

export const popularTrips: Trip[] = [
  {
    id: "1",
    location: "Paris, France",
    days: 5,
    price: "$1,500",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "Notre-Dame Cathedral",
    ],
  },
  {
    id: "2",
    location: "Bali, Indonesia",
    days: 7,
    price: "$1,200",
    highlights: [
      "Uluwatu Temple",
      "Tegallalang Rice Terrace",
      "Seminyak Beach",
      "Monkey Forest",
    ],
  },
  {
    id: "3",
    location: "Tokyo, Japan",
    days: 6,
    price: "$1,800",
    highlights: [
      "Shibuya Crossing",
      "Tokyo Skytree",
      "Meiji Shrine",
      "Tsukiji Fish Market",
    ],
  },
  {
    id: "4",
    location: "Rome, Italy",
    days: 4,
    price: "$1,100",
    highlights: ["Colosseum", "Vatican Museums", "Trevi Fountain", "Pantheon"],
  },
  {
    id: "5",
    location: "Sydney, Australia",
    days: 7,
    price: "$1,900",
    highlights: [
      "Sydney Opera House",
      "Bondi Beach",
      "Harbour Bridge",
      "Royal Botanic Garden",
    ],
  },
  {
    id: "6",
    location: "Cape Town, South Africa",
    days: 5,
    price: "$1,400",
    highlights: [
      "Table Mountain",
      "Robben Island",
      "Cape Point",
      "Kirstenbosch Gardens",
    ],
  },
  {
    id: "7",
    location: "New York City, USA",
    days: 3,
    price: "$1,300",
    highlights: [
      "Times Square",
      "Central Park",
      "Statue of Liberty",
      "Broadway",
    ],
  },
  {
    id: "8",
    location: "Bangkok, Thailand",
    days: 4,
    price: "$1,000",
    highlights: [
      "Grand Palace",
      "Wat Arun",
      "Chatuchak Market",
      "Floating Markets",
    ],
  },
  {
    id: "9",
    location: "Istanbul, Turkey",
    days: 5,
    price: "$1,100",
    highlights: [
      "Hagia Sophia",
      "Blue Mosque",
      "Grand Bazaar",
      "Bosphorus Cruise",
    ],
  },
  {
    id: "10",
    location: "Dubai, UAE",
    days: 4,
    price: "$1,600",
    highlights: [
      "Burj Khalifa",
      "Dubai Mall",
      "Palm Jumeirah",
      "Desert Safari",
    ],
  },
  {
    id: "11",
    location: "Santorini, Greece",
    days: 5,
    price: "$1,400",
    highlights: ["Oia Sunset", "Fira", "Red Beach", "Ancient Thera"],
  },
  {
    id: "12",
    location: "Cairo, Egypt",
    days: 5,
    price: "$1,200",
    highlights: [
      "Pyramids of Giza",
      "Egyptian Museum",
      "Khan El Khalili",
      "Nile Cruise",
    ],
  },
  {
    id: "13",
    location: "London, England",
    days: 4,
    price: "$1,500",
    highlights: [
      "Buckingham Palace",
      "London Eye",
      "Tower of London",
      "British Museum",
    ],
  },
  {
    id: "14",
    location: "Barcelona, Spain",
    days: 4,
    price: "$1,300",
    highlights: [
      "Sagrada Familia",
      "Park Güell",
      "Gothic Quarter",
      "La Rambla",
    ],
  },
  {
    id: "15",
    location: "Reykjavik, Iceland",
    days: 5,
    price: "$1,800",
    highlights: [
      "Blue Lagoon",
      "Golden Circle",
      "Northern Lights",
      "Thingvellir National Park",
    ],
  },
  {
    id: "16",
    location: "Amsterdam, Netherlands",
    days: 3,
    price: "$1,200",
    highlights: [
      "Canal Cruise",
      "Rijksmuseum",
      "Anne Frank House",
      "Van Gogh Museum",
    ],
  },
  {
    id: "17",
    location: "Marrakech, Morocco",
    days: 4,
    price: "$1,000",
    highlights: [
      "Jemaa el-Fnaa",
      "Majorelle Garden",
      "Bahia Palace",
      "Atlas Mountains",
    ],
  },
  {
    id: "18",
    location: "Lisbon, Portugal",
    days: 4,
    price: "$1,100",
    highlights: ["Belém Tower", "Alfama", "Jerónimos Monastery", "LX Factory"],
  },
  {
    id: "19",
    location: "Kyoto, Japan",
    days: 3,
    price: "$1,400",
    highlights: [
      "Fushimi Inari Shrine",
      "Kinkaku-ji",
      "Arashiyama Bamboo Grove",
      "Gion District",
    ],
  },
  {
    id: "20",
    location: "Phuket, Thailand",
    days: 5,
    price: "$1,300",
    highlights: [
      "Patong Beach",
      "Phi Phi Islands",
      "Big Buddha",
      "Old Phuket Town",
    ],
  },
];
