
import { useState } from "react";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic
    console.log("Signup attempted with:", { email, password, name });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">PropValuer</span>
          </Link>
        </div>

        <div className="glass-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-primary text-center mb-6">Create Your Account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" className="w-full hover-lift">
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-secondary">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
