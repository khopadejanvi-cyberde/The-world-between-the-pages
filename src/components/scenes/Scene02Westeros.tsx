import React, { useState } from 'react';
import { GREAT_HOUSES, LOCATIONS_DATA } from '../../data/researchData';
import { HouseRecord, LocationRecord } from '../../types';
import { Shield, MapPin, Eye, Compass, Flame, Snowflake } from 'lucide-react';

interface Scene02Props {
  onOpenSource: (sourceId: string) => void;
}

export const Scene02Westeros: React.FC<Scene02Props> = ({ onOpenSource }) => {
  const [selectedHouse, setSelectedHouse] = useState<HouseRecord>(GREAT_HOUSES[0]);
  const [selectedLocation, setSelectedLocation] = useState<LocationRecord | null>(null);
  const [activeContinent, setActiveContinent] = useState<'Westeros' | 'Essos'>('Westeros');

  return (
    <section
      id="scene-02-westeros"
      className="min-h-screen py-16 px-4 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] mb-2">
            <span>Scene 02</span>
            <span>•</span>
            <span>Cartography & Realm Structure</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Welcome to Westeros
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
            A spoiler-light mental map of the Known World: the Nine Great Houses, royal claims
            to the Iron Throne, and the primordial supernatural threats at the periphery.
          </p>
        </div>

        {/* Continent Toggle */}
        <div className="flex items-center gap-2 bg-[var(--bg-secondary)] p-1 rounded-lg border border-[var(--border-subtle)] text-xs font-medium self-start md:self-auto">
          <button
            onClick={() => setActiveContinent('Westeros')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeContinent === 'Westeros'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-xs font-semibold'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Westeros (Seven Kingdoms)
          </button>
          <button
            onClick={() => setActiveContinent('Essos')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeContinent === 'Essos'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-xs font-semibold'
                : 'text-[var(--text-secondary)]'
            }`}
          >
            Essos (Across Narrow Sea)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Stylized Map Viewport */}
        <div className="lg:col-span-7 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Map Grid Background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2c2723_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Map Controls & Badges */}
          <div className="flex items-center justify-between z-10 mb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
              <Compass className="w-4 h-4 text-[var(--accent-bronze)]" />
              <span>Cartographic Projection: {activeContinent}</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
              Policy: Spoiler-Light
            </span>
          </div>

          {/* Stylized Interactive Map Region Canvas */}
          <div className="relative h-80 sm:h-96 w-full rounded-xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)] overflow-hidden flex items-center justify-center p-4">
            {activeContinent === 'Westeros' ? (
              <div className="w-full h-full flex flex-col justify-between py-2">
                {/* The Wall at the Top */}
                <div
                  onClick={() => setSelectedLocation(LOCATIONS_DATA.find(l => l.name === 'The Wall') || null)}
                  className="w-full py-2 bg-sky-900/15 border-y-2 border-dashed border-sky-600/40 rounded flex items-center justify-between px-3 cursor-pointer hover:bg-sky-900/25 transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-800 dark:text-sky-300">
                    <Snowflake className="w-3.5 h-3.5" />
                    <span>The Wall (300 Leagues of Ice)</span>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">Night’s Watch</span>
                </div>

                {/* The North / Winterfell */}
                <div
                  onClick={() => {
                    const stark = GREAT_HOUSES.find(h => h.name === 'Stark');
                    if (stark) setSelectedHouse(stark);
                  }}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    selectedHouse.name === 'Stark'
                      ? 'bg-slate-200/80 dark:bg-slate-800 border-slate-500 shadow-sm'
                      : 'bg-slate-100/50 dark:bg-slate-900/40 border-slate-300/40 hover:bg-slate-200/50'
                  }`}
                >
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[var(--text-primary)]">The North</span>
                    <span className="font-mono text-[10px] text-[var(--text-muted)]">Seat: Winterfell</span>
                  </div>
                  <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">House Stark • "Winter Is Coming"</p>
                </div>

                {/* Central Westeros (Riverlands, Vale, Westerlands) */}
                <div className="grid grid-cols-3 gap-2">
                  <div
                    onClick={() => {
                      const lann = GREAT_HOUSES.find(h => h.name === 'Lannister');
                      if (lann) setSelectedHouse(lann);
                    }}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer text-xs ${
                      selectedHouse.name === 'Lannister'
                        ? 'bg-red-100/80 dark:bg-red-950/60 border-red-600 shadow-sm'
                        : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-red-50/50'
                    }`}
                  >
                    <span className="font-bold block">Westerlands</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Casterly Rock</span>
                  </div>

                  <div
                    onClick={() => {
                      const tully = GREAT_HOUSES.find(h => h.name === 'Tully');
                      if (tully) setSelectedHouse(tully);
                    }}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer text-xs ${
                      selectedHouse.name === 'Tully'
                        ? 'bg-blue-100/80 dark:bg-blue-950/60 border-blue-600 shadow-sm'
                        : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-blue-50/50'
                    }`}
                  >
                    <span className="font-bold block">Riverlands</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Riverrun</span>
                  </div>

                  <div
                    onClick={() => {
                      const arryn = GREAT_HOUSES.find(h => h.name === 'Arryn');
                      if (arryn) setSelectedHouse(arryn);
                    }}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer text-xs ${
                      selectedHouse.name === 'Arryn'
                        ? 'bg-sky-100/80 dark:bg-sky-950/60 border-sky-600 shadow-sm'
                        : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-sky-50/50'
                    }`}
                  >
                    <span className="font-bold block">The Vale</span>
                    <span className="text-[10px] text-[var(--text-muted)]">The Eyrie</span>
                  </div>
                </div>

                {/* Capital & Crownlands */}
                <div
                  onClick={() => setSelectedLocation(LOCATIONS_DATA.find(l => l.name === "King's Landing") || null)}
                  className="p-2.5 rounded-lg bg-amber-100/60 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 flex items-center justify-between cursor-pointer hover:bg-amber-100 transition-colors text-xs"
                >
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-300">
                    <MapPin className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                    <span>King’s Landing (The Iron Throne)</span>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">The Red Keep</span>
                </div>

                {/* Southern Kingdoms (Reach, Stormlands, Dorne) */}
                <div className="grid grid-cols-3 gap-2">
                  <div
                    onClick={() => {
                      const tyrell = GREAT_HOUSES.find(h => h.name === 'Tyrell');
                      if (tyrell) setSelectedHouse(tyrell);
                    }}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer text-xs ${
                      selectedHouse.name === 'Tyrell'
                        ? 'bg-emerald-100/80 dark:bg-emerald-950/60 border-emerald-600 shadow-sm'
                        : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-emerald-50/50'
                    }`}
                  >
                    <span className="font-bold block">The Reach</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Highgarden</span>
                  </div>

                  <div
                    onClick={() => {
                      const baratheon = GREAT_HOUSES.find(h => h.name === 'Baratheon');
                      if (baratheon) setSelectedHouse(baratheon);
                    }}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer text-xs ${
                      selectedHouse.name === 'Baratheon'
                        ? 'bg-yellow-100/80 dark:bg-yellow-950/60 border-yellow-600 shadow-sm'
                        : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-yellow-50/50'
                    }`}
                  >
                    <span className="font-bold block">Stormlands</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Storm’s End</span>
                  </div>

                  <div
                    onClick={() => {
                      const martell = GREAT_HOUSES.find(h => h.name === 'Martell');
                      if (martell) setSelectedHouse(martell);
                    }}
                    className={`p-2.5 rounded-lg border transition-all cursor-pointer text-xs ${
                      selectedHouse.name === 'Martell'
                        ? 'bg-orange-100/80 dark:bg-orange-950/60 border-orange-600 shadow-sm'
                        : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:bg-orange-50/50'
                    }`}
                  >
                    <span className="font-bold block">Dorne</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Sunspear</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Essos View */
              <div className="w-full h-full flex flex-col justify-around py-4">
                <div className="bg-amber-950/10 dark:bg-amber-950/40 p-4 rounded-xl border border-amber-800/20 text-center">
                  <Flame className="w-6 h-6 mx-auto mb-1 text-amber-600" />
                  <h4 className="font-serif-display font-bold text-sm text-[var(--text-primary)]">
                    The Continent of Essos
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    Free Cities (Braavos, Pentos, Volantis), the Dothraki Sea, and the ancient smoking ruins of the Valyrian Freehold.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div
                    onClick={() => {
                      const targ = GREAT_HOUSES.find(h => h.name === 'Targaryen');
                      if (targ) setSelectedHouse(targ);
                    }}
                    className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-red-600 cursor-pointer"
                  >
                    <strong className="block text-[var(--accent-crimson)]">House Targaryen Heritage</strong>
                    <span className="text-[11px] text-[var(--text-secondary)]">Exiled across the Narrow Sea</span>
                  </div>
                  <div
                    onClick={() => setSelectedLocation(LOCATIONS_DATA.find(l => l.name === 'Dragonstone') || null)}
                    className="p-3 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent-bronze)] cursor-pointer"
                  >
                    <strong className="block text-[var(--accent-bronze)]">Dragonstone Outpost</strong>
                    <span className="text-[11px] text-[var(--text-secondary)]">Ancestral seat in the bay</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Supernatural Layer Status */}
          <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[var(--text-muted)] font-mono">
            <span>Supernatural Layer: Dragons • The Wall • The Others • Valyrian Magic</span>
            <button
              onClick={() => onOpenSource('S02')}
              className="text-[var(--accent-crimson)] hover:underline"
            >
              Author World Overview [S02] →
            </button>
          </div>
        </div>

        {/* Right: Selected Great House or Location Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* House Selector Tabs */}
          <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)]">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase block mb-2">
              Select Great House
            </span>
            <div className="flex flex-wrap gap-1.5">
              {GREAT_HOUSES.map((house) => (
                <button
                  key={house.name}
                  onClick={() => {
                    setSelectedHouse(house);
                    setSelectedLocation(null);
                  }}
                  className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all ${
                    selectedHouse.name === house.name && !selectedLocation
                      ? 'bg-[var(--accent-crimson)] text-white shadow-xs'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)]'
                  }`}
                >
                  {house.name}
                </button>
              ))}
            </div>
          </div>

          {/* House Detail Inspector */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-sm flex-1">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
                  Region: {selectedHouse.region}
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
                  House {selectedHouse.name}
                </h3>
              </div>
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm font-serif-display font-bold"
                style={{ backgroundColor: selectedHouse.color }}
              >
                {selectedHouse.name.charAt(0)}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)] mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Official Words (Motto)
              </span>
              <p className="font-serif-literary text-lg italic text-[var(--accent-crimson)] font-semibold mt-0.5">
                "{selectedHouse.words}"
              </p>
            </div>

            <div className="space-y-3 text-xs text-[var(--text-secondary)]">
              <div>
                <span className="font-mono font-semibold text-[var(--text-primary)]">Seat of Power:</span>{' '}
                {selectedHouse.seat}
              </div>
              <div>
                <span className="font-mono font-semibold text-[var(--text-primary)]">Heraldic Sigil:</span>{' '}
                {selectedHouse.sigil}
              </div>
              <p className="leading-relaxed pt-1 text-[var(--text-primary)]">
                {selectedHouse.description}
              </p>
            </div>

            {/* Context Location Info if Clicked */}
            {selectedLocation && (
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] bg-blue-50/60 dark:bg-blue-950/40 p-3 rounded-lg">
                <div className="flex items-center gap-1.5 font-bold text-xs text-blue-900 dark:text-blue-200">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Pinned Location: {selectedLocation.name}</span>
                </div>
                <p className="text-[11px] text-blue-800 dark:text-blue-300 mt-1">
                  {selectedLocation.significance}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
