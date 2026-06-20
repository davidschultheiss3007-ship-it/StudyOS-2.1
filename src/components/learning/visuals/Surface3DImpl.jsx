import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line, Text } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// Built-in surfaces z = f(u, v) with u, v in [-1, 1]. Each is chosen to make a
// concept legible in 3D, not for decoration.
const FUNCS = {
  concave: (u, v) => 0.9 * (1 - (u * u + v * v) * 0.6),               // diminishing-returns dome
  bowl: (u, v) => (u * u + v * v) * 0.95 - 0.5,                       // convex variance bowl, single min
  saddle: (u, v) => (u * u - v * v) * 0.85,                           // genuine tradeoff saddle
  's-curve': (u, v) => {
    // Prospect-Theory value: concave for gains (u>0), convex & ~2x steeper for
    // losses (u<0); v adds a mild second-attribute tilt so the surface reads 3D.
    const base = u >= 0 ? Math.pow(u, 0.55) : -2.0 * Math.pow(-u, 0.55);
    return base * 0.6 + v * 0.12;
  },
};

// Cool-to-cobalt height ramp: low = muted slate, high = cobalt (or module accent
// when provided). Kept in-system so the surface never introduces a foreign hue.
function heightColor(t, accent) {
  const lo = new THREE.Color('#64748b');
  const hi = new THREE.Color(accent ?? '#3b76f6');
  return lo.clone().lerp(hi, THREE.MathUtils.clamp(t, 0, 1));
}

function SurfaceMesh({ kind, accent }) {
  const f = FUNCS[kind] ?? FUNCS.concave;
  const N = 48; // grid resolution
  const S = 3.2; // half-extent in scene units

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(2 * S, 2 * S, N, N);
    const pos = geo.attributes.position;
    const colors = [];
    let zMin = Infinity;
    let zMax = -Infinity;
    const zs = [];
    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i) / S;
      const v = pos.getY(i) / S;
      const z = f(u, v) * S * 0.55;
      zs.push(z);
      zMin = Math.min(zMin, z);
      zMax = Math.max(zMax, z);
      pos.setZ(i, z);
    }
    for (let i = 0; i < pos.count; i++) {
      const t = (zs[i] - zMin) / (zMax - zMin || 1);
      const c = heightColor(t, accent);
      colors.push(c.r, c.g, c.b);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    geo.rotateX(-Math.PI / 2); // lay the plane flat; z becomes world-up (y)
    return geo;
  }, [kind, accent]);

  return (
    <group>
      <mesh geometry={geometry}>
        <meshStandardMaterial vertexColors flatShading={false} roughness={0.62} metalness={0.04} side={THREE.DoubleSide} />
      </mesh>
      {/* Wireframe overlay for readable contour without a second draw of color */}
      <mesh geometry={geometry}>
        <meshBasicMaterial wireframe transparent opacity={0.10} color="#0a0e16" />
      </mesh>
    </group>
  );
}

function Axes({ size = 3.4, xLabel, yLabel, zLabel }) {
  const g = '#9aa7bd';
  return (
    <group>
      <Line points={[[-size, 0, 0], [size, 0, 0]]} color={g} lineWidth={1.2} />
      <Line points={[[0, 0, -size], [0, 0, size]]} color={g} lineWidth={1.2} />
      <Line points={[[0, 0, 0], [0, size, 0]]} color={g} lineWidth={1.2} />
      {xLabel && <Text position={[size + 0.35, 0, 0]} fontSize={0.34} color="#5b6880" anchorX="left">{xLabel}</Text>}
      {yLabel && <Text position={[0, 0, size + 0.35]} fontSize={0.34} color="#5b6880" anchorX="left">{yLabel}</Text>}
      {zLabel && <Text position={[0, size + 0.4, 0]} fontSize={0.34} color="#5b6880" anchorX="left">{zLabel}</Text>}
    </group>
  );
}

// Gentle, slow auto-rotation that conveys the surface is 3D. It stops the moment
// the user grabs the OrbitControls (handled by makeDefault + damping).
function Rig({ children }) {
  const ref = useRef();
  useFrame((_, delta) => { if (ref.current) ref.current.rotation.y += delta * 0.12; });
  return <group ref={ref}>{children}</group>;
}

export default function Surface3DImpl({ kind = 'concave', height = 380, xLabel, yLabel, zLabel, accent }) {
  return (
    <div style={{ height }}>
      <Canvas camera={{ position: [5.5, 4.6, 6], fov: 42 }} dpr={[1, 2]}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[6, 9, 4]} intensity={0.7} />
        <directionalLight position={[-5, 3, -4]} intensity={0.25} />
        <Rig>
          <SurfaceMesh kind={kind} accent={accent} />
          <Axes xLabel={xLabel} yLabel={yLabel} zLabel={zLabel} />
        </Rig>
        <OrbitControls enablePan={false} enableZoom makeDefault enableDamping />
      </Canvas>
    </div>
  );
}
