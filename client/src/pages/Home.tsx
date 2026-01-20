import { motion } from "framer-motion";
import { ArrowRight, Check, Activity, Battery, Cloud, Wifi, ChevronDown, Loader2, Smartphone, Radio, Shield, Settings } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { ContactForm } from "@/components/ContactForm";
import { useProducts } from "@/hooks/use-products";
import heroBg from "@assets/marathon-250987_1920_1768869334542.jpg";
import productShot from "@assets/slide_8_1768871636055.png";
import appScreen1 from "@assets/Screenshot_2026-01-20-10-17-42-30_40deb401b9ffe8e1df2f1cc5ba48_1768869177745.jpg";
import appScreen2 from "@assets/Screenshot_2026-01-20-10-17-45-01_40deb401b9ffe8e1df2f1cc5ba48_1768869177746.jpg";
import appScreen3 from "@assets/Screenshot_2026-01-20-10-17-47-77_40deb401b9ffe8e1df2f1cc5ba48_1768869177746.jpg";
import lockImage from "@assets/lock_1768874148272.jpg";

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
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-24 md:pt-0">
        {/* White to Black Gradient Bleed from Header */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-white/50 to-transparent z-5 pointer-events-none" />
        
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
            Professional RFID Timing
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 drop-shadow-2xl"
          >
            Ready to <span className="text-primary glow-text">Scale Up?</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto space-y-2"
          >
            <p>Has your app-timed event grown too big?</p>
            <p>Is your DIY equipment too complicated and limiting your growth?</p>
            <p>Is your timing equipment nearing end of life?</p>
            <p>Tired of paying 6x market prices for tags?</p>
            <p className="text-white font-semibold pt-2">Add capacity, time more events, and grow revenue.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#products"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-purple-500 transition-all shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
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
          <div className="flex flex-col gap-16 items-center max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold mb-6">
                Professional Timing, <span className="text-primary">Open System</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Trident readers are professional RFID chip readers designed for endurance event timing.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Best-in-class accuracy and precision specifications, engineered to minimize RF interference, missed reads, packet loss, and timing gaps under highest throughput and adverse conditions.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The platform is built as an open system — you bring your own timing software and UHF tags if you want. No proprietary lock-in. The system reduces labor, lowers operational risk, and scales from small events to mass participation.
              </motion.p>
              <motion.p variants={fadeIn} className="text-md text-muted-foreground mb-8 leading-relaxed">
                Trident has supplied RFID timing equipment to professional timers since 2016 for mass participation events worldwide, 
                delivering reliable, accurate, and precise timing with reduced labor requirements and fewer timing errors.
              </motion.p>
              
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Activity, title: "Timing Mastery", desc: "Passive UHF, active HF waterproof (IP-68), webapp management, and monitoring." },
                  { icon: Settings, title: "Equipment Empowerment", desc: "Simplify complex tasks, amplify productivity, unlock you buying freedom." },
                  { icon: Battery, title: "Revenue & Profit Amplification", desc: "Supercharge your revenue, invest less capital, reduce operating costs." },
                  { icon: Cloud, title: "White Labelling", desc: "Elevate your brand, elevate your customers brand." },
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
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                {/* Product Shot */}
                <img 
                  src={productShot}
                  alt="Trident Reader" 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section id="comparison" className="py-24 relative">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Comparison</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Both technologies run on the same RFID readers, app, and integration model — allowing mixed deployments without added operational complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* UHF Column */}
            <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-blue-500 hover:border-blue-400 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Passive UHF</h3>
              <p className="text-sm text-blue-400 font-mono mb-6">Mass Participation Running & Cycling</p>
              
              <ul className="space-y-4">
                {[
                  "Low tag cost and high throughput",
                  "Disposable tags sourced from any supplier",
                  "Unlocked — use standard EPC Gen2 UHF tags",
                  "Validated UHF bib tags also available",
                  "Open software protocols (LLRP, IPICO)"
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
              
              <h3 className="text-2xl font-bold mb-2">Active HF</h3>
              <p className="text-sm text-purple-400 font-mono mb-6">Higher Accuracy & Environmental Robustness</p>
              
              <ul className="space-y-4">
                {[
                  "Performs reliably through water, mud, and dense athlete packs",
                  "Reusable waterproof shoe and multisport tags",
                  "Designed for extreme environments",
                  "Multi-year tag reuse",
                  "Ideal for triathlon, swimming, and obstacle events",
                  "Proven industry-lowest carbon footprint"
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

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 bg-black/20">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Products</h2>
            <p className="text-lg text-muted-foreground">
              RFID chip readers, mats, UHF tags, and reusable active HF tags — all without proprietary lock-in.
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
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white/90">
                  <span className="w-8 h-1 bg-primary rounded-full"></span>
                  RFID Chip Readers
                </h3>
                <p className="text-muted-foreground mb-8 ml-10">Available in passive UHF and active HF models. 3.8 × 7.3 × 4.1 inches, 4.75 lb. IP68 waterproof, battery powered, single-button operation.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {readers.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </div>

              {/* Mats */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white/90">
                  <span className="w-8 h-1 bg-secondary rounded-full"></span>
                  Mats and Antennas
                </h3>
                <p className="text-muted-foreground mb-8 ml-10">Fold-up and roll-up UHF mats for rapid deployment. Roll-up active HF mats for triathlon, swimming, and wet conditions. Lightweight, non-slip, configurable for road, grass, or trail.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mats.map((product, i) => (
                    <ProductCard key={product.id} product={product} index={i} />
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white/90">
                  <span className="w-8 h-1 bg-accent rounded-full"></span>
                  Tags
                </h3>
                <p className="text-muted-foreground mb-8 ml-10">UHF systems are unlocked — use standard EPC Gen2 tags from any supplier. Or use ours. Active HF systems use reusable waterproof shoe and multisport tags designed for extreme environments and multi-year reuse.</p>
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

      {/* SPECS SECTION */}
      <section id="specs" className="py-24 bg-white/5">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Reader — Key Specs</h2>
            <p className="text-muted-foreground">Professional RFID chip reader, passive UHF or active HF</p>
          </div>
          <div className="flex flex-col gap-16 max-w-4xl mx-auto">
            <div>
              <div className="space-y-6">
                {[
                  { label: "Reader Size", value: "3.8 × 7.3 × 4.1 inches" },
                  { label: "Reader Mass", value: "4.75 lb (1.7 kg)" },
                  { label: "IP Rating", value: "IP68 waterproof" },
                  { label: "Battery Life", value: "Up to 10 hours (UHF) / 72 hours (HF)" },
                  { label: "Operation", value: "Single-button with LED and buzzer indicators" },
                  { label: "Connectivity", value: "Global SIM, LoRa up to 10 km, Wi-Fi, Dual PoE" },
                  { label: "Updates", value: "Over-the-air firmware and configuration" },
                  { label: "Software Integration", value: "LLRP and legacy formats including IPICO" },
                  { label: "Compatibility", value: "Works with any timing software" },
                  { label: "UHF Tags", value: "Unlocked — use any supplier, or use ours" },
                  { label: "HF Tags", value: "Reusable waterproof multi-year active shoe-tags and multi-sport tags" },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/10">
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-bold text-white text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden tech-border">
              {/* Lock Image Background */}
              <img src={lockImage} alt="Open System" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 backdrop-blur-sm bg-black/30 rounded-xl border border-white/10">
                  <div className="text-5xl font-bold text-white mb-2">Open System</div>
                  <div className="text-xl text-blue-300 uppercase tracking-widest">No Proprietary Lock-In</div>
                  <div className="text-sm text-muted-foreground mt-2">Compatible with any timing software</div>
                  <div className="text-sm text-muted-foreground mt-1">Compatible with any cloud data ingestion endpoint</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE APP SECTION */}
      <section id="app" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="container px-4 mx-auto">
          <div className="flex flex-col gap-16 items-center max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold">
                <Smartphone className="w-4 h-4" />
                Browser-Based PWA
              </motion.div>
              
              <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-display font-bold mb-6">
                Mobile <span className="text-primary">App</span>
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Trident is managed through a browser-based progressive web app on your mobile phone. No local software required. 
                Connects via Reader STA WiFi. Configure RFID readers, monitor status, manage connectivity, 
                apply firmware updates, and route data. Provides redundant data backup locally and to any cloud storage. 
                Operators select their preferred timing software and data ingestion endpoint during setup.
              </motion.p>
              
              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Settings, title: "Configure Readers", desc: "Set up and manage every reader" },
                  { icon: Activity, title: "Monitor Status", desc: "Real-time status and telemetry" },
                  { icon: Cloud, title: "Route Data", desc: "Choose your timing software endpoint" },
                  { icon: Wifi, title: "Manage Reader Connectivity", desc: "SIM, LoRa, Wi-Fi, PoE options" },
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
              className="relative flex justify-center items-center gap-4"
            >
              <div className="relative -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-[180px] rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl bg-gray-900">
                  <img 
                    src={appScreen1}
                    alt="Reader Status Screen" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="relative z-10 scale-110">
                <div className="w-[200px] rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl bg-gray-900">
                  <img 
                    src={appScreen2}
                    alt="Reader Configuration Screen" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="relative rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-[180px] rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl bg-gray-900">
                  <img 
                    src={appScreen3}
                    alt="Reader Commands Screen" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRICES SECTION */}
      <section id="prices" className="py-24 relative">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Prices</h2>
            <p className="text-muted-foreground">Full pricing for our 2025 hardware lineup</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            {/* Active HF Column */}
            <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-purple-500">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Active HF</h3>
              <div className="space-y-6">
                {[
                  { item: "Active HF Decoders (Reader)", price: "US$2,535.00", unit: "each" },
                  { item: "Active HF Mats", price: "US$65.00", unit: "per m" },
                  { item: "Active HF Shoe Tags", price: "US$6.89", unit: "each" },
                  { item: "Active HF Multisport Tags", price: "US$14.63", unit: "each" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">{row.item}</span>
                    <div className="text-right">
                      <span className="font-bold text-white">{row.price}</span>
                      <span className="text-muted-foreground text-sm ml-2">{row.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* UHF Column */}
            <div className="glass-panel p-8 rounded-2xl border-t-4 border-t-blue-500">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Passive UHF</h3>
              <div className="space-y-6">
                {[
                  { item: "UHF Decoders (Reader)", price: "US$2,535.00", unit: "each" },
                  { item: "8m Fold-Up UHF Mats", price: "US$1,300.00", unit: "each" },
                  { item: "UHF Tags", price: "US$0.26", unit: "each" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-gray-300">{row.item}</span>
                    <div className="text-right">
                      <span className="font-bold text-white">{row.price}</span>
                      <span className="text-muted-foreground text-sm ml-2">{row.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <p className="text-center text-muted-foreground text-sm max-w-5xl mx-auto">
            * Other mat sizes available. Personalization of mats — request a quote.<br />
            ** Bundle offers available — please contact us for details.<br />
            *** No-upfront and limited-upfront payment deals available — please contact us for details.
          </p>
        </div>
      </section>

      {/* WHY INVEST SECTION */}
      <section id="why-invest" className="py-24 relative">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Why You Should Invest in Us</h2>
          </div>
          
          <div className="glass-panel p-8 md:p-12 rounded-2xl">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Open system architecture with no proprietary lock-in, supporting any timing software, any cloud ingestion endpoint, and standard EPC Gen2 UHF tags, preserving buyer leverage and avoiding forced ecosystem migration.
            </p>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Dual-technology support on a single platform, passive UHF and active HF running on the same readers, mats, app, and integration model, enabling mixed deployments without added operational complexity.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Commodity-priced consumables, with UHF tags available from any supplier at market pricing, directly reducing per-event operating cost and eliminating inflated transponder margins.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Hardware engineered for harsh environments, with active HF systems designed to perform reliably through water, mud, dense athlete packs, and extreme conditions such as triathlon, swimming, and obstacle racing.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Reusable active HF tags with multi-year lifespan, lowering lifetime cost, waste, and logistics overhead compared to disposable or semi-proprietary alternatives.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Professional-grade reader specifications, including IP68 waterproofing, battery operation, single-button field usability, long battery life, and over-the-air firmware and configuration updates.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Open integration protocols, including LLRP and legacy formats such as IPICO, allowing drop-in replacement of existing infrastructure without rewriting software pipelines.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Rapid deployment hardware, including fold-up and roll-up mats for UHF and HF, lightweight and configurable across road, grass, trail, and wet environments.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Explicit positioning against app-based timing and aging DIY systems, providing a clear upgrade path to professional RFID timing without forcing a full software stack replacement.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Transparent hardware pricing and published specifications, enabling clear cost comparison and procurement planning without opaque bundle or ecosystem pricing.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>Smallest, most lightweight readers in the industry — making your day easier.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>We enable and have proven remote timing with minimal or no onsite labor.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-primary">•</span>
                <span>App-based control prioritizes ease of use over button-driven readers or Ethernet-tethered laptops, reducing setup time, operator error, and on-course complexity by consolidating configuration, monitoring, and data forwarding into a single mobile interface.</span>
              </p>
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
          <div className="flex justify-center items-center">
            <p className="text-sm text-muted-foreground">
              © 2026 Onetime Holdings Pty Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
