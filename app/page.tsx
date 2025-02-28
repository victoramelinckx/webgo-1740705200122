
"use client";

import { Hero } from "./components/Hero";
import { Funcionamiento } from "./components/Funcionamiento";
// Import other components as needed

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

            <Hero
              headline="Transforma tu Negocio con Webgo!"
              subheadline="Creamos páginas web optimizadas para vender, desde diseño, estructura, tiempo de carga hasta textos persuasivos. Diseñado para acelerar tu éxito."
              cta1="Comienza tu Transformación Digital Ahora"
              cta2="Descubre Cómo Podemos Ayudarte"
            />

            <How
              step1Title="Consultation"
              step1Desc="Our initial step is to understand your business needs and objectives. We work closely with you to ensure that the website we create aligns with your vision and goals."
              step2Title="Design and Development"
              step2Desc="Based on our consultation, we begin the design and development process. Our team ensures that your website is optimized, from its structure to its loading time, with persuasive and engaging text."
              step3Title="Launch and Monitor"
              step3Desc="Once the website is ready, we launch it. But our job doesn't end there. We continuously monitor the website's performance and make necessary adjustments to ensure it is effectively driving sales."
            />
<AboutBenefits />
<Services />
<CTA />
<FAQ />
<WorkDone />
<ContactUs />
    </main>
  );
}
    