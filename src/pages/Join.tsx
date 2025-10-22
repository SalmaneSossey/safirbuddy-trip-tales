import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Users, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Join = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend
    console.log("Waitlist submission:", formData);
    setSubmitted(true);
    toast.success("Welcome to SafirBuddy! We'll be in touch soon.");
  };

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
            <Users className="w-16 h-16 mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Join Our Community</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
              Connect with thousands of smart travelers sharing honest tips and experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Why Join SafirBuddy?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                "Get exclusive travel tips from locals",
                "Early access to new city guides",
                "Connect with verified travelers",
                "Contribute and earn community badges",
                "Participate in travel Q&A sessions",
                "Access member-only discounts",
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white rounded-xl p-6 shadow-soft"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-elevated p-8 md:p-12"
            >
              {!submitted ? (
                <>
                  <h3 className="text-3xl font-bold mb-6">Join the Waitlist</h3>
                  <p className="text-muted-foreground mb-8">
                    Be among the first to experience the full SafirBuddy community features.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name</label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        What interests you most? (Optional)
                      </label>
                      <Textarea
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        placeholder="Tell us what you're looking for..."
                        className="min-h-24"
                      />
                    </div>

                    <Button type="submit" size="xl" className="w-full">
                      Join Waitlist
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4">You're In!</h3>
                  <p className="text-xl text-muted-foreground mb-8">
                    Thanks for joining, {formData.name}! We'll send updates to {formData.email}.
                  </p>
                  <Button onClick={() => navigate("/")} size="lg">
                    Back to Home
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
