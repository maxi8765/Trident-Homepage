import { Navigation } from "@/components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Us</h1>
          </div>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              Trident is led by Philip Almond, who has been building and deploying timing systems for decades across endurance and multisport events. That experience shapes the way we design hardware, software, and support, with a strong bias toward things that actually work in the field.
            </p>
            <p>
              We design and supply professional RFID timing hardware, readers, mats, tags, and an app-based control layer with a simple rule: nothing should lock you in, nothing should force you to relearn your craft, and nothing should get in the way of clean data on race day.
            </p>
            <p>
              We engineer for serviceability. Hardware is designed to be robust, field-repairable where possible, remotely diagnosable, and updatable over the air, because downtime, shipping delays, and fragile components cost more than clever design ever saves.
            </p>
            <p>
              The system is open by design. Standard EPC Gen2 UHF tags, open protocols, and hardware that works with the timing software you already trust. The app replaces buttons, laptops, cables, and start-line Ethernet because ease of use matters more than tradition when conditions are wet, busy, or unpredictable.
            </p>
            <p>
              You can adopt Trident incrementally, mix passive UHF and active HF, keep existing workflows, and change only what is actually limiting capacity or reliability. There is no forced replatforming and no artificial dependency created to keep you stuck.
            </p>
            <p>
              Good service is part of the product. When something does not behave as expected, you deal with people who understand timing, not scripts or ticket queues. We publish specs, publish prices, and answer questions directly. If you stay with Trident, it should be because it makes events simpler, more reliable, and cheaper to run year after year, not because switching would be painful.
            </p>
          </div>
        </div>
      </div>

      <footer className="py-12 border-t border-white/10 bg-black/40">
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
