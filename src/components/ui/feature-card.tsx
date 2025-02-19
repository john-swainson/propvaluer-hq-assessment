import { motion } from "framer-motion";

export interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="glass-card p-6 rounded-lg hover-lift"
    >
      <Icon className="h-10 w-10 text-primary mb-4" />
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-secondary">{description}</p>
    </motion.div>
  );
};

export { FeatureCard }
