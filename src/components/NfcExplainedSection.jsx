import React from "react";
import {
  IconShieldCheck,
  IconSmartphone,
  IconZap,
  IconRefresh,
} from "../constants";

export default function NfcExplainedSection({t, sectionRef, isVisible}) {
  return (
    <section
      id="nfc-explained"
      ref={sectionRef}
      className={`py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#0B0C10] border-y border-white/10 relative overflow-hidden transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-16 scale-95"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-mono tracking-wider mb-4">
            <IconShieldCheck className="w-4 h-4" />
            {t.nfcExplained.badge}
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-6 text-white">
            {t.nfcExplained.title}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            {t.nfcExplained.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="min-w-0 bg-[#050608] p-5 sm:p-6 lg:p-8 rounded-3xl border border-white/10 hover:border-[#10B981]/40 transition-all flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mb-4 sm:mb-6 text-[#10B981] group-hover:scale-110 transition-transform">
                <IconSmartphone className="w-5.5 h-5.5 sm:w-7 sm:h-7" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
                {t.nfcExplained.p1Title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.nfcExplained.p1Desc}
              </p>
            </div>
          </div>

          <div className="min-w-0 bg-[#050608] p-5 sm:p-6 lg:p-8 rounded-3xl border border-white/10 hover:border-[#10B981]/40 transition-all flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mb-4 sm:mb-6 text-[#10B981] group-hover:scale-110 transition-transform">
                <IconZap className="w-5.5 h-5.5 sm:w-7 sm:h-7" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
                {t.nfcExplained.p2Title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.nfcExplained.p2Desc}
              </p>
            </div>
          </div>

          <div className="min-w-0 bg-[#050608] p-5 sm:p-6 lg:p-8 rounded-3xl border border-white/10 hover:border-[#10B981]/40 transition-all flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mb-4 sm:mb-6 text-[#10B981] group-hover:scale-110 transition-transform">
                <IconRefresh className="w-5.5 h-5.5 sm:w-7 sm:h-7" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">
                {t.nfcExplained.p3Title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.nfcExplained.p3Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
