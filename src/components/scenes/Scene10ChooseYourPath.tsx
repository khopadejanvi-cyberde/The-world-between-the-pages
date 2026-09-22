import React, { useState } from 'react';
import { BookOpen, Tv, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Scene10Props {
  onSelectScene: (sceneId: string) => void;
  onOpenSource: (sourceId: string) => void;
}

export const Scene10ChooseYourPath: React.FC<Scene10Props> = ({ onSelectScene, onOpenSource }) => {
  const [activePath, setActivePath] = useState<'read' | 'watch' | 'explore'>('read');

  const paths = [
    {
      id: 'read' as const,
      title: 'THE READER’S PATH',
      tagline: 'Immerse in the literary prose & mosaic internal monologues',
      icon: BookOpen,
      color: 'border-[#466B88]',
      steps: [
        {
          num: '1',
          label: 'Begin with Novel 1',
          detail: 'Start with A Game of Thrones (1996, 694 pages). Experience Ned Stark’s perspective and Bran’s inaugural fall.'
        },
        {
          num: '2',
          label: 'Chronological Main Cycle',
          detail: 'Read through A Clash of Kings, A Storm of Swords, A Feast for Crows, and A Dance with Dragons.'
        },
        {
          num: '3',
          label: 'Prequel Novellas',
          detail: 'Read A Knight of the Seven Kingdoms for a warm, character-driven journey through chivalric Westeros.'
        },
        {
          num: '4',
          label: 'Archival Dynasty',
          detail: 'Complete your study with Fire & Blood for the complete Targaryen history from Aegon’s Conquest.'
        }
      ],
      actionLabel: 'Explore The Books in Scene 01',
      targetScene: '01'
    },
    {
      id: 'watch' as const,
      title: 'THE VIEWER’S PATH',
      tagline: 'Experience cinematic prestige television and orchestral grandeur',
      icon: Tv,
      color: 'border-[#8C2525]',
      steps: [
        {
          num: '1',
          label: 'Game of Thrones Season 1',
          detail: 'Sean Bean anchors the faithful 10-episode translation of Book 1. Witness the birth of Daenerys’s dragons.'
        },
        {
          num: '2',
          label: 'The War of the Five Kings',
          detail: 'Follow Seasons 2 through 4 for the critical peak of the Benioff & Weiss adaptation.'
        },
        {
          num: '3',
          label: 'Divergence Era',
          detail: 'Seasons 5 through 8 transition past published book blueprints to an original television conclusion.'
        },
        {
          num: '4',
          label: 'House of the Dragon',
          detail: 'Stream the prequel series detailing the devastating dragon civil war 172 years prior.'
        }
      ],
      actionLabel: 'Examine Screen Adaptation in Scene 06',
      targetScene: '06'
    },
    {
      id: 'explore' as const,
      title: 'THE EXPLORER’S PATH',
      tagline: 'Navigate cartography, heraldry, and millennia of world lore',
      icon: Compass,
      color: 'border-[#3F6E5B]',
      steps: [
        {
          num: '1',
          label: 'Cartography & Nine Houses',
          detail: 'Explore the Seven Kingdoms regional boundaries, heraldic words, and seats of power.'
        },
        {
          num: '2',
          label: 'The POV Constellation',
          detail: 'Examine the 24 viewpoints and mathematical relationship networks that structure the drama.'
        },
        {
          num: '3',
          label: 'Deep Millennial History',
          detail: 'Discover the Long Night, the Doom of Valyria, and the rise and fall of ancient dynasties.'
        },
        {
          num: '4',
          label: 'The Living Culture',
          detail: 'Track contemporary stage plays, companion compendiums, and ongoing HBO productions.'
        }
      ],
      actionLabel: 'Open Realm Cartography in Scene 02',
      targetScene: '02'
    }
  ];

  const currentPathData = paths.find((p) => p.id === activePath)!;

  return (
    <section
      id="scene-10-choose-path"
      className="min-h-screen py-16 px-4 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center scroll-mt-20"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] mb-2">
          <span>Scene 10</span>
          <span>•</span>
          <span>Navigational Pathways</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
          Choose Your Path
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-xl mx-auto">
          Tailored navigation routes through the mythos. No medium is ranked above another; select the orientation that matches your curiosity.
        </p>
      </div>

      {/* Path Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {paths.map((p) => {
          const Icon = p.icon;
          const isSelected = p.id === activePath;

          return (
            <button
              key={p.id}
              id={`path-choice-${p.id}`}
              onClick={() => setActivePath(p.id)}
              className={`p-6 rounded-2xl border text-left transition-all duration-300 relative ${
                isSelected
                  ? `bg-[var(--bg-surface)] shadow-lg ring-2 ring-[var(--accent-crimson)]/30 ${p.color}`
                  : 'bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--accent-bronze)] hover:-translate-y-1'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent-crimson)]">
                  <Icon className="w-6 h-6" />
                </div>
                {isSelected && (
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[var(--accent-crimson)] text-white font-bold">
                    Active Path
                  </span>
                )}
              </div>

              <h3 className="font-serif-display font-bold text-lg text-[var(--text-primary)] mb-1">
                {p.title}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {p.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detailed Path Steps Roadmap */}
      <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)] mb-6">
          <div>
            <span className="text-xs font-mono uppercase text-[var(--accent-crimson)] font-semibold">
              Curated Itinerary
            </span>
            <h3 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
              {currentPathData.title}
            </h3>
          </div>

          <button
            onClick={() => onSelectScene(currentPathData.targetScene)}
            className="px-5 py-2.5 rounded-full bg-[var(--accent-crimson)] hover:bg-[var(--accent-crimson-light)] text-white font-medium text-xs transition-all flex items-center gap-2 self-start sm:self-auto shadow-sm"
          >
            <span>{currentPathData.actionLabel}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentPathData.steps.map((step) => (
            <div
              key={step.num}
              className="p-4 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[var(--accent-crimson)] block mb-1">
                  Phase 0{step.num}
                </span>
                <h4 className="font-serif-display font-bold text-sm text-[var(--text-primary)] mb-1">
                  {step.label}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
