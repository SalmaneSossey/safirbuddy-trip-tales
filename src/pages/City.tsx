import { useParams, useNavigate } from "react-router-dom";
import { getCityBySlug } from "@/data/cities";
import { getPricesByCity } from "@/data/prices";
import { getScamsByCity } from "@/data/scams";
import { PricesTable } from "@/components/PricesTable";
import { ScamWarningCard } from "@/components/ScamWarningCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, DollarSign, Shield, Hotel, PlayCircle } from "lucide-react";

const City = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const city = slug ? getCityBySlug(slug) : undefined;

  if (!city) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const prices = getPricesByCity(city.name);
  const scams = getScamsByCity(city.name);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-end"
        style={{
          backgroundImage: `url(${city.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{ backgroundColor: city.color }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 pb-12">
          <Button
            variant="secondary"
            onClick={() => navigate("/")}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{city.name}</h1>
            <p className="text-2xl opacity-90 mb-6">{city.tagline}</p>
            <p className="text-lg max-w-3xl opacity-80">{city.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 shadow-soft text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {city.avgDailyCost} MAD
              </div>
              <div className="text-muted-foreground">Average Daily Cost</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl p-6 shadow-soft text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {city.avgMealCost} MAD
              </div>
              <div className="text-muted-foreground">Typical Meal Cost</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-xl p-6 shadow-soft text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {city.avgTransportCost} MAD
              </div>
              <div className="text-muted-foreground">Average Transport</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Verified Prices */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">Verified Prices in {city.name}</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Real prices updated regularly by travelers and locals
            </p>
          </motion.div>

          {prices.length > 0 ? (
            <PricesTable prices={prices} />
          ) : (
            <div className="text-center py-12 bg-accent rounded-xl">
              <p className="text-muted-foreground">
                No price data available yet for {city.name}. Be the first to contribute!
              </p>
              <Button className="mt-4" onClick={() => navigate("/contribute")}>
                Add Prices
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Scam Warnings */}
      {scams.length > 0 && (
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold">Stay Safe in {city.name}</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Common scams to watch out for and how to avoid them
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scams.map((scam, index) => (
                <ScamWarningCard key={scam.id} scam={scam} index={index} />
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                size="lg"
                onClick={() => navigate("/report")}
              >
                <Shield className="w-4 h-4" />
                Report a Scam
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Local Experiences */}
      {city.videoUrl && (
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="w-8 h-8 text-primary" />
                <h2 className="text-4xl font-bold">Experience {city.name}</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                See what makes this city special
              </p>
            </motion.div>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-elevated">
              <iframe
                src={city.videoUrl}
                title={`Experience ${city.name}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <Hotel className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready to Visit {city.name}?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get the full local experience with verified accommodations and insider tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              variant="secondary"
              onClick={() => navigate("/join")}
            >
              Join Community
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white hover:text-primary"
              onClick={() => navigate("/prices")}
            >
              View All Prices
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default City;
