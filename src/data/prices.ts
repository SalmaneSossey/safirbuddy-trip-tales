export interface PriceItem {
  city: string;
  category: string;
  item: string;
  price_mad: number;
  notes?: string;
  source: string;
  date_iso: string;
}

// Mock data - in production this would come from your Google Sheets CSV
export const mockPrices: PriceItem[] = [
  // Marrakech
  {
    city: "Marrakech",
    category: "Transport",
    item: "Taxi (city center to airport)",
    price_mad: 100,
    notes: "Fixed rate, verify with driver",
    source: "Verified travelers",
    date_iso: "2025-10-01",
  },
  {
    city: "Marrakech",
    category: "Food",
    item: "Tagine at local restaurant",
    price_mad: 50,
    notes: "Authentic local spot",
    source: "Local residents",
    date_iso: "2025-10-15",
  },
  {
    city: "Marrakech",
    category: "Accommodation",
    item: "Budget hostel (dorm bed)",
    price_mad: 80,
    notes: "Per night, shared bathroom",
    source: "Hostelworld",
    date_iso: "2025-10-10",
  },
  {
    city: "Marrakech",
    category: "Activities",
    item: "Day trip to Atlas Mountains",
    price_mad: 300,
    notes: "Including transport and guide",
    source: "Local tour operators",
    date_iso: "2025-09-28",
  },
  // Fes
  {
    city: "Fes",
    category: "Transport",
    item: "Petit taxi (short ride)",
    price_mad: 15,
    notes: "2-3km within city",
    source: "Verified travelers",
    date_iso: "2025-10-05",
  },
  {
    city: "Fes",
    category: "Food",
    item: "Street food (msemen + tea)",
    price_mad: 12,
    notes: "Breakfast staple",
    source: "Local residents",
    date_iso: "2025-10-12",
  },
  {
    city: "Fes",
    category: "Activities",
    item: "Medina guided tour",
    price_mad: 200,
    notes: "3-hour walking tour",
    source: "Licensed guides",
    date_iso: "2025-10-08",
  },
  // Chefchaouen
  {
    city: "Chefchaouen",
    category: "Food",
    item: "Lunch at rooftop restaurant",
    price_mad: 70,
    notes: "Amazing views included",
    source: "TripAdvisor verified",
    date_iso: "2025-10-14",
  },
  {
    city: "Chefchaouen",
    category: "Accommodation",
    item: "Mid-range riad (private room)",
    price_mad: 250,
    notes: "Includes breakfast",
    source: "Booking.com",
    date_iso: "2025-10-11",
  },
  {
    city: "Chefchaouen",
    category: "Shopping",
    item: "Handwoven blanket",
    price_mad: 350,
    notes: "Authentic local craft",
    source: "Artisan cooperative",
    date_iso: "2025-10-09",
  },
  // Casablanca
  {
    city: "Casablanca",
    category: "Food",
    item: "Modern café meal",
    price_mad: 90,
    notes: "International cuisine",
    source: "Zomato",
    date_iso: "2025-10-13",
  },
  {
    city: "Casablanca",
    category: "Transport",
    item: "Tram ticket",
    price_mad: 8,
    notes: "Single journey",
    source: "Casa Tramway official",
    date_iso: "2025-10-16",
  },
  // Tangier
  {
    city: "Tangier",
    category: "Activities",
    item: "Hercules Caves entry",
    price_mad: 60,
    notes: "Includes guide",
    source: "Official site",
    date_iso: "2025-10-07",
  },
  {
    city: "Tangier",
    category: "Food",
    item: "Fresh seafood by port",
    price_mad: 120,
    notes: "Full meal with view",
    source: "Local recommendation",
    date_iso: "2025-10-10",
  },
];

export const getPricesByCity = (cityName: string): PriceItem[] => {
  return mockPrices.filter((price) => price.city === cityName);
};
