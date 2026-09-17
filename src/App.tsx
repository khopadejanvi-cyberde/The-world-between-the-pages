import React, { useState, useEffect } from 'react';
import { ActiveView } from './types';
import { Header } from './components/Header';
import { SourceDrawer } from './components/SourceDrawer';
import { LandingView } from './components/views/LandingView';
import { EpicFantasyView } from './components/views/EpicFantasyView';
import { AsoiafStoryView } from './components/views/AsoiafStoryView';

export function App() {
  const [activeView, setActiveView] = useState<ActiveView>('landing');
  const [activeScene, setActiveScene] = useState<string>('00');
  // Mandate: "The landing page MUST default to LIGHT MODE."
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isSourceDrawerOpen, setIsSourceDrawerOpen] = useState<boolean>(false);
  const [highlightSourceId, setHighlightSourceId] = useState<string | null>(null);

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

  const handleSelectAsoiaf = () => {
    setActiveView('asoiaf-story');
    setActiveScene('00');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Top Application Header */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        activeScene={activeScene}
        setActiveScene={setActiveScene}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSources={handleOpenSourceRegistry}
      />

      {/* Main Content Area */}
      <div className="flex-1">
        {activeView === 'landing' && (
          <LandingView
            onNavigate={(view) => {
              setActiveView(view);
              if (view === 'asoiaf-story') setActiveScene('00');
            }}
            onOpenSources={handleOpenSourceRegistry}
          />
        )}

        {activeView === 'epic-fantasy' && (
          <EpicFantasyView
            onSelectAsoiaf={handleSelectAsoiaf}
            onNavigateHome={() => setActiveView('landing')}
          />
        )}

        {activeView === 'asoiaf-story' && (
          <AsoiafStoryView
            activeScene={activeScene}
            setActiveScene={setActiveScene}
            onOpenSources={handleOpenSourceRegistry}
            onOpenSourceItem={handleOpenSpecificSource}
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
