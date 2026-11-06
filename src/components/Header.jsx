import React, {useState} from "react";
import {
  TaplyLogoSvg,
  IconGlobe,
  IconMenu,
  IconX,
} from "../constants";

export default function Header({t, lang, toggleLanguage}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#050608]/85 border-b border-white/10">
      <div
        dir="ltr"
        className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between"
      >
        <a href="#" className="flex items-center gap-3">
          <TaplyLogoSvg />
        </a>

        <nav
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm text-[#9CA3AF] font-medium"
        >
          <a
            href="#nfc-explained"
            className="hover:text-[#10B981] transition-colors"
          >
            {t.nav.nfcInfo}
          </a>
          <a href="#demo" className="hover:text-[#10B981] transition-colors">
            {t.nav.demo}
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#10B981] transition-colors"
          >
            {t.nav.howItWorks}
          </a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-mono tracking-wider hover:border-[#10B981]/50 transition-colors flex items-center gap-2 text-gray-300"
          >
            <IconGlobe className="w-3.5 h-3.5 text-[#10B981]" />
            {t.footer.lang}
          </button>
        </div>

        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-label={isMobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileNavOpen}
          className="lg:hidden p-2 text-white focus:outline-none"
        >
          {isMobileNavOpen ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {isMobileNavOpen && (
        <div className="lg:hidden bg-[#0D0F15] border-b border-white/10 px-4 sm:px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#nfc-explained" onClick={() => setIsMobileNavOpen(false)}>
            {t.nav.nfcInfo}
          </a>
          <a href="#demo" onClick={() => setIsMobileNavOpen(false)}>
            {t.nav.demo}
          </a>
          <a href="#how-it-works" onClick={() => setIsMobileNavOpen(false)}>
            {t.nav.howItWorks}
          </a>
          <button
            onClick={() => {
              toggleLanguage();
              setIsMobileNavOpen(false);
            }}
            className="py-2 rounded-lg border border-white/20 text-xs font-mono text-center flex items-center justify-center gap-2"
          >
            <IconGlobe className="w-3.5 h-3.5 text-[#10B981]" />
            {t.footer.lang}
          </button>
        </div>
      )}
    </header>
  );
}
