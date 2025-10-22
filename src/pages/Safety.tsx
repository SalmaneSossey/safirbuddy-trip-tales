import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScamWarningCard } from "@/components/ScamWarningCard";
import { scamWarnings } from "@/data/scams";
import { ArrowLeft, Shield, AlertCircle } from "lucide-react";

const Safety = () => {
  const navigate = useNavigate();

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
            <Shield className="w-16 h-16 mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Stay Safe in Morocco</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
              Learn about common scams and how to protect yourself while traveling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* General Tips Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">General Safety Tips</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Use Official Services",
                  description: "Always use licensed taxis, official guides, and registered tour operators.",
                },
                {
                  title: "Agree on Prices First",
                  description: "Negotiate and confirm prices before services, especially for taxis and tours.",
                },
                {
                  title: "Trust Your Instincts",
                  description: "If something feels wrong or too good to be true, it probably is.",
                },
                {
                  title: "Keep Valuables Secure",
                  description: "Use money belts, avoid displaying expensive items, and use hotel safes.",
                },
                {
                  title: "Learn Basic Phrases",
                  description: "Knowing 'no thank you' (La shukran) in Arabic helps politely decline offers.",
                },
                {
                  title: "Stay Connected",
                  description: "Get a local SIM card and keep emergency contacts saved offline.",
                },
              ].map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-soft"
                >
                  <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                  <p className="text-muted-foreground">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Scams Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-destructive" />
              <h2 className="text-4xl font-bold">Common Scams by City</h2>
            </div>
            <p className="text-xl text-muted-foreground">
              Be aware of these scams and know how to avoid them
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scamWarnings.map((scam, index) => (
              <ScamWarningCard key={scam.id} scam={scam} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => navigate("/report")}
            >
              <Shield className="w-4 h-4" />
              Report a New Scam
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contacts Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-2xl shadow-elevated p-8"
          >
            <h2 className="text-3xl font-bold mb-6">Emergency Contacts in Morocco</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-accent rounded-lg">
                <span className="font-semibold">Police Emergency</span>
                <span className="text-xl font-bold text-primary">19</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-accent rounded-lg">
                <span className="font-semibold">Medical Emergency</span>
                <span className="text-xl font-bold text-primary">15</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-accent rounded-lg">
                <span className="font-semibold">Fire Department</span>
                <span className="text-xl font-bold text-primary">15</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-accent rounded-lg">
                <span className="font-semibold">Tourist Police</span>
                <span className="text-xl font-bold text-primary">+212 5377-60717</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-900">
                <strong>Save These Numbers:</strong> Take a screenshot or write down these numbers before traveling. They work from any phone in Morocco.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Safety;
