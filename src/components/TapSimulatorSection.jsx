import React from "react";
import {
  TaplyLogoSvg,
  IconWifi,
  IconSmartphone,
  IconFacebook,
  IconInstagram,
  IconTikTok,
  IconWhatsApp,
  playNfcTapSound,
} from "../constants";

export default function TapSimulatorSection({
  t,
  lang,
  qrImageUrl,
  nfcTapped,
  setNfcTapped,
  sectionRef,
  isVisible,
}) {
  return (
    <section
      id="demo"
      ref={sectionRef}
      className={`py-16 sm:py-24 px-4 sm:px-6 bg-[#050608] relative overflow-hidden transition-all duration-700 ease-out transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-16 scale-95"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-mono tracking-wider mb-3 border border-[#10B981]/30">
            {t.tapSection.badge}
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-3 text-white">
            {t.tapSection.title}
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
            {t.tapSection.desc}
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 sm:gap-10 lg:gap-14 items-center bg-[#0B0C10]/90 backdrop-blur-2xl p-4 sm:p-8 lg:p-12 rounded-3xl border border-white/10 shadow-2xl relative shadow-emerald-950/20">
          {/* LEFT SIDE: CONTROLS */}
          <div className="flex flex-col items-center justify-center text-center p-2 sm:p-4 border-b lg:border-b-0 lg:border-r border-white/10 rtl:lg:border-l rtl:lg:border-r-0">
            <div
              className={`nfc-card relative w-full max-w-md aspect-[1.586/1] rounded-2xl cursor-pointer group mb-8 sm:mb-10 ${
                nfcTapped ? "nfc-card-tapped" : ""
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  playNfcTapSound();
                  setNfcTapped(true);
                }
              }}
              onClick={() => {
                playNfcTapSound();
                setNfcTapped(true);
              }}
            >
              <div className="absolute inset-0 w-full h-full rounded-2xl bg-linear-to-br from-gray-900 via-[#0B0C10] to-black p-3 sm:p-5 lg:p-7 flex flex-col justify-between overflow-hidden border border-emerald-500/30 shadow-2xl shadow-emerald-950/65">
                <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,0.18)_0%,transparent_65%)]"></div>
                <div className="flex items-center justify-between relative z-10">
                  <TaplyLogoSvg className="h-6" />
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-mono text-[#10B981] px-2 py-0.5 rounded border border-[#10B981]/40 bg-[#10B981]/10">
                      NTAG216
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/40">
                      <IconWifi className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="my-auto py-2 relative z-10 space-y-1">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-sans font-black tracking-wider sm:tracking-widest text-white group-hover:text-emerald-300 transition-colors leading-tight">
                    TAPLY PRIVÉ
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#10B981] tracking-[0.25em] font-mono uppercase font-semibold">
                    LUXURY NFC IDENTITY CARD
                  </div>
                </div>

                <div className="flex justify-between items-end gap-2 border-t border-white/10 pt-2 sm:pt-3 text-[8px] sm:text-[10px] font-mono text-gray-400 tracking-wider relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping"></span>
                    CAIRO • EGYPT
                  </div>
                  <div className="text-[#10B981] font-bold">TAP TO CONNECT</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full max-w-md">
              <button
                onClick={() => {
                  playNfcTapSound();
                  setNfcTapped(true);
                }}
                className="w-full py-3.5 rounded-xl bg-linear-to-r from-emerald-600 via-emerald-500 to-teal-400 text-white font-bold text-xs sm:text-sm tracking-wider shadow-lg shadow-emerald-900/40 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <IconSmartphone className="w-4.5 h-4.5" />
                {t.tapSection.tapBtn}
              </button>

              <button
                onClick={() => setNfcTapped(false)}
                disabled={!nfcTapped}
                aria-hidden={!nfcTapped}
                className={`w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xs hover:bg-white/10 transition-all font-mono ${
                  nfcTapped ? "visible" : "invisible pointer-events-none"
                }`}
              >
                {t.tapSection.resetBtn}
              </button>
            </div>

            <div className="mt-6 min-h-10 max-w-md font-mono text-xs text-[#10B981] font-medium flex items-center justify-center gap-2 text-center">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              {nfcTapped ? t.tapSection.statusSuccess : t.tapSection.statusIdle}
            </div>
          </div>

          {/* RIGHT SIDE: SMARTPHONE DISPLAY */}
          <div className="flex justify-center items-center w-full">
            <div
              className={`nfc-phone w-full max-w-[320px] h-[min(620px,calc(100svh-2rem))] min-h-130 bg-black rounded-[40px] border-[5px] p-2.5 shadow-2xl relative flex flex-col overflow-hidden ring-1 ring-white/15 ${
                nfcTapped
                  ? "nfc-phone-connected border-emerald-500/60"
                  : "border-gray-800"
              }`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-800 rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-8 h-1 bg-gray-950 rounded-full"></div>
              </div>

              <div className="w-full h-full bg-[#050608] rounded-4xl-7 px-4 pb-3 flex flex-col justify-center overflow-hidden relative text-left ltr:text-left rtl:text-right">
                {!nfcTapped ? (
                  <div className="my-auto flex flex-col items-center text-center p-2">
                    <div className="w-12 h-12 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center mb-3">
                      <IconWifi className="w-6 h-6 text-[#10B981] animate-pulse" />
                    </div>
                    <div className="font-bold text-white text-sm mb-1">
                      TAPLY NFC Ready
                    </div>
                    <p className="text-[11px] font-mono text-gray-400 max-w-42.5 leading-relaxed">
                      {lang === "ar"
                        ? "انقر على البطاقة لتجربة نقل البيانات فورياً"
                        : "Tap card to simulate instant digital vCard transmission"}
                    </p>
                    <div className="mt-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#10B981] animate-bounce">
                      ↑ Tap button
                    </div>
                  </div>
                ) : (
                  <div className="nfc-content-enter w-full flex flex-col items-center text-center py-5 gap-5">
                    <TaplyLogoSvg compact className="h-5" />
                    <a
                      href="https://wa.me/201061198548"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open WhatsApp QR code"
                      className="p-2 rounded-2xl bg-white border border-[#10B981]/50 shadow-inner shrink-0"
                    >
                      <img
                        src={qrImageUrl}
                        alt="WhatsApp QR code"
                        className="rounded-lg w-28 h-28 sm:w-32 sm:h-32"
                      />
                    </a>

                    <div className="w-full max-w-65">
                      <p className="text-[10px] font-mono tracking-[0.18em] text-gray-400 mb-3">
                        CONNECT WITH US
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          className="nfc-social-link flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:border-[#10B981]/50 hover:text-[#10B981]"
                          href="https://www.facebook.com/share/1JcJ5M3LYc/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconFacebook className="w-4 h-4" />
                          Facebook
                        </a>
                        <a
                          className="nfc-social-link flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:border-[#10B981]/50 hover:text-[#10B981]"
                          href="https://www.instagram.com/tably.egy?cplk=bXZ6NTNxc3B2bTN0"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconInstagram className="w-4 h-4" />
                          Instagram
                        </a>
                        <a
                          className="nfc-social-link flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-semibold text-white transition-colors hover:border-[#10B981]/50 hover:text-[#10B981]"
                          href="https://www.tiktok.com/@taply.egy?_r=1&_t=ZS-9B4yeIKfaJo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconTikTok className="w-4 h-4" />
                          TikTok
                        </a>
                        <a
                          className="nfc-social-link flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-semibold text-white transition-colors hover:border-[#10B981]/50 hover:text-[#10B981]"
                          href="https://wa.me/201061198548"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconWhatsApp className="w-4 h-4" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
