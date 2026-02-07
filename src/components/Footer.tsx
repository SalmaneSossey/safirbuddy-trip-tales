import { Link } from "react-router-dom";
import { Compass, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="SafirBuddy" className="w-10 h-10" />
              <span className="text-2xl font-bold">SafirBuddy</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Your trusted travel companion for Morocco. Real prices, local tips, and scam protection to help you travel smart and experience destinations like locals.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>for travelers worldwide</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/prices" className="hover:text-primary transition-colors">Real Prices</Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-primary transition-colors">Safety Tips</Link>
              </li>
              <li>
                <Link to="/join" className="hover:text-primary transition-colors">Join Community</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Cities</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <Link to="/city/marrakech" className="hover:text-primary transition-colors">Marrakech</Link>
              </li>
              <li>
                <Link to="/city/fes" className="hover:text-primary transition-colors">Fes</Link>
              </li>
              <li>
                <Link to="/city/chefchaouen" className="hover:text-primary transition-colors">Chefchaouen</Link>
              </li>
              <li>
                <Link to="/city/casablanca" className="hover:text-primary transition-colors">Casablanca</Link>
              </li>
              <li>
                <Link to="/city/tangier" className="hover:text-primary transition-colors">Tangier</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2025 SafirBuddy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@safirbuddy.com"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>hello@safirbuddy.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
