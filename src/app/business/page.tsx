// app/business/page.tsx

import { Navbar } from "../../components/navbar";
import { BusinessHero } from "./hero";
import { BusinessFeatures } from "./features";
import { CTA } from "../sections/CTA";
import { Footer } from "../sections/footer";

export default function BusinessPage() {
  return (
    <main className="bg-[#030712]">
      <Navbar />
      <BusinessHero />
      <BusinessFeatures />
      <CTA />
      <Footer />
    </main>
  );
}