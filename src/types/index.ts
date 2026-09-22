export interface BookRecord {
  book_no: number;
  title: string;
  publication: string;
  us_first_pages: number | null;
  chapters: number | null;
  estimated_words: number | null;
  audio_duration: string | null;
  status: 'published' | 'forthcoming' | 'planned';
  coverAccent: string;
  description: string;
  keyThemes: string[];
}

export interface TvSeasonRecord {
  season: number;
  first_aired: string;
  last_aired: string;
  episodes: number;
  source_material: string;
  avg_us_viewers_millions: number;
  keyPlotArc: string;
}

export interface SalesRecord {
  year: number;
  period: string;
  metric: string;
  value: string;
  source: string;
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

export interface AwardRecord {
  work: string;
  award: string;
  year: string | number;
  category: string;
  result: string;
}

export interface HouseRecord {
  name: string;
  region: string;
  seat: string;
  sigil: string;
  words: string;
  color: string;
  description: string;
}

export interface CharacterRecord {
  name: string;
  type: string;
  house: string;
  povChapters: number;
  booksAppeared: string[];
  keyRelationship: string;
  epithet: string;
}

export interface LocationRecord {
  name: string;
  type: string;
  region: string;
  significance: string;
}

export interface TimelineEvent {
  period: string;
  event: string;
  era: 'ancient history' | 'dynastic history' | 'recent history' | 'main story';
  meaning: string;
  depthYear: string;
}

export interface ThemeRecord {
  id: string;
  theme: string;
  definition: string;
  evidence: string;
  author?: string;
  scholarship?: string;
  quantitative?: string;
  visual: string;
}

export interface AdaptationMilestone {
  date: string;
  milestone: string;
  category: 'Rights' | 'Production' | 'Broadcast' | 'Divergence';
  people_entities: string;
  detail: string;
}

export interface CurrentDevelopment {
  date: string;
  development: string;
  status: string;
  detail: string;
  source: string;
}

export interface SourceRecord {
  id: string;
  title: string;
  type: string;
  url: string;
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
  notes: string;
}

export interface SceneMeta {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  purpose: string;
}

export type ActiveView = 'landing' | 'epic-fantasy' | 'asoiaf-story' | 'game-of-thrones-editions';
