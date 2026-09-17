import React from 'react';
import { SCENE_METAS } from '../data/researchData';

interface StoryTimelineRailProps {
  activeScene: string;
  onSelectScene: (sceneId: string) => void;
}

export const StoryTimelineRail: React.FC<StoryTimelineRailProps> = ({
  activeScene,
  onSelectScene,
}) => {
  const currentIndex = SCENE_METAS.findIndex((s) => s.id === activeScene);

  return (
    <>
      {/* Desktop Vertical Right-Side Spine */}
      <aside
        id="story-timeline-rail"
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end pointer-events-auto"
        aria-label="Story Progression Timeline"
      >
        <div className="bg-[var(--bg-surface)]/80 backdrop-blur-md border border-[var(--border-subtle)] p-3 rounded-2xl shadow-lg flex flex-col items-center">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2.5 writing-mode-vertical rotate-180 select-none">
            Timeline
          </div>

          <div className="relative flex flex-col items-center gap-4 py-1">
            {/* Background connecting track */}
            <div className="absolute top-2 bottom-2 w-[2px] bg-[var(--border-subtle)] -z-0" />

            {/* Completed active progress track line */}
            <div
              className="absolute top-2 w-[2px] bg-[var(--accent-crimson)] transition-all duration-500 -z-0"
              style={{
                height: `${Math.max(
                  0,
                  (currentIndex / (SCENE_METAS.length - 1)) * 100
                )}%`,
              }}
            />

            {SCENE_METAS.map((scene, idx) => {
              const isActive = scene.id === activeScene;
              const isCompleted = idx < currentIndex;

              return (
                <div key={scene.id} className="relative group flex items-center">
                  {/* Tooltip Label on Hover (left of bead) */}
                  <div className="absolute right-7 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-subtle)] rounded-lg px-2.5 py-1 text-xs shadow-md z-50 flex items-center gap-1.5">
                    <span className="font-mono text-[10px] text-[var(--accent-crimson)] font-bold">
                      {scene.num}
                    </span>
                    <span className="font-medium">{scene.title}</span>
                  </div>

                  {/* Bead / Node */}
                  <button
                    id={`timeline-bead-${scene.id}`}
                    onClick={() => onSelectScene(scene.id)}
                    aria-label={`Jump to scene ${scene.num}: ${scene.title}`}
                    className={`relative z-10 transition-all duration-300 rounded-full flex items-center justify-center focus:outline-none ${
                      isActive
                        ? 'w-6 h-6 bg-[var(--accent-crimson)] text-white ring-4 ring-[var(--accent-crimson)]/20 shadow-md scale-110'
                        : isCompleted
                        ? 'w-3.5 h-3.5 bg-[var(--accent-crimson)]/70 hover:scale-125'
                        : 'w-2.5 h-2.5 bg-[var(--text-muted)]/40 hover:bg-[var(--text-secondary)] hover:scale-125'
                    }`}
                  >
                    {isActive && (
                      <span className="text-[10px] font-mono font-bold leading-none">
                        {scene.num}
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-[10px] font-mono text-[var(--text-muted)] mt-2.5">
            {currentIndex + 1}/{SCENE_METAS.length}
          </div>
        </div>
      </aside>

      {/* Mobile/Tablet Compact Bottom Navigation Bar */}
      <div
        id="story-timeline-mobile"
        className="xl:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-[var(--bg-surface)]/95 backdrop-blur-md border border-[var(--border-subtle)] px-4 py-2 rounded-full shadow-xl flex items-center gap-3 max-w-[90vw]"
      >
        <button
          onClick={() => {
            const prevIdx = Math.max(0, currentIndex - 1);
            onSelectScene(SCENE_METAS[prevIdx].id);
          }}
          disabled={currentIndex === 0}
          className="text-xs px-2 py-1 rounded bg-[var(--bg-secondary)] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--accent-crimson)] hover:text-white transition-colors"
        >
          ← Prev
        </button>

        <div className="flex items-center gap-1 overflow-x-auto max-w-[180px] py-1 px-1 no-scrollbar">
          {SCENE_METAS.map((scene, idx) => {
            const isActive = scene.id === activeScene;
            return (
              <button
                key={scene.id}
                onClick={() => onSelectScene(scene.id)}
                className={`w-2.5 h-2.5 rounded-full transition-all shrink-0 ${
                  isActive
                    ? 'w-4 h-2.5 bg-[var(--accent-crimson)] rounded-full'
                    : idx < currentIndex
                    ? 'bg-[var(--accent-crimson)]/50'
                    : 'bg-[var(--text-muted)]/40'
                }`}
                aria-label={`Go to scene ${scene.num}`}
              />
            );
          })}
        </div>

        <span className="text-xs font-mono text-[var(--text-secondary)] whitespace-nowrap">
          {SCENE_METAS[currentIndex]?.num}: {SCENE_METAS[currentIndex]?.title}
        </span>

        <button
          onClick={() => {
            const nextIdx = Math.min(SCENE_METAS.length - 1, currentIndex + 1);
            onSelectScene(SCENE_METAS[nextIdx].id);
          }}
          disabled={currentIndex === SCENE_METAS.length - 1}
          className="text-xs px-2 py-1 rounded bg-[var(--bg-secondary)] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--accent-crimson)] hover:text-white transition-colors"
        >
          Next →
        </button>
      </div>
    </>
  );
};
