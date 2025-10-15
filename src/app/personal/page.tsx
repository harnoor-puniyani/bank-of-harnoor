// app/personal/page.tsx

import { Navbar } from "@/components/navbar";
import { PersonalHero } from "@/app/personal/hero";
import { AccountTiers } from "@/app/personal/AccountTiers";
import { CTA } from "@/app/sections/CTA";
import { Footer } from "@/app/sections/footer";

export default function PersonalPage() {
  return (
    <main className="bg-[#030712]">
      <Navbar />
      <PersonalHero />
      <AccountTiers />
      <CTA />
      <Footer />
    </main>
  );
}