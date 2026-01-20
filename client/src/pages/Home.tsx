import { motion } from "framer-motion";
import { ArrowRight, Check, Activity, Battery, Cloud, Wifi, ChevronDown, Loader2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { ContactForm } from "@/components/ContactForm";
import { useProducts } from "@/hooks/use-products";
import heroBg from "@assets/slide_2_1768867480432.png";
import productShot from "@assets/slide_1_1768867480431.png";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { data: products, isLoading } = useProducts();

  // Group products by category
  const readers = products?.filter(p => p.category === 'reader') || [];
  const mats = products?.filter(p => p.category === 'mat') || [];
  const tags = products?.filter(p => p.category === 'tag') || [];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
          <img 
            src={heroBg} 
            alt="Trident Timing Hardware" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="container relative z-20 px-4 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase backdrop-blur-md"
          >
            Introducing Trident V2
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 drop-shadow-2xl"
          >
            MAKE TIMING <br />
            <span className="text-primary glow-text">GREAT AGAIN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            Invest in the next generation of precision timing hardware. 
            Built for reliability, designed for speed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#products"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-blue-400 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              View Products <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#comparison"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center"
            >
              Compare Tech
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* ABOUT / OVERVIEW SECTION */}
      <section id="overview" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold mb-6">
                Redefining <span className="text-primary">Reliability</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Trident hardware represents the pinnacle of UHF and Active HF timing technology. 
                Designed for the harshest environments and the most demanding races, our systems 
                deliver 99.9% read rates where others fail.
              </motion.p>
              
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Activity, title: "99.9% Accuracy", desc: "Industry leading read rates" },
                  { icon: Battery, title: "10 Year Battery", desc: "Active tags that last a decade" },
                  { icon: Cloud, title: "Cloud Connected", desc: "Real-time data synchronization" },
                  { icon: Wifi, title: "API Support", desc: "Seamless integration with any software" },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                {/* Product Shot */}
                <img 
                  src={productShot}
                  alt="Trident Reader" 
                  className="w-full h-full object-contain bg-gradient-to-b from-gray-900 to-black p-4 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-2xl font-bold font-display mb-2">Engineered for Extremes</div>
                  <div className="text-muted-foreground">IP68 Rated Waterproof & Dustproof Enclosures</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-black/20">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Trident Hardware</h2>
            <p className="text-lg text-muted-foreground">
              A complete ecosystem of readers, mats, and tags designed for professional timers.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
          ) : (
            <div className="space-y-20">
              {/* Readers */}
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white/90">
                  <span className="w-8 h-1 bg-primary rounded-full"></span>
                  Timing Systems
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {readers.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </div>

              {/* Mats */}
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white/90">
                  <span className="w-8 h-1 bg-secondary rounded-full"></span>
                  Antenna Mats
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mats.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-white/90">
                  <span className="w-8 h-1 bg-accent rounded-full"></span>
                  Tags & Accessories
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tags.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section id="comparison" className="py-24 relative">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Technology Comparison</h2>
            <p className="text-muted-foreground">Understanding the difference between Active and UHF technology.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* UHF Column */}
            <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-blue-500 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Trident UHF</h3>
              <p className="text-sm text-blue-400 font-mono mb-6">Passive RFID Technology</p>
              
              <ul className="space-y-4">
                {[
                  "Disposable Tags (~$0.26/tag)",
                  "Best for Mass Participation events",
                  "99.5% Read Accuracy",
                  "Range: 4-8 meters",
                  "No battery in tag required"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Active Column */}
            <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-purple-500 hover:border-purple-400 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/20 blur-2xl rounded-full" />
              
              <h3 className="text-2xl font-bold mb-2">Trident Active</h3>
              <p className="text-sm text-purple-400 font-mono mb-6">Active Transponder Technology</p>
              
              <ul className="space-y-4">
                {[
                  "Reusable Tags (10yr Battery)",
                  "Best for Triathlon, Cycling, Mud Runs",
                  "99.99% Read Accuracy",
                  "Range: 20+ meters",
                  "Works through water & mud"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS SECTION */}
      <section id="specs" className="py-24 bg-white/5">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Technical Specifications</h2>
              <div className="space-y-6">
                {[
                  { label: "IP Rating", value: "IP68 (Waterproof up to 1.5m)" },
                  { label: "Battery Life", value: "12 Hours (System) / 10 Years (Tags)" },
                  { label: "Connectivity", value: "4G LTE, WiFi, Ethernet, Bluetooth" },
                  { label: "Operating Temp", value: "-20°C to +60°C" },
                  { label: "Construction", value: "Impact Resistant Polycarbonate" },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-bold text-white text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden tech-border">
              {/* Abstract Tech Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
              <div className="absolute inset-0 bg-[url('https://pixabay.com/get/g36e26b729afbda4341e787666882dac0eb053391cf7e6c8442ebc3e678db1ae1d261248774c37bcf47eb037da219ed62fd9cac45a2f5cee26c915e54c7e1bf0e_1280.jpg')] bg-cover bg-center mix-blend-overlay opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 backdrop-blur-sm bg-black/30 rounded-xl border border-white/10">
                  <div className="text-6xl font-bold text-white mb-2">10</div>
                  <div className="text-xl text-blue-300 uppercase tracking-widest">Year Warranty</div>
                  <div className="text-sm text-muted-foreground mt-2">On all Active Tags</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Ready to Upgrade?</h2>
            <p className="text-muted-foreground">Contact our team for a personalized quote and system demo.</p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 bg-black/20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Activity className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl">TRIDENT</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Trident Timing Hardware. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
