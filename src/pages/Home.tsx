import { motion } from "framer-motion";
import { HeroSearch } from "@/components/HeroSearch";
import { CityCard } from "@/components/CityCard";
import { PricesTable } from "@/components/PricesTable";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cities } from "@/data/cities";
import { mockPrices } from "@/data/prices";
import { useNavigate } from "react-router-dom";
import { DollarSign, Shield, Utensils, ArrowRight, Users, MapPin } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: DollarSign,
      title: "Check Real Prices",
      description: "See verified prices from locals and travelers. No surprises, no overpaying.",
      action: "View All Prices",
      path: "/prices",
    },
    {
      icon: Shield,
      title: "Avoid Scams",
      description: "Learn about common scams and how to protect yourself in every city.",
      action: "Safety Tips",
      path: "/safety",
    },
    {
      icon: Utensils,
      title: "Eat Like a Local",
      description: "Discover authentic restaurants and street food spots loved by locals.",
      action: "Find Food Spots",
      path: "/city/marrakech",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20" />

        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <img src="/images/logo.png" alt="SafirBuddy" className="w-32 h-32 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Travel Smart All Over the World
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12">
              Real prices, local tips, and scam protection. Starting with Morocco.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroSearch />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Button
              size="xl"
              variant="hero"
              onClick={() => navigate("/prices")}
            >
              See Real Prices
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="xl"
              variant="secondary"
              onClick={() => navigate("/join")}
            >
              Join Community
              <Users className="w-5 h-5" />
            </Button>
            <Button
              size="xl"
              variant="secondary"
              onClick={() => navigate("/report")}
            >
              <Shield className="w-5 h-5" />
              Report a Scam
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore Morocco's most beloved cities with insider knowledge and verified data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cities.slice(0, 5).map((city, index) => (
              <CityCard key={city.id} city={city} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How SafirBuddy Helps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple ways we make your Morocco trip better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <Button
                    onClick={() => navigate(feature.path)}
                    variant="outline"
                    className="w-full"
                  >
                    {feature.action}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Prices Preview Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Prices, Real Data</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verified by travelers and locals. Updated weekly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <PricesTable prices={mockPrices} limit={6} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-8"
          >
            <Button
              size="lg"
              onClick={() => navigate("/prices")}
            >
              View All Real Prices
              <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Data verified by travelers and locals weekly
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of smart travelers who share honest tips and help each other stay safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="xl"
                variant="secondary"
                onClick={() => navigate("/join")}
              >
                Join the Waitlist
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-primary"
                onClick={() => navigate("/contribute")}
              >
                Become a Contributor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
