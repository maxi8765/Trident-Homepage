import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@assets/Gemini_Generated_Image_23s0vk23s0vk23s0_1768871009364.png";

const NAV_ITEMS = [
  { label: "Overview", href: "/#overview" },
  { label: "Comparison", href: "/#comparison" },
  { label: "Products", href: "/#products" },
  { label: "Specs", href: "/#specs" },
  { label: "Mobile App", href: "/#app" },
  { label: "Why Invest", href: "/#why-invest" },
  { label: "Contact", href: "/#contact" },
  { label: "Reserve", href: "/reserve" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    // Handle anchor links to home page sections
    if (href.startsWith("/#")) {
      const id = href.substring(2);
      
      // If we're on the home page, just scroll
      if (location === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home page with hash
        window.location.href = href;
      }
    } else {
      // For regular routes like /reserve, navigate directly
      window.location.href = href;
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled ? "bg-white shadow-lg border-gray-200" : "bg-white border-gray-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <img 
              src={logoImg} 
              alt="Trident Powered by ONETIME" 
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-xs font-medium text-gray-600 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-purple-500 transition-colors shadow-lg shadow-primary/25"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-lg font-medium text-gray-800 py-2 border-b border-gray-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
