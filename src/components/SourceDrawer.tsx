import React, { useState } from 'react';
import { X, ExternalLink, ShieldCheck, Search, Filter } from 'lucide-react';
import { SOURCES_REGISTRY, RESEARCH_FREEZE_DATE } from '../data/researchData';
import { SourceRecord } from '../types';

interface SourceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  highlightSourceId?: string | null;
}

export const SourceDrawer: React.FC<SourceDrawerProps> = ({
  isOpen,
  onClose,
  highlightSourceId,
}) => {
  const [search, setSearch] = useState('');
  const [gradeFilter, setGradeFilter] = useState<string>('all');

  if (!isOpen) return null;

  const filteredSources = SOURCES_REGISTRY.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.notes.toLowerCase().includes(search.toLowerCase()) ||
      s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.type.toLowerCase().includes(search.toLowerCase());
    const matchesGrade = gradeFilter === 'all' || s.grade === gradeFilter;
    return matchesSearch && matchesGrade;
  });

  const getGradeBadge = (grade: SourceRecord['grade']) => {
    switch (grade) {
      case 'A':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';
      case 'B':
        return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800';
      case 'C':
        return 'bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800';
      case 'D':
        return 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800';
      case 'E':
        return 'bg-stone-200 text-stone-700 border-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:border-stone-700';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getGradeMeaning = (grade: string) => {
    switch (grade) {
      case 'A': return 'Primary author/publisher/broadcaster/award body';
      case 'B': return 'Official institutional / industry source';
      case 'C': return 'Academic & peer-reviewed research';
      case 'D': return 'Reputable journalism / contemporary trade reporting';
      case 'E': return 'Structured secondary / fan dataset';
      default: return '';
    }
  };

  return (
    <div
      id="evidence-drawer-overlay"
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div
        id="evidence-drawer-container"
        className="w-full max-w-2xl bg-[var(--bg-primary)] h-full overflow-y-auto shadow-2xl border-l border-[var(--border-subtle)] p-6 sm:p-8 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[var(--border-subtle)] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🏛️</span>
                <h2 className="font-serif-display text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
                  Evidence & Source Registry
                </h2>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                Source of truth as frozen on <span className="font-mono font-semibold">{RESEARCH_FREEZE_DATE}</span>.
                No unverified claims or synthetic data.
              </p>
            </div>
            <button
              id="close-evidence-drawer-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
              aria-label="Close evidence drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Evidence Hierarchy Guide */}
          <div className="bg-[var(--bg-secondary)]/70 rounded-xl p-3.5 border border-[var(--border-subtle)] mb-6 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-[var(--text-primary)] mb-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Evidence Grade Hierarchy
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-[var(--text-secondary)]">
              <div><strong className="font-mono">Grade A:</strong> Primary Author, Broadcaster, or Award Body</div>
              <div><strong className="font-mono">Grade B:</strong> Institutional Industry Reporting</div>
              <div><strong className="font-mono">Grade C:</strong> Academic Peer-Reviewed Scholarship</div>
              <div><strong className="font-mono">Grade D:</strong> Reputable Journalism (NYT, Guardian)</div>
              <div><strong className="font-mono">Grade E:</strong> Verified Secondary / Fan Corpus</div>
            </div>
          </div>

          {/* Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row gap-2.5 mb-6">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="source-search-input"
                type="text"
                placeholder="Search sources (title, ID, note)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg pl-9 pr-3 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-crimson)]"
              />
            </div>

            <div className="flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <select
                id="grade-filter-select"
                value={gradeFilter}
                onChange={(e) => setGradeFilter(e.target.value)}
                className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg px-2.5 py-2 text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-crimson)]"
              >
                <option value="all">All Grades (A - E)</option>
                <option value="A">Grade A (Primary)</option>
                <option value="B">Grade B (Industry)</option>
                <option value="C">Grade C (Academic)</option>
                <option value="D">Grade D (Journalism)</option>
                <option value="E">Grade E (Secondary)</option>
              </select>
            </div>
          </div>

          {/* Source List */}
          <div className="space-y-3">
            {filteredSources.map((source) => {
              const isHighlighted = highlightSourceId === source.id;
              return (
                <div
                  key={source.id}
                  id={`source-card-${source.id}`}
                  className={`p-4 rounded-xl border transition-all ${
                    isHighlighted
                      ? 'bg-[var(--accent-crimson)]/5 border-[var(--accent-crimson)] ring-2 ring-[var(--accent-crimson)]/30'
                      : 'bg-[var(--bg-surface)] border-[var(--border-subtle)] hover:border-[var(--accent-bronze)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[var(--accent-crimson)] px-1.5 py-0.5 rounded bg-[var(--bg-secondary)]">
                        {source.id}
                      </span>
                      <h3 className="font-serif-display font-medium text-sm text-[var(--text-primary)]">
                        {source.title}
                      </h3>
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${getGradeBadge(
                        source.grade
                      )}`}
                      title={getGradeMeaning(source.grade)}
                    >
                      Grade {source.grade}
                    </span>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] mb-2.5 leading-relaxed">
                    {source.notes}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]/50">
                    <span className="font-mono">Type: {source.type}</span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--accent-crimson)] hover:underline font-medium"
                    >
                      <span>External Archive</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}

            {filteredSources.length === 0 && (
              <div className="text-center py-12 text-sm text-[var(--text-muted)]">
                No sources match your filter criteria.
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] flex items-center justify-between">
          <span>Frozen Registry — 24 Verified Sources</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--border-subtle)] text-[var(--text-primary)] font-medium transition-colors"
          >
            Close Drawer
          </button>
        </div>
      </div>
    </div>
  );
};
