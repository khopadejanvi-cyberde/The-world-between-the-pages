import React, { useState } from 'react';
import { BOOKS_DATA } from '../../data/researchData';
import { BookRecord } from '../../types';
import {
  BookOpen,
  Clock,
  FileText,
  Bookmark,
  Info,
  ExternalLink,
  Download,
  ShoppingBag,
  Tv,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface Scene01Props {
  onOpenSource: (sourceId: string) => void;
  onOpenGotEditions?: () => void;
}

export const Scene01Books: React.FC<Scene01Props> = ({ onOpenSource, onOpenGotEditions }) => {
  const [selectedBook, setSelectedBook] = useState<BookRecord | null>(BOOKS_DATA[0]);

  const GOT_PDF_LINK =
    'https://oceanofpdf.com/genres/high-fantasy/pdf-epub-a-game-of-thrones-a-song-of-ice-and-fire-1-download-22898046509/';
  const GOT_FLIPKART_LINK = 'https://www.flipkart.com/a-game-of-thrones/p/itm34e93adde2d82';
  const GOT_AMAZON_LINK =
    'https://www.amazon.in/Game-Thrones-Song-Ice-Fire/dp/0007428545?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A15DBATYR506U3';
  const GOT_KITABAY_LINK =
    'https://kitabay.com/products/a-game-of-thrones-a-song-of-ice-and-fire-4?variant=44859014414559&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AU7gw4U3brJdpETN68TIsXm26KDjfz0i7OIdBNqKcloQyhJGg0Ew7WK0-0c';
  const GOT_HOTSTAR_LINK =
    'https://www.hotstar.com/in/shows/game-of-thrones/1971002880?utm_source=gwa';

  return (
    <section
      id="scene-01-books"
      className="min-h-screen py-16 px-4 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center scroll-mt-20"
    >
      {/* Section Header */}
      <div className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--accent-crimson)] mb-2">
          <span>Scene 01</span>
          <span>•</span>
          <span>The Published Literature</span>
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
          The Books of Ice and Fire
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
          Five published masterworks, two planned volumes, spanning 4,249 pages and over 1.7 million words.
          Click any volume to inspect publication metrics and themes.
        </p>
      </div>

      {/* Publication Gaps Metric Bar */}
      <div className="bg-[var(--bg-surface)] p-4 rounded-2xl border border-[var(--border-subtle)] shadow-xs mb-8">
        <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)] mb-2">
          <span>1996: A Game of Thrones</span>
          <span>Publication Timeline & Gaps</span>
          <span>2011: A Dance with Dragons</span>
        </div>
        <div className="grid grid-cols-5 gap-1.5 h-3">
          <div className="bg-[#466B88] rounded-l-full" title="Book 1 (1996)" />
          <div className="bg-[#935429]" title="Book 2 (1998/99)" />
          <div className="bg-[#2F6A52]" title="Book 3 (2000)" />
          <div className="bg-[#8A2B2B]" title="Book 4 (2005 - 5 yr gap)" />
          <div className="bg-[#68457C] rounded-r-full" title="Book 5 (2011 - 6 yr gap)" />
        </div>
        <div className="flex justify-between items-center text-[11px] text-[var(--text-secondary)] mt-2">
          <span>Book 1 → 2: <strong>2 yrs</strong></span>
          <span>Book 2 → 3: <strong>1-2 yrs</strong></span>
          <span>Book 3 → 4: <strong>5 yrs</strong></span>
          <span>Book 4 → 5: <strong>6 yrs</strong></span>
          <span className="text-[var(--accent-crimson)] font-semibold">Book 5 → 6: <strong>In Progress</strong></span>
        </div>
      </div>

      {/* Digital Archival Bookshelf */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
        {BOOKS_DATA.map((book) => {
          const isSelected = selectedBook?.book_no === book.book_no;
          const isForthcoming = book.status !== 'published';

          return (
            <button
              key={book.book_no}
              id={`book-card-${book.book_no}`}
              onClick={() => setSelectedBook(book)}
              className={`text-left p-3.5 rounded-xl border transition-all duration-300 flex flex-col justify-between relative group ${
                isSelected
                  ? 'bg-[var(--bg-surface)] border-[var(--accent-crimson)] shadow-md -translate-y-1'
                  : 'bg-[var(--bg-card)] border-[var(--border-subtle)] hover:border-[var(--accent-bronze)] hover:-translate-y-0.5'
              }`}
            >
              {/* Spine Color Header Indicator */}
              <div
                className="h-1.5 w-full rounded-full mb-3"
                style={{ backgroundColor: book.coverAccent }}
              />

              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase block">
                  Vol. 0{book.book_no}
                </span>
                <h3 className="font-serif-display text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-crimson)] transition-colors line-clamp-2">
                  {book.title}
                </h3>
                <span className="text-[11px] text-[var(--text-secondary)] font-mono block mt-1">
                  {book.publication.split('-')[0]}
                </span>
              </div>

              <div className="mt-4 pt-2 border-t border-[var(--border-subtle)]/60 flex items-center justify-between text-[11px]">
                {book.book_no === 1 ? (
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[var(--accent-crimson)] text-white font-semibold tracking-tight">
                    PDF • Buy • Show
                  </span>
                ) : isForthcoming ? (
                  <span className="font-mono text-[10px] uppercase text-amber-600 dark:text-amber-400 font-semibold">
                    {book.status}
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    {book.us_first_pages} pp
                  </span>
                )}
                <Bookmark className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent-crimson)]" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Book Inspection Panel */}
      {selectedBook && (
        <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 shadow-md transition-all">
          <div className="flex flex-col lg:flex-row gap-6 justify-between">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-3">
                <span
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: selectedBook.coverAccent }}
                />
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  Volume {selectedBook.book_no}: {selectedBook.title}
                </h3>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] uppercase">
                  {selectedBook.status}
                </span>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-serif-literary text-base sm:text-lg italic">
                "{selectedBook.description}"
              </p>

              {/* Key Themes Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-[var(--text-muted)] font-mono">Narrative Threads:</span>
                {selectedBook.keyThemes.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-0.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Book Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 min-w-[260px] bg-[var(--bg-secondary)]/50 p-4 rounded-xl border border-[var(--border-subtle)]">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-1">
                  <FileText className="w-3.5 h-3.5" />
                  <span>First Edition Pages</span>
                </div>
                <div className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                  {selectedBook.us_first_pages ? `${selectedBook.us_first_pages} pages` : 'Pending'}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Chapters</span>
                </div>
                <div className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                  {selectedBook.chapters ? `${selectedBook.chapters} chapters` : 'Pending'}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Audio Runtime</span>
                </div>
                <div className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                  {selectedBook.audio_duration || 'Pending'}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-1">
                  <Info className="w-3.5 h-3.5" />
                  <span>Est. Word Count</span>
                </div>
                <div className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                  {selectedBook.estimated_words
                    ? selectedBook.estimated_words.toLocaleString()
                    : 'Pending'}
                </div>
              </div>
            </div>
          </div>

          {/* Special Subsection Feature: A Game of Thrones Media & Purchase Channels */}
          {selectedBook.book_no === 1 && (
            <div
              id="got-book-1-access-panel"
              className="mt-6 pt-5 border-t border-[var(--border-subtle)] bg-gradient-to-r from-[var(--bg-secondary)]/80 via-[var(--bg-surface)] to-[var(--bg-secondary)]/80 p-5 rounded-xl border border-[var(--accent-crimson)]/30 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--accent-crimson)]" />
                  <h4 className="font-serif-display font-bold text-sm sm:text-base text-[var(--text-primary)]">
                    A Game of Thrones — Access Directory (PDF, Purchase & Stream)
                  </h4>
                </div>
                {onOpenGotEditions && (
                  <button
                    onClick={onOpenGotEditions}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent-crimson)] hover:bg-[var(--accent-crimson-light)] text-white text-xs font-semibold shadow-xs transition-all self-start sm:self-auto"
                  >
                    <span>Open Dedicated Editions Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <p className="text-xs text-[var(--text-secondary)] mb-4">
                Explore according to your preferred medium: download the digital PDF/EPUB, buy the physical book across major retailers, or stream the official television series on Hotstar.
              </p>

              {/* 3 Modalities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* 1. Digital PDF */}
                <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#466B88] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-primary)] mb-1">
                      <span className="flex items-center gap-1.5">
                        <Download className="w-4 h-4 text-[#466B88]" />
                        <span>Free Digital PDF / EPUB</span>
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#466B88]/15 text-[#466B88]">
                        eBook
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mb-3">
                      Complete uncompressed text from OceanofPDF.
                    </p>
                  </div>
                  <a
                    href={GOT_PDF_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-[#466B88] hover:bg-[#39566E] text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Download PDF / EPUB</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* 2. Physical Book Purchase with Retailers */}
                <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--accent-crimson)]/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-primary)] mb-1">
                      <span className="flex items-center gap-1.5">
                        <ShoppingBag className="w-4 h-4 text-[var(--accent-crimson)]" />
                        <span>Buy Physical Book</span>
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[var(--accent-crimson)]/15 text-[var(--accent-crimson)]">
                        Print
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mb-2">
                      Order paperback/hardcover from verified sellers:
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <a
                      href={GOT_AMAZON_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 rounded-md bg-[var(--bg-secondary)] hover:bg-[var(--border-subtle)] text-[11px] font-medium text-center text-[var(--text-primary)] transition-colors flex items-center justify-center gap-1"
                      title="Buy on Amazon India"
                    >
                      <span>Amazon</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                    <a
                      href={GOT_FLIPKART_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 rounded-md bg-[var(--bg-secondary)] hover:bg-[var(--border-subtle)] text-[11px] font-medium text-center text-[var(--text-primary)] transition-colors flex items-center justify-center gap-1"
                      title="Buy on Flipkart"
                    >
                      <span>Flipkart</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                    <a
                      href={GOT_KITABAY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 rounded-md bg-[var(--bg-secondary)] hover:bg-[var(--border-subtle)] text-[11px] font-medium text-center text-[var(--text-primary)] transition-colors flex items-center justify-center gap-1"
                      title="Buy on Kitabay"
                    >
                      <span>Kitabay</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                  </div>
                </div>

                {/* 3. Official Web Show */}
                <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[#102B4E] transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-primary)] mb-1">
                      <span className="flex items-center gap-1.5">
                        <Tv className="w-4 h-4 text-[#102B4E] dark:text-blue-400" />
                        <span>Watch Web Show</span>
                      </span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#102B4E]/15 text-[#102B4E] dark:text-blue-400">
                        HBO Series
                      </span>
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mb-3">
                      Stream Season 1 (Book 1) in 4K on Disney+ Hotstar.
                    </p>
                  </div>
                  <a
                    href={GOT_HOTSTAR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-lg bg-[#102B4E] hover:bg-[#183d6e] text-white text-xs font-semibold transition-all flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>Watch on Hotstar</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
            <span>Official Publisher Data: Penguin Random House & Bantam Books</span>
            <button
              onClick={() => onOpenSource('S01')}
              className="text-[var(--accent-crimson)] hover:underline flex items-center gap-1"
            >
              Verify Source [S01, S07] →
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
