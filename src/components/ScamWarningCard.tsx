import { ScamWarning } from "@/data/scams";
import { AlertTriangle, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface ScamWarningCardProps {
  scam: ScamWarning;
  index: number;
}

export const ScamWarningCard = ({ scam, index }: ScamWarningCardProps) => {
  const severityColors = {
    low: "bg-yellow-50 border-yellow-200 text-yellow-900",
    medium: "bg-orange-50 border-orange-200 text-orange-900",
    high: "bg-red-50 border-red-200 text-red-900",
  };

  const severityIconColors = {
    low: "text-yellow-600",
    medium: "text-orange-600",
    high: "text-red-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`rounded-xl border-2 p-6 ${severityColors[scam.severity]}`}
    >
      <div className="flex items-start gap-4">
        <AlertTriangle className={`w-6 h-6 flex-shrink-0 ${severityIconColors[scam.severity]}`} />
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2">{scam.title}</h3>
          <p className="mb-4 text-sm opacity-90">{scam.description}</p>
          
          <div className="flex items-start gap-2 bg-white/50 rounded-lg p-3">
            <Shield className="w-5 h-5 flex-shrink-0 text-green-600 mt-0.5" />
            <div>
              <div className="font-semibold text-sm mb-1">How to Avoid:</div>
              <p className="text-sm">{scam.howToAvoid}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
