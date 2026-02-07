export interface PriceItem {
  city: string;
  category: string;
  item: string;
  price_mad: number;
  price_max?: number;
  notes?: string;
  source: string;
  date_iso: string;
}

export const mockPrices: PriceItem[] = [
  // Marrakech
  { city: "Marrakech", category: "Food", item: "Coffee", price_mad: 10, price_max: 25, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Marrakech", category: "Food", item: "Mint Tea", price_mad: 10, price_max: 15, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Marrakech", category: "Food", item: "Tagine", price_mad: 40, price_max: 70, source: "Local restaurants", date_iso: "2025-10-01" },
  { city: "Marrakech", category: "Food", item: "Couscous", price_mad: 50, price_max: 80, source: "Local restaurants", date_iso: "2025-10-01" },
  { city: "Marrakech", category: "Food", item: "Water (1.5L)", price_mad: 6, price_max: 10, source: "Supermarkets", date_iso: "2025-10-01" },
  { city: "Marrakech", category: "Food", item: "Bread (Khobz)", price_mad: 1, price_max: 2, source: "Local bakeries", date_iso: "2025-10-01" },
  { city: "Marrakech", category: "Transport", item: "Taxi (city to airport)", price_mad: 100, price_max: 150, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Marrakech", category: "Activities", item: "Hammam visit", price_mad: 15, price_max: 250, notes: "15 MAD local / 250 MAD tourist spa", source: "Local residents", date_iso: "2025-10-01" },
  { city: "Marrakech", category: "Shopping", item: "SIM card", price_mad: 30, price_max: 50, source: "Telecom shops", date_iso: "2025-10-01" },
  { city: "Marrakech", category: "Shopping", item: "Leather bag", price_mad: 250, price_max: 600, notes: "Negotiate!", source: "Souks", date_iso: "2025-10-01" },
  { city: "Marrakech", category: "Shopping", item: "Rug", price_mad: 800, price_max: 3000, notes: "Negotiate!", source: "Souks", date_iso: "2025-10-01" },
  { city: "Marrakech", category: "Shopping", item: "Spices (100g)", price_mad: 15, price_max: 30, source: "Spice market", date_iso: "2025-10-01" },

  // Fes
  { city: "Fes", category: "Food", item: "Coffee", price_mad: 10, price_max: 20, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Fes", category: "Food", item: "Mint Tea", price_mad: 8, price_max: 12, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Fes", category: "Food", item: "Tagine", price_mad: 35, price_max: 60, source: "Local restaurants", date_iso: "2025-10-01" },
  { city: "Fes", category: "Food", item: "Couscous", price_mad: 40, price_max: 70, source: "Local restaurants", date_iso: "2025-10-01" },
  { city: "Fes", category: "Food", item: "Street food (msemen + tea)", price_mad: 12, notes: "Breakfast staple", source: "Local residents", date_iso: "2025-10-01" },
  { city: "Fes", category: "Transport", item: "Petit taxi (short ride)", price_mad: 15, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Fes", category: "Transport", item: "Bus ticket", price_mad: 4, source: "CTM", date_iso: "2025-10-01" },
  { city: "Fes", category: "Transport", item: "Airport transfer", price_mad: 120, price_max: 150, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Fes", category: "Activities", item: "Bou Inania Madrasa", price_mad: 20, source: "Official", date_iso: "2025-10-01" },
  { city: "Fes", category: "Activities", item: "Chouara Tannery", price_mad: 20, source: "Official", date_iso: "2025-10-01" },
  { city: "Fes", category: "Activities", item: "Borj Nord Museum", price_mad: 60, source: "Official", date_iso: "2025-10-01" },
  { city: "Fes", category: "Activities", item: "Hammam visit", price_mad: 15, price_max: 200, source: "Local residents", date_iso: "2025-10-01" },
  { city: "Fes", category: "Accommodation", item: "Hostel dorm (per night)", price_mad: 120, source: "Hostelworld", date_iso: "2025-10-01" },
  { city: "Fes", category: "Shopping", item: "Leather bag", price_mad: 200, price_max: 500, source: "Souks", date_iso: "2025-10-01" },
  { city: "Fes", category: "Shopping", item: "Rug", price_mad: 700, price_max: 2500, source: "Souks", date_iso: "2025-10-01" },

  // Chefchaouen
  { city: "Chefchaouen", category: "Food", item: "Coffee", price_mad: 10, price_max: 20, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Chefchaouen", category: "Food", item: "Tagine", price_mad: 40, price_max: 70, source: "Local restaurants", date_iso: "2025-10-01" },
  { city: "Chefchaouen", category: "Food", item: "Couscous", price_mad: 50, price_max: 80, source: "Local restaurants", date_iso: "2025-10-01" },
  { city: "Chefchaouen", category: "Activities", item: "Kasbah Museum", price_mad: 60, source: "Official", date_iso: "2025-10-01" },
  { city: "Chefchaouen", category: "Activities", item: "Spanish Mosque", price_mad: 0, notes: "Free!", source: "Local tips", date_iso: "2025-10-01" },
  { city: "Chefchaouen", category: "Activities", item: "Hammam visit", price_mad: 15, price_max: 150, source: "Local residents", date_iso: "2025-10-01" },
  { city: "Chefchaouen", category: "Accommodation", item: "Hostel dorm (per night)", price_mad: 150, source: "Hostelworld", date_iso: "2025-10-01" },
  { city: "Chefchaouen", category: "Shopping", item: "Leather bag", price_mad: 250, price_max: 500, source: "Souks", date_iso: "2025-10-01" },
  { city: "Chefchaouen", category: "Shopping", item: "Rug", price_mad: 500, price_max: 2000, source: "Souks", date_iso: "2025-10-01" },
  { city: "Chefchaouen", category: "Shopping", item: "Handwoven blanket", price_mad: 350, notes: "Authentic local craft", source: "Artisan cooperative", date_iso: "2025-10-01" },

  // Casablanca
  { city: "Casablanca", category: "Food", item: "Coffee", price_mad: 15, price_max: 25, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Casablanca", category: "Food", item: "Tagine", price_mad: 50, price_max: 90, source: "Local restaurants", date_iso: "2025-10-01" },
  { city: "Casablanca", category: "Food", item: "Couscous", price_mad: 60, price_max: 100, source: "Local restaurants", date_iso: "2025-10-01" },
  { city: "Casablanca", category: "Transport", item: "Tram ticket", price_mad: 8, source: "Casa Tramway official", date_iso: "2025-10-01" },
  { city: "Casablanca", category: "Transport", item: "Taxi (city to airport)", price_mad: 300, price_max: 350, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Casablanca", category: "Transport", item: "Bus ticket", price_mad: 6, source: "CTM", date_iso: "2025-10-01" },
  { city: "Casablanca", category: "Activities", item: "Hassan II Mosque", price_mad: 130, source: "Official", date_iso: "2025-10-01" },
  { city: "Casablanca", category: "Activities", item: "Museum of Moroccan Judaism", price_mad: 50, source: "Official", date_iso: "2025-10-01" },
  { city: "Casablanca", category: "Activities", item: "Abderrahman Slaoui Museum", price_mad: 30, source: "Official", date_iso: "2025-10-01" },
  { city: "Casablanca", category: "Accommodation", item: "Hostel dorm (per night)", price_mad: 140, source: "Hostelworld", date_iso: "2025-10-01" },
  { city: "Casablanca", category: "Shopping", item: "Leather bag", price_mad: 300, price_max: 700, source: "Souks", date_iso: "2025-10-01" },

  // Tangier
  { city: "Tangier", category: "Food", item: "Coffee", price_mad: 10, price_max: 20, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Tangier", category: "Food", item: "Tagine", price_mad: 40, price_max: 70, source: "Local restaurants", date_iso: "2025-10-01" },
  { city: "Tangier", category: "Food", item: "Fresh seafood by port", price_mad: 120, notes: "Full meal with view", source: "Local recommendation", date_iso: "2025-10-01" },
  { city: "Tangier", category: "Food", item: "Couscous", price_mad: 50, price_max: 90, source: "Local restaurants", date_iso: "2025-10-01" },
  { city: "Tangier", category: "Transport", item: "Taxi (city to airport)", price_mad: 150, price_max: 200, source: "Verified travelers", date_iso: "2025-10-01" },
  { city: "Tangier", category: "Transport", item: "Bus ticket", price_mad: 5, source: "CTM", date_iso: "2025-10-01" },
  { city: "Tangier", category: "Activities", item: "Kasbah Museum", price_mad: 20, source: "Official", date_iso: "2025-10-01" },
  { city: "Tangier", category: "Activities", item: "Hercules Caves", price_mad: 60, notes: "Includes guide", source: "Official", date_iso: "2025-10-01" },
  { city: "Tangier", category: "Activities", item: "American Legation", price_mad: 50, source: "Official", date_iso: "2025-10-01" },
  { city: "Tangier", category: "Accommodation", item: "Hostel dorm (per night)", price_mad: 120, source: "Hostelworld", date_iso: "2025-10-01" },
  { city: "Tangier", category: "Shopping", item: "Leather bag", price_mad: 200, price_max: 500, source: "Souks", date_iso: "2025-10-01" },
];

export const getPricesByCity = (cityName: string): PriceItem[] => {
  return mockPrices.filter((price) => price.city === cityName);
};
