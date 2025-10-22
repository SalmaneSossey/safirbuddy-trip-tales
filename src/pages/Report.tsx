import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Shield, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cities } from "@/data/cities";

const Report = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    city: "",
    scamType: "",
    description: "",
    location: "",
    contactEmail: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend
    console.log("Scam report:", formData);
    setSubmitted(true);
    toast.success("Thank you for your report. We'll review it and update our warnings.");
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
            <Shield className="w-16 h-16 mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Report a Scam</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
              Help protect fellow travelers by reporting scams and suspicious activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Report Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {!submitted ? (
              <div className="bg-white rounded-2xl shadow-elevated p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  <h2 className="text-3xl font-bold">Tell Us What Happened</h2>
                </div>
                
                <p className="text-muted-foreground mb-8">
                  Your report helps us keep our community safe. All reports are reviewed by our team and contribute to our scam database.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                      Type of Scam <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.scamType}
                      onChange={(e) => setFormData({ ...formData, scamType: e.target.value })}
                      placeholder="e.g., Fake tour guide, Taxi overcharge, etc."
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Location/Area
                    </label>
                    <Input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Where did this happen?"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Description <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please provide details about what happened, how much money was involved, and any other relevant information..."
                      className="min-h-32"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Your Email (Optional)
                    </label>
                    <Input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      placeholder="In case we need more information"
                      className="h-12"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Your email will be kept private and only used to follow up on this report.
                    </p>
                  </div>

                  <div className="bg-accent rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Please be as specific as possible. Include dates, amounts, locations, and any identifying details that could help other travelers avoid similar situations.
                    </p>
                  </div>

                  <Button type="submit" size="xl" className="w-full">
                    Submit Report
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-elevated p-8 md:p-12 text-center">
                <Shield className="w-20 h-20 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Report Submitted</h3>
                <p className="text-xl text-muted-foreground mb-8">
                  Thank you for helping keep our community safe. We'll review your report and update our scam warnings if needed.
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
                        scamType: "",
                        description: "",
                        location: "",
                        contactEmail: "",
                      });
                    }}
                    size="lg"
                  >
                    Report Another
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

export default Report;
