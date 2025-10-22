export interface ScamWarning {
  id: string;
  city: string;
  title: string;
  description: string;
  howToAvoid: string;
  severity: "low" | "medium" | "high";
}

export const scamWarnings: ScamWarning[] = [
  {
    id: "fake-guide-marrakech",
    city: "Marrakech",
    title: "Fake Tour Guides",
    description: "Unlicensed individuals approach tourists claiming to be official guides, leading you to shops where they get commission.",
    howToAvoid: "Only hire guides through licensed agencies or your hotel. Official guides have badges. Politely decline street offers.",
    severity: "high",
  },
  {
    id: "taxi-meter-marrakech",
    city: "Marrakech",
    title: "Taxi Meter Tricks",
    description: "Drivers claim the meter is broken and quote inflated prices, especially at night or from the airport.",
    howToAvoid: "Insist on the meter or agree on price before starting. Airport to city center should be ~100 MAD. Use Careem or InDrive apps.",
    severity: "medium",
  },
  {
    id: "tannery-scam-fes",
    city: "Fes",
    title: "Tannery 'Guide' Scam",
    description: "Someone offers to show you the tanneries for free, then demands payment or insists you buy expensive leather goods.",
    howToAvoid: "Book through your riad or a licensed guide. If approached on the street, politely decline. No one works for free.",
    severity: "medium",
  },
  {
    id: "closed-riad-fes",
    city: "Fes",
    title: "'Your Hotel is Closed' Scam",
    description: "A person tells you your hotel is closed/full and offers to take you to another place where they get commission.",
    howToAvoid: "Call your hotel directly to confirm. Never follow strangers. Your hotel is almost never actually closed.",
    severity: "high",
  },
  {
    id: "carpet-shop-chefchaouen",
    city: "Chefchaouen",
    title: "Aggressive Carpet Sellers",
    description: "Shop owners invite you for tea and become aggressive when you don't buy after a long sales pitch.",
    howToAvoid: "Be firm and polite. Don't enter shops unless you're genuinely interested. It's okay to just say no and walk away.",
    severity: "low",
  },
  {
    id: "photo-fee-tangier",
    city: "Tangier",
    title: "Photo Fee Demands",
    description: "People in traditional dress pose for photos then demand high fees, sometimes becoming aggressive.",
    howToAvoid: "Don't take photos of people without asking first. If they pose, ask the price before clicking. Be clear you don't want photos.",
    severity: "medium",
  },
  {
    id: "atm-help-casablanca",
    city: "Casablanca",
    title: "ATM 'Helpers'",
    description: "Someone offers to help you with the ATM, watches your PIN, or distracts you while an accomplice steals your card.",
    howToAvoid: "Always use ATMs inside banks during business hours. Cover your PIN. Decline all help. Use machines in well-lit areas.",
    severity: "high",
  },
];

export const getScamsByCity = (cityName: string): ScamWarning[] => {
  return scamWarnings.filter((scam) => scam.city === cityName);
};
