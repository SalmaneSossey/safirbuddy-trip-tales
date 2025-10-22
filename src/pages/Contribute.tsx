import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Heart, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cities } from "@/data/cities";

const Contribute = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    city: "",
    category: "",
    item: "",
    price: "",
    notes: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = ["Transport", "Food", "Accommodation", "Activities", "Shopping", "Other"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend
    console.log("Price contribution:", formData);
    setSubmitted(true);
    toast.success("Thank you for contributing! Your data will be verified and added soon.");
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
            <Heart className="w-16 h-16 mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Become a Contributor</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
              Help fellow travelers by sharing real prices and insider knowledge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Contribute Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Why Your Contribution Matters</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Help Travelers Save",
                  description: "Your price data helps others budget accurately and avoid overpaying.",
                },
                {
                  title: "Build Community",
                  description: "Join a network of travelers and locals sharing honest information.",
                },
                {
                  title: "Earn Recognition",
                  description: "Get contributor badges and become a trusted community member.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-soft text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contribution Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {!submitted ? (
              <div className="bg-white rounded-2xl shadow-elevated p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6">Share a Price</h3>
                <p className="text-muted-foreground mb-8">
                  Help us keep our price data accurate and up-to-date. All submissions are verified before publishing.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        City <span className="text-destructive">*</span>
                      </label>
                      <select
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a city</option>
                        {cities.map((city) => (
                          <option key={city.id} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Category <span className="text-destructive">*</span>
                      </label>
                      <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select category</option>
                        {categories.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Item/Service <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.item}
                      onChange={(e) => setFormData({ ...formData, item: e.target.value })}
                      placeholder="e.g., Taxi from airport to city center"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Price (MAD) <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="number"
                      required
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      placeholder="100"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Additional Notes
                    </label>
                    <Textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Any additional context or tips..."
                      className="min-h-24"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Email (Optional)
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="For verification and updates"
                      className="h-12"
                    />
                  </div>

                  <Button type="submit" size="xl" className="w-full">
                    Submit Contribution
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-elevated p-8 md:p-12 text-center">
                <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                <p className="text-xl text-muted-foreground mb-8">
                  Your contribution has been received and will be verified by our team. It should appear in our database within 24-48 hours.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => navigate("/")} size="lg">
                    Back to Home
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        city: "",
                        category: "",
                        item: "",
                        price: "",
                        notes: "",
                        email: "",
                      });
                    }}
                    size="lg"
                  >
                    Add Another
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contribute;
