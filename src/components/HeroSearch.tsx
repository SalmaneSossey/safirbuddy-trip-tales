import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { cities } from "@/data/cities";
import { motion } from "framer-motion";

export const HeroSearch = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleCitySelect = (slug: string) => {
    navigate(`/city/${slug}`);
    setQuery("");
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && filteredCities.length > 0) {
      handleCitySelect(filteredCities[0].slug);
    }
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative">
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-muted-foreground w-6 h-6" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder="Where are you going, traveler?"
          className="w-full h-16 pl-16 pr-6 text-lg bg-white rounded-2xl shadow-elevated border-2 border-transparent focus:border-primary focus:outline-none transition-all"
        />
      </div>

      {showSuggestions && query && filteredCities.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-elevated border border-border overflow-hidden z-50"
        >
          {filteredCities.map((city) => (
            <button
              key={city.id}
              onClick={() => handleCitySelect(city.slug)}
              className="w-full px-6 py-4 text-left hover:bg-accent transition-colors flex items-center gap-4"
            >
              <div
                className="w-12 h-12 rounded-lg flex-shrink-0"
                style={{ backgroundColor: city.color }}
              />
              <div>
                <div className="font-semibold">{city.name}</div>
                <div className="text-sm text-muted-foreground">{city.tagline}</div>
              </div>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};
