import React, { useEffect, useCallback } from 'react';
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

export const SCENE_ELEMENT_MAP: Record<string, string> = {
  '00': 'scene-00-threshold',
  '01': 'scene-01-books',
  '02': 'scene-02-westeros',
  '03': 'scene-03-people',
  '04': 'scene-04-history',
  '05': 'scene-05-author',
  '06': 'scene-06-adaptation',
  '07': 'scene-07-numbers',
  '08': 'scene-08-cultural-afterlife',
  '09': 'scene-09-live-westeros',
  '10': 'scene-10-choose-path',
  '11': 'scene-11-still-being-written',
};

interface AsoiafStoryViewProps {
  activeScene: string;
  setActiveScene: (sceneId: string) => void;
  onOpenSources: () => void;
  onOpenSourceItem: (sourceId: string) => void;
  onOpenGotEditions?: () => void;
  onBack?: () => void;
}

const SceneDivider: React.FC<{ nextSceneNum?: string; nextSceneTitle?: string }> = ({
  nextSceneNum,
  nextSceneTitle,
}) => (
  <div className="relative py-12 flex items-center justify-center select-none" aria-hidden="true">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-[var(--border-subtle)] opacity-60" />
    </div>
    <div className="relative px-4 bg-[var(--bg-primary)] text-[var(--accent-bronze)] flex items-center gap-2.5 text-xs font-serif-literary italic">
      <span className="text-[var(--accent-crimson)] opacity-75">❦</span>
      {nextSceneNum && nextSceneTitle && (
        <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
          Scene {nextSceneNum} • {nextSceneTitle}
        </span>
      )}
      <span className="text-[var(--accent-crimson)] opacity-75">❦</span>
    </div>
  </div>
);

export const AsoiafStoryView: React.FC<AsoiafStoryViewProps> = ({
  activeScene,
  setActiveScene,
  onOpenSources,
  onOpenSourceItem,
  onOpenGotEditions,
  onBack,
}) => {
  // Smoothly scroll to a specific scene when selected from timeline rail or selector
  const scrollToScene = useCallback(
    (sceneId: string) => {
      setActiveScene(sceneId);
      const elementId = SCENE_ELEMENT_MAP[sceneId];
      if (elementId) {
        const el = document.getElementById(elementId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    },
    [setActiveScene]
  );

  // Scroll spy: Update activeScene as the user scrolls through the single vertical page
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Bottom of page check
          if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 120
          ) {
            setActiveScene('11');
            ticking = false;
            return;
          }

          // Top scroll offset considering header height and buffer
          const scrollPos = window.scrollY + 200;
          let currentId = '00';

          for (const [id, elementId] of Object.entries(SCENE_ELEMENT_MAP)) {
            const el = document.getElementById(elementId);
            if (el) {
              const top = el.offsetTop;
              if (scrollPos >= top) {
                currentId = id;
              }
            }
          }

          setActiveScene(currentId);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run an initial check after mounting
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [setActiveScene]);

  return (
    <div id="asoiaf-story-container" className="relative min-h-screen">
      {/* Non-negotiable Right-Side Desktop Story Timeline Rail (and mobile bottom controller) */}
      <StoryTimelineRail
        activeScene={activeScene}
        onSelectScene={scrollToScene}
      />

      {/* Single Vertical Scroll Document containing all 12 scenes sequentially */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 pb-32">
        {/* Scene 00 — The Threshold */}
        <div id="scene-00-container">
          <Scene00Threshold
            onExplore={() => scrollToScene('01')}
            onOpenSources={onOpenSources}
            onBack={onBack}
          />
        </div>

        <SceneDivider nextSceneNum="01" nextSceneTitle="The Books" />

        {/* Scene 01 — The Published Literature */}
        <div id="scene-01-container">
          <Scene01Books
            onOpenSource={onOpenSourceItem}
            onOpenGotEditions={onOpenGotEditions}
          />
        </div>

        <SceneDivider nextSceneNum="02" nextSceneTitle="Welcome to Westeros" />

        {/* Scene 02 — Welcome to Westeros */}
        <div id="scene-02-container">
          <Scene02Westeros onOpenSource={onOpenSourceItem} />
        </div>

        <SceneDivider nextSceneNum="03" nextSceneTitle="The People" />

        {/* Scene 03 — The People */}
        <div id="scene-03-container">
          <Scene03People onOpenSource={onOpenSourceItem} />
        </div>

        <SceneDivider nextSceneNum="04" nextSceneTitle="History Beneath the Story" />

        {/* Scene 04 — Historiographical Architecture */}
        <div id="scene-04-container">
          <Scene04History onOpenSource={onOpenSourceItem} />
        </div>

        <SceneDivider nextSceneNum="05" nextSceneTitle="Inside the Author's Head" />

        {/* Scene 05 — Inside the Author's Head */}
        <div id="scene-05-container">
          <Scene05Author onOpenSource={onOpenSourceItem} />
        </div>

        <SceneDivider nextSceneNum="06" nextSceneTitle="From Page to Screen" />

        {/* Scene 06 — Television Adaptation */}
        <div id="scene-06-container">
          <Scene06Adaptation onOpenSource={onOpenSourceItem} />
        </div>

        <SceneDivider nextSceneNum="07" nextSceneTitle="The Numbers" />

        {/* Scene 07 — Editorial Data Storytelling */}
        <div id="scene-07-container">
          <Scene07Numbers onOpenSource={onOpenSourceItem} />
        </div>

        <SceneDivider nextSceneNum="08" nextSceneTitle="The Cultural Afterlife" />

        {/* Scene 08 — The Cultural Afterlife */}
        <div id="scene-08-container">
          <Scene08CulturalAfterlife onOpenSource={onOpenSourceItem} />
        </div>

        <SceneDivider nextSceneNum="09" nextSceneTitle="Live Westeros" />

        {/* Scene 09 — Live Westeros */}
        <div id="scene-09-container">
          <Scene09LiveWesteros onOpenSource={onOpenSourceItem} />
        </div>

        <SceneDivider nextSceneNum="10" nextSceneTitle="Choose Your Path" />

        {/* Scene 10 — Choose Your Path */}
        <div id="scene-10-container">
          <Scene10ChooseYourPath
            onSelectScene={scrollToScene}
            onOpenSource={onOpenSourceItem}
          />
        </div>

        <SceneDivider nextSceneNum="11" nextSceneTitle="Still Being Written" />

        {/* Scene 11 — The Open Manuscript */}
        <div id="scene-11-container">
          <Scene11StillBeingWritten
            onOpenSources={onOpenSources}
            onBackToStart={() => scrollToScene('00')}
          />
        </div>
      </main>
    </div>
  );
};
