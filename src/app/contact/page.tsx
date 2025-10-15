// app/contact/page.tsx

import { Navbar } from "@/components/navbar";
import { ContactForm } from "./form";
import { Footer } from "../sections/footer";

export default function ContactPage() {
  return (
    <main className="bg-[#030712]">
      <Navbar />
      <ContactForm />
      <Footer />
    </main>
  );
}