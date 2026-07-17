"use client";

import { useEffect, useMemo, useState } from "react";
import { geoNaturalEarth1, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import type { FeatureCollection, Feature, Geometry } from "geojson";
import { motion, useReducedMotion } from "framer-motion";

type RegionId = "americas" | "europe" | "africa" | "middle-east" | "asia-pacific";

interface Hub {
  id: string;
  region: RegionId;
  label: string;
  coords: [number, number]; // [lon, lat]
}

const WIDTH = 980;
const HEIGHT = 520;

const REGION_COLORS: Record<RegionId, { fill: string; stroke: string; hub: string }> = {
  americas: { fill: "#2F9E9E", stroke: "#1B6F6F", hub: "#2F9E9E" },
  europe: { fill: "#4C7FD4", stroke: "#2F5AA8", hub: "#4C7FD4" },
  africa: { fill: "#E8A317", stroke: "#B07810", hub: "#E8A317" },
  "middle-east": { fill: "#D45B7A", stroke: "#A03D58", hub: "#D45B7A" },
  "asia-pacific": { fill: "#3FA66A", stroke: "#2A7348", hub: "#3FA66A" },
};

const MUTED = { fill: "#C5CBD3", stroke: "#9AA3AD" };

/** Country name (as in world-atlas) → connected region */
const COUNTRY_REGION: Record<string, RegionId> = {
  // Americas
  Canada: "americas",
  "United States of America": "americas",
  Mexico: "americas",
  Brazil: "americas",
  Argentina: "americas",
  Chile: "americas",
  Colombia: "americas",
  Peru: "americas",
  Venezuela: "americas",
  Ecuador: "americas",
  Bolivia: "americas",
  Paraguay: "americas",
  Uruguay: "americas",
  Guyana: "americas",
  Suriname: "americas",
  "Costa Rica": "americas",
  Panama: "americas",
  Guatemala: "americas",
  Honduras: "americas",
  Nicaragua: "americas",
  "El Salvador": "americas",
  Belize: "americas",
  Cuba: "americas",
  Jamaica: "americas",
  Haiti: "americas",
  "Dominican Rep.": "americas",
  "Puerto Rico": "americas",
  Greenland: "americas",

  // Europe
  France: "europe",
  Portugal: "europe",
  Spain: "europe",
  Germany: "europe",
  Italy: "europe",
  "United Kingdom": "europe",
  Ireland: "europe",
  Netherlands: "europe",
  Belgium: "europe",
  Switzerland: "europe",
  Austria: "europe",
  Poland: "europe",
  Sweden: "europe",
  Norway: "europe",
  Finland: "europe",
  Denmark: "europe",
  Czechia: "europe",
  Slovakia: "europe",
  Hungary: "europe",
  Romania: "europe",
  Bulgaria: "europe",
  Greece: "europe",
  Croatia: "europe",
  Serbia: "europe",
  Slovenia: "europe",
  "Bosnia and Herz.": "europe",
  Albania: "europe",
  Macedonia: "europe",
  "N. Macedonia": "europe",
  Estonia: "europe",
  Latvia: "europe",
  Lithuania: "europe",
  Ukraine: "europe",
  Belarus: "europe",
  Moldova: "europe",
  Luxembourg: "europe",
  Iceland: "europe",

  // Africa
  Algeria: "africa",
  Angola: "africa",
  Ghana: "africa",
  Egypt: "africa",
  Morocco: "africa",
  Tunisia: "africa",
  Libya: "africa",
  Nigeria: "africa",
  "South Africa": "africa",
  Kenya: "africa",
  Ethiopia: "africa",
  Tanzania: "africa",
  Uganda: "africa",
  Sudan: "africa",
  "S. Sudan": "africa",
  Somalia: "africa",
  Senegal: "africa",
  Mali: "africa",
  Niger: "africa",
  Chad: "africa",
  Cameroon: "africa",
  "Côte d'Ivoire": "africa",
  "Ivory Coast": "africa",
  Guinea: "africa",
  "Burkina Faso": "africa",
  Benin: "africa",
  Togo: "africa",
  "Sierra Leone": "africa",
  Liberia: "africa",
  Mauritania: "africa",
  "W. Sahara": "africa",
  Congo: "africa",
  "Dem. Rep. Congo": "africa",
  Gabon: "africa",
  "Eq. Guinea": "africa",
  Rwanda: "africa",
  Burundi: "africa",
  Zambia: "africa",
  Zimbabwe: "africa",
  Botswana: "africa",
  Namibia: "africa",
  Mozambique: "africa",
  Malawi: "africa",
  Madagascar: "africa",
  Eritrea: "africa",
  Djibouti: "africa",
  "Central African Rep.": "africa",
  "Central African Republic": "africa",

  // Middle East
  "United Arab Emirates": "middle-east",
  Bahrain: "middle-east",
  Iraq: "middle-east",
  Israel: "middle-east",
  "Saudi Arabia": "middle-east",
  Qatar: "middle-east",
  Kuwait: "middle-east",
  Oman: "middle-east",
  Yemen: "middle-east",
  Jordan: "middle-east",
  Lebanon: "middle-east",
  Syria: "middle-east",
  Iran: "middle-east",
  Turkey: "middle-east",
  Palestine: "middle-east",
  Cyprus: "middle-east",

  // Asia Pacific
  India: "asia-pacific",
  China: "asia-pacific",
  Indonesia: "asia-pacific",
  Kazakhstan: "asia-pacific",
  Japan: "asia-pacific",
  "South Korea": "asia-pacific",
  "North Korea": "asia-pacific",
  "Korea": "asia-pacific",
  Mongolia: "asia-pacific",
  Pakistan: "asia-pacific",
  Bangladesh: "asia-pacific",
  "Sri Lanka": "asia-pacific",
  Nepal: "asia-pacific",
  Bhutan: "asia-pacific",
  Myanmar: "asia-pacific",
  Thailand: "asia-pacific",
  Vietnam: "asia-pacific",
  Laos: "asia-pacific",
  Cambodia: "asia-pacific",
  Malaysia: "asia-pacific",
  Singapore: "asia-pacific",
  Philippines: "asia-pacific",
  Brunei: "asia-pacific",
  "Timor-Leste": "asia-pacific",
  Taiwan: "asia-pacific",
  Afghanistan: "asia-pacific",
  Uzbekistan: "asia-pacific",
  Turkmenistan: "asia-pacific",
  Kyrgyzstan: "asia-pacific",
  Tajikistan: "asia-pacific",
  Australia: "asia-pacific",
  "New Zealand": "asia-pacific",
  "Papua New Guinea": "asia-pacific",
  Fiji: "asia-pacific",
  "Solomon Is.": "asia-pacific",
  "New Caledonia": "asia-pacific",
  Russia: "asia-pacific",
};

const hubs: Hub[] = [
  { id: "canada", region: "americas", label: "Canada", coords: [-96, 56] },
  { id: "brazil", region: "americas", label: "Brazil", coords: [-51, -10] },
  { id: "europe", region: "europe", label: "Europe", coords: [10, 48] },
  { id: "africa", region: "africa", label: "Africa", coords: [18, 5] },
  { id: "uae", region: "middle-east", label: "UAE", coords: [54.5, 24] },
  { id: "india", region: "asia-pacific", label: "India", coords: [78, 22] },
  { id: "china", region: "asia-pacific", label: "China", coords: [105, 35] },
];

const routes: [string, string][] = [
  ["canada", "europe"],
  ["europe", "uae"],
  ["uae", "india"],
  ["india", "china"],
  ["europe", "africa"],
  ["uae", "africa"],
  ["canada", "brazil"],
];

const legend: { id: RegionId; label: string }[] = [
  { id: "americas", label: "Americas" },
  { id: "europe", label: "Europe" },
  { id: "africa", label: "Africa" },
  { id: "middle-east", label: "Middle East" },
  { id: "asia-pacific", label: "Asia Pacific" },
];

function resolveRegion(name?: string): RegionId | null {
  if (!name) return null;
  if (COUNTRY_REGION[name]) return COUNTRY_REGION[name];
  // fuzzy fallbacks for abbreviated atlas names
  const key = Object.keys(COUNTRY_REGION).find((k) => name.startsWith(k) || k.startsWith(name));
  return key ? COUNTRY_REGION[key] : null;
}

function arcD(
  projection: ReturnType<typeof geoNaturalEarth1>,
  a: [number, number],
  b: [number, number],
) {
  const pa = projection(a);
  const pb = projection(b);
  if (!pa || !pb) return null;
  const [x1, y1] = pa;
  const [x2, y2] = pb;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy) || 1;
  const lift = Math.min(90, dist * 0.28);
  const cx = mx + (-dy / dist) * lift * 0.15;
  const cy = my - lift;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

export function WorldMap() {
  const reduced = useReducedMotion();
  const [countries, setCountries] = useState<FeatureCollection<Geometry> | null>(null);
  const [active, setActive] = useState<RegionId | null>(null);
  const [hoverCountry, setHoverCountry] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/data/countries-110m.json")
      .then((r) => r.json())
      .then((topology: Topology) => {
        if (cancelled) return;
        const geo = feature(
          topology,
          topology.objects.countries as GeometryCollection,
        ) as FeatureCollection<Geometry>;
        setCountries(geo);
      })
      .catch(() => setCountries(null));
    return () => {
      cancelled = true;
    };
  }, []);

  const { projection, path } = useMemo(() => {
    const proj = geoNaturalEarth1()
      .scale(168)
      .translate([WIDTH / 2, HEIGHT / 2 + 18]);
    return { projection: proj, path: geoPath(proj) };
  }, []);

  const hubById = useMemo(
    () => Object.fromEntries(hubs.map((h) => [h.id, h])) as Record<string, Hub>,
    [],
  );

  return (
    <div className="relative h-full w-full overflow-hidden bg-[radial-gradient(ellipse_at_30%_20%,#e8f4fb_0%,#d5ebf5_40%,#c5e0ef_100%)]">
      {!countries && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-accent text-xs font-bold uppercase tracking-widest text-hub-gold">Loading map…</p>
        </div>
      )}

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-full w-full"
        role="img"
        aria-label="Real world map with colored continents showing Divinity Impex global presence"
      >
        <defs>
          <filter id="hub-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="ocean-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9fd4ef" />
            <stop offset="50%" stopColor="#7ebfe3" />
            <stop offset="100%" stopColor="#5aa8d4" />
          </linearGradient>
          <linearGradient id="americas-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4EC5C5" />
            <stop offset="100%" stopColor="#2F9E9E" />
          </linearGradient>
          <linearGradient id="europe-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7BA3E8" />
            <stop offset="100%" stopColor="#4C7FD4" />
          </linearGradient>
          <linearGradient id="africa-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F0C14D" />
            <stop offset="100%" stopColor="#E8A317" />
          </linearGradient>
          <linearGradient id="middle-east-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E888A0" />
            <stop offset="100%" stopColor="#D45B7A" />
          </linearGradient>
          <linearGradient id="asia-pacific-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6BCF8E" />
            <stop offset="100%" stopColor="#3FA66A" />
          </linearGradient>
        </defs>

        {/* Ocean */}
        <rect width={WIDTH} height={HEIGHT} fill="url(#ocean-grad)" />

        {countries?.features.map((f: Feature<Geometry>, i: number) => {
          const name = f.properties?.name as string | undefined;
          const region = resolveRegion(name);
          const hot = !active || (region && active === region);
          const colors = region ? REGION_COLORS[region] : MUTED;
          const fill = region
            ? `url(#${region}-grad)`
            : MUTED.fill;
          const d = path(f as GeoPermissibleObjects);
          if (!d) return null;

          return (
            <motion.path
              key={f.id ?? name ?? i}
              d={d}
              fill={fill}
              fillOpacity={
                region
                  ? hot
                    ? 0.95
                    : 0.35
                  : 0.55
              }
              stroke={region && hot ? colors.stroke : "rgba(255,255,255,0.75)"}
              strokeWidth={region && hot ? 0.85 : 0.45}
              className="cursor-pointer outline-none transition-[fill-opacity] duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.002, 0.4) }}
              onMouseEnter={() => {
                if (region) setActive(region);
                if (name) setHoverCountry(name);
              }}
              onMouseLeave={() => {
                setActive(null);
                setHoverCountry(null);
              }}
            >
              <title>{name}</title>
            </motion.path>
          );
        })}

        {/* Trade routes */}
        {routes.map(([fromId, toId], i) => {
          const from = hubById[fromId];
          const to = hubById[toId];
          if (!from || !to) return null;
          const d = arcD(projection, from.coords, to.coords);
          if (!d) return null;
          const hot = !active || active === from.region || active === to.region;
          return (
            <motion.path
              key={`${fromId}-${toId}`}
              d={d}
              fill="none"
              stroke={REGION_COLORS[from.region].hub}
              strokeWidth={hot ? 2.2 : 1}
              strokeOpacity={hot ? 0.85 : 0.2}
              strokeDasharray="5 7"
              strokeLinecap="round"
              filter="url(#hub-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.35 + i * 0.08 }}
            />
          );
        })}

        {/* Hubs */}
        {hubs.map((hub, i) => {
          const p = projection(hub.coords);
          if (!p) return null;
          const [x, y] = p;
          const hot = !active || active === hub.region;
          const hubColor = REGION_COLORS[hub.region].hub;
          return (
            <g
              key={hub.id}
              opacity={hot ? 1 : 0.3}
              className="cursor-pointer"
              onMouseEnter={() => setActive(hub.region)}
              onMouseLeave={() => setActive(null)}
            >
              {!reduced && (
                <motion.circle
                  cx={x}
                  cy={y}
                  r={14}
                  fill="none"
                  stroke={hubColor}
                  strokeWidth={1.2}
                  initial={{ opacity: 0.55, scale: 0.5 }}
                  animate={{ opacity: 0, scale: 2 }}
                  transition={{ duration: 2.3, repeat: Infinity, delay: i * 0.25 }}
                />
              )}
              <circle cx={x} cy={y} r={5.5} fill={hubColor} stroke="#fff" strokeWidth={2} filter="url(#hub-glow)" />
              <rect
                x={x + 9}
                y={y - 16}
                width={hub.label.length * 6.4 + 10}
                height={15}
                rx={3}
                fill="rgba(255,255,255,0.95)"
                stroke={hubColor}
                strokeOpacity={0.35}
              />
              <text
                x={x + 14}
                y={y - 5}
                fill="#1c1917"
                fontSize={9}
                fontWeight={700}
                letterSpacing="0.06em"
                fontFamily="var(--font-montserrat), system-ui, sans-serif"
              >
                {hub.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hoverCountry && (
        <div className="pointer-events-none absolute left-4 top-4 rounded-lg border border-white/60 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
          <p className="font-accent text-[10px] font-bold uppercase tracking-widest text-hub-slate">Country</p>
          <p className="text-sm font-semibold text-hub-charcoal">{hoverCountry}</p>
        </div>
      )}

      {/* Color legend */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
        {legend.map((item) => {
          const selected = active === item.id;
          const tone = REGION_COLORS[item.id].fill;
          return (
            <button
              key={item.id}
              type="button"
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-accent text-[9px] font-bold uppercase tracking-wider shadow-sm transition-colors ${
                selected
                  ? "border-transparent text-white"
                  : "border-black/10 bg-white/95 text-hub-charcoal hover:border-black/20"
              }`}
              style={selected ? { backgroundColor: tone } : undefined}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: selected ? "#fff" : tone }} />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
