import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { City } from "@/data/cities";
import { Utensils, Car } from "lucide-react";

interface CityCardProps {
  city: City;
  index: number;
}

export const CityCard = ({ city, index }: CityCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={() => navigate(`/city/${city.slug}`)}
      className="group cursor-pointer rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:scale-105"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={city.image}
          alt={city.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity"
          style={{ backgroundColor: city.color }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
          <p className="text-sm opacity-90 mb-3">{city.tagline}</p>
          
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Utensils className="w-4 h-4" />
              <span>{city.avgMealCost} MAD</span>
            </div>
            <div className="flex items-center gap-1">
              <Car className="w-4 h-4" />
              <span>{city.avgTransportCost} MAD</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-card">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {city.description}
        </p>
        <div className="mt-3 text-primary font-semibold text-sm group-hover:underline">
          Explore {city.name} →
        </div>
      </div>
    </motion.div>
  );
};
