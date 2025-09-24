const SimpleTunnelBackground = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{
        background: `
          radial-gradient(
            circle at center,
            transparent 10%,
            rgba(255, 255, 255, 0.02) 15%,
            transparent 20%,
            rgba(255, 255, 255, 0.03) 25%,
            transparent 30%,
            rgba(255, 255, 255, 0.02) 35%,
            transparent 40%,
            rgba(255, 255, 255, 0.04) 45%,
            transparent 50%,
            rgba(255, 255, 255, 0.02) 55%,
            transparent 60%,
            rgba(255, 255, 255, 0.03) 65%,
            transparent 70%,
            rgba(255, 255, 255, 0.01) 75%,
            transparent 80%,
            rgba(0, 0, 0, 0.8) 100%
          ),
          #000000
        `
      }}
    >
      {/* Static concentric circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/10 rounded-full"
            style={{
              width: `${(i + 1) * 120}px`,
              height: `${(i + 1) * 120}px`,
              borderWidth: '1px',
              borderStyle: 'solid',
              opacity: 0.1 - (i * 0.015),
            }}
          />
        ))}
      </div>

      {/* Radial lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-32 bg-white/5"
            style={{
              transform: `rotate(${i * 30}deg)`,
              transformOrigin: 'bottom center',
              top: '50%',
              left: '50%',
              marginLeft: '-0.5px',
            }}
          />
        ))}
      </div>

      {/* Center focal point */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-white/20 rounded-full" />
      </div>
    </div>
  );
};

export default SimpleTunnelBackground;