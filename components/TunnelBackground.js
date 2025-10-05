const SimpleTunnelBackground = ({ className = "" }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{
        background: `
          radial-gradient(
            circle at center,
            transparent 10%,
            rgba(255, 69, 0, 0.03) 15%,
            transparent 20%,
            rgba(238, 43, 108, 0.04) 25%,
            transparent 30%,
            rgba(255, 69, 0, 0.02) 35%,
            transparent 40%,
            rgba(238, 43, 108, 0.05) 45%,
            transparent 50%,
            rgba(255, 69, 0, 0.02) 55%,
            transparent 60%,
            rgba(238, 43, 108, 0.03) 65%,
            transparent 70%,
            rgba(255, 255, 255, 0.01) 75%,
            transparent 80%,
            rgba(0, 0, 0, 0.9) 100%
          ),
          #000000
        `
      }}
    >
      <style jsx>{`
        @keyframes rotateRing {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes pulseRing {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes floatParticle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 69, 0, 0.6),
                        0 0 40px rgba(238, 43, 108, 0.4),
                        0 0 60px rgba(255, 69, 0, 0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 69, 0, 0.8),
                        0 0 60px rgba(238, 43, 108, 0.6),
                        0 0 80px rgba(255, 69, 0, 0.4);
          }
        }

        @keyframes rotateGradient {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .ring-1 { animation: rotateRing 20s linear infinite; }
        .ring-2 { animation: rotateRing 25s linear infinite reverse; }
        .ring-3 { animation: pulseRing 6s ease-in-out infinite; }
        .ring-4 { animation: rotateRing 30s linear infinite; }
        .ring-5 { animation: pulseRing 8s ease-in-out infinite; }
        .ring-6 { animation: rotateRing 35s linear infinite reverse; }
        .ring-7 { animation: pulseRing 10s ease-in-out infinite; }
        .ring-8 { animation: rotateRing 40s linear infinite; }
      `}</style>

      {/* Animated Gradient Overlay */}
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(
              circle at center,
              transparent 0%,
              transparent 40%,
              rgba(0, 0, 0, 0.4) 100%
            )
          `
        }}
      >
        <div
          className="absolute w-[200%] h-[200%]"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: `
              conic-gradient(
                from 0deg,
                transparent 0deg,
                rgba(255, 69, 0, 0.05) 90deg,
                transparent 180deg,
                rgba(238, 43, 108, 0.05) 270deg,
                transparent 360deg
              )
            `,
            animation: 'rotateGradient 30s linear infinite',
          }}
        />
      </div>

      {/* Animated Concentric Rings with Brand Colors */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[
          { size: 120, color: '#FF4500', opacity: 0.15, class: 'ring-1', width: 2 },
          { size: 240, color: '#ee2b6c', opacity: 0.12, class: 'ring-2', width: 2 },
          { size: 360, color: '#FF4500', opacity: 0.10, class: 'ring-3', width: 1.5 },
          { size: 480, color: '#ee2b6c', opacity: 0.08, class: 'ring-4', width: 1.5 },
          { size: 600, color: '#FF4500', opacity: 0.06, class: 'ring-5', width: 1 },
          { size: 720, color: '#ee2b6c', opacity: 0.05, class: 'ring-6', width: 1 },
          { size: 840, color: '#FF4500', opacity: 0.04, class: 'ring-7', width: 0.5 },
          { size: 960, color: '#ee2b6c', opacity: 0.03, class: 'ring-8', width: 0.5 },
        ].map((ring, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${ring.class}`}
            style={{
              width: `${ring.size}px`,
              height: `${ring.size}px`,
              border: `${ring.width}px solid ${ring.color}`,
              opacity: ring.opacity,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      {/* Radial Lines with Rotation */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: '1px',
              height: '40%',
              background: `linear-gradient(to top, 
                ${i % 2 === 0 ? 'rgba(255, 69, 0, 0.1)' : 'rgba(238, 43, 108, 0.1)'}, 
                transparent)`,
              transform: `rotate(${i * 22.5}deg)`,
              transformOrigin: 'bottom center',
              top: '50%',
              left: '50%',
              marginLeft: '-0.5px',
              animation: `rotateRing ${20 + i * 2}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
            }}
          />
        ))}
      </div>

      {/* Floating Particles / Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: i % 3 === 0 ? '#FF4500' : i % 3 === 1 ? '#ee2b6c' : '#ffffff',
              left: `${Math.random() * 100}%`,
              bottom: '0',
              opacity: 0,
              animation: `floatParticle ${15 + Math.random() * 15}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>

      {/* Center Glowing Focal Point */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer glow rings */}
        <div
          className="absolute rounded-full"
          style={{
            width: '80px',
            height: '80px',
            background: 'radial-gradient(circle, rgba(255, 69, 0, 0.2) 0%, transparent 70%)',
            animation: 'glowPulse 3s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '40px',
            height: '40px',
            background: 'radial-gradient(circle, rgba(238, 43, 108, 0.3) 0%, transparent 70%)',
            animation: 'glowPulse 3s ease-in-out infinite 0.5s',
          }}
        />
        {/* Center point */}
        <div
          className="absolute rounded-full"
          style={{
            width: '8px',
            height: '8px',
            background: 'linear-gradient(135deg, #FF4500, #ee2b6c)',
            animation: 'glowPulse 3s ease-in-out infinite 1s',
          }}
        />
      </div>

      {/* Orbital Accent Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 120, 240].map((angle) => (
          <div
            key={angle}
            className="absolute"
            style={{
              width: '300px',
              height: '300px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animation: `rotateRing ${20}s linear infinite`,
              animationDelay: `${angle / 120}s`,
            }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: '6px',
                height: '6px',
                background: angle === 0 ? '#FF4500' : angle === 120 ? '#ee2b6c' : '#FF4500',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: `0 0 10px ${angle === 0 ? '#FF4500' : angle === 120 ? '#ee2b6c' : '#FF4500'}`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleTunnelBackground;