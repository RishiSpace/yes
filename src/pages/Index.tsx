const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Main Giant YES */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 
          className="text-[20vw] font-black tracking-tighter animate-bounce-wild"
          style={{
            background: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "var(--text-shadow-glow)",
            filter: "drop-shadow(var(--glow-primary)) drop-shadow(var(--glow-secondary))",
          }}
        >
          YES
        </h1>
      </div>

      {/* Floating Small YES elements */}
      {/* Top Left Group */}
      <div className="absolute top-[10%] left-[5%] text-4xl font-bold text-primary animate-float opacity-70">
        yes
      </div>
      <div className="absolute top-[15%] left-[15%] text-2xl font-bold text-secondary animate-slide-in-left opacity-60 animation-delay-200">
        yes
      </div>
      <div className="absolute top-[8%] left-[25%] text-3xl font-bold text-accent animate-wiggle opacity-80">
        YES
      </div>

      {/* Top Right Group */}
      <div className="absolute top-[12%] right-[8%] text-5xl font-bold text-primary animate-pulse-glow opacity-75">
        YES
      </div>
      <div className="absolute top-[5%] right-[20%] text-2xl font-bold text-secondary animate-slide-in-right opacity-65">
        yes
      </div>
      <div className="absolute top-[18%] right-[15%] text-3xl font-bold text-accent animate-float-slow opacity-70">
        yes
      </div>

      {/* Middle Left */}
      <div className="absolute top-[45%] left-[3%] text-4xl font-bold text-secondary animate-slide-in-left opacity-80 animation-delay-500">
        YES
      </div>
      <div className="absolute top-[55%] left-[10%] text-2xl font-bold text-primary animate-zoom-pulse opacity-60">
        yes
      </div>

      {/* Middle Right */}
      <div className="absolute top-[40%] right-[5%] text-3xl font-bold text-accent animate-float opacity-75 animation-delay-300">
        yes
      </div>
      <div className="absolute top-[58%] right-[12%] text-4xl font-bold text-primary animate-slide-in-right opacity-70">
        YES
      </div>

      {/* Bottom Left Group */}
      <div className="absolute bottom-[15%] left-[8%] text-5xl font-bold text-secondary animate-bounce-wild opacity-80 animation-delay-700">
        YES
      </div>
      <div className="absolute bottom-[8%] left-[18%] text-2xl font-bold text-accent animate-slide-in-bottom opacity-65">
        yes
      </div>
      <div className="absolute bottom-[20%] left-[25%] text-3xl font-bold text-primary animate-wiggle opacity-75 animation-delay-400">
        yes
      </div>

      {/* Bottom Right Group */}
      <div className="absolute bottom-[12%] right-[10%] text-4xl font-bold text-primary animate-float-slow opacity-70">
        YES
      </div>
      <div className="absolute bottom-[18%] right-[20%] text-3xl font-bold text-secondary animate-pulse-glow opacity-80 animation-delay-600">
        yes
      </div>
      <div className="absolute bottom-[6%] right-[5%] text-2xl font-bold text-accent animate-slide-in-bottom opacity-60">
        yes
      </div>

      {/* Spinning YES elements */}
      <div className="absolute top-[30%] left-[30%] text-3xl font-bold text-accent animate-spin-slow opacity-50">
        yes
      </div>
      <div className="absolute top-[65%] right-[30%] text-3xl font-bold text-secondary animate-spin-slow opacity-55">
        yes
      </div>

      {/* Fading in elements */}
      <div className="absolute top-[25%] right-[40%] text-4xl font-bold text-primary animate-fade-in opacity-70 animation-delay-1000">
        YES
      </div>
      <div className="absolute bottom-[30%] left-[35%] text-3xl font-bold text-accent animate-fade-in opacity-65 animation-delay-1200">
        yes
      </div>
    </div>
  );
};

export default Index;
