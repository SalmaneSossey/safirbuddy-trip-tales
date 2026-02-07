export interface City {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  color: string;
  image: string;
  avgDailyCost: number;
  avgMealCost: number;
  avgTransportCost: number;
  currency: string;
  videoUrl?: string;
  localTips?: {
    bestBudgetNeighborhood: string;
    hiddenGem: string;
    bestTimeToVisit: string;
  };
}

export const cities: City[] = [
  {
    id: "marrakech",
    name: "Marrakech",
    slug: "marrakech",
    tagline: "The Red City",
    description: "Marrakech is defined by its ochre ramparts and the chaotic pulse of Jemaa el-Fnaa square. The city is split between the historic walled Medina and the modern colonial district of Gueliz. It offers everything from world-class luxury riads to gritty street food stalls.",
    color: "hsl(12, 88%, 59%)",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80",
    avgDailyCost: 400,
    avgMealCost: 40,
    avgTransportCost: 15,
    currency: "MAD",
    videoUrl: "https://www.youtube.com/embed/Un9SOYQzGm0",
    localTips: {
      bestBudgetNeighborhood: "Kasbah",
      hiddenGem: "Le Jardin Secret or Maison de la Photographie",
      bestTimeToVisit: "Spring (March-May) or Autumn (September-November)",
    },
  },
  {
    id: "fes",
    name: "Fes",
    slug: "fes",
    tagline: "The Cultural Capital",
    description: "Fes el-Bali is a labyrinth of over 9,000 alleys where donkeys are the main transport. The city is famous for its tanneries, ancient university, and artisan craft heritage. It is less gentrified than Marrakech, offering a more raw cultural experience.",
    color: "hsl(142, 71%, 45%)",
    image: "/images/Fes.jpeg",
    avgDailyCost: 350,
    avgMealCost: 30,
    avgTransportCost: 15,
    currency: "MAD",
    videoUrl: "https://www.youtube.com/embed/LrhYMhRWHo0",
    localTips: {
      bestBudgetNeighborhood: "Fes el-Bali (near Bab Boujloud)",
      hiddenGem: "Jnan Sbil Gardens or Glaoui Palace",
      bestTimeToVisit: "Spring (April-May) or Autumn (September-October)",
    },
  },
  {
    id: "chefchaouen",
    name: "Chefchaouen",
    slug: "chefchaouen",
    tagline: "The Blue Pearl",
    description: "Nestled in the Rif Mountains, Chefchaouen is known for its photogenic medina and relaxed vibe. Founded in 1471 as a fortress against Portuguese invasions, the blue color is said to symbolize the sky and heaven, introduced by Jewish refugees.",
    color: "hsl(207, 89%, 61%)",
    image: "/images/Chefchaouen.jpg",
    avgDailyCost: 450,
    avgMealCost: 30,
    avgTransportCost: 10,
    currency: "MAD",
    videoUrl: "https://www.youtube.com/embed/K3L0o_fVYIo",
    localTips: {
      bestBudgetNeighborhood: "Inside the Medina (near Bab Souk)",
      hiddenGem: "Ras El Maa Waterfall or the Spanish Mosque at sunset",
      bestTimeToVisit: "Spring (April-June) or Autumn (September-October)",
    },
  },
  {
    id: "casablanca",
    name: "Casablanca",
    slug: "casablanca",
    tagline: "Morocco's Economic Hub",
    description: "Casablanca is the largest city in Morocco and its chief port. It blends French colonial legacy with traditional Moroccan style in the unique Habous Quarter. The city is famous for the Hassan II Mosque, one of the few open to non-Muslims.",
    color: "hsl(210, 14%, 89%)",
    image: "/images/casablanca.png",
    avgDailyCost: 500,
    avgMealCost: 40,
    avgTransportCost: 20,
    currency: "MAD",
    videoUrl: "https://www.youtube.com/embed/8i2IdONPNH4",
    localTips: {
      bestBudgetNeighborhood: "Casa Port or Maarif",
      hiddenGem: "Quartier Habous (New Medina) or Abderrahman Slaoui Museum",
      bestTimeToVisit: "Spring or Autumn (Summer is humid)",
    },
  },
  {
    id: "tangier",
    name: "Tangier",
    slug: "tangier",
    tagline: "Gateway to Africa",
    description: "Tangier offers a unique mix of North African, Spanish, and French influences. The Kasbah stands high on the hill with views of Spain, while the Ville Nouvelle bustles with cafes. It is famous for its literary history and the legendary Cafe Hafa.",
    color: "hsl(207, 42%, 30%)",
    image: "https://images.unsplash.com/photo-1582919534700-acf2374f10d3?auto=format&fit=crop&w=1200&q=80",
    avgDailyCost: 400,
    avgMealCost: 25,
    avgTransportCost: 15,
    currency: "MAD",
    videoUrl: "https://www.youtube.com/embed/TYytPqyLy4Y",
    localTips: {
      bestBudgetNeighborhood: "Old Kasbah",
      hiddenGem: "Phoenician Tombs or St. Andrew's Church",
      bestTimeToVisit: "September-November or March-May",
    },
  },
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find((city) => city.slug === slug);
};
