
import { Building2, ChartBar, MapPin, Scale } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FeatureCard } from "@/components/ui/feature-card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold text-primary">PropValuer</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-secondary hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-secondary hover:text-primary transition-colors">About</a>
            <Link to="/login">
              <Button variant="outline" className="hover-lift">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button className="hover-lift">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-primary mb-6"
            >
              Commercial Real Estate Appraisal,{" "}
              <span className="text-secondary">Simplified</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-secondary mb-8"
            >
              Streamline your property valuation process with our comprehensive appraisal platform
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row justify-center gap-4"
            >
              <Button size="lg" className="hover-lift">Start Free Trial</Button>
              <Button size="lg" variant="outline" className="hover-lift">Watch Demo</Button>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Powerful Features for Modern Appraisers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  title={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Building2 className="h-6 w-6" />
              <span className="text-xl font-semibold">PropValuer</span>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
              <a href="#" className="hover:text-white/80 transition-colors">Privacy</a>
              <a href="#" className="hover:text-white/80 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    icon: ChartBar,
    title: "Market Analysis",
    description: "Advanced analytics and market insights to make informed decisions"
  },
  {
    icon: MapPin,
    title: "Location Intelligence",
    description: "Detailed property and neighborhood data at your fingertips"
  },
  {
    icon: Scale,
    title: "Accurate Valuations",
    description: "Precise property valuations using advanced algorithms"
  }
];

export default Index;
