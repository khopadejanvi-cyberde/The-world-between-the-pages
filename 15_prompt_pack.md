# MASTER PROMPT
# THE WORLD BETWEEN THE PAGES
## Interactive Editorial Storytelling Platform
### Google AI Studio / HTML + CSS + JavaScript Build Specification

---

## 0. PROJECT DIRECTIVE

Build a premium, immersive, scroll-driven editorial storytelling website called:

# The world between the pages

Landing-page subtitle:

> A journey through stories, characters, worlds, and the people who read them

The experience begins as a digital library and progressively transforms into a richly interactive research/storytelling platform.

This is NOT a conventional website with static sections stacked vertically.

The intended interaction model is:

**scroll → scene changes → elements enter → information reveals → visual relationships appear → user advances**

The user should feel as if they are moving through an interactive archive, not reading a long webpage.

The website must be:

- editorial
- cinematic
- premium
- sophisticated
- highly interactive
- data-driven
- immersive
- responsive
- accessible
- performant
- modular
- powered by structured JSON/CSV data

The research files included with this prompt are the source-of-truth content layer.

Do not replace, invent, silently alter, or fabricate research data.

---

# 1. INFORMATION ARCHITECTURE

## PAGE 01 — LANDING PAGE

Title:

**The world between the pages**

Subtitle:

**A journey through stories, characters, worlds, and the people who read them**

The landing page contains these six genre families:

### FANTASTICAL WORLDS
- Epic Fantasy
- Witches & Wizards
- Vampires & Immortals
- Fae, Fairies & Elves

### LOVE & HUMAN CONNECTION
- Contemporary Romance
- Fantasy Romance
- Sports Romance
- Historical Romance

### SECRETS & SHADOWS
- Mystery
- Detective Fiction
- Psychological Thriller
- Crime Fiction
- Gothic Fiction
- Dark Academia

### OTHER WORLDS
- Science Fiction
- Dystopian
- Post-Apocalyptic
- Time Travel
- Alternate Realities
- Space Fiction

### DARK & SUPERNATURAL
- Horror
- Ghost Stories
- Paranormal
- Occult Fiction
- Monster Fiction
- Dark Fantasy

### HUMAN STORIES
- Coming-of-Age
- Family & Relationships
- Friendship
- Historical Fiction
- Literary Fiction
- Social Fiction

Do not change these labels.

---

# 2. LANDING PAGE VISUAL DIRECTION

The landing page MUST default to LIGHT MODE.

Primary visual character:

- clean beige
- warm ivory
- soft white
- parchment-inspired neutrals
- restrained dark typography
- subtle paper grain
- delicate borders
- soft shadows
- refined editorial spacing
- premium digital-library atmosphere

Do NOT make the landing page dark.

The landing page should feel like:

**a contemporary digital library built inside a beautiful archival reading room.**

Avoid:

- fantasy clichés
- excessive gold
- medieval castle imagery
- dark fantasy treatment
- clutter
- generic glassmorphism
- excessive gradients
- template-like cards
- dashboard aesthetics

The visual language should feel closer to a luxury editorial publication / digital archive than an entertainment website.

---

# 3. LANDING PAGE INTERACTION MODEL

The landing page should already establish the core interaction language.

## Hero

Initial viewport:

- title appears slowly
- subtitle follows
- subtle paper/ink texture moves almost imperceptibly
- small "Explore the library" interaction appears
- background remains restrained

Animation sequence:

1. background texture fades in
2. title emerges from slight blur
3. subtitle rises vertically
4. navigation cue appears
5. first scroll initiates the transition

The title should NOT bounce, zoom aggressively, or use flashy animation.

---

## Genre navigation

Each genre family should behave as an interactive editorial object.

Possible treatments:

- horizontal hover expansion
- animated underline
- background tint transition
- typography scale shift
- subtle image/texture reveal
- category number appearing
- cursor-responsive movement
- small iconography
- soft elevation

On hover:

- category name becomes slightly larger
- subcategories reveal progressively
- background texture changes subtly
- a small visual motif appears
- surrounding categories become slightly quieter

On click:

- the selected category becomes visually dominant
- other categories recede
- transition animation carries the user into the selected category

The user should feel that they are entering a "room" of the library.

---

# 4. EPIC FANTASY PAGE

Clicking:

**Epic Fantasy**

opens the second page.

Title:

# The Epic Fantasy

The page should maintain the LIGHT MODE default.

The page should feel more atmospheric than the landing page, but it must remain part of the same premium editorial system.

Introduce:

- slightly deeper parchment tones
- subtle fantasy-inspired linework
- archival illustrations
- restrained atmospheric textures
- elegant typography
- refined book-cover presentation

Do not turn this page into a dark fantasy website.

---

# 5. EPIC FANTASY BOOK COLLECTION

Display these ten works:

1. A Song of Ice and Fire
2. The Lord of the Rings
3. The Wheel of Time
4. The Stormlight Archive
5. The Chronicles of Narnia
6. The Kingkiller Chronicle
7. The Inheritance Cycle
8. The Priory of the Orange Tree
9. The Witcher
10. The Poppy War

Each should be presented as an editorial object rather than a generic rectangular card.

Recommended interaction:

- books arranged vertically / diagonally / in an archival shelf composition
- cover image or cover-inspired visual
- title
- author
- short metadata
- hover reveals additional information
- book lifts subtly from the shelf
- shadow changes with elevation
- neighbouring books react slightly
- cursor movement creates restrained depth

Clicking A Song of Ice and Fire opens the dedicated experience.

---

# 6. A SONG OF ICE AND FIRE PAGE

Dedicated title:

# A SONG OF ICE AND FIRE

Subtitle:

# The books behind Game of Thrones

This subtitle is important.

It immediately establishes that:

**A Song of Ice and Fire = the book series**

and

**Game of Thrones = the television adaptation**

Do not refer to the book series itself as "Game of Thrones".

---

# 7. A SONG OF ICE AND FIRE VISUAL LANGUAGE

The dedicated ASOIAF experience may become considerably more atmospheric.

Base aesthetic:

- aged parchment
- weathered stone
- forged metal
- charcoal
- muted crimson
- restrained bronze
- historical textures
- medieval heraldic geometry
- atmospheric lighting
- monumental architecture
- archival maps
- manuscript-like details

However:

LIGHT MODE remains the default.

The dark aesthetic should emerge through imagery, texture and atmosphere rather than forcing the entire interface into black.

---

# 8. GLOBAL LIGHT / DARK MODE

Add a persistent Light / Dark Mode toggle.

Default:

**LIGHT MODE**

The toggle should be visible but elegant.

Do not use a generic browser-style switch.

Possible treatment:

`LIGHT  ◐  DARK`

or an elegant icon + label.

Theme transition:

- background transitions smoothly
- text transitions smoothly
- borders transition
- shadows transition
- images may receive subtle tonal adjustment
- parchment texture can become darker
- accent colours adapt

Use CSS custom properties / design tokens.

Do not duplicate the entire stylesheet for the two modes.

Respect:

`prefers-color-scheme`

but preserve LIGHT MODE as the product's default.

Persist user preference in localStorage.

---

# 9. IMMERSIVE SCROLL MODEL

This is one of the most important requirements.

The page must NOT feel like ordinary document scrolling.

Use a:

# SCENE-BASED SCROLL SYSTEM

Each major section occupies a defined viewport-height scene.

Suggested baseline:

`100svh`

or a carefully controlled range around one viewport.

The user's scroll should progress through scenes.

Each scroll position should correspond to a meaningful storytelling state.

---

# 10. SCROLL LOCK / SNAP BEHAVIOUR

Implement controlled vertical progression.

Use:

- CSS scroll snapping where appropriate
- IntersectionObserver
- requestAnimationFrame
- scroll progress state
- scene state management

The right-hand timeline acts as the user's navigation spine.

Each major scene has:

- a bead/node
- a label
- active state
- completed state
- progress state

The user should always understand:

**where they are**
**where they came from**
**what comes next**

Avoid aggressive JavaScript scroll hijacking that makes the page inaccessible or frustrating.

Preferred behaviour:

- snap to scene boundaries
- allow touch/trackpad movement
- interpolate animation based on scroll progress
- do not trap keyboard users
- support reduced motion
- avoid preventing normal browser scrolling for long periods

The "scroll lock" means **story-bound scene progression**, not an inaccessible hard lock.

---

# 11. RIGHT-SIDE STORY TIMELINE

Create a fixed vertical timeline on the right side.

Structure:

```
      ●
      │
      ●
      │
      ●
      │
      ●
```

Each bead corresponds to a major section.

Inactive bead:

- small
- restrained
- low contrast

Active bead:

- larger
- subtle glow / halo
- connected line becomes active
- section label may appear

Completed bead:

- filled or marked

Upcoming bead:

- faint

On hover:

- show section name
- preview the section
- clicking navigates to the scene

The timeline should never dominate the content.

On mobile:

- convert into a compact top/bottom progress indicator
- do not keep a large right-side rail.

---

# 12. SCROLL TRANSITION LANGUAGE

Every section should have its own transition choreography.

Use a mixture of:

- fade
- slide
- scale
- blur-to-focus
- clipping
- masking
- parallax
- perspective
- opacity
- rotation
- image reveal
- text reveal
- line drawing
- counter animation
- depth/elevation
- layered movement

Do NOT animate everything simultaneously.

Each scene should have:

1. entrance
2. reveal
3. interaction
4. exit

Animations should be staggered.

Recommended animation duration:

- micro interaction: 150–300ms
- hover: 200–450ms
- element reveal: 500–900ms
- major scene transition: 800–1400ms

Use easing such as:

- cubic-bezier
- ease-out
- spring-like interpolation where implemented through an animation library

Do not overuse bounce.

---

# 13. SECTION SYSTEM FOR A SONG OF ICE AND FIRE

The experience follows this exact order:

## 00 — THE THRESHOLD
Purpose:
Create curiosity.

Content:
- title
- subtitle
- short invitation
- minimal context

Interaction:
- atmospheric entrance
- title emergence
- subtle background parallax
- scroll cue
- cursor-responsive texture

---

## 01 — THE BOOKS

Purpose:

Start with the physical/literary object itself.

Content:

- five published novels
- two forthcoming/planned novels
- publication dates
- publication gaps
- editions/formats
- basic book metrics

Visual:

A cinematic digital bookshelf / archival table.

Interaction possibilities:

- books slide into position
- hover lifts a book
- pages subtly fan
- metadata appears on hover
- click opens expanded book metadata
- publication dates appear as a timeline
- scroll moves through the publication sequence
- book spines become chronological markers

Micro animations:

- cover parallax
- page-edge movement
- shadow deformation
- spine highlight
- metadata fade
- horizontal drift

---

## 02 — WELCOME TO WESTEROS

Purpose:

Give newcomers a mental model of the world without becoming an encyclopedia.

Content:

- Westeros
- Essos
- major regions
- Great Houses
- key locations
- Iron Throne
- Wall
- dragons
- Others
- high-level political/social structure

Keep this section SPOILER-LIGHT.

Visual:

Interactive map.

Interaction:

- pan
- zoom
- region hover
- house reveal
- location markers
- tooltip cards
- animated routes
- layer toggles
- political-region highlighting
- continent transition
- subtle map parallax

When a House is selected:

- territory highlights
- house sigil appears
- related houses illuminate
- relevant locations appear

Do not reveal plot outcomes.

---

## 03 — THE PEOPLE

Purpose:

Show that the story is built through people, viewpoints and relationships.

Content:

Major characters and POV structure.

Core characters include:

- Jon Snow
- Daenerys Targaryen
- Tyrion Lannister
- Arya Stark
- Sansa Stark
- Bran Stark
- Cersei Lannister
- Jaime Lannister

Visual:

Character constellation / relationship network.

Interactions:

- nodes appear progressively
- hover isolates a character
- connected characters brighten
- unrelated nodes fade
- house colour/sigil appears
- click opens character drawer
- POV indicator appears
- book-presence indicator appears
- network gently rearranges
- relationship lines animate into view

Do not label any character "most important" unless a transparent quantitative methodology is explicitly being shown.

---

## 04 — HISTORY BENEATH THE STORY

Purpose:

Show that the main narrative sits on layers of older history.

Timeline includes high-level events such as:

- Long Night
- Rise of Valyria
- Doom of Valyria
- Targaryen Conquest
- Targaryen dynasty
- Dance of the Dragons
- Robert's Rebellion
- beginning of A Game of Thrones
- later published-book periods

Visual:

Deep vertical historical timeline.

Interaction:

- timeline moves vertically
- eras expand
- dates emerge from parchment
- ancient events appear faded
- recent history becomes visually denser
- hover expands context
- click opens evidence drawer
- historical layers can be toggled

Use visual density to communicate accumulated history.

---

## 05 — INSIDE THE AUTHOR'S HEAD

Purpose:

Explain how George R. R. Martin's influences and approach shaped the work.

Content:

- background
- historical fiction influence
- epic fantasy lineage
- Tolkien
- Robert E. Howard
- Jack Vance
- Fritz Leiber
- historical novelists
- mosaic / multi-POV structure
- morally complex characters
- Martin's documented statements on writing and adaptation

Visual:

Literary archive / writer's desk / annotated manuscript atmosphere.

Interaction:

- source cards unfold
- influence lines connect writers
- quotations/paraphrases appear
- timeline of writing/development milestones
- hover highlights influence
- source drawer opens
- text annotations appear like marginalia
- subtle ink animation

Use only properly attributed quotations within applicable copyright limits.

---

## 06 — FROM PAGE TO SCREEN

Purpose:

Explain the documented process by which the books became Game of Thrones.

Content:

- rights option
- HBO
- David Benioff
- D. B. Weiss
- George R. R. Martin
- pilot
- production
- seasons
- adaptation constraints
- transition beyond published novels

Important milestones include:

- 2007 HBO rights option
- 2008 pilot greenlight
- 2011 premiere
- subsequent seasons
- 2016 move beyond published novels
- 2019 television conclusion

Visual:

Book → rights → script → production → television pipeline.

Interactions:

- book page morphs into script
- script lines become storyboard frames
- storyboard becomes screen frame
- production milestones light up
- season nodes appear
- source evidence opens on click
- adaptation notes appear progressively

Do NOT make this a separate "One Story, Two Worlds" section.

That section has been intentionally removed.

Any book-versus-TV differences should appear only as supporting information inside this adaptation journey.

---

## 07 — THE NUMBERS

Purpose:

Show the measurable scale of the phenomenon.

Content:

- publication metrics
- sales milestones
- bestseller evidence
- awards
- television viewership
- measurable commercial/cultural indicators

Critical rule:

Do NOT imply causation merely because two measurements changed around the same time.

Use language such as:

- "coincided with"
- "rose during"
- "was reported after"
- "snapshot"
- "reported figure"

unless stronger evidence supports a causal statement.

Visual:

Editorial data storytelling, NOT a business dashboard.

Interactions:

- animated counters
- scroll-driven charts
- line drawing
- metric switching
- hover data points
- source drawer
- before/after markers where data actually exists
- animated number transitions
- chart focus mode

Avoid excessive KPI cards.

---

## 08 — THE CULTURAL AFTERLIFE

Purpose:

Show the life of the property beyond the original books and television run.

Content may include:

- spin-offs
- companion works
- exhibitions
- official events
- fan culture
- stage productions
- new adaptations
- anniversary activities
- franchise developments

Visual:

A growing constellation of cultural objects.

Interaction:

- objects emerge from the centre
- events appear chronologically
- map-based discoveries
- hover reveals event details
- click expands source
- categories can be filtered
- time slider can be explored

The visual metaphor should be:

**the story leaves the page and enters the world.**

---

## 09 — LIVE WESTEROS

Purpose:

Show that the story's cultural life is still developing.

Content:

Current/upcoming developments with:

- date
- event
- status
- source
- last verified
- confidence/evidence grade

Examples from the frozen dataset include current franchise developments and stage activity.

Visual:

Living editorial bulletin.

Interaction:

- newest item enters first
- live indicator
- time pulse
- status badges
- source expansion
- "last verified" display
- timeline updates
- filter by year/type

Never present an unverified announcement as fact.

---

## 10 — CHOOSE YOUR PATH

Purpose:

Let users decide how they want to continue.

Possible routes:

### READ
Explore the books.

### WATCH
Explore the television adaptation.

### EXPLORE
Continue through world, history, characters and data.

Do not rank these routes.

The section is about user agency.

Visual:

Three pathways branching from a central point.

Interaction:

- paths illuminate on hover
- user cursor creates path emphasis
- click enters selected route
- subtle animated line travels forward
- previous journey remains visible in the background

---

## 11 — STILL BEING WRITTEN

Purpose:

End on the factual state of incompletion and continued cultural life.

Content:

- five published main novels
- The Winds of Winter: forthcoming
- A Dream of Spring: planned/forthcoming
- television adaptation concluded
- related franchise works continue

Do not invent release dates.

Visual:

An unfinished manuscript / open book / blank future pages.

Interaction:

- pages turn
- final page remains partially blank
- timeline continues beyond viewport
- subtle cursor interaction
- final CTA offers Read / Watch / Explore

Ending should feel open, not like a conventional "Thank You" screen.

---

# 14. INTERACTION DENSITY

The user explicitly wants MANY interactions and micro-animations.

Therefore each major section should contain multiple layers of interaction.

But interaction must serve information.

Use:

### Ambient interactions
- parallax
- moving texture
- subtle lighting
- floating particles only when appropriate
- depth shifts

### Navigation interactions
- timeline beads
- progress
- section previews
- back-to-section controls

### Data interactions
- hover
- filtering
- sorting
- zoom
- drill-down
- source drawer
- metric switching

### Narrative interactions
- reveal
- sequencing
- transformation
- visual metaphor
- object morphing

### Micro interactions
- hover lift
- underline growth
- icon rotation
- number tick
- border illumination
- image focus
- shadow movement
- cursor response
- subtle magnetic buttons
- active-state transitions

Avoid turning every object into a button.

---

# 15. MICRO-ANIMATION LIBRARIES

External libraries are allowed.

Potential technologies:

- GSAP
- ScrollTrigger
- Lenis
- Framer Motion where appropriate
- Motion One
- Three.js only when a genuinely useful 3D effect is required
- D3.js for data visualizations
- MapLibre / Leaflet for maps
- Lottie for selected lightweight illustrations

Do not add libraries simply because they are available.

Prefer:

CSS transitions → native APIs → lightweight libraries → heavy rendering only when justified.

---

# 16. PARALLAX SYSTEM

Parallax should create depth, not nausea.

Use at least three depth layers where appropriate:

1. background
2. atmospheric texture
3. content layer

Example:

Background map moves 0.1x.
Texture moves 0.2x.
Primary object moves 0.5x.
Foreground typography remains mostly stable.

Keep movement subtle.

Disable or greatly reduce parallax when:

`prefers-reduced-motion: reduce`

---

# 17. TYPOGRAPHY

Landing page:

- refined editorial sans serif
- elegant display/script accent may be used sparingly
- excellent readability

ASOIAF page:

- modern sans serif for interface/data
- restrained display serif or historical editorial type for titles
- optional script only for accents

Do not overuse medieval-looking fonts.

Typography must feel contemporary and premium.

---

# 18. COLOUR SYSTEM

## Light mode

Base:

- warm ivory
- parchment
- white
- charcoal text
- muted brown
- restrained crimson accent

Avoid:

- bright red
- saturated gold
- excessive beige
- muddy contrast

## Dark mode

Base:

- charcoal
- near-black
- deep parchment
- muted crimson
- soft warm text
- restrained bronze

Maintain accessible contrast.

---

# 19. ELEVATION SYSTEM

Use layered elevation rather than generic card shadows.

Levels:

0 = flat archival surface
1 = subtle hover lift
2 = raised editorial object
3 = focused object
4 = modal/source drawer

Shadows should feel soft and physical.

Books should feel like objects.

Maps should feel embedded in the surface.

Source drawers should feel like archival annotations.

---

# 20. DATA ARCHITECTURE

Do NOT hardcode research into UI components.

Use the included:

- JSON
- CSV
- source registry
- platform content
- visualization definitions

Create a central data layer.

Suggested structure:

```text
/data
  books.csv
  tv.csv
  sales.csv
  awards.csv
  timeline.csv
  adaptation.csv
  sources.csv
  world_entities.json
  themes.json
  visualizations.json
  platform_content.json
```

Every rendered object should be traceable to its source record.

---

# 21. EVIDENCE SYSTEM

Every major research claim needs:

- source ID
- source type
- evidence grade
- date where relevant
- last verified date for current information

Suggested evidence grades:

A = primary author/publisher/broadcaster/award body
B = official institutional/industry source
C = academic source
D = reputable journalism/trade reporting
E = structured secondary/fan dataset
F = audience sentiment/social discussion

Show evidence elegantly.

Do not place ugly citation clutter everywhere.

Use:

- small source markers
- expandable source drawers
- footnote indicators
- "Evidence" buttons
- hover previews

---

# 22. SPOILER SYSTEM

World introduction defaults to:

`spoiler_level = low`

Use spoiler metadata in content objects.

Possible levels:

- none
- low
- medium
- high

Default public experience:

NO plot outcomes.

If deeper material is added later, create deliberate user-controlled disclosure.

Never accidentally spoil a major event through a tooltip, chart or hover state.

---

# 23. IMAGE SYSTEM

Client-specified references:

Pinterest:
https://in.pinterest.com/ideas/game-of-thrones-wallpaper-4k/937901874646/

Wikipedia:
https://en.wikipedia.org/wiki/A_Song_of_Ice_and_Fire

Wikipedia:
https://en.wikipedia.org/wiki/Game_of_Thrones

Use these as research/visual-reference sources.

IMPORTANT:

A Pinterest or Wikipedia page does not automatically grant image licensing rights.

For actual production assets:

prefer:

- official HBO / Warner Bros. Discovery assets where licensed/authorized
- George R. R. Martin official assets where permitted
- publisher assets
- Wikimedia Commons where licensing permits
- properly licensed photography/illustration

Build the image layer so assets can be replaced without changing the UI.

---

# 24. RESPONSIVE DESIGN

Desktop:

Primary immersive experience.

Tablet:

Preserve storytelling while reducing simultaneous layers.

Mobile:

Do not simply shrink the desktop composition.

Convert:

- right-side timeline → compact progress navigation
- large maps → touch exploration
- complex networks → focused node exploration
- horizontal compositions → vertical sequences
- hover interactions → tap interactions

Maintain the same narrative order.

---

# 25. ACCESSIBILITY

Required:

- keyboard navigation
- visible focus states
- semantic HTML
- alt text
- accessible buttons
- sufficient contrast
- reduced-motion support
- no information conveyed by colour alone
- screen-reader-friendly source drawers
- logical heading hierarchy

For reduced motion:

replace complex movement with:

- fades
- simple opacity
- short transitions
- static layouts

---

# 26. PERFORMANCE

The visual ambition must not produce a sluggish site.

Use:

- lazy loading
- responsive images
- modern image formats
- code splitting where useful
- requestAnimationFrame
- GPU-friendly transforms
- limited simultaneous animations
- IntersectionObserver
- avoid unnecessary DOM nodes

Do not run continuous animation loops when the user cannot see the element.

---

# 27. CREATIVE FLEXIBILITY

The coder has creative freedom over:

- exact composition
- animation choreography
- transition timing
- decorative motifs
- illustration style
- micro-interaction implementation
- exact typography pairing
- exact map treatment
- exact data-viz geometry
- subtle atmospheric effects

BUT creative freedom does NOT include changing:

- information architecture
- section order
- landing-page title
- landing-page subtitle
- genre taxonomy
- Epic Fantasy book list
- ASOIAF identity
- research facts
- source attribution
- spoiler policy
- light-mode default
- right-side desktop progress concept
- removal of "One Story, Two Worlds"

---

# 28. NON-NEGOTIABLE PRODUCT FEEL

The final experience should feel like:

**a luxury digital archive that slowly comes alive as the user scrolls.**

Not:

- a dashboard
- a fan wiki
- a blog
- a generic portfolio
- a slideshow
- a static information page
- a game UI

The ideal emotional progression is:

**curiosity → discovery → immersion → understanding → scale → cultural connection → choice**

---

# 29. FINAL BUILD INSTRUCTION

Use the research files supplied alongside this prompt as the structured content source.

First build:

1. routing
2. global theme system
3. landing page
4. Epic Fantasy page
5. ASOIAF storytelling page
6. scene-based scroll engine
7. right-side timeline
8. data layer
9. evidence system
10. responsive behaviour
11. reduced-motion behaviour

Then progressively enrich each scene with micro-interactions.

Do not create all animations at once if this compromises performance.

The final output should be a coherent, production-quality interactive editorial experience.

The user should be able to scroll from the first page into the ASOIAF story and feel that each scroll is revealing a new layer of the subject.

The website should tell the story through:

**movement + spatial composition + typography + data + imagery + interaction**

rather than through text alone.

---

# 30. SOURCE-OF-TRUTH FILES

Use these files from the accompanying research freeze:

- 00_site_architecture.json
- 01_core_research.json
- 02_books.csv
- 03_tv.csv
- 04_sales.csv
- 05_awards.csv
- 06_world_entities.json
- 07_timeline.csv
- 08_themes.json
- 09_adaptation.csv
- 10_current_2021_2026.csv
- 11_sources.csv
- 12_visualizations.json
- 13_platform_content.json
- 14_image_sources.json
- 17_research_freeze.md

The previous prompt pack is superseded by this master prompt.

RESEARCH FREEZE:
2026-09-16

DESIGN SPECIFICATION:
This document supersedes the previous visual/design prompt while retaining the underlying research datasets.
