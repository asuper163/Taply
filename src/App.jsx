import React, {useState, useEffect, useRef} from "react";
import {translations, IconMessageCircle, playClickSound} from "./constants";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NfcExplainedSection from "./components/NfcExplainedSection";
import TapSimulatorSection from "./components/TapSimulatorSection";
import Footer from "./components/Footer";

// Custom Scroll Reveal Hook
const useSmoothScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isInView =
        rect.top <= windowHeight * 0.85 &&
        rect.bottom >= windowHeight * 0.15;

      setIsVisible((current) => (current === isInView ? current : isInView));
    };

    window.addEventListener("scroll", updateVisibility, {passive: true});
    window.addEventListener("resize", updateVisibility);
    updateVisibility();

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  return [ref, isVisible];
};

export default function App() {
  const [lang, setLang] = useState("en");
  const [nfcTapped, setNfcTapped] = useState(false);

  // Scroll Reveal Refs
  const [nfcSectionRef, isNfcVisible] = useSmoothScrollReveal();
  const [demoSectionRef, isDemoVisible] = useSmoothScrollReveal();
  const [howSectionRef, isHowVisible] = useSmoothScrollReveal();

  const t = translations[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";

  const toggleLanguage = () => {
    playClickSound();
    setLang((prev) => (prev === "en" ? "ar" : "en"));
  };

  const whatsappUrl =
    "https://wa.me/201061198548?text=" +
    encodeURIComponent(
      lang === "ar"
        ? "مرحباً TAPLY! أود طلب بطاقة NFC مخصصة."
        : "Hello TAPLY Egypt! I would like to order a custom NFC card.",
    );

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(whatsappUrl)}&color=0-0-0&bgcolor=255-255-255&margin=1`;

  const generalWhatsappLink =
    "https://wa.me/201061198548?text=" +
    encodeURIComponent(
      lang === "ar"
        ? "مرحباً TAPLY! أود الاستفسار عن طلب بطاقات NFC مخصصة."
        : "Hello TAPLY Egypt! I would like to order custom NFC cards.",
    );

  return (
    <div
      dir={dir}
      className={`min-h-screen bg-[#030407] text-[#F8F6F0] flex flex-col font-sans overflow-x-hidden selection:bg-[#10B981] selection:text-[#0B0C10] relative ${
        lang === "ar"
          ? "font-['Tajawal',sans-serif]"
          : "font-['Inter',sans-serif]"
      }`}
    >
      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={generalWhatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={playClickSound}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-linear-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-900/80 hover:scale-110 active:scale-95 transition-all group border-2 border-emerald-300/60"
        title="Contact us directly on WhatsApp"
      >
        <span className="absolute -inset-1.5 rounded-full bg-emerald-500/40 animate-ping pointer-events-none"></span>
        <IconMessageCircle className="w-6 h-6 sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform" />
      </a>

      {/* HEADER COMPONENT */}
      <Header t={t} lang={lang} toggleLanguage={toggleLanguage} />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <HeroSection
          t={t}
          lang={lang}
          whatsappUrl={whatsappUrl}
          qrImageUrl={qrImageUrl}
        />
        <NfcExplainedSection
          t={t}
          sectionRef={nfcSectionRef}
          isVisible={isNfcVisible}
        />
        <TapSimulatorSection
          t={t}
          lang={lang}
          qrImageUrl={qrImageUrl}
          nfcTapped={nfcTapped}
          setNfcTapped={setNfcTapped}
          sectionRef={demoSectionRef}
          isVisible={isDemoVisible}
        />
      </main>

      {/* FOOTER & HOW-IT-WORKS COMPONENT */}
      <Footer
        t={t}
        lang={lang}
        toggleLanguage={toggleLanguage}
        sectionRef={howSectionRef}
        isVisible={isHowVisible}
      />
    </div>
  );
}
