import React, { useState, useEffect } from 'react';
import { ActiveView } from './types';
import { Header } from './components/Header';
import { SourceDrawer } from './components/SourceDrawer';
import { LandingView } from './components/views/LandingView';
import { EpicFantasyView } from './components/views/EpicFantasyView';
import { AsoiafStoryView } from './components/views/AsoiafStoryView';
import { GameOfThronesEditionsView } from './components/views/GameOfThronesEditionsView';

export function App() {
  const [activeView, setActiveView] = useState<ActiveView>('landing');
  const [activeScene, setActiveScene] = useState<string>('00');
  // Mandate: "The landing page MUST default to LIGHT MODE."
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isSourceDrawerOpen, setIsSourceDrawerOpen] = useState<boolean>(false);
  const [highlightSourceId, setHighlightSourceId] = useState<string | null>(null);
  const [viewHistory, setViewHistory] = useState<ActiveView[]>([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenSpecificSource = (sourceId: string) => {
    setHighlightSourceId(sourceId);
    setIsSourceDrawerOpen(true);
  };

  const handleOpenSourceRegistry = () => {
    setHighlightSourceId(null);
    setIsSourceDrawerOpen(true);
  };

  const handleNavigate = (newView: ActiveView, sceneId?: string) => {
    if (newView !== activeView) {
      setViewHistory((prev) => [...prev, activeView]);
      setActiveView(newView);
    }
    if (sceneId) {
      setActiveScene(sceneId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    if (viewHistory.length > 0) {
      const prevView = viewHistory[viewHistory.length - 1];
      setViewHistory((prev) => prev.slice(0, -1));
      setActiveView(prevView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveView('landing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectAsoiaf = () => {
    handleNavigate('asoiaf-story', '00');
  };

  const handleOpenGotEditions = () => {
    handleNavigate('game-of-thrones-editions');
  };

  const handleSceneChange = (sceneId: string) => {
    setActiveScene(sceneId);
    if (activeView === 'asoiaf-story') {
      const elementIdMap: Record<string, string> = {
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
      const targetId = elementIdMap[sceneId];
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Top Application Header */}
      <Header
        activeView={activeView}
        setActiveView={(view) => handleNavigate(view)}
        activeScene={activeScene}
        setActiveScene={handleSceneChange}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSources={handleOpenSourceRegistry}
      />

      {/* Main Content Area */}
      <div className="flex-1">
        {activeView === 'landing' && (
          <LandingView
            onNavigate={(view) => handleNavigate(view, view === 'asoiaf-story' ? '00' : undefined)}
            onOpenSources={handleOpenSourceRegistry}
            onBack={handleBack}
            canGoBack={viewHistory.length > 0}
          />
        )}

        {activeView === 'epic-fantasy' && (
          <EpicFantasyView
            onSelectAsoiaf={handleSelectAsoiaf}
            onNavigateHome={() => handleNavigate('landing')}
            onBack={handleBack}
          />
        )}

        {activeView === 'asoiaf-story' && (
          <AsoiafStoryView
            activeScene={activeScene}
            setActiveScene={setActiveScene}
            onOpenSources={handleOpenSourceRegistry}
            onOpenSourceItem={handleOpenSpecificSource}
            onOpenGotEditions={handleOpenGotEditions}
            onBack={handleBack}
          />
        )}

        {activeView === 'game-of-thrones-editions' && (
          <GameOfThronesEditionsView
            onBackToStory={() => {
              handleBack();
              setTimeout(() => {
                const el = document.getElementById('scene-01-books');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 100);
            }}
            onNavigateHome={() => handleNavigate('landing')}
          />
        )}
      </div>

      {/* Slide-out Source & Evidence Registry Drawer */}
      <SourceDrawer
        isOpen={isSourceDrawerOpen}
        onClose={() => setIsSourceDrawerOpen(false)}
        highlightSourceId={highlightSourceId}
      />
    </div>
  );
}

export default App;
