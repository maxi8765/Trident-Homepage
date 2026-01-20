import type { Product } from "@shared/schema";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  // Format specs if it's a JSON string, otherwise show directly
  const specs = product.specs ? JSON.parse(product.specs) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative glass-panel rounded-2xl overflow-hidden tech-border flex flex-col h-full"
    >
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Placeholder image pattern since we don't have real product shots mapped yet */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-100 group-hover:scale-110" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-background/50 backdrop-blur border-primary/50 text-primary">
            {product.category}
          </Badge>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
          {product.description}
        </p>

        <div className="space-y-4">
          <div className="h-px bg-white/10" />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Price</p>
              <p className="text-xl font-bold text-white">${Number(product.price).toLocaleString()}</p>
            </div>
            
            <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary text-white text-sm font-medium transition-colors border border-white/10 hover:border-primary/50">
              Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
