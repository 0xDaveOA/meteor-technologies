import { useEffect, useRef } from 'react';

const TunnelBackground = ({ className = "" }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if THREE.js is available
    if (typeof window === 'undefined' || !window.THREE) {
      console.warn('THREE.js is not available');
      return;
    }

    const THREE = window.THREE;

    // Initialize Three.js scene
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    sceneRef.current = scene;

    // Shader material
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3(container.offsetWidth, container.offsetHeight, 1) },
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec3 iResolution;

        #define TAU 6.2831853071795865
        #define TUNNEL_LAYERS 96
        #define RING_POINTS 128
        #define POINT_SIZE 1.8
        #define POINT_COLOR_A vec3(1.0)
        #define POINT_COLOR_B vec3(0.7)
        #define SPEED 0.7

        float sq(float x) {
          return x*x;   
        }

        vec2 AngRep(vec2 uv, float angle) {
          vec2 polar = vec2(atan(uv.y, uv.x), length(uv));
          polar.x = mod(polar.x + angle / 2.0, angle) - angle / 2.0; 
          return polar.y * vec2(cos(polar.x), sin(polar.x));
        }

        float sdCircle(vec2 uv, float r) {
          return length(uv) - r;
        }

        vec3 MixShape(float sd, vec3 fill, vec3 target) {
          float blend = smoothstep(0.0, 1.0/iResolution.y, sd);
          return mix(fill, target, blend);
        }

        vec2 TunnelPath(float x) {
          vec2 offs = vec2(0, 0);
          
          offs.x = 0.2 * sin(TAU * x * 0.5) + 0.4 * sin(TAU * x * 0.2 + 0.3);
          offs.y = 0.3 * cos(TAU * x * 0.3) + 0.2 * cos(TAU * x * 0.1);
          
          offs *= smoothstep(1.0, 4.0, x);
          
          return offs;
        }

        void main() {
          vec2 res = iResolution.xy / iResolution.y;
          vec2 uv = gl_FragCoord.xy / iResolution.y;
          
          uv -= res/2.0;
          
          vec3 color = vec3(0);
          
          float repAngle = TAU / float(RING_POINTS);
          float pointSize = POINT_SIZE/2.0/iResolution.y;
          
          float camZ = iTime * SPEED;
          vec2 camOffs = TunnelPath(camZ);
          
          for(int i = 1; i <= TUNNEL_LAYERS; i++) {
            float pz = 1.0 - (float(i) / float(TUNNEL_LAYERS));
            
            pz -= mod(camZ, 4.0 / float(TUNNEL_LAYERS));
            
            vec2 offs = TunnelPath(camZ + pz) - camOffs;
            
            float ringRad = 0.15 * (1.0 / sq(pz * 0.8 + 0.4));
            
            if(abs(length(uv + offs) - ringRad) < pointSize * 1.5) {
              vec2 aruv = AngRep(uv + offs, repAngle);
              float pdist = sdCircle(aruv - vec2(ringRad, 0), pointSize);
              
              vec3 ptColor = (mod(float(i / 2), 2.0) == 0.0) ? POINT_COLOR_A : POINT_COLOR_B;
              
              float shade = (1.0-pz);
              
              color = MixShape(pdist, ptColor * shade, color);
            }
          }
          
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    // Create plane geometry
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, shaderMaterial);
    scene.add(mesh);

    // Animation variables
    let lastTime = 0;
    const speedMultiplier = 0.5;

    // Animation loop
    const animate = (time) => {
      time *= 0.001;
      const deltaTime = time - lastTime;
      lastTime = time;
      
      shaderMaterial.uniforms.iTime.value += deltaTime * speedMultiplier;
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      
      renderer.setSize(width, height);
      shaderMaterial.uniforms.iResolution.value.set(width, height, 1);
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    animate(0);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      
      if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
      }
      
      // Clean up Three.js resources
      if (geometry) geometry.dispose();
      if (shaderMaterial) shaderMaterial.dispose();
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, []);

  return (
    <>
      {/* Load Three.js if not already loaded */}
      <script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
        onLoad={() => {
          // Re-trigger effect when Three.js loads
          if (containerRef.current) {
            const event = new Event('threejs-loaded');
            containerRef.current.dispatchEvent(event);
          }
        }}
      />
      <div
        ref={containerRef}
        className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
        style={{
          background: '#000000'
        }}
      />
    </>
  );
};

export default TunnelBackground;
