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
}

export const cities: City[] = [
  {
    id: "marrakech",
    name: "Marrakech",
    slug: "marrakech",
    tagline: "The Red City",
    description: "Experience the vibrant souks, stunning palaces, and magical atmosphere of Marrakech. From Jemaa el-Fnaa to the Majorelle Garden, discover Morocco's most iconic city.",
    color: "hsl(12, 88%, 59%)",
    image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=1200&q=80",
    avgDailyCost: 450,
    avgMealCost: 50,
    avgTransportCost: 15,
    currency: "MAD",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "fes",
    name: "Fes",
    slug: "fes",
    tagline: "The Cultural Capital",
    description: "Step back in time in Fes, home to the world's oldest university and one of the best-preserved medieval cities. Get lost in the ancient medina and discover authentic Moroccan culture.",
    color: "hsl(142, 71%, 45%)",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
    avgDailyCost: 400,
    avgMealCost: 45,
    avgTransportCost: 12,
    currency: "MAD",
  },
  {
    id: "chefchaouen",
    name: "Chefchaouen",
    slug: "chefchaouen",
    tagline: "The Blue Pearl",
    description: "Wander through the dreamy blue-washed streets of Morocco's most photogenic town. Nestled in the Rif Mountains, Chefchaouen offers stunning views, artisan crafts, and a peaceful atmosphere.",
    color: "hsl(207, 89%, 61%)",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80",
    avgDailyCost: 350,
    avgMealCost: 40,
    avgTransportCost: 10,
    currency: "MAD",
  },
  {
    id: "casablanca",
    name: "Casablanca",
    slug: "casablanca",
    tagline: "Morocco's Economic Hub",
    description: "Discover Morocco's largest city, where modernity meets tradition. Visit the stunning Hassan II Mosque, stroll along the Corniche, and experience cosmopolitan Moroccan life.",
    color: "hsl(210, 14%, 89%)",
    image: "https://images.unsplash.com/photo-1585393948915-f4c1fa2c8f18?auto=format&fit=crop&w=1200&q=80",
    avgDailyCost: 500,
    avgMealCost: 60,
    avgTransportCost: 20,
    currency: "MAD",
  },
  {
    id: "tangier",
    name: "Tangier",
    slug: "tangier",
    tagline: "Gateway to Africa",
    description: "Where Europe meets Africa. Tangier's unique blend of cultures, stunning coastal views, and rich history make it a fascinating destination. Explore the medina, caves, and beaches.",
    color: "hsl(207, 42%, 30%)",
    image: "https://images.unsplash.com/photo-1582919534700-acf2374f10d3?auto=format&fit=crop&w=1200&q=80",
    avgDailyCost: 420,
    avgMealCost: 48,
    avgTransportCost: 15,
    currency: "MAD",
  },
];

export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find((city) => city.slug === slug);
};
