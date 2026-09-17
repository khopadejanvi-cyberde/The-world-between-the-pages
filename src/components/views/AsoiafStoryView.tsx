import React, { useEffect } from 'react';
import { SCENE_METAS } from '../../data/researchData';
import { StoryTimelineRail } from '../StoryTimelineRail';
import { Scene00Threshold } from '../scenes/Scene00Threshold';
import { Scene01Books } from '../scenes/Scene01Books';
import { Scene02Westeros } from '../scenes/Scene02Westeros';
import { Scene03People } from '../scenes/Scene03People';
import { Scene04History } from '../scenes/Scene04History';
import { Scene05Author } from '../scenes/Scene05Author';
import { Scene06Adaptation } from '../scenes/Scene06Adaptation';
import { Scene07Numbers } from '../scenes/Scene07Numbers';
import { Scene08CulturalAfterlife } from '../scenes/Scene08CulturalAfterlife';
import { Scene09LiveWesteros } from '../scenes/Scene09LiveWesteros';
import { Scene10ChooseYourPath } from '../scenes/Scene10ChooseYourPath';
import { Scene11StillBeingWritten } from '../scenes/Scene11StillBeingWritten';
import { ChevronUp, ChevronDown, BookOpen } from 'lucide-react';

interface AsoiafStoryViewProps {
  activeScene: string;
  setActiveScene: (sceneId: string) => void;
  onOpenSources: () => void;
  onOpenSourceItem: (sourceId: string) => void;
}

export const AsoiafStoryView: React.FC<AsoiafStoryViewProps> = ({
  activeScene,
  setActiveScene,
  onOpenSources,
  onOpenSourceItem,
}) => {
  const currentIdx = SCENE_METAS.findIndex((s) => s.id === activeScene);
  const currentMeta = SCENE_METAS[currentIdx] || SCENE_METAS[0];

  // Scroll to top when scene changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeScene]);

  const handleNextScene = () => {
    if (currentIdx < SCENE_METAS.length - 1) {
      setActiveScene(SCENE_METAS[currentIdx + 1].id);
    }
  };

  const handlePrevScene = () => {
    if (currentIdx > 0) {
      setActiveScene(SCENE_METAS[currentIdx - 1].id);
    }
  };

  return (
    <div id="asoiaf-story-container" className="relative min-h-screen pb-24">
      {/* Non-negotiable Right-Side Desktop Story Timeline Rail */}
      <StoryTimelineRail
        activeScene={activeScene}
        onSelectScene={(id) => setActiveScene(id)}
      />

      {/* Active Scene Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8">
        {activeScene === '00' && (
          <Scene00Threshold
            onExplore={() => setActiveScene('01')}
            onOpenSources={onOpenSources}
          />
        )}
        {activeScene === '01' && (
          <Scene01Books onOpenSource={onOpenSourceItem} />
        )}
        {activeScene === '02' && (
          <Scene02Westeros onOpenSource={onOpenSourceItem} />
        )}
        {activeScene === '03' && (
          <Scene03People onOpenSource={onOpenSourceItem} />
        )}
        {activeScene === '04' && (
          <Scene04History onOpenSource={onOpenSourceItem} />
        )}
        {activeScene === '05' && (
          <Scene05Author onOpenSource={onOpenSourceItem} />
        )}
        {activeScene === '06' && (
          <Scene06Adaptation onOpenSource={onOpenSourceItem} />
        )}
        {activeScene === '07' && (
          <Scene07Numbers onOpenSource={onOpenSourceItem} />
        )}
        {activeScene === '08' && (
          <Scene08CulturalAfterlife onOpenSource={onOpenSourceItem} />
        )}
        {activeScene === '09' && (
          <Scene09LiveWesteros onOpenSource={onOpenSourceItem} />
        )}
        {activeScene === '10' && (
          <Scene10ChooseYourPath
            onSelectScene={(id) => setActiveScene(id)}
            onOpenSource={onOpenSourceItem}
          />
        )}
        {activeScene === '11' && (
          <Scene11StillBeingWritten
            onOpenSources={onOpenSources}
            onBackToStart={() => setActiveScene('00')}
          />
        )}

        {/* Inter-Scene Transition Controller Banner */}
        {activeScene !== '00' && (
          <div className="my-12 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-[var(--text-muted)] tracking-wider block">
                Current Scene {currentMeta.num} of 11
              </span>
              <h4 className="font-serif-display font-bold text-base text-[var(--text-primary)]">
                {currentMeta.title}
              </h4>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                {currentMeta.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 self-stretch sm:self-auto justify-between sm:justify-end">
              <button
                onClick={handlePrevScene}
                disabled={currentIdx === 0}
                className="px-4 py-2 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--border-subtle)] disabled:opacity-30 disabled:cursor-not-allowed text-xs font-mono font-medium text-[var(--text-primary)] transition-all flex items-center gap-1.5"
              >
                <ChevronUp className="w-4 h-4" />
                <span>Prev Scene</span>
              </button>

              <button
                onClick={handleNextScene}
                disabled={currentIdx === SCENE_METAS.length - 1}
                className="px-5 py-2 rounded-xl bg-[var(--accent-crimson)] hover:bg-[var(--accent-crimson-light)] disabled:opacity-30 disabled:cursor-not-allowed text-xs font-mono font-semibold text-white transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Next Scene</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
