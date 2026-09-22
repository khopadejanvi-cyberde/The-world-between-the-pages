import React from 'react';
import {
  BookOpen,
  Download,
  ShoppingBag,
  Tv,
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Shield,
  Layers,
  Star
} from 'lucide-react';

interface GameOfThronesEditionsViewProps {
  onBackToStory: () => void;
  onNavigateHome: () => void;
}

export const GameOfThronesEditionsView: React.FC<GameOfThronesEditionsViewProps> = ({
  onBackToStory,
  onNavigateHome
}) => {
  const PDF_LINK =
    'https://oceanofpdf.com/genres/high-fantasy/pdf-epub-a-game-of-thrones-a-song-of-ice-and-fire-1-download-22898046509/';
  const FLIPKART_LINK = 'https://www.flipkart.com/a-game-of-thrones/p/itm34e93adde2d82';
  const AMAZON_LINK =
    'https://www.amazon.in/Game-Thrones-Song-Ice-Fire/dp/0007428545?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A15DBATYR506U3';
  const KITABAY_LINK =
    'https://kitabay.com/products/a-game-of-thrones-a-song-of-ice-and-fire-4?variant=44859014414559&country=IN&currency=INR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AU7gw4U3brJdpETN68TIsXm26KDjfz0i7OIdBNqKcloQyhJGg0Ew7WK0-0c';
  const HOTSTAR_SHOW_LINK =
    'https://www.hotstar.com/in/shows/game-of-thrones/1971002880?utm_source=gwa';

  return (
    <div id="got-editions-page" className="min-h-screen py-10 px-4 lg:px-8 max-w-7xl mx-auto">
      {/* Top Breadcrumb */}
      <div className="mb-6 pb-3 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
          <button
            onClick={onNavigateHome}
            className="hover:text-[var(--accent-crimson)] transition-colors cursor-pointer"
          >
            Digital Library
          </button>
          <span>/</span>
          <button
            onClick={onBackToStory}
            className="hover:text-[var(--accent-crimson)] transition-colors cursor-pointer"
          >
            A Song of Ice & Fire
          </button>
          <span>/</span>
          <span className="text-[var(--text-primary)] font-semibold">
            A Game of Thrones Access Hub
          </span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 shadow-md mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--accent-crimson)]/5 to-transparent rounded-bl-full pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-mono text-[var(--accent-crimson)] font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Volume 01 • Master Access Directory</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              A Game of Thrones
            </h1>

            <p className="font-serif-literary text-lg sm:text-xl text-[var(--text-secondary)] italic">
              "When you play the game of thrones, you win or you die. There is no middle ground."
            </p>

            <p className="text-sm text-[var(--text-muted)] leading-relaxed font-sans-ui max-w-2xl">
              By George R. R. Martin • Published August 1, 1996 • 694 First Edition Pages • 73 Chapters • 9 POV Perspectives.
              Choose your preferred medium below to begin reading the novel or stream the television adaptation.
            </p>

            {/* Back CTA Button */}
            <div className="pt-1">
              <button
                id="got-editions-back-btn"
                onClick={onBackToStory}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-surface)] hover:border-[var(--accent-crimson)] text-xs font-medium text-[var(--text-primary)] transition-all shadow-xs cursor-pointer"
                title="Go back to previous page"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[var(--accent-crimson)]" />
                <span>Back</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Free PDF & EPUB Available
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Paperback & Hardcover Stores
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Official HBO Season 1 Stream
              </span>
            </div>
          </div>

          {/* Quick Book Spec Column */}
          <div className="p-5 rounded-2xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)] text-xs font-mono space-y-2.5 w-full lg:w-72 shrink-0">
            <div className="text-[11px] font-bold text-[var(--text-primary)] uppercase tracking-wider pb-2 border-b border-[var(--border-subtle)]">
              Archival Registry Data
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Author:</span>
              <span className="text-[var(--text-primary)] font-semibold">George R. R. Martin</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Release Date:</span>
              <span className="text-[var(--text-primary)]">1996-08-01</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Word Count:</span>
              <span className="text-[var(--text-primary)]">~298,000 words</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Audio Duration:</span>
              <span className="text-[var(--text-primary)]">33h 48m</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Adaptation:</span>
              <span className="text-[var(--accent-crimson)] font-semibold">GoT Season 1</span>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Modalities: PDF, Physical Book, Web Show */}
      <div className="space-y-10">
        <div className="text-center sm:text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent-crimson)] font-semibold block mb-1">
            Audience Preferences
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Select Your Pathway
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
            Choose whether you prefer to download and read the electronic edition, purchase a collectible physical copy, or stream the televised adaptation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Free PDF / EPUB */}
          <div
            id="channel-pdf-epub"
            className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative group hover:border-[#466B88]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-[#466B88]/10 text-[#466B88]">
                  <Download className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#466B88]/15 text-[#466B88] font-bold">
                  Digital Edition
                </span>
              </div>

              <h3 className="font-serif-display text-xl font-bold text-[var(--text-primary)] mb-2">
                Download Free PDF / EPUB
              </h3>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                Read directly on your iPad, Kindle, smartphone, or desktop computer. Complete unabridged electronic text provided via OceanofPDF.
              </p>

              <div className="space-y-2 mb-6 text-xs text-[var(--text-secondary)] bg-[var(--bg-secondary)]/50 p-4 rounded-xl border border-[var(--border-subtle)]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Full 73 chapters with uncompressed formatting</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Compatible with Apple Books, Kindle, Moon+ Reader</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Instant browser download without account signup</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={PDF_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#466B88] hover:bg-[#39566E] text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm group-hover:shadow"
              >
                <span>Get PDF / EPUB on OceanofPDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] text-center text-[var(--text-muted)] block mt-2 font-mono">
                Direct external link to digital book repository
              </span>
            </div>
          </div>

          {/* Card 2: Physical Book Purchase */}
          <div
            id="channel-physical-book"
            className="rounded-3xl border-2 border-[var(--accent-crimson)]/40 bg-[var(--bg-surface)] p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-lg transition-all relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-[var(--accent-crimson)]/10 text-[var(--accent-crimson)]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[var(--accent-crimson)] text-white font-bold">
                  Physical Copies
                </span>
              </div>

              <h3 className="font-serif-display text-xl font-bold text-[var(--text-primary)] mb-2">
                Buy Physical Novel
              </h3>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                Add the tangible volume to your bookshelf. Compare verified online bookstores with domestic delivery.
              </p>

              {/* 3 Retailer Purchase Options */}
              <div className="space-y-3 mb-6">
                {/* Amazon India */}
                <a
                  href={AMAZON_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 hover:bg-[var(--bg-secondary)] hover:border-[var(--accent-crimson)] transition-all flex items-center justify-between group/link"
                >
                  <div>
                    <div className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                      <span>Amazon India</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-mono">
                        Prime
                      </span>
                    </div>
                    <span className="text-[11px] text-[var(--text-muted)]">
                      Paperback edition (ISBN: 0007428545)
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-crimson)] group-hover/link:translate-x-0.5 transition-transform" />
                </a>

                {/* Flipkart */}
                <a
                  href={FLIPKART_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 hover:bg-[var(--bg-secondary)] hover:border-[var(--accent-crimson)] transition-all flex items-center justify-between group/link"
                >
                  <div>
                    <div className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                      <span>Flipkart</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-700 dark:text-blue-300 font-mono">
                        Verified Seller
                      </span>
                    </div>
                    <span className="text-[11px] text-[var(--text-muted)]">
                      Official Harper Voyager Indian release
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-crimson)] group-hover/link:translate-x-0.5 transition-transform" />
                </a>

                {/* Kitabay */}
                <a
                  href={KITABAY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 hover:bg-[var(--bg-secondary)] hover:border-[var(--accent-crimson)] transition-all flex items-center justify-between group/link"
                >
                  <div>
                    <div className="text-xs font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                      <span>Kitabay</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono">
                        Specialist Bookshop
                      </span>
                    </div>
                    <span className="text-[11px] text-[var(--text-muted)]">
                      Curated editions & reader discounts
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-crimson)] group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <span className="text-[10px] text-center text-[var(--text-muted)] block font-mono">
                Select your preferred vendor above to purchase
              </span>
            </div>
          </div>

          {/* Card 3: Television Show on Hotstar */}
          <div
            id="channel-web-show"
            className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative group hover:border-[#102B4E]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-[#102B4E]/10 text-[#102B4E] dark:text-blue-400">
                  <Tv className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-[#102B4E]/15 text-[#102B4E] dark:text-blue-400 font-bold">
                  HBO Original Show
                </span>
              </div>

              <h3 className="font-serif-display text-xl font-bold text-[var(--text-primary)] mb-2">
                Watch Game of Thrones on Hotstar
              </h3>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-6">
                Experience the 10-episode premiere season that launched the global television era, starring Sean Bean and Peter Dinklage.
              </p>

              <div className="space-y-2 mb-6 text-xs text-[var(--text-secondary)] bg-[var(--bg-secondary)]/50 p-4 rounded-xl border border-[var(--border-subtle)]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Season 1 corresponds directly to Book 1 storyline</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Stream in 4K Ultra HD & Dolby Atmos surround</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Available on Disney+ Hotstar (India)</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={HOTSTAR_SHOW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#102B4E] hover:bg-[#183d6e] text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm group-hover:shadow"
              >
                <span>Stream on Disney+ Hotstar</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] text-center text-[var(--text-muted)] block mt-2 font-mono">
                Official streaming license via Warner Bros. Discovery & JioHotstar
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Context Card */}
      <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-xs">
        <h4 className="font-serif-display font-bold text-base text-[var(--text-primary)]">
          Explore the Archival Research System
        </h4>
        <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-2xl leading-relaxed">
          The interactive 12-scene scroll system documents the world maps, character relationships, historiography, and sales metrics behind George R. R. Martin's fantasy masterwork. Use the Back button at the top to return to the continuous story scroll.
        </p>
      </div>
    </div>
  );
};
