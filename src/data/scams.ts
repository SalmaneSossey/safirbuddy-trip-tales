export interface ScamWarning {
  id: string;
  city: string;
  title: string;
  description: string;
  howToAvoid: string;
  severity: "low" | "medium" | "high";
}

export const scamWarnings: ScamWarning[] = [
  // Marrakech
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
    howToAvoid: "Insist on the meter or agree on price before starting. Airport to city center should be 100-150 MAD. Use Careem or InDrive apps.",
    severity: "medium",
  },
  {
    id: "henna-snake-marrakech",
    city: "Marrakech",
    title: "Henna/Snake Trap",
    description: "Performers in Jemaa el-Fnaa place a snake on you or start applying henna without asking, then demand money.",
    howToAvoid: "Keep hands in pockets and maintain distance. Negotiate price beforehand if interested.",
    severity: "high",
  },
  {
    id: "tannery-mint-marrakech",
    city: "Marrakech",
    title: "Tannery 'Free' Mint",
    description: "Guardians offer mint for the smell and claim entry is free, then demand a tip upon exit.",
    howToAvoid: "Treat it as a transaction; offer a small tip (20 MAD) for the view if you don't buy leather.",
    severity: "medium",
  },
  // Fes
  {
    id: "closed-riad-fes",
    city: "Fes",
    title: "'Your Hotel is Closed' Scam",
    description: "A person tells you your hotel is closed/full and offers to take you to another place where they get commission.",
    howToAvoid: "Call your hotel directly to confirm. Never follow strangers. Your hotel is almost never actually closed.",
    severity: "high",
  },
  {
    id: "tannery-pressure-fes",
    city: "Fes",
    title: "Tannery Pressure",
    description: "Aggressive sales tactics on the tannery terraces after the 'free' view.",
    howToAvoid: "Firmly decline shopping. Offer a 10-20 MAD tip to the guardian instead.",
    severity: "medium",
  },
  {
    id: "closed-road-fes",
    city: "Fes",
    title: "Closed Road Trick",
    description: "Kids telling you a street is closed to divert you toward a shop.",
    howToAvoid: "Check your map and keep walking confidently.",
    severity: "low",
  },
  // Chefchaouen
  {
    id: "photo-fees-chefchaouen",
    city: "Chefchaouen",
    title: "Photo Fees",
    description: "Locals demanding money for taking photos of their decorated doorsteps.",
    howToAvoid: "Ask permission first or carry small change (5-10 MAD).",
    severity: "low",
  },
  {
    id: "transport-overcharge-chefchaouen",
    city: "Chefchaouen",
    title: "Transport Overcharge",
    description: "Grand taxis to Akchour charging private rates for a shared seat.",
    howToAvoid: "Wait for the taxi to fill up (6 people) to pay the standard 25 MAD rate.",
    severity: "low",
  },
  // Casablanca
  {
    id: "taxi-overcharge-casablanca",
    city: "Casablanca",
    title: "Taxi Overcharge",
    description: "Drivers refusing to use the meter and quoting inflated prices.",
    howToAvoid: "Insist on the meter ('Khaddam l-compteur') or use Careem/InDrive apps.",
    severity: "medium",
  },
  {
    id: "fake-antiquities-casablanca",
    city: "Casablanca",
    title: "Fake Antiquities",
    description: "Selling modern factory goods as antique Berber crafts.",
    howToAvoid: "Assume everything is new unless you are an expert.",
    severity: "low",
  },
  {
    id: "photo-props-casablanca",
    city: "Casablanca",
    title: "Photo Props Demands",
    description: "Aggressive demands for payment if you photograph street performers.",
    howToAvoid: "Ask price before clicking.",
    severity: "low",
  },
  // Tangier
  {
    id: "port-hustlers-tangier",
    city: "Tangier",
    title: "Port Hustlers",
    description: "Fixers at the port grabbing luggage to guide you to a hotel for a commission.",
    howToAvoid: "Carry your own bags and say you have a reservation.",
    severity: "medium",
  },
  {
    id: "menu-switch-tangier",
    city: "Tangier",
    title: "Restaurant Menu Switch",
    description: "Two menus with different prices for tourists vs locals.",
    howToAvoid: "Confirm prices before ordering.",
    severity: "low",
  },
  {
    id: "unofficial-guides-tangier",
    city: "Tangier",
    title: "Unofficial Guides",
    description: "People insisting you need a guide for the Kasbah.",
    howToAvoid: "Polite refusal; the Kasbah is easy to navigate alone.",
    severity: "low",
  },
];

export const getScamsByCity = (cityName: string): ScamWarning[] => {
  return scamWarnings.filter((scam) => scam.city === cityName);
};
