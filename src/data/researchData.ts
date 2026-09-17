import {
  BookRecord,
  TvSeasonRecord,
  SalesRecord,
  AwardRecord,
  HouseRecord,
  CharacterRecord,
  LocationRecord,
  TimelineEvent,
  ThemeRecord,
  AdaptationMilestone,
  CurrentDevelopment,
  SourceRecord,
  SceneMeta
} from '../types';

export const RESEARCH_FREEZE_DATE = '2026-09-16';

export const GENRE_FAMILIES = [
  {
    id: 'fantastical-worlds',
    name: 'FANTASTICAL WORLDS',
    description: 'Realms of magic, ancient legends, and boundless imagination.',
    subcategories: [
      { name: 'Epic Fantasy', active: true, route: 'epic-fantasy' },
      { name: 'Witches & Wizards', active: false },
      { name: 'Vampires & Immortals', active: false },
      { name: 'Fae, Fairies & Elves', active: false },
    ],
    motif: 'Dragon & Citadel'
  },
  {
    id: 'love-connection',
    name: 'LOVE & HUMAN CONNECTION',
    description: 'The tender and tumultuous bonds that define human passion.',
    subcategories: [
      { name: 'Contemporary Romance', active: false },
      { name: 'Fantasy Romance', active: false },
      { name: 'Sports Romance', active: false },
      { name: 'Historical Romance', active: false },
    ],
    motif: 'Letters & Constellations'
  },
  {
    id: 'secrets-shadows',
    name: 'SECRETS & SHADOWS',
    description: 'Enigmas, psychological tension, and intellectual labyrinths.',
    subcategories: [
      { name: 'Mystery', active: false },
      { name: 'Detective Fiction', active: false },
      { name: 'Psychological Thriller', active: false },
      { name: 'Crime Fiction', active: false },
      { name: 'Gothic Fiction', active: false },
      { name: 'Dark Academia', active: false },
    ],
    motif: 'Keys & Obscurity'
  },
  {
    id: 'other-worlds',
    name: 'OTHER WORLDS',
    description: 'Speculative futures, cosmic expanses, and dystopian warnings.',
    subcategories: [
      { name: 'Science Fiction', active: false },
      { name: 'Dystopian', active: false },
      { name: 'Post-Apocalyptic', active: false },
      { name: 'Time Travel', active: false },
      { name: 'Alternate Realities', active: false },
      { name: 'Space Fiction', active: false },
    ],
    motif: 'Astro-mechanics'
  },
  {
    id: 'dark-supernatural',
    name: 'DARK & SUPERNATURAL',
    description: 'Chilling dread, the uncanny, and ancient occult perils.',
    subcategories: [
      { name: 'Horror', active: false },
      { name: 'Ghost Stories', active: false },
      { name: 'Paranormal', active: false },
      { name: 'Occult Fiction', active: false },
      { name: 'Monster Fiction', active: false },
      { name: 'Dark Fantasy', active: false },
    ],
    motif: 'Lunar & Macabre'
  },
  {
    id: 'human-stories',
    name: 'HUMAN STORIES',
    description: 'Reflections of society, family lineage, and inner transformation.',
    subcategories: [
      { name: 'Coming-of-Age', active: false },
      { name: 'Family & Relationships', active: false },
      { name: 'Friendship', active: false },
      { name: 'Historical Fiction', active: false },
      { name: 'Literary Fiction', active: false },
      { name: 'Social Fiction', active: false },
    ],
    motif: 'Threads of Heritage'
  },
];

export const EPIC_FANTASY_COLLECTION = [
  {
    id: 'asoiaf',
    title: 'A Song of Ice and Fire',
    author: 'George R. R. Martin',
    publicationSpan: '1996 – Present',
    volumes: '5 published / 2 planned',
    status: 'Featured Dedicated Experience',
    tone: 'Political realism, mosaic multi-POV, morally grey characters',
    accentColor: '#8C2525',
    isPrimary: true
  },
  {
    id: 'lotr',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    publicationSpan: '1954 – 1955',
    volumes: '3 volumes (Single novel)',
    status: 'High Archival Classic',
    tone: 'Mythopoeic, philological depth, heroic high fantasy',
    accentColor: '#A88243',
    isPrimary: false
  },
  {
    id: 'wot',
    title: 'The Wheel of Time',
    author: 'Robert Jordan (completed by Brandon Sanderson)',
    publicationSpan: '1990 – 2013',
    volumes: '14 volumes + prequel',
    status: 'Epic Cycle',
    tone: 'Cyclical cosmology, dense world-weaving, grand magic system',
    accentColor: '#365D7B',
    isPrimary: false
  },
  {
    id: 'stormlight',
    title: 'The Stormlight Archive',
    author: 'Brandon Sanderson',
    publicationSpan: '2010 – Present',
    volumes: '5 of 10 published',
    status: 'Cosmere Keystone',
    tone: 'Hard magic ecology, institutional conflict, oaths and spren',
    accentColor: '#3F6E5B',
    isPrimary: false
  },
  {
    id: 'narnia',
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    publicationSpan: '1950 – 1956',
    volumes: '7 books',
    status: 'Classic Mythic Fantasy',
    tone: 'Theological allegories, portal fantasy, timeless moral fable',
    accentColor: '#7A4A6E',
    isPrimary: false
  },
  {
    id: 'kingkiller',
    title: 'The Kingkiller Chronicle',
    author: 'Patrick Rothfuss',
    publicationSpan: '2007 – Present',
    volumes: '2 of 3 published',
    status: 'Frame Narrative',
    tone: 'Lyrical first-person retrospective, naming magic, music',
    accentColor: '#8C6239',
    isPrimary: false
  },
  {
    id: 'inheritance',
    title: 'The Inheritance Cycle',
    author: 'Christopher Paolini',
    publicationSpan: '2002 – 2011',
    volumes: '4 volumes',
    status: 'Dragonrider Epic',
    tone: 'Ancient language magic, bond between rider and dragon',
    accentColor: '#2B4A6F',
    isPrimary: false
  },
  {
    id: 'priory',
    title: 'The Priory of the Orange Tree',
    author: 'Samantha Shannon',
    publicationSpan: '2019',
    volumes: 'Standalone epic / Roots of Chaos',
    status: 'Feminist High Fantasy',
    tone: 'Eastern and Western draconic lore, matriliny, high diplomacy',
    accentColor: '#B85D19',
    isPrimary: false
  },
  {
    id: 'witcher',
    title: 'The Witcher',
    author: 'Andrzej Sapkowski',
    publicationSpan: '1990 – 2013',
    volumes: '8 books (Stories & Saga)',
    status: 'Slavic Dark Epic',
    tone: 'Subverted folklore, lesser-evil ethics, destiny and iron',
    accentColor: '#4A4C52',
    isPrimary: false
  },
  {
    id: 'poppy-war',
    title: 'The Poppy War',
    author: 'R.F. Kuang',
    publicationSpan: '2018 – 2020',
    volumes: '3 volumes',
    status: 'Grimdark Military Fantasy',
    tone: '20th-century Chinese history analog, shamanism, devastating warfare',
    accentColor: '#9C3425',
    isPrimary: false
  }
];

export const SCENE_METAS: SceneMeta[] = [
  { id: '00', num: '00', title: 'The Threshold', subtitle: 'The Invitation to Westeros', purpose: 'Curiosity; title/subtitle; minimal exposition.' },
  { id: '01', num: '01', title: 'The Books', subtitle: 'The Five Published Novels & Planned Futures', purpose: 'Five published novels, two forthcoming/planned, publication gaps and book metrics.' },
  { id: '02', num: '02', title: 'Welcome to Westeros', subtitle: 'Spoiler-Light World Cartography & Great Houses', purpose: 'Westeros/Essos, Great Houses, locations, political structure, supernatural layer.' },
  { id: '03', num: '03', title: 'The People', subtitle: 'POV Constellation & Relationship Networks', purpose: 'Major POV characters, houses, relationships and narrative-network evidence.' },
  { id: '04', num: '04', title: 'History Beneath the Story', subtitle: 'Millennia of Accumulated Memory', purpose: 'Long Night, Valyria, Doom, Targaryen rule, Dance of the Dragons, Robert’s Rebellion.' },
  { id: '05', num: '05', title: "Inside the Author's Head", subtitle: 'Origins, Influences & Mosaic Craft', purpose: 'Origins, influences, historical fiction + epic fantasy, Tolkien, mosaic POV, grey characters.' },
  { id: '06', num: '06', title: 'From Page to Screen', subtitle: 'The Television Adaptation Pipeline', purpose: 'HBO option, Benioff/Weiss, pilot, production, 2011 premiere, 2019 conclusion, later divergence.' },
  { id: '07', num: '07', title: 'The Numbers', subtitle: 'Editorial Data Storytelling & Measured Scale', purpose: 'Sales snapshots, bestseller evidence, TV audience and awards, with measurement labels.' },
  { id: '08', num: '08', title: 'The Cultural Afterlife', subtitle: 'The Story Leaves the Page and Enters the World', purpose: 'Spin-offs, companion books, stage work, events and fandom infrastructure.' },
  { id: '09', num: '09', title: 'Live Westeros', subtitle: 'Verified Ongoing Developments Through 2026', purpose: 'Current/upcoming verified developments with last-verified dates.' },
  { id: '10', num: '10', title: 'Choose Your Path', subtitle: 'READ, WATCH, or EXPLORE', purpose: 'Read / Watch / Explore routes without ranking media.' },
  { id: '11', num: '11', title: 'Still Being Written', subtitle: 'The Open Manuscript & Continuing Horizon', purpose: 'Five published novels; two remaining main novels still forthcoming/planned as of freeze.' }
];

export const BOOKS_DATA: BookRecord[] = [
  {
    book_no: 1,
    title: 'A Game of Thrones',
    publication: '1996-08',
    us_first_pages: 694,
    chapters: 73,
    estimated_words: 292727,
    audio_duration: '33h 53m',
    status: 'published',
    coverAccent: '#466B88',
    description: 'Introduces the realm of the Seven Kingdoms, the Hand’s death, Eddard Stark’s journey south, Daenerys’s marriage across the Narrow Sea, and the ominous stirrings beyond the Wall.',
    keyThemes: ['Honor vs. Political Survival', 'Winter is Coming', 'The Bastard’s Place']
  },
  {
    book_no: 2,
    title: 'A Clash of Kings',
    publication: '1998 UK / 1999 US',
    us_first_pages: 768,
    chapters: 70,
    estimated_words: 318903,
    audio_duration: '37h 17m',
    status: 'published',
    coverAccent: '#935429',
    description: 'A comet of blood streaks across the sky as five men claim the crown. The War of the Five Kings engulfs Westeros culminating in the apocalyptic Battle of the Blackwater.',
    keyThemes: ['Legitimacy & False Kings', 'Siege Warfare', 'Sorcery & Blood Magic']
  },
  {
    book_no: 3,
    title: 'A Storm of Swords',
    publication: '2000',
    us_first_pages: 973,
    chapters: 82,
    estimated_words: 414604,
    audio_duration: '47h 37m',
    status: 'published',
    coverAccent: '#2F6A52',
    description: 'The catastrophic climax of the War of the Five Kings. Betrayals shatter the North at the Red Wedding while wildlings assault the Wall and dragons conquer Slaver’s Bay.',
    keyThemes: ['Broken Oaths', 'Cost of Vengeance', 'Duty over Love']
  },
  {
    book_no: 4,
    title: 'A Feast for Crows',
    publication: '2005',
    us_first_pages: 753,
    chapters: 46,
    estimated_words: 295032,
    audio_duration: '31h 10m',
    status: 'published',
    coverAccent: '#8A2B2B',
    description: 'Focusing on the geographic south—King’s Landing, Dorne, the Iron Islands, and Oldtown. The realm picks through the ashes as religious zealotry rises and new schemers emerge.',
    keyThemes: ['Religious Resurgence', 'The Iron Price', 'Grief and Governance']
  },
  {
    book_no: 5,
    title: 'A Dance with Dragons',
    publication: '2011-07-12',
    us_first_pages: 1056,
    chapters: 73,
    estimated_words: 414788,
    audio_duration: '48h 56m',
    status: 'published',
    coverAccent: '#68457C',
    description: 'Runs parallel to and then overtakes A Feast for Crows, centering Jon Snow at the Wall, Tyrion Lannister in exile, and Daenerys Targaryen struggling to govern Meereen.',
    keyThemes: ['The Burden of Command', 'Identity & Masks', 'The Impending Long Night']
  },
  {
    book_no: 6,
    title: 'The Winds of Winter',
    publication: 'TBA (Forthcoming)',
    us_first_pages: null,
    chapters: null,
    estimated_words: null,
    audio_duration: null,
    status: 'forthcoming',
    coverAccent: '#5C7485',
    description: 'The forthcoming sixth volume, carrying the resolving battles of Slaver’s Bay and Ice in the North, and the full arrival of winter upon Westeros.',
    keyThemes: ['The Winter Has Arrived', 'Converging Cataclysms', 'The Others at the Gates']
  },
  {
    book_no: 7,
    title: 'A Dream of Spring',
    publication: 'TBA (Planned)',
    us_first_pages: null,
    chapters: null,
    estimated_words: null,
    audio_duration: null,
    status: 'planned',
    coverAccent: '#7C8A4A',
    description: 'The planned final volume of A Song of Ice and Fire, envisioned by Martin to provide a bittersweet resolution to the epic tapestry.',
    keyThemes: ['Bittersweet Endings', 'Rebirth through Ashes', 'Memory and Myth']
  }
];

export const TV_SEASONS_DATA: TvSeasonRecord[] = [
  { season: 1, first_aired: '2011-04-17', last_aired: '2011-06-19', episodes: 10, source_material: 'A Game of Thrones', avg_us_viewers_millions: 2.52, keyPlotArc: 'Ned Stark as Hand, birth of dragons' },
  { season: 2, first_aired: '2012-04-01', last_aired: '2012-06-03', episodes: 10, source_material: 'A Clash of Kings', avg_us_viewers_millions: 3.80, keyPlotArc: 'War of the 5 Kings, Battle of Blackwater' },
  { season: 3, first_aired: '2013-03-31', last_aired: '2013-06-09', episodes: 10, source_material: 'A Storm of Swords (Pt 1)', avg_us_viewers_millions: 4.97, keyPlotArc: 'Red Wedding, Jaime and Brienne journey' },
  { season: 4, first_aired: '2014-04-06', last_aired: '2014-06-15', episodes: 10, source_material: 'Book 3 + later material', avg_us_viewers_millions: 6.84, keyPlotArc: 'Purple Wedding, Tyrion’s trial, Watch battle' },
  { season: 5, first_aired: '2015-04-12', last_aired: '2015-06-14', episodes: 10, source_material: 'Books 4/5 + original', avg_us_viewers_millions: 6.88, keyPlotArc: 'Hardhome, Sparrows in capital, Jon betrayal' },
  { season: 6, first_aired: '2016-04-24', last_aired: '2016-06-26', episodes: 10, source_material: 'Future-book outline + original', avg_us_viewers_millions: 7.69, keyPlotArc: 'Battle of the Bastards, Sept of Baelor' },
  { season: 7, first_aired: '2017-07-16', last_aired: '2017-08-27', episodes: 7, source_material: 'Future-book outline + original', avg_us_viewers_millions: 10.26, keyPlotArc: 'Dany in Westeros, Dragonpit council, Wall falls' },
  { season: 8, first_aired: '2019-04-14', last_aired: '2019-05-19', episodes: 6, source_material: 'Future direction + original', avg_us_viewers_millions: 11.99, keyPlotArc: 'Battle of Winterfell, King’s Landing ruin, Finale' }
];

export const SALES_DATA: SalesRecord[] = [
  { year: 2011, period: 'Before HBO launch', metric: 'ASOIAF worldwide cumulative', value: '15m+', source: 'New Yorker', grade: 'D' },
  { year: 2011, period: 'Calendar year', metric: 'Game of Thrones books sold', value: '8m+', source: 'Forbes / Nielsen BookScan inputs', grade: 'D' },
  { year: 2011, period: 'A Dance with Dragons first day', metric: 'Hardcover + ebook + audio', value: '298,000', source: 'Industry reporting; format totals', grade: 'D' },
  { year: 2012, period: 'Annual bestseller list', metric: 'A Game of Thrones rank', value: '#15', source: 'Publishers Weekly', grade: 'B' },
  { year: 2012, period: 'Annual bestseller list', metric: 'A Dance with Dragons rank', value: '#18', source: 'Publishers Weekly', grade: 'B' },
  { year: 2016, period: 'Worldwide cumulative', metric: 'ASOIAF copies sold', value: '70m+', source: 'Guardian / HarperCollins account', grade: 'D' },
  { year: 2019, period: 'Worldwide cumulative', metric: 'ASOIAF copies sold', value: '90m+', source: 'Independent / NPR contemporary reporting', grade: 'D' },
  { year: 2026, period: 'Worldwide cumulative', metric: 'Reported 100m+', value: '100m+', source: 'Secondary relay; primary source verification required', grade: 'E' }
];

export const AWARDS_DATA: AwardRecord[] = [
  { work: 'A Game of Thrones', award: 'Locus', year: 1997, category: 'Best First Novel', result: 'Won' },
  { work: 'A Game of Thrones', award: 'Hugo', year: 1997, category: 'Best Novel', result: 'Nominated' },
  { work: 'A Clash of Kings', award: 'Locus Poll', year: 1999, category: 'Best Novel', result: 'Won' },
  { work: 'A Storm of Swords', award: 'Hugo', year: 2001, category: 'Best Novel', result: 'Nominated' },
  { work: 'A Storm of Swords', award: 'Locus', year: 2001, category: 'Best Fantasy Novel', result: 'Won' },
  { work: 'A Feast for Crows', award: 'NYT', year: 2005, category: 'Hardcover Fiction Bestseller', result: 'Debuted #1' },
  { work: 'A Dance with Dragons', award: 'Locus', year: 2012, category: 'Best Novel', result: 'Won' },
  { work: 'A Dance with Dragons', award: 'Hugo', year: 2012, category: 'Best Novel', result: 'Nominated' },
  { work: 'Game of Thrones', award: 'Television Academy', year: '2011-2019', category: 'Primetime Emmy Awards', result: '59 wins / 159 nominations' }
];

export const GREAT_HOUSES: HouseRecord[] = [
  { name: 'Stark', region: 'The North', seat: 'Winterfell', sigil: 'A grey direwolf on a white field', words: 'Winter Is Coming', color: '#7E8C96', description: 'Ancient guardians of the North dating back to the First Men and the Age of Heroes.' },
  { name: 'Lannister', region: 'The Westerlands', seat: 'Casterly Rock', sigil: 'A golden lion rampant on a crimson field', words: 'Hear Me Roar! (Motto: A Lannister always pays his debts)', color: '#8C2525', description: 'Wealthiest house in Westeros, miners of gold and master political operators.' },
  { name: 'Targaryen', region: 'Historical Royal Dynasty', seat: 'Dragonstone / King’s Landing', sigil: 'A three-headed red dragon on black', words: 'Fire and Blood', color: '#9B1D20', description: 'Valyrian dragonlords who forged the Seven Kingdoms into a unified realm.' },
  { name: 'Baratheon', region: 'The Stormlands', seat: 'Storm’s End', sigil: 'A crowned black stag on a gold field', words: 'Ours Is the Fury', color: '#A88243', description: 'Fierce warriors founded during the Conquest; Robert seized the Iron Throne in 283 AC.' },
  { name: 'Greyjoy', region: 'The Iron Islands', seat: 'Pyke', sigil: 'A golden kraken on a black field', words: 'We Do Not Sow', color: '#3A4B58', description: 'Reavers and sailors who follow the Drowned God and value the iron price.' },
  { name: 'Tyrell', region: 'The Reach', seat: 'Highgarden', sigil: 'A golden rose on a green field', words: 'Growing Strong', color: '#3F6E5B', description: 'Stewards elevated to Lords Paramount of the fertile breadbasket of the continent.' },
  { name: 'Martell', region: 'Dorne', seat: 'Sunspear', sigil: 'A red sun pierced by a golden spear', words: 'Unbowed, Unbent, Unbroken', color: '#B85D19', description: 'Proud Rhoynish-influenced house that resisted Targaryen dragons for a century.' },
  { name: 'Arryn', region: 'The Vale', seat: 'The Eyrie', sigil: 'A white falcon and crescent moon on sky blue', words: 'As High as Honor', color: '#4A6FA5', description: 'Pure Andal lineage seated in an impregnable fortress high in the Mountains of the Moon.' },
  { name: 'Tully', region: 'The Riverlands', seat: 'Riverrun', sigil: 'A leaping silver trout on red and blue', words: 'Family, Duty, Honor', color: '#4E6B7A', description: 'Lords of the central riverways, whose strategic lands bear the brunt of every civil war.' }
];

export const CHARACTERS_DATA: CharacterRecord[] = [
  { name: 'Jon Snow', type: 'Major POV / Commander', house: 'Stark', povChapters: 42, booksAppeared: ['Book 1', 'Book 2', 'Book 3', 'Book 5'], keyRelationship: 'Eddard Stark (presumed father), Night’s Watch brothers', epithet: 'The Bastard of Winterfell / 998th Lord Commander' },
  { name: 'Daenerys Targaryen', type: 'Major POV / Queen', house: 'Targaryen', povChapters: 31, booksAppeared: ['Book 1', 'Book 2', 'Book 3', 'Book 5'], keyRelationship: 'Khal Drogo, Jorah Mormont, Barristan Selmy', epithet: 'Mother of Dragons / Breaker of Chains' },
  { name: 'Tyrion Lannister', type: 'Major POV / Hand', house: 'Lannister', povChapters: 49, booksAppeared: ['Book 1', 'Book 2', 'Book 3', 'Book 5'], keyRelationship: 'Tywin (father), Jaime (brother), Cersei (sister)', epithet: 'The Imp / Hand of the King' },
  { name: 'Arya Stark', type: 'Major POV / Assassin in training', house: 'Stark', povChapters: 34, booksAppeared: ['Book 1', 'Book 2', 'Book 3', 'Book 4', 'Book 5'], keyRelationship: 'Jon Snow (needle gift), Syrio Forel, Faceless Men', epithet: 'No One / Underfoot' },
  { name: 'Sansa Stark', type: 'Major POV / Lady', house: 'Stark', povChapters: 25, booksAppeared: ['Book 1', 'Book 2', 'Book 3', 'Book 4'], keyRelationship: 'Petyr Baelish, Cersei Lannister, Sandor Clegane', epithet: 'Little Bird / Alayne Stone' },
  { name: 'Bran Stark', type: 'Major POV / Greenseer', house: 'Stark', povChapters: 21, booksAppeared: ['Book 1', 'Book 2', 'Book 3', 'Book 5'], keyRelationship: 'Three-Eyed Crow, Hodor, Meera & Jojen Reed', epithet: 'The Winged Wolf / Prince of Winterfell' },
  { name: 'Cersei Lannister', type: 'Major POV / Queen Regent', house: 'Lannister', povChapters: 12, booksAppeared: ['Book 4', 'Book 5 (POV)'], keyRelationship: 'Jaime Lannister (twin), Joffrey (son), Tywin (father)', epithet: 'Queen Regent of the Seven Kingdoms' },
  { name: 'Jaime Lannister', type: 'Major POV / Lord Commander', house: 'Lannister', povChapters: 17, booksAppeared: ['Book 3', 'Book 4', 'Book 5 (POV)'], keyRelationship: 'Cersei Lannister (twin), Brienne of Tarth', epithet: 'The Kingslayer / The Golden Lion' }
];

export const LOCATIONS_DATA: LocationRecord[] = [
  { name: 'Winterfell', type: 'Castle', region: 'The North', significance: 'Ancient seat of House Stark, hot springs beneath ancient stone, Godswood with weirwood heart tree.' },
  { name: "King's Landing", type: 'Capital City', region: 'The Crownlands', significance: 'Seat of the Iron Throne, the Red Keep, Great Sept of Baelor, home to half a million souls.' },
  { name: 'The Wall', type: 'Fortification', region: 'Northern Border', significance: '700-foot colossus of ice and ancient spells spanning 300 miles from coast to coast.' },
  { name: 'Dragonstone', type: 'Island Fortress', region: 'Narrow Sea', significance: 'Valyrian gargoyle fortress, westernmost outpost of the Freehold, Targaryen ancestral seat.' },
  { name: 'Essos', type: 'Continent', region: 'Across Narrow Sea', significance: 'Vast landmass holding the Nine Free Cities, Dothraki Sea, Valyrian ruins, and Slaver’s Bay.' }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  { period: 'Ancient', event: 'The Long Night', era: 'ancient history', depthYear: 'c. 8,000 Years Before Conquest', meaning: 'Primordial supernatural winter and the arrival of the Others; ended by the Last Hero and the building of the Wall.' },
  { period: 'Ancient', event: 'Rise of Valyria', era: 'ancient history', depthYear: 'c. 5,000 Years Before Conquest', meaning: 'Shepherds tame dragons in the Fourteen Flames, building the greatest arcane civilization in Essos.' },
  { period: 'Ancient', event: 'Doom of Valyria', era: 'ancient history', depthYear: '114 Years Before Conquest (114 BC)', meaning: 'Cataclysmic volcanic explosion obliterates the peninsula and spells the sudden end of the Freehold.' },
  { period: 'c. 2–1 BC/AC', event: 'Targaryen Conquest', era: 'dynastic history', depthYear: '2 BC – 1 AC', meaning: 'Aegon I and his sister-wives Rhaenys and Visenya unite six of the seven kingdoms with three dragons.' },
  { period: 'c. 129–131 AC', event: 'Dance of the Dragons', era: 'dynastic history', depthYear: '129 – 131 AC', meaning: 'Brutal civil war of succession between Rhaenyra Targaryen and Aegon II; begins the extinction of dragons.' },
  { period: '283 AC', event: "Robert's Rebellion", era: 'recent history', depthYear: '282 – 283 AC', meaning: 'War of the Usurper overthrows the Mad King Aerys II; Robert Baratheon claims the Iron Throne.' },
  { period: '298 AC', event: 'A Game of Thrones begins', era: 'main story', depthYear: '298 AC', meaning: 'Jon Arryn dies mysteriously; King Robert rides north to Winterfell to summon Eddard Stark.' },
  { period: '298–299 AC', event: 'A Clash of Kings', era: 'main story', depthYear: '298 – 299 AC', meaning: 'Five kings contest the realm: Joffrey, Stannis, Renly, Robb Stark, and Balon Greyjoy.' },
  { period: '299–300 AC', event: 'A Storm of Swords', era: 'main story', depthYear: '299 – 300 AC', meaning: 'The Red Wedding breaks the northern army; the Purple Wedding strikes down Joffrey; wildlings breach the Wall.' },
  { period: '300 AC', event: 'A Feast for Crows', era: 'main story', depthYear: '300 AC', meaning: 'Cersei attempts to rule King’s Landing alone; Euron Greyjoy claims the Seastone Chair; the Sparrows arm.' },
  { period: '300 AC', event: 'A Dance with Dragons', era: 'main story', depthYear: '300 AC', meaning: 'Jon attempts to integrate wildlings; Tyrion reaches Essos; Daenerys takes flight on Drogon from Daznak’s Pit.' }
];

export const THEMES_DATA: ThemeRecord[] = [
  {
    id: 'T01',
    theme: 'Power & Legitimacy',
    definition: 'Authority, succession, institutions, and the fiction of sovereignty.',
    evidence: 'Great Houses, small councils, and competing claims around the Iron Throne ("Power resides where men believe it resides").',
    author: 'Martin frequently frames the series through historical and political realism rather than divine right.',
    scholarship: 'Medievalism scholarship examines how the text interrogates feudal feudalism and institutional collapse.',
    visual: 'Power network / flow map'
  },
  {
    id: 'T02',
    theme: 'Moral Ambiguity',
    definition: 'Human hearts in conflict with themselves; rejection of clean hero/villain binaries.',
    evidence: 'Multiple POV chapters present irreconcilable, empathetic perspectives for opposing factions.',
    author: 'Martin explicitly states: "The human heart in conflict with itself is the only thing worth writing about."',
    scholarship: 'Literary analysis focuses on ethical decentralization and shifting subjective narration.',
    visual: 'Multi-perspective character cards'
  },
  {
    id: 'T03',
    theme: 'History as Texture',
    definition: 'Invented history gives the present narrative deep, accumulated social memory.',
    evidence: 'Ancient songs, family grudges, and fallen dynasties actively motivate contemporary political vengeance.',
    author: 'Martin calls the historical novel and epic fantasy "sisters under the skin."',
    scholarship: 'Studies of fictional historiography and material world-building.',
    visual: 'Layered timeline'
  },
  {
    id: 'T04',
    theme: 'Mosaic Narrative',
    definition: 'A sprawling global phenomenon told solely through limited, fallible subjective lenses.',
    evidence: 'POV structure expands systematically from 9 perspectives in Book 1 to 24 distinct voices by Book 5.',
    quantitative: '24 POV characters in total; 14 identified as primary hubs by PNAS network analysis study.',
    visual: 'POV constellation'
  },
  {
    id: 'T05',
    theme: 'Gender and Social Roles',
    definition: 'Characters negotiate, exploit, or are constrained by strict patriarchal expectations.',
    evidence: 'Cersei’s bitterness at female disenfranchisement, Brienne’s martial oath, Sansa’s diplomatic survival.',
    scholarship: 'Shiloh Carroll directly examines masculinity, femininity, and gender power relations in Westeros.',
    visual: 'Role / agency matrix'
  },
  {
    id: 'T06',
    theme: 'Sexuality, Violence & Mortality',
    definition: 'Physical reality and bodily vulnerability intersect directly with political machinations.',
    evidence: 'Wounds do not vanish; battles produce trauma and logistical devastation, not clean glory.',
    scholarship: 'Carroll treats bodily vulnerability as a central realistic corrective to romanticized fantasy.',
    visual: 'Annotated qualitative layer'
  }
];

export const ADAPTATION_MILESTONES: AdaptationMilestone[] = [
  { date: '2007-01', milestone: 'HBO Options Rights', category: 'Rights', people_entities: 'Martin; HBO; David Benioff; D.B. Weiss', detail: 'The five-hour lunch meeting where Martin asked Benioff and Weiss: "Who is Jon Snow’s mother?"' },
  { date: '2008-12', milestone: 'HBO Greenlights Pilot', category: 'Production', people_entities: 'HBO; Benioff; Weiss; Martin', detail: 'Original pilot shot in Northern Ireland and Morocco, later heavily reshot with key recasts (Daenerys, Catelyn).' },
  { date: '2011-04-17', milestone: 'Season 1 Premieres', category: 'Broadcast', people_entities: 'HBO, worldwide syndication', detail: 'Faithful adaptation of Book 1, averaging 2.52M first-run viewers; Sean Bean anchors the dramatic weight.' },
  { date: '2012', milestone: 'Season 2 Broadcast', category: 'Broadcast', people_entities: 'HBO', detail: 'Adapts A Clash of Kings; the Blackwater episode penned by Martin himself.' },
  { date: '2013', milestone: 'Season 3 Broadcast', category: 'Broadcast', people_entities: 'HBO', detail: 'Adapts the first half of A Storm of Swords; The Rains of Castamere becomes a global cultural event.' },
  { date: '2014', milestone: 'Season 4 Broadcast', category: 'Broadcast', people_entities: 'HBO', detail: 'Concludes Book 3; achieves 6.84M viewer average and critical peak.' },
  { date: '2015', milestone: 'Season 5 Broadcast', category: 'Broadcast', people_entities: 'HBO', detail: 'Condenses Books 4 & 5; begins significant divergences in Dorne, Sansa, and the Ironborn arcs.' },
  { date: '2016', milestone: 'Season 6 Moves Beyond Published Novels', category: 'Divergence', people_entities: 'HBO; Benioff; Weiss; Martin outlines', detail: 'First season with no published book blueprint; operates on Martin’s high-level story milestones.' },
  { date: '2017', milestone: 'Season 7 Broadcast', category: 'Divergence', people_entities: 'HBO', detail: 'Condensed 7-episode season; accelerates narrative velocity and convergence of all main storylines.' },
  { date: '2019-05-19', milestone: 'Series Concludes', category: 'Broadcast', people_entities: 'HBO', detail: '19.3M multiplatform finale viewership; closes the 8-season television adaptation.' }
];

export const CURRENT_DEVELOPMENTS: CurrentDevelopment[] = [
  { date: '2025-11-20', development: 'A Knight of the Seven Kingdoms renewed for Season 2', status: 'Confirmed', detail: 'HBO/WBD officially announced renewal for 2027 based on Martin’s Dunk & Egg novellas.', source: 'HBO/WBD Press Release (S11)' },
  { date: '2026-01-18', development: 'A Knight of the Seven Kingdoms Season 1 premiered', status: 'Broadcast', detail: '6-episode season covering The Hedge Knight, starring Peter Claffey and Dexter Sol Ansell.', source: 'HBO/WBD Press Release (S10)' },
  { date: '2026-06-21', development: 'House of the Dragon Season 3 premiered', status: 'Broadcast', detail: '8-episode continuation of the Targaryen civil war (Dance of the Dragons).', source: 'HBO/WBD Series Schedule (S09)' },
  { date: '2026-09-03', development: 'The Mad King moving to London after Stratford run', status: 'Confirmed Stage', detail: 'Official stage production dramatizing the Great Tourney at Harrenhal moving to the West End in 2027.', source: 'George R.R. Martin Not A Blog / Official Stage Site (S12, S13)' },
  { date: '2026-09-16', development: 'The Winds of Winter status update', status: 'Forthcoming', detail: 'As of the research freeze (2026-09-16), Martin confirms the novel remains in progress with no official release date.', source: 'George R.R. Martin Official Bibliography (S01, S06)' }
];

export const SOURCES_REGISTRY: SourceRecord[] = [
  { id: 'S01', title: 'Martin Bibliography', type: 'Primary', url: 'https://georgerrmartin.com/bibliography/', grade: 'A', notes: 'Primary author bibliography for published publication years and editions.' },
  { id: 'S02', title: 'Martin ASOIAF Page', type: 'Primary', url: 'https://georgerrmartin.com/a-song-of-ice-and-fire/', grade: 'A', notes: 'Primary overview of the main book cycle from the author.' },
  { id: 'S03', title: 'HBO Options Ice & Fire', type: 'Primary', url: 'https://georgerrmartin.com/hbo-options-ice-fire/', grade: 'A', notes: 'Martin’s contemporary confirmation of the 2007 HBO option agreement.' },
  { id: 'S04', title: 'HBO Updates', type: 'Primary', url: 'https://georgerrmartin.com/notablog/2008/12/07/hbo-updates/', grade: 'A', notes: 'Author record on the December 2008 pilot greenlight.' },
  { id: 'S05', title: 'Martin + Bernard Cornwell Interview', type: 'Primary interview', url: 'https://georgerrmartin.com/a-conversation-with-bernard-cornwell/', grade: 'A', notes: 'Primary dialogue discussing the historical novel as the sister of epic fantasy.' },
  { id: 'S06', title: 'Martin Official Homepage', type: 'Primary', url: 'https://georgerrmartin.com/', grade: 'A', notes: 'Official news and author status verification.' },
  { id: 'S07', title: 'Penguin Random House Catalog', type: 'Publisher', url: 'https://www.penguinrandomhouse.com/', grade: 'A', notes: 'US publisher page counts, ISBNs, and print formats.' },
  { id: 'S08', title: 'Television Academy: Game of Thrones', type: 'Award body', url: 'https://www.televisionacademy.com/shows/game-thrones', grade: 'A', notes: 'Official tally of 59 Primetime Emmy wins from 159 nominations.' },
  { id: 'S09', title: 'HBO Series Archive', type: 'Official broadcaster', url: 'https://www.hbo.com/series', grade: 'B', notes: 'Official air dates, season structures, and episode counts.' },
  { id: 'S10', title: 'WBD: A Knight of the Seven Kingdoms', type: 'Official broadcaster', url: 'https://press.wbd.com/us/ca/media-release/hbo-original-drama-series-knight-seven-kingdoms-debuts-january-18', grade: 'B', notes: 'Official Warner Bros. Discovery press release on January 2026 debut.' },
  { id: 'S11', title: 'WBD Franchise Renewals', type: 'Official broadcaster', url: 'https://press.wbd.com/na/media-release/hbo-0/hbo-announces-season-renewals-two-game-thrones-franchise-series-setting-new-seasons', grade: 'B', notes: 'Official franchise confirmation of season renewals.' },
  { id: 'S12', title: 'Martin: The Mad King London', type: 'Primary', url: 'https://georgerrmartin.com/notablog/2026/09/03/the-mad-king-comes-to-london/', grade: 'A', notes: 'Author blog post on the Harrenhal stage production transfer.' },
  { id: 'S13', title: 'The Mad King Official Stage Site', type: 'Official production', url: 'https://gameofthronesonstage.com/', grade: 'B', notes: 'Official ticketing and production details.' },
  { id: 'S14', title: 'Guardian Publishing Story', type: 'Major journalism', url: 'https://www.theguardian.com/books/2016/aug/05/game-of-thrones-an-epic-publishing-story-george-rr-martin', grade: 'D', notes: 'Longform reporting on HarperCollins 70m copies milestone in 2016.' },
  { id: 'S15', title: 'Forbes 2011 Sales Analysis', type: 'Industry journalism', url: 'https://www.forbes.com/sites/jeffbercovici/2012/08/09/women-on-the-rise-among-the-worlds-top-earning-authors/', grade: 'D', notes: 'Nielsen BookScan data on the 2011 surge of 8m+ books sold.' },
  { id: 'S16', title: 'LA Times 2019 Finale Ratings', type: 'Major journalism', url: 'https://www.latimes.com/business/hollywood/la-fi-ct-got-game-of-thrones-ratings-20190520-story.html', grade: 'D', notes: 'Contemporary viewership figures for the 19.3M series finale.' },
  { id: 'S17', title: 'Publishers Weekly 2012 Bestsellers', type: 'Industry', url: 'https://www.publishersweekly.com/pw/by-topic/industry-news/bookselling/article/55383-the-bestselling-books-of-2012.html', grade: 'B', notes: 'Official annual sales rankings for Game of Thrones and Dance with Dragons.' },
  { id: 'S18', title: 'Hugo Awards 2001 History', type: 'Award body', url: 'https://www.thehugoawards.org/hugo-history/2001-hugo-awards/', grade: 'A', notes: 'World Science Fiction Society voting records for A Storm of Swords.' },
  { id: 'S19', title: 'PNAS Narrative Network Study', type: 'Academic', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7682562/', grade: 'C', notes: 'Quantitative network analysis of the 24 POV characters and Dunbar social bounds.' },
  { id: 'S20', title: 'Cambridge Medievalism in ASOIAF', type: 'Academic', url: 'https://www.cambridge.org/core/books/medievalism-in-a-song-of-ice-and-fire-and-game-of-thrones/', grade: 'C', notes: 'Shiloh Carroll’s peer-reviewed monograph on power, gender, and realism.' },
  { id: 'S21', title: 'Network of Thrones Analysis', type: 'Academic/data', url: 'https://mathbeveridge.github.io/files/NetworkofThrones.pdf', grade: 'C', notes: 'Beveridge and Shan mathematical network mapping of character interactions.' },
  { id: 'S22', title: 'Visual Mood Reference', type: 'Visual reference', url: 'https://in.pinterest.com/ideas/game-of-thrones-wallpaper-4k/937901874646/', grade: 'E', notes: 'Visual moodboards for stone, forge, heraldry and atmospheric lighting.' },
  { id: 'S23', title: 'Wikipedia: A Song of Ice and Fire', type: 'Secondary', url: 'https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire', grade: 'E', notes: 'Secondary cross-verification of publication chronologies.' },
  { id: 'S24', title: 'Wikipedia: Game of Thrones', type: 'Secondary', url: 'https://en.wikipedia.org/wiki/Game_of_Thrones', grade: 'E', notes: 'Secondary cross-verification of broadcast milestones.' }
];
