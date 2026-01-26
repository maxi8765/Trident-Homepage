import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";

export default function Reserve() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Ready to Upgrade?</h1>
            <p className="text-muted-foreground">Contact our team for a personalized quote and system demo.</p>
          </div>
          
          <ContactForm />
        </div>
      </div>

      <footer className="py-12 border-t border-white/10 bg-black/40">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a 
              href="/about" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About Us
            </a>
            <span className="hidden md:inline text-muted-foreground">|</span>
            <p className="text-sm text-muted-foreground">
              © 2026 Onetime Holdings Pty Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
