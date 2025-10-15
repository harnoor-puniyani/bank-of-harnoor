import Link from "next/link";
import Homepages from "@/app/temp";
import {
  LandingZonw,
  SecuritySection,
  TransparentSecurityHero,
} from "./sections/index";
import { Features } from "./sections/features";
import { Testimonials } from "./sections/testimonials";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/footer";
export default function HomePage() {
  return(
  <main>
    <TransparentSecurityHero />
    <div className="relative z-10 bg-[#030712]">
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  </main>);
}
