// app/about/page.tsx

import { Navbar } from "../../components/navbar";
import { AboutHero } from "./hero";
import { OurMission } from "./mission";
import { CTA } from "../sections/CTA";
import { Footer } from "../sections/footer";

export default function AboutPage() {
  return (
    <main className="bg-[#030712]">
      <Navbar />
      <AboutHero />
      <OurMission />
      <CTA />
      <Footer />
    </main>
  );
}