import { useEffect, useRef, useState } from "react";

const Globe = () => {
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [GlobeGL, setGlobeGL] = useState<any>(null);
  const [cities, setCities] = useState<any[]>([]);

  useEffect(() => {
    import("react-globe.gl").then((mod) => {
      setGlobeGL(() => mod.default);
    });
  }, []);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_populated_places_simple.geojson")
      .then((r) => r.json())
      .then((data) => {
        setCities(data.features);
      })
      .catch(() => {
        // Fallback cities
        setCities([
          { properties: { name: "Delhi", pop_max: 25000000 }, geometry: { coordinates: [77.2, 28.6] } },
          { properties: { name: "Mumbai", pop_max: 20000000 }, geometry: { coordinates: [72.8, 19.0] } },
          { properties: { name: "Lucknow", pop_max: 3500000 }, geometry: { coordinates: [80.9, 26.8] } },
          { properties: { name: "Moscow", pop_max: 12500000 }, geometry: { coordinates: [37.6, 55.7] } },
          { properties: { name: "Istanbul", pop_max: 15000000 }, geometry: { coordinates: [29.0, 41.0] } },
          { properties: { name: "Cairo", pop_max: 10000000 }, geometry: { coordinates: [31.2, 30.0] } },
          { properties: { name: "Tokyo", pop_max: 13960000 }, geometry: { coordinates: [139.7, 35.6] } },
          { properties: { name: "London", pop_max: 9000000 }, geometry: { coordinates: [-0.1, 51.5] } },
          { properties: { name: "New York", pop_max: 8400000 }, geometry: { coordinates: [-74.0, 40.7] } },
          { properties: { name: "Beijing", pop_max: 21500000 }, geometry: { coordinates: [116.4, 39.9] } },
        ]);
      });
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.2;
      controls.enableZoom = false;
      globeRef.current.pointOfView({ lat: 20, lng: 78, altitude: 2.5 }, 0);
    }
  }, [GlobeGL, cities]);

  if (!GlobeGL) {
    return <div className="w-[500px] h-[500px] rounded-full bg-muted animate-pulse" />;
  }

  return (
    <div ref={globeContainerRef} className="w-full h-full flex items-center justify-center">
      <GlobeGL
        ref={globeRef}
        width={700}
        height={700}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="#38bdf8"
        atmosphereAltitude={0.2}
        labelsData={cities}
        labelLat={(d: any) => d.geometry?.coordinates?.[1] ?? d.properties?.latitude ?? 0}
        labelLng={(d: any) => d.geometry?.coordinates?.[0] ?? d.properties?.longitude ?? 0}
        labelText={(d: any) => d.properties?.name ?? ""}
        labelSize={(d: any) => Math.sqrt((d.properties?.pop_max ?? 1000000) / 1000000) * 0.4 + 0.3}
        labelDotRadius={(d: any) => Math.sqrt((d.properties?.pop_max ?? 1000000) / 1000000) * 0.3 + 0.15}
        labelColor={() => "#f59e0b"}
        labelResolution={2}
        animateIn={true}
      />
    </div>
  );
};

export default Globe;
