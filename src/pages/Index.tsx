import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ExternalLink } from "lucide-react";

const Index = () => {
  const [ceremonyClosed, setCeremonyClosed] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [leftRopePulled, setLeftRopePulled] = useState(false);
  const [rightRopePulled, setRightRopePulled] = useState(false);

  const handleRopePull = (side: "left" | "right") => {
    if (side === "left") {
      setLeftRopePulled(true);
    } else {
      setRightRopePulled(true);
    }

    // Open ceremony when both ropes are pulled
    if ((side === "left" && rightRopePulled) || (side === "right" && leftRopePulled)) {
      setTimeout(() => {
        setCeremonyClosed(false);
        setTimeout(() => {
          setShowContent(true);
        }, 2500);
      }, 300);
    }
  };

  const handleVisitWebsite = () => {
    // Replace with actual symposium website URL
    window.open("https://earthquake-symposium.example.com", "_blank");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(var(--stage))]">
      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[hsl(var(--gold))] rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Spotlight Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--spotlight)/0.15)] rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[hsl(var(--spotlight)/0.15)] rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Stage */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        
        {/* Curtains Container */}
        <div className="relative w-full max-w-6xl aspect-video flex items-center justify-center">
          
          {/* Curtain Rod */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[hsl(var(--gold))] to-[hsl(var(--gold-glow))] shadow-lg z-20" />
          
          {/* Left Curtain */}
          <div
            className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-b from-[hsl(var(--curtain))] to-[hsl(var(--curtain-shadow))] shadow-[var(--shadow-curtain)] transition-all duration-[4s] ease-in-out ${
              !ceremonyClosed ? "animate-curtain-open-left" : ""
            }`}
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 40px, hsl(var(--curtain-shadow)) 40px, hsl(var(--curtain-shadow)) 41px)",
              transformOrigin: "top right",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            {/* Curtain gathering effect */}
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black/40 to-transparent" />
          </div>

          {/* Right Curtain */}
          <div
            className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[hsl(var(--curtain))] to-[hsl(var(--curtain-shadow))] shadow-[var(--shadow-curtain)] transition-all duration-[4s] ease-in-out ${
              !ceremonyClosed ? "animate-curtain-open-right" : ""
            }`}
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 40px, hsl(var(--curtain-shadow)) 40px, hsl(var(--curtain-shadow)) 41px)",
              transformOrigin: "top left",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-transparent" />
            {/* Curtain gathering effect */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          {/* Left Curtain Rope & Tassel */}
          {ceremonyClosed && (
            <button
              onClick={() => handleRopePull("left")}
              disabled={leftRopePulled}
              className={`absolute left-[20%] top-0 z-30 group cursor-pointer disabled:cursor-not-allowed transition-all duration-300 ${
                leftRopePulled ? "opacity-50" : "hover:scale-105"
              }`}
              aria-label="Pull left curtain rope"
            >
              {/* Rope */}
              <div className={`w-3 h-[60vh] bg-gradient-to-b from-[hsl(var(--gold))] via-[hsl(var(--gold-glow))] to-[hsl(var(--gold))] rounded-full shadow-lg relative ${
                !leftRopePulled ? "animate-[float_3s_ease-in-out_infinite]" : ""
              }`}>
                {/* Rope texture */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 8px, hsl(var(--gold-glow)) 8px, hsl(var(--gold-glow)) 10px)"
                }} />
                {/* Shine effect */}
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-white/40 via-transparent to-transparent rounded-l-full" />
              </div>
              
              {/* Tassel */}
              <div className="relative w-16 h-20 mx-auto -mt-2">
                {/* Tassel top */}
                <div className="w-12 h-6 mx-auto bg-gradient-to-b from-[hsl(var(--gold))] to-[hsl(var(--gold-glow))] rounded-t-full shadow-lg" />
                {/* Tassel fringe */}
                <div className="flex justify-around px-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-14 bg-gradient-to-b from-[hsl(var(--gold-glow))] to-[hsl(var(--gold))] rounded-b-full"
                      style={{
                        height: `${50 + Math.random() * 10}px`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {!leftRopePulled && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[hsl(var(--gold))] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Pull to Open
                </div>
              )}
              {leftRopePulled && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[hsl(var(--gold))] text-sm font-semibold">
                  ✓ Pulled
                </div>
              )}
            </button>
          )}

          {/* Right Curtain Rope & Tassel */}
          {ceremonyClosed && (
            <button
              onClick={() => handleRopePull("right")}
              disabled={rightRopePulled}
              className={`absolute right-[20%] top-0 z-30 group cursor-pointer disabled:cursor-not-allowed transition-all duration-300 ${
                rightRopePulled ? "opacity-50" : "hover:scale-105"
              }`}
              aria-label="Pull right curtain rope"
            >
              {/* Rope */}
              <div className={`w-3 h-[60vh] bg-gradient-to-b from-[hsl(var(--gold))] via-[hsl(var(--gold-glow))] to-[hsl(var(--gold))] rounded-full shadow-lg relative ${
                !rightRopePulled ? "animate-[float_3s_ease-in-out_infinite]" : ""
              }`} style={{ animationDelay: "0.5s" }}>
                {/* Rope texture */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 8px, hsl(var(--gold-glow)) 8px, hsl(var(--gold-glow)) 10px)"
                }} />
                {/* Shine effect */}
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-white/40 via-transparent to-transparent rounded-l-full" />
              </div>
              
              {/* Tassel */}
              <div className="relative w-16 h-20 mx-auto -mt-2">
                {/* Tassel top */}
                <div className="w-12 h-6 mx-auto bg-gradient-to-b from-[hsl(var(--gold))] to-[hsl(var(--gold-glow))] rounded-t-full shadow-lg" />
                {/* Tassel fringe */}
                <div className="flex justify-around px-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-14 bg-gradient-to-b from-[hsl(var(--gold-glow))] to-[hsl(var(--gold))] rounded-b-full"
                      style={{
                        height: `${50 + Math.random() * 10}px`,
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {!rightRopePulled && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[hsl(var(--gold))] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Pull to Open
                </div>
              )}
              {rightRopePulled && (
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[hsl(var(--gold))] text-sm font-semibold">
                  ✓ Pulled
                </div>
              )}
            </button>
          )}

          {/* Center Content - Before Opening */}
          {ceremonyClosed && (
            <div className="relative z-10 text-center space-y-8 pointer-events-none">
              <div className="space-y-4">
                <Sparkles className="w-16 h-16 mx-auto text-[hsl(var(--gold))] animate-pulse-glow" />
                <h1 className="text-5xl md:text-7xl font-bold text-[hsl(var(--gold))] drop-shadow-[0_0_30px_hsl(var(--gold-glow))]">
                  Opening Ceremony
                </h1>
                <p className="text-xl md:text-2xl text-[hsl(var(--foreground))]">
                  18th Symposium on Earthquake Engineering
                </p>
                <p className="text-lg text-[hsl(var(--gold))] animate-pulse">
                  {leftRopePulled || rightRopePulled ? "Pull both ropes to begin..." : "Pull the golden ropes to begin..."}
                </p>
              </div>
            </div>
          )}

          {/* Revealed Content - After Opening */}
          {showContent && (
            <div className="relative z-10 text-center space-y-8 max-w-3xl px-6 animate-fade-in-scale">
              <div className="space-y-6">
                <div className="inline-block p-6 bg-[hsl(var(--card))] rounded-2xl border-2 border-[hsl(var(--gold))] shadow-[var(--shadow-dramatic)]">
                  <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-[hsl(var(--gold))] via-[hsl(var(--gold-glow))] to-[hsl(var(--gold))] bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                    Welcome!
                  </h2>
                </div>

                <div className="space-y-4 text-[hsl(var(--foreground))]">
                  <h3 className="text-3xl md:text-4xl font-bold">
                    18th Symposium on Earthquake Engineering
                  </h3>
                  <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
                    Join us for groundbreaking research, innovative solutions, and collaborative discussions 
                    on advancing earthquake engineering and seismic safety.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Button
                    onClick={handleVisitWebsite}
                    size="lg"
                    className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary))] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] text-white transition-all duration-300 text-lg px-8 py-6 font-bold group"
                  >
                    Visit Main Website
                    <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="pt-6 space-y-2">
                  <div className="flex items-center justify-center gap-8 text-[hsl(var(--muted-foreground))]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[hsl(var(--gold))] animate-pulse-glow" />
                      <span className="text-sm">Live Event</span>
                    </div>
                    <div className="text-sm font-semibold text-[hsl(var(--gold))]">
                      Symposium 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stage Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Footer Credits */}
        {showContent && (
          <div className="absolute bottom-8 text-center text-sm text-[hsl(var(--muted-foreground))] animate-fade-in-scale" style={{ animationDelay: "0.5s" }}>
            Earthquake Engineering Department
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
