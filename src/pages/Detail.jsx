import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, ContactShadows } from '@react-three/drei';
import { Bookmark } from '../components/Bookmark';
import { useParams, Link } from 'react-router-dom';
import { getBookmarkData } from '../utils/bookmarkData';

function Detail() {
  const { id } = useParams();
  const bookmarkData = getBookmarkData(id);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/blackground.jpg')" }}>
      <div className="absolute top-0 left-0 w-full p-4 z-20 flex justify-between items-start pointer-events-none">
        <Link to="/" className="pointer-events-auto bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm md:text-base text-slate-700 font-medium hover:bg-white transition-colors whitespace-nowrap">
          ← Trở lại
        </Link>
        <div className="text-right bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg">
          <h1 className="text-xl font-bold text-white">
            Bookmark #{id}
          </h1>
          <p className="text-white/90 text-sm">
            Kéo chuột để xoay • Lăn chuột để zoom
          </p>
        </div>
      </div>

      {/* Image Source - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-2xl max-w-sm text-left">
        <p className="text-xs uppercase tracking-[0.1 em] text-slate-300 mb-2">
          Nguồn
        </p>
        <p className="text-sm leading-6 text-white/95">
          {bookmarkData.source}
        </p>
        {bookmarkData.sourceUrl ? (
          <a
            href={bookmarkData.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-sky-200 hover:text-white hover:underline"
          >
            Xem nguồn
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5h6v6" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 3v6" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18" />
            </svg>
          </a>
        ) : null}
      </div>

      <Canvas
        shadows
        camera={{ position: [0, 0, 12], fov: 45 }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Environment preset="studio" />

          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />

          <Float
            speed={2} // Animation speed
            rotationIntensity={0.5} // XYZ rotation intensity
            floatIntensity={0.5} // Up/down float intensity
          >
            <Bookmark id={id} />
          </Float>

          <ContactShadows
            position={[0, -4, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4.5}
          />

          <OrbitControls
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
            minDistance={4}
            maxDistance={20}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Detail;
