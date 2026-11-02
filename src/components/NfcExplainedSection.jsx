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
      className={`py-24 px-6 bg-[#0B0C10] border-y border-white/10 relative overflow-hidden transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-16 scale-95"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#050608] p-8 rounded-3xl border border-white/10 hover:border-[#10B981]/40 transition-all flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mb-6 text-[#10B981] group-hover:scale-110 transition-transform">
                <IconSmartphone className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-white">
                {t.nfcExplained.p1Title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.nfcExplained.p1Desc}
              </p>
            </div>
          </div>

          <div className="bg-[#050608] p-8 rounded-3xl border border-white/10 hover:border-[#10B981]/40 transition-all flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mb-6 text-[#10B981] group-hover:scale-110 transition-transform">
                <IconZap className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-white">
                {t.nfcExplained.p2Title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t.nfcExplained.p2Desc}
              </p>
            </div>
          </div>

          <div className="bg-[#050608] p-8 rounded-3xl border border-white/10 hover:border-[#10B981]/40 transition-all flex flex-col justify-between group hover:-translate-y-2">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mb-6 text-[#10B981] group-hover:scale-110 transition-transform">
                <IconRefresh className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-white">
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
