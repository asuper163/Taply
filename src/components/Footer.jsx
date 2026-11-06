import React from "react";
import {
  TaplyLogoSvg,
  IconFacebook,
  IconInstagram,
  IconTikTok,
  IconGlobe,
} from "../constants";

export default function Footer({
  t,
  lang,
  toggleLanguage,
  sectionRef,
  isVisible,
}) {
  return (
    <>
      {/* HOW TO ORDER SECTION */}
      <section
        id="how-it-works"
        ref={sectionRef}
        className={`py-14 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#0D0F15] border-t border-white/10 overflow-hidden transition-all duration-700 ease-out transform ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-16 scale-95"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14 lg:mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-mono tracking-wider mb-4">
              {t.howItWorks.badge}
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              {t.howItWorks.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="min-w-0 bg-[#0B0C10] p-5 sm:p-6 lg:p-8 rounded-3xl border border-white/10 hover:border-[#10B981]/40 transition-all hover:-translate-y-2">
              <div className="text-3xl sm:text-4xl font-sans font-black text-[#10B981] mb-4">
                {lang === "ar" ? "١" : "01"}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 text-white">
                {t.howItWorks.s1}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {t.howItWorks.s1D}
              </p>
            </div>

            <div className="min-w-0 bg-[#0B0C10] p-5 sm:p-6 lg:p-8 rounded-3xl border border-white/10 hover:border-[#10B981]/40 transition-all hover:-translate-y-2">
              <div className="text-3xl sm:text-4xl font-sans font-black text-[#10B981] mb-4">
                {lang === "ar" ? "٢" : "02"}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 text-white">
                {t.howItWorks.s2}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {t.howItWorks.s2D}
              </p>
            </div>

            <div className="min-w-0 bg-[#0B0C10] p-5 sm:p-6 lg:p-8 rounded-3xl border border-white/10 hover:border-[#10B981]/40 transition-all hover:-translate-y-2">
              <div className="text-3xl sm:text-4xl font-sans font-black text-[#10B981] mb-4">
                {lang === "ar" ? "٣" : "03"}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold mb-2 text-white">
                {t.howItWorks.s3}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                {t.howItWorks.s3D}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#030407] border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div dir="ltr" className="mb-4">
            <TaplyLogoSvg />
          </div>
          <p className="text-[#9CA3AF] text-sm max-w-md mb-8">
            {t.footer.contactHeadline}
          </p>

          <div className="flex items-center gap-6 mb-12">
            <a
              href="https://www.facebook.com/share/1JcJ5M3LYc/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F8F6F0] hover:text-[#10B981] hover:border-[#10B981]/40 hover:scale-110 transition-all"
            >
              <IconFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/taply_egy?rpxt=bXZ6NTNxc3B2bTN0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F8F6F0] hover:text-[#10B981] hover:border-[#10B981]/40 hover:scale-110 transition-all"
            >
              <IconInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@taply.egy?_r=1&_t=ZS-9B4yeIKfaJo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F8F6F0] hover:text-[#10B981] hover:border-[#10B981]/40 hover:scale-110 transition-all"
            >
              <IconTikTok className="w-5 h-5" />
            </a>
          </div>

          <div
            dir="ltr"
            className="w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs text-[#9CA3AF] font-mono gap-4"
          >
            {lang === "ar" ? (
              <div
                dir="rtl"
                className="flex flex-wrap items-center justify-center gap-x-1.5"
              >
                <span>جميع الحقوق محفوظة</span>
                <bdi dir="ltr">© ٢٠٢٦</bdi>
                <bdi dir="ltr">TAPLY NFC</bdi>
                <span>مصر</span>
              </div>
            ) : (
              <div>{t.footer.rights}</div>
            )}
            <div className="flex items-center gap-6">
              <span dir={lang === "ar" ? "rtl" : "ltr"}>
                {lang === "ar" ? "القاهرة  • الجيزة" : "CAIRO  • GIZA"}
              </span>
              <button
                onClick={toggleLanguage}
                className="text-[#10B981] underline flex items-center gap-1"
              >
                <IconGlobe className="w-3.5 h-3.5" />
                {t.footer.lang}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
