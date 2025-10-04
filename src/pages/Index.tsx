import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [ceremonyClosed, setCeremonyClosed] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [leftRopePulled, setLeftRopePulled] = useState(false);
  const [rightRopePulled, setRightRopePulled] = useState(false);
  const [ripplesStarted, setRipplesStarted] = useState(false);
  const [slowShake, setSlowShake] = useState(false);
  const [fastShake, setFastShake] = useState(false);
  const [grandFinale, setGrandFinale] = useState(false);

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

  // Ripple and shake animation sequence
  useEffect(() => {
    if (showContent) {
      // Start ripples from left
      setTimeout(() => {
        setRipplesStarted(true);
        // Fast wave reaches middle - start slow shake (1.5s)
        setTimeout(() => {
          setSlowShake(true);
          // Slow wave reaches middle - upgrade to fast shake (3s)
          setTimeout(() => {
            setFastShake(true);
            // After 3 seconds of fast shaking, enlarge and redirect
            setTimeout(() => {
              setGrandFinale(true);
              setTimeout(() => {
                window.location.href = "https://iitr.ac.in/18see/";
              }, 2000);
            }, 3000);
          }, 1500);
        }, 1500);
      }, 1000);
    }
  }, [showContent]);

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

      {/* Grand Finale Confetti */}
      {grandFinale && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full animate-fade-in"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20px',
                backgroundColor: ['hsl(var(--gold))', 'hsl(var(--gold-glow))', 'hsl(var(--primary))', 'hsl(var(--spotlight))'][Math.floor(Math.random() * 4)],
                animation: `confetti-fall ${2 + Math.random() * 2}s linear forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Grand Finale Flash */}
      {grandFinale && (
        <div className="absolute inset-0 bg-white pointer-events-none z-40 animate-flash" />
      )}

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
            className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-b from-[hsl(var(--curtain))] to-[hsl(var(--curtain-shadow))] shadow-[var(--shadow-curtain)] transition-all duration-[4s] ease-in-out ${!ceremonyClosed ? "animate-curtain-open-left" : ""
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
            className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[hsl(var(--curtain))] to-[hsl(var(--curtain-shadow))] shadow-[var(--shadow-curtain)] transition-all duration-[4s] ease-in-out ${!ceremonyClosed ? "animate-curtain-open-right" : ""
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
              className={`absolute left-[8%] top-0 z-30 group cursor-pointer disabled:cursor-not-allowed transition-all duration-300 ${leftRopePulled ? "opacity-50" : "hover:scale-105"
                }`}
              aria-label="Pull left curtain rope"
            >
              {/* Rope */}
              <div className="w-3 h-[60vh] bg-gradient-to-b from-[hsl(var(--gold))] via-[hsl(var(--gold-glow))] to-[hsl(var(--gold))] rounded-full shadow-lg relative">
                {/* Rope texture */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 8px, hsl(var(--gold-glow)) 8px, hsl(var(--gold-glow)) 10px)"
                }} />
                {/* Shine effect */}
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-white/40 via-transparent to-transparent rounded-l-full" />
              </div>

              {/* Tassel */}
              <div className="relative w-16 h-20 -mt-2" style={{ marginLeft: '-26px' }}>
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
              className={`absolute right-[8%] top-0 z-30 group cursor-pointer disabled:cursor-not-allowed transition-all duration-300 ${rightRopePulled ? "opacity-50" : "hover:scale-105"
                }`}
              aria-label="Pull right curtain rope"
            >
              {/* Rope */}
              <div className="w-3 h-[60vh] bg-gradient-to-b from-[hsl(var(--gold))] via-[hsl(var(--gold-glow))] to-[hsl(var(--gold))] rounded-full shadow-lg relative">
                {/* Rope texture */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 8px, hsl(var(--gold-glow)) 8px, hsl(var(--gold-glow)) 10px)"
                }} />
                {/* Shine effect */}
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-white/40 via-transparent to-transparent rounded-l-full" />
              </div>

              {/* Tassel */}
              <div className="relative w-16 h-20 -mt-2" style={{ marginLeft: '-26px' }}>
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
            <div className={`relative z-10 text-center space-y-8 max-w-4xl px-6 ${grandFinale ? 'animate-zoom-out' : 'animate-fade-in-scale'}`}>
              <div className="space-y-6">
                {/* Earthquake Waves from Left - Dynamic expanding waves */}
                {ripplesStarted && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none">
                    {/* Fast wave - grows and elongates */}
                    <div
                      className="absolute top-0 left-0 border-[5px] border-[hsl(var(--earth-brown))] animate-ripple-fast"
                      style={{
                        width: '60px',
                        height: '100px',
                        borderRadius: '50%',
                        transformOrigin: 'left center',
                        opacity: 0.6,
                      }}
                    />
                    {/* Slow wave - grows and elongates more */}
                    <div
                      className="absolute top-0 left-0 border-[6px] border-[hsl(var(--earth-brown))] animate-ripple-slow"
                      style={{
                        width: '70px',
                        height: '120px',
                        borderRadius: '50%',
                        transformOrigin: 'left center',
                        opacity: 0.65,
                      }}
                    />
                  </div>
                )}

                {/* Ground/Soil Base */}
                <div className="relative inline-block">
                  <div className={`inline-block p-8 bg-gradient-to-b from-[hsl(var(--card))] to-[hsl(var(--earth-dark)/0.3)] rounded-2xl border-2 border-[hsl(var(--earth-brown))] shadow-[var(--shadow-dramatic)] relative overflow-hidden ${fastShake ? 'animate-earthquake-shake-fast' : slowShake ? 'animate-earthquake-shake-slow' : ''
                    } ${grandFinale ? 'animate-enlarge' : ''}`}>
                    {/* Cracks appear during shake */}
                    {slowShake && (
                      <>
                        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-[hsl(var(--crack))] opacity-60 transform -rotate-12" />
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[hsl(var(--crack))] opacity-60" />
                        <div className="absolute top-1/3 right-1/4 w-0.5 h-2/3 bg-[hsl(var(--crack))] opacity-40 transform rotate-6" />
                      </>
                    )}

                    <h2 className="text-6xl md:text-8xl font-black text-[hsl(var(--foreground))] drop-shadow-lg">
                      Welcome!
                      <span className="absolute inset-0 rounded-full bg-primary/30 animate-wave-ripple"></span>
                      <span className="absolute inset-0 rounded-full bg-primary/20 animate-wave-ripple [animation-delay:2s]"></span>
                      <span className="absolute inset-0 rounded-full bg-primary/10 animate-wave-ripple [animation-delay:4s]"></span>
                    </h2>
                  </div>

                  {/* Soil/Ground Base - below the card */}
                  <div className="absolute -bottom-6 left-0 right-0 h-12 bg-gradient-to-b from-[hsl(var(--earth-brown))] to-[hsl(var(--earth-dark))] rounded-b-lg overflow-hidden shadow-xl"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(90deg, 
                          hsl(var(--earth-brown)) 0px, 
                          hsl(var(--earth-dark)) 3px, 
                          hsl(var(--earth-brown)) 6px),
                        repeating-linear-gradient(0deg,
                          transparent 0px,
                          hsl(var(--crack)) 1px,
                          transparent 2px)
                      `
                    }}
                  />
                </div>

                <div className="space-y-4 text-[hsl(var(--foreground))] pt-8">
                  <h3 className="text-4xl md:text-5xl font-bold leading-tight text-[hsl(var(--earth-brown))]">
                    18th Symposium on Earthquake Engineering
                  </h3>
                  <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
                    Join us for groundbreaking research, innovative solutions, and collaborative discussions
                    on advancing earthquake engineering and seismic safety.
                  </p>
                </div>

                {grandFinale && (
                  <div className="pt-8">
                    <Sparkles className="w-20 h-20 mx-auto text-[hsl(var(--rock-gray))] animate-spin" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Stage Floor */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Footer Credits */}
        {showContent && (
          <div className="absolute bottom-8 text-center text-lg text-[hsl(var(--muted-foreground))] animate-fade-in-scale" style={{ animationDelay: "0.5s" }}>
            Earthquake Engineering Department
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
