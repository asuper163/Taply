import React, {useState, useEffect, useRef} from "react";
import {
  TaplyLogoSvg,
  IconWifi,
  IconRefresh,
  playClickSound,
} from "../constants";

export default function HeroSection({t, lang, whatsappUrl, qrImageUrl}) {
  const cardRef = useRef(null);
  const canvasRef = useRef(null);
  const [cardTransform, setCardTransform] = useState({
    rx: 0,
    ry: 0,
    shineX: 50,
    shineY: 50,
  });
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseMoveCard = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / (rect.height / 2)) * -18;
    const ry = ((x - rect.width / 2) / (rect.width / 2)) * 18;
    setCardTransform({
      rx,
      ry,
      shineX: (x / rect.width) * 100,
      shineY: (y / rect.height) * 100,
    });
  };

  const handleMouseLeaveCard = () => {
    setCardTransform({rx: 0, ry: 0, shineX: 50, shineY: 50});
  };

  const toggleCardFlip = () => {
    playClickSound();
    setIsFlipped(!isFlipped);
  };

  // Canvas background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = Array.from({length: 60}, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.7 + 0.3,
    }));

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.09 - i * 0.015})`;
        ctx.lineWidth = 1.5;
        const waveY = height * 0.5 + Math.sin(time + i) * 25;
        ctx.moveTo(0, waveY);
        for (let x = 0; x < width; x += 15) {
          ctx.lineTo(x, waveY + Math.sin(x * 0.006 + time + i) * 20);
        }
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#10B981";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100svh-4rem)] lg:min-h-[90vh] flex items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
        <div className="lg:col-span-7 min-w-0 space-y-5 sm:space-y-6 text-center lg:text-left ltr:lg:text-left rtl:lg:text-right">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] text-xs font-mono tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            {t.hero.badge}
          </div>

          <h1 className="font-serif text-3xl min-[375px]:text-4xl sm:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
            {t.hero.title} <br />
            <span className="bg-linear-to-r from-white via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-[#9CA3AF] text-sm sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            {t.subhead}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
            <a
              href="#nfc-explained"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/20 hover:border-[#10B981]/50 bg-white/5 text-white font-semibold text-sm transition-all hover:bg-[#10B981]/10"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0">
            <div className="min-w-0">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#10B981]">
                {t.hero.stats1}
              </div>
              <div className="text-[10px] sm:text-[11px] leading-snug text-[#9CA3AF] font-mono">
                {t.hero.stats1Label}
              </div>
            </div>
            <div className="min-w-0">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#10B981]">
                {t.hero.stats2}
              </div>
              <div className="text-[10px] sm:text-[11px] leading-snug text-[#9CA3AF] font-mono">
                {t.hero.stats2Label}
              </div>
            </div>
            <div className="min-w-0">
              <div className="font-serif text-xl sm:text-2xl font-bold text-[#10B981]">
                {t.hero.stats3}
              </div>
              <div className="text-[10px] sm:text-[11px] leading-snug text-[#9CA3AF] font-mono">
                {t.hero.stats3Label}
              </div>
            </div>
          </div>
        </div>

        {/* 3D MOUSE-TILT & ENHANCED FLIP CARD MOCKUP */}
        <div className="lg:col-span-5 w-full flex flex-col items-center justify-center perspective-distant">
          <div
            ref={cardRef}
            onClick={toggleCardFlip}
            onMouseMove={handleMouseMoveCard}
            onMouseLeave={handleMouseLeaveCard}
            style={{
              transform: `rotateX(${cardTransform.rx}deg) rotateY(${cardTransform.ry}deg)`,
              transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-md aspect-[1.586/1] rounded-2xl cursor-pointer group transition-transform duration-200 ease-out"
          >
            <div
              className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl shadow-emerald-950/65 transition-transform duration-700 ease-[cubic-bezier(0.4,0.2,0.2,1)]"
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* FRONT SIDE */}
              <div
                dir="ltr"
                className="absolute inset-0 w-full h-full rounded-2xl bg-linear-to-br from-gray-900 via-[#0B0C10] to-black p-3 min-[375px]:p-4 sm:p-7 flex flex-col justify-between overflow-hidden border border-emerald-500/30"
                style={{backfaceVisibility: "hidden"}}
              >
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-40 group-hover:opacity-80"
                  style={{
                    background: `radial-gradient(circle at ${cardTransform.shineX}% ${cardTransform.shineY}%, rgba(52,211,153,0.4) 0%, transparent 65%)`,
                  }}
                ></div>

                <div className="flex items-center justify-between relative z-10">
                  <TaplyLogoSvg compact className="h-5" />
                  <div className="w-7 h-7 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/40">
                    <IconWifi className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
                  </div>
                </div>

                <div className="my-auto py-2 relative z-10 space-y-1 text-center">
                  <div className="text-xl min-[375px]:text-2xl sm:text-3xl font-sans font-black tracking-wide sm:tracking-widest text-white group-hover:text-emerald-300 transition-colors leading-tight">
                    TAPLY PRIVÉ
                  </div>
                  <div className="text-[8px] min-[375px]:text-[9px] sm:text-xs tracking-[0.15em] sm:tracking-[0.25em] text-[#10B981] font-mono uppercase font-semibold">
                    LUXURY NFC IDENTITY CARD
                  </div>
                </div>

                <div className="flex justify-between items-end gap-2 border-t border-white/10 pt-2 sm:pt-3 text-[8px] sm:text-[10px] font-mono text-gray-400 tracking-wide sm:tracking-wider relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping"></span>
                    CAIRO • EGYPT
                  </div>
                  <div className="text-[#10B981] font-bold flex items-center gap-1">
                    TAP OR CLICK TO FLIP <IconRefresh className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div
                dir="ltr"
                className="absolute inset-0 w-full h-full rounded-2xl bg-linear-to-br from-black via-[#0D0F15] to-gray-900 p-3 min-[375px]:p-4 sm:p-7 flex flex-col justify-between overflow-hidden border border-emerald-500/30"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-30 group-hover:opacity-70"
                  style={{
                    background: `radial-gradient(circle at ${100 - cardTransform.shineX}% ${cardTransform.shineY}%, rgba(16,185,129,0.35) 0%, transparent 65%)`,
                  }}
                ></div>

                <div className="flex items-center justify-between relative z-10">
                  <TaplyLogoSvg compact className="h-5" />
                  <span className="text-[9px] font-mono text-[#10B981] px-2 py-0.5 rounded border border-[#10B981]/30 bg-[#10B981]/10 uppercase tracking-widest font-bold">
                    WHATSAPP SCAN
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 sm:gap-4 my-auto relative z-10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 sm:p-2 rounded-xl bg-white border-2 border-[#10B981] shadow-xl flex flex-col items-center shrink-0 hover:scale-105 transition-transform"
                  >
                    <img
                      src={qrImageUrl}
                      alt="WhatsApp QR Code"
                      className="rounded-md w-18 h-18 sm:w-23.75 sm:h-23.75 block bg-white"
                    />
                    <span className="text-[7px] font-mono text-black mt-1 font-black tracking-wider">
                      SCAN TO CHAT
                    </span>
                  </a>

                  <div
                    dir={lang === "ar" ? "rtl" : "ltr"}
                    className="min-w-0 flex-1 text-center space-y-1 sm:space-y-1.5"
                  >
                    <div className="text-xs sm:text-sm font-black tracking-wide sm:tracking-wider text-white font-sans">
                      TAPLY
                    </div>
                    <p className="text-[9px] sm:text-[11px] text-gray-300 leading-relaxed font-light">
                      {lang === "ar"
                        ? "امسح الكود بالكاميرا لفتح محادثة الواتساب المباشرة لطلب بطاقتك."
                        : "Scan QR code with your camera to open instant WhatsApp chat and order."}
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      dir="ltr"
                      className="text-[9px] sm:text-[10px] font-mono text-[#10B981] hover:underline inline-flex items-center justify-center gap-1.5 pt-1 font-bold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                      +20 106 119 8548
                    </a>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-2 border-t border-white/10 pt-2 text-[8px] sm:text-[10px] font-mono text-gray-400">
                  <span className="tracking-widest text-[#10B981]/90 font-bold">
                    TAPLY EGYPT
                  </span>
                  <span className="text-[#10B981] flex items-center gap-1 font-semibold">
                    FLIP CARD <IconRefresh className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <span className="mt-3 text-xs font-mono text-[#10B981]/80 flex items-center gap-1.5 animate-pulse">
            <IconRefresh className="w-3.5 h-3.5" />
            {lang === "ar"
              ? "اضغط على البطاقة لقلبها لرؤية كود الواتساب"
              : "Click the card to flip and view WhatsApp QR Code"}
          </span>
        </div>
      </div>
    </section>
  );
}
