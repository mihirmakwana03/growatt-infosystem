import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

export function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      className="glass rounded-xl p-6 cursor-pointer"
      whileHover={{ scale: 1.05, rotateY: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-poppins font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}
