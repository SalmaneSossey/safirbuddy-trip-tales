import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PricesTable } from "@/components/PricesTable";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { mockPrices } from "@/data/prices";
import { cities } from "@/data/cities";
import { ArrowLeft, DollarSign, Filter } from "lucide-react";

const Prices = () => {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(mockPrices.map((p) => p.category)))];
  
  const filteredPrices = mockPrices.filter((price) => {
    const cityMatch = selectedCity === "all" || price.city === selectedCity;
    const categoryMatch = selectedCategory === "all" || price.category === selectedCategory;
    return cityMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-6">
          <Button
            variant="outline"
            className="mb-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <DollarSign className="w-16 h-16 mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Real Prices in Morocco</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
              Verified prices from travelers and locals. Know what things really cost before you go.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-soft sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <span className="font-semibold">Filter by:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Cities</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-11 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Prices Table Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing {filteredPrices.length} {filteredPrices.length === 1 ? "price" : "prices"}
              </p>
              <Button
                variant="outline"
                onClick={() => navigate("/contribute")}
              >
                Add Price Data
              </Button>
            </div>

            <PricesTable prices={filteredPrices} />

            <div className="mt-8 text-center bg-white rounded-xl p-8 shadow-soft">
              <p className="text-muted-foreground mb-4">
                All prices are verified by travelers and locals. Data updated weekly.
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: October 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Know a Better Price?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Help fellow travelers by sharing prices you've encountered. Your contribution helps keep our data accurate.
          </p>
          <Button
            size="xl"
            variant="secondary"
            onClick={() => navigate("/contribute")}
          >
            Contribute Prices
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;
