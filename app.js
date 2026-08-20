// ===== CONSTANTS =====
const SUBJECTS = ['Math', 'Reading', 'Science', 'Writing', 'Test Prep', 'Spanish', 'Coding'];
const STYLE_TAGS = ['Patient & encouraging', 'Fast-paced & efficient', 'Makes it fun', 'Strict & structured', 'Test-strategy expert', 'Real-world examples'];
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const BLOCKS = ['Morning', 'Afternoon', 'Evening'];
const BUDGET_TIERS = [
  { label: '$20–30/hr', max: 30 },
  { label: '$30–45/hr', max: 45 },
  { label: '$45–60/hr', max: 60 },
  { label: '$60+/hr', max: 999 },
];

const TUTORS = [
  { id: 'a1', name: 'Ava Torres', subjects: ['Math', 'Test Prep'], rate: 40, rating: 4.9, reviews: 128,
    initials: 'AT', gradient: 'linear-gradient(135deg,#8a7bf0,#6c5ce7)',
    styles: ['Patient & encouraging', 'Test-strategy expert'],
    avail: ['Mon-Afternoon', 'Wed-Afternoon', 'Thu-Evening'],
    prompt: { q: 'My approach to a tricky problem', a: "We slow down and find exactly where the confusion starts — usually it's one small gap, not the whole concept." },
    slots: [{ day: 'Wed', time: '4:00–5:00 PM', block: 'Afternoon' }, { day: 'Sat', time: '10:00–11:00 AM', block: 'Morning' }] },
  { id: 'a2', name: 'Jordan Blake', subjects: ['Science', 'Writing'], rate: 35, rating: 4.7, reviews: 64,
    initials: 'JB', gradient: 'linear-gradient(135deg,#4fc3d9,#2f96b0)',
    styles: ['Makes it fun', 'Real-world examples'],
    avail: ['Tue-Evening', 'Thu-Evening', 'Sun-Afternoon'],
    prompt: { q: 'Session with me feels like', a: "less lecture, more lab partner — we build the concept with examples from stuff you actually care about." },
    slots: [{ day: 'Tue', time: '6:00–7:00 PM', block: 'Evening' }, { day: 'Sun', time: '2:00–3:00 PM', block: 'Afternoon' }] },
  { id: 'a3', name: 'Priya Nandan', subjects: ['Math', 'Coding'], rate: 50, rating: 5.0, reviews: 41,
    initials: 'PN', gradient: 'linear-gradient(135deg,#f5a623,#d9860a)',
    styles: ['Fast-paced & efficient', 'Strict & structured'],
    avail: ['Mon-Evening', 'Wed-Evening', 'Fri-Afternoon'],
    prompt: { q: 'A belief I hold as a tutor', a: "You don't need to love the subject to get really good at it. We just need a system that works for how you think." },
    slots: [{ day: 'Fri', time: '4:30–5:30 PM', block: 'Afternoon' }, { day: 'Mon', time: '6:00–7:00 PM', block: 'Evening' }] },
  { id: 'a4', name: 'Marcus Webb', subjects: ['Reading', 'Writing'], rate: 30, rating: 4.6, reviews: 97,
    initials: 'MW', gradient: 'linear-gradient(135deg,#6fbf73,#469b4b)',
    styles: ['Patient & encouraging', 'Makes it fun'],
    avail: ['Tue-Afternoon', 'Thu-Afternoon', 'Sat-Morning'],
    prompt: { q: "What most students don't expect", a: "is how much faster reading gets once we stop treating every sentence like a test question." },
    slots: [{ day: 'Thu', time: '3:30–4:30 PM', block: 'Afternoon' }, { day: 'Sat', time: '9:00–10:00 AM', block: 'Morning' }] },
  { id: 'a5', name: 'Dr. Lena Cho', subjects: ['Science', 'Test Prep'], rate: 55, rating: 4.9, reviews: 150,
    initials: 'LC', gradient: 'linear-gradient(135deg,#4a6fd9,#2e4fb0)',
    styles: ['Test-strategy expert', 'Strict & structured'],
    avail: ['Mon-Morning', 'Wed-Morning', 'Sun-Evening'],
    prompt: { q: 'My approach to test day', a: "By the time the real test comes around, you've already seen every trick the test writers like to pull." },
    slots: [{ day: 'Sun', time: '6:30–7:30 PM', block: 'Evening' }, { day: 'Wed', time: '8:00–9:00 AM', block: 'Morning' }] },
  { id: 'a6', name: 'Sam Alvarez', subjects: ['Spanish', 'Reading'], rate: 28, rating: 4.8, reviews: 73,
    initials: 'SA', gradient: 'linear-gradient(135deg,#e8836b,#c85a41)',
    styles: ['Makes it fun', 'Real-world examples'],
    avail: ['Tue-Morning', 'Thu-Morning', 'Fri-Evening'],
    prompt: { q: 'Session with me feels like', a: "a conversation, not a worksheet — we talk about music, shows, whatever gets you actually using the language." },
    slots: [{ day: 'Fri', time: '5:00–6:00 PM', block: 'Evening' }, { day: 'Thu', time: '8:30–9:30 AM', block: 'Morning' }] },
  { id: 'a7', name: 'Devon Price', subjects: ['Coding', 'Math'], rate: 45, rating: 4.7, reviews: 58,
    initials: 'DP', gradient: 'linear-gradient(135deg,#a68fc9,#7a5fa8)',
    styles: ['Fast-paced & efficient', 'Real-world examples'],
    avail: ['Mon-Afternoon', 'Fri-Afternoon', 'Sat-Afternoon'],
    prompt: { q: 'My approach to a tricky problem', a: "We build something small and broken on purpose, then fix it together — that's how the concept actually sticks." },
    slots: [{ day: 'Sat', time: '1:00–2:00 PM', block: 'Afternoon' }, { day: 'Mon', time: '4:00–5:00 PM', block: 'Afternoon' }] },
  { id: 'a8', name: 'Rachel Kim', subjects: ['Writing', 'Test Prep'], rate: 38, rating: 4.9, reviews: 112,
    initials: 'RK', gradient: 'linear-gradient(135deg,#e88bb0,#c2578a)',
    styles: ['Strict & structured', 'Test-strategy expert'],
    avail: ['Wed-Afternoon', 'Thu-Afternoon', 'Sun-Morning'],
    prompt: { q: 'A belief I hold as a tutor', a: "A strong essay isn't about fancy words — it's about a clear argument you could defend out loud." },
    slots: [{ day: 'Wed', time: '5:00–6:00 PM', block: 'Afternoon' }, { day: 'Sun', time: '10:00–11:00 AM', block: 'Morning' }] },
  { id: 'a9', name: 'Theo Nakamura', subjects: ['Math', 'Science'], rate: 33, rating: 4.5, reviews: 39,
    initials: 'TN', gradient: 'linear-gradient(135deg,#e0b23e,#c28f1f)',
    styles: ['Patient & encouraging', 'Real-world examples'],
    avail: ['Tue-Afternoon', 'Sat-Morning', 'Sun-Afternoon'],
    prompt: { q: "What most students don't expect", a: "is that I get just as excited about the small wins — you catching your own mistake is the whole point." },
    slots: [{ day: 'Tue', time: '4:00–5:00 PM', block: 'Afternoon' }, { day: 'Sun', time: '1:00–2:00 PM', block: 'Afternoon' }] },
];

// ===== STATE =====
let profile = loadProfile();
let deck = [];
let deckIndex = 0;
let matches = [];   // {tutor, sharedSlots}
let recurring = []; // {tutor, day, block}
let ondemandBookings = []; // {tutor, day, time, slotIdx}
const bookedSlotKeys = new Set(); // `${tutorId}-${slotIdx}`
const chatLog = {};
let onboardingMode = 'initial'; // 'initial' | 'edit'
let odFilters = { subject: 'All', day: 'All', block: 'All', maxRate: 999, minRating: 0 };
let discoverFilters = { subjects: new Set(), maxRate: Infinity, minRating: 0 };
let lastSwipe = null; // { tutor, dir } — single-level undo

function loadProfile() {
  try {
    const raw = localStorage.getItem('tutorlyProfile');
    if (!raw) return null;
    const p = JSON.parse(raw);
    p.availability = new Set(p.availability || []);
    return p;
  } catch (e) { return null; }
}
function saveProfile() {
  localStorage.setItem('tutorlyProfile', JSON.stringify({
    subjects: profile.subjects, availability: Array.from(profile.availability),
    styles: profile.styles, maxRate: profile.maxRate,
  }));
}

// ===== MATCH SCORING =====
function sharedSlots(tutor, p) {
  return tutor.avail.filter(a => p.availability.has(a));
}
function computeScore(tutor, p) {
  const sharedSubjects = tutor.subjects.filter(s => p.subjects.includes(s)).length;
  const subjectScore = Math.min(sharedSubjects / Math.max(p.subjects.length, 1), 1);
  const sharedStyles = tutor.styles.filter(s => p.styles.includes(s)).length;
  const styleScore = p.styles.length ? Math.min(sharedStyles / p.styles.length, 1) : 0.7;
  const availScore = p.availability.size ? Math.min(sharedSlots(tutor, p).length / Math.min(p.availability.size, 3), 1) : 0.5;
  let total = subjectScore * 0.40 + styleScore * 0.30 + availScore * 0.30;
  if (tutor.rate > p.maxRate) total *= 0.85;
  return Math.max(35, Math.min(99, Math.round(total * 100)));
}

// ===== ONBOARDING =====
const obDraft = { subjects: new Set(), availability: new Set(), styles: new Set(), maxRate: null };

function renderOnboardingChips() {
  const subjEl = document.getElementById('ob-subjects');
  subjEl.innerHTML = SUBJECTS.map(s => `<button class="chip" data-subject="${s}">${s}</button>`).join('');
  subjEl.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = btn.dataset.subject;
      if (obDraft.subjects.has(s)) obDraft.subjects.delete(s); else obDraft.subjects.add(s);
      btn.classList.toggle('selected');
      checkObValid();
    });
  });

  const styleEl = document.getElementById('ob-styles');
  styleEl.innerHTML = STYLE_TAGS.map(s => `<button class="chip" data-style="${s}">${s}</button>`).join('');
  styleEl.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = btn.dataset.style;
      if (obDraft.styles.has(s)) {
        obDraft.styles.delete(s);
        btn.classList.remove('selected');
      } else {
        if (obDraft.styles.size >= 3) return;
        obDraft.styles.add(s);
        btn.classList.add('selected');
      }
    });
  });

  const budgetEl = document.getElementById('ob-budget');
  budgetEl.innerHTML = BUDGET_TIERS.map(b => `<button class="chip" data-max="${b.max}">${b.label}</button>`).join('');
  budgetEl.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      budgetEl.querySelectorAll('.chip').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      obDraft.maxRate = Number(btn.dataset.max);
      checkObValid();
    });
  });

  const gridEl = document.getElementById('ob-availability');
  const blockAbbr = { Morning: 'Morn', Afternoon: 'Aft', Evening: 'Eve' };
  let gridHtml = `<div class="grid-head"></div>` + BLOCKS.map(b => `<div class="grid-head">${blockAbbr[b]}</div>`).join('');
  DAYS.forEach(day => {
    gridHtml += `<div class="grid-day">${day}</div>`;
    BLOCKS.forEach(block => {
      gridHtml += `<div class="avail-cell" data-key="${day}-${block}"></div>`;
    });
  });
  gridEl.innerHTML = gridHtml;
  gridEl.querySelectorAll('.avail-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const key = cell.dataset.key;
      if (obDraft.availability.has(key)) obDraft.availability.delete(key); else obDraft.availability.add(key);
      cell.classList.toggle('selected');
      checkObValid();
    });
  });
}

function checkObValid() {
  const valid = obDraft.subjects.size > 0 && obDraft.availability.size > 0;
  document.getElementById('ob-submit').disabled = !valid;
}

function prefillOnboarding(p) {
  obDraft.subjects = new Set(p.subjects);
  obDraft.availability = new Set(p.availability);
  obDraft.styles = new Set(p.styles);
  obDraft.maxRate = p.maxRate;
  document.querySelectorAll('#ob-subjects .chip').forEach(b => b.classList.toggle('selected', obDraft.subjects.has(b.dataset.subject)));
  document.querySelectorAll('#ob-styles .chip').forEach(b => b.classList.toggle('selected', obDraft.styles.has(b.dataset.style)));
  document.querySelectorAll('#ob-budget .chip').forEach(b => b.classList.toggle('selected', Number(b.dataset.max) === obDraft.maxRate));
  document.querySelectorAll('#ob-availability .avail-cell').forEach(c => c.classList.toggle('selected', obDraft.availability.has(c.dataset.key)));
  checkObValid();
}

document.getElementById('ob-submit').addEventListener('click', () => {
  profile = {
    subjects: Array.from(obDraft.subjects),
    availability: new Set(obDraft.availability),
    styles: Array.from(obDraft.styles),
    maxRate: obDraft.maxRate || 999,
  };
  saveProfile();
  buildDeck();
  if (onboardingMode === 'edit') {
    showScreen(editReturnScreen);
    showToast('Preferences updated');
  } else {
    showScreen('home');
  }
});

let editReturnScreen = 'profile';
function openOnboarding(mode, returnTo) {
  onboardingMode = mode;
  if (mode === 'edit') editReturnScreen = returnTo || 'profile';
  renderOnboardingChips();
  if (mode === 'edit' && profile) prefillOnboarding(profile);
  showScreen('onboarding');
}

// ===== DECK / DISCOVER =====
const cardStack = document.getElementById('card-stack');

function resetDiscoverFilters() {
  discoverFilters = { subjects: new Set(profile.subjects), maxRate: Infinity, minRating: 0 };
}

function buildDeck() {
  resetDiscoverFilters();
  applyDiscoverFilters();
}

function applyDiscoverFilters() {
  deck = TUTORS.filter(t =>
      t.subjects.some(s => discoverFilters.subjects.has(s)) &&
      t.rate <= discoverFilters.maxRate &&
      t.rating >= discoverFilters.minRating
    )
    .map(t => ({ ...t, score: computeScore(t, profile) }))
    .sort((a, b) => b.score - a.score);
  deckIndex = 0;
  lastSwipe = null;
  updateUndoButton();
  renderStack();
}

// ===== DISCOVER FILTERS =====
const discoverFilterModal = document.getElementById('discover-filter-modal');
const discoverFilterSheet = document.getElementById('discover-filter-sheet');
let discoverDraft = { subjects: new Set(), maxRate: Infinity, minRating: 0 };

function openDiscoverFilters() {
  discoverDraft = { subjects: new Set(discoverFilters.subjects), maxRate: discoverFilters.maxRate, minRating: discoverFilters.minRating };
  renderDiscoverFilterSheet();
  discoverFilterModal.classList.remove('hidden');
}

function renderDiscoverFilterSheet() {
  const ratingTiers = [{ label: 'Any Rating', min: 0 }, { label: '4.5+', min: 4.5 }, { label: '4.8+', min: 4.8 }, { label: '5.0', min: 5.0 }];
  discoverFilterSheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>Discover Filters</h2>
    <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 18px;">Browse beyond your saved preferences — this won't change your profile.</p>
    <div class="ob-section">
      <div class="ob-label">Subjects</div>
      <div class="chip-row" id="df-subjects">${SUBJECTS.map(s => `<button class="chip ${discoverDraft.subjects.has(s) ? 'selected' : ''}" data-subject="${s}">${s}</button>`).join('')}</div>
    </div>
    <div class="ob-section">
      <div class="ob-label">Max Price</div>
      <div class="chip-row" id="df-budget">
        <button class="chip ${discoverDraft.maxRate === Infinity ? 'selected' : ''}" data-max="Infinity">Any</button>
        ${BUDGET_TIERS.map(b => `<button class="chip ${discoverDraft.maxRate === b.max ? 'selected' : ''}" data-max="${b.max}">${b.label}</button>`).join('')}
      </div>
    </div>
    <div class="ob-section">
      <div class="ob-label">Minimum Rating</div>
      <div class="chip-row" id="df-rating">${ratingTiers.map(r => `<button class="chip ${discoverDraft.minRating === r.min ? 'selected' : ''}" data-min="${r.min}">${r.label}</button>`).join('')}</div>
    </div>
    <button class="primary-btn" id="df-apply-btn">Apply Filters</button>
    <button class="text-btn" id="df-reset-btn">Reset to My Preferences</button>
  `;
  discoverFilterSheet.querySelectorAll('#df-subjects .chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = btn.dataset.subject;
      if (discoverDraft.subjects.has(s)) discoverDraft.subjects.delete(s); else discoverDraft.subjects.add(s);
      btn.classList.toggle('selected');
      checkDiscoverFilterValid();
    });
  });
  discoverFilterSheet.querySelectorAll('#df-budget .chip').forEach(btn => {
    btn.addEventListener('click', () => {
      discoverFilterSheet.querySelectorAll('#df-budget .chip').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      discoverDraft.maxRate = Number(btn.dataset.max);
    });
  });
  discoverFilterSheet.querySelectorAll('#df-rating .chip').forEach(btn => {
    btn.addEventListener('click', () => {
      discoverFilterSheet.querySelectorAll('#df-rating .chip').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      discoverDraft.minRating = Number(btn.dataset.min);
    });
  });
  document.getElementById('df-apply-btn').addEventListener('click', () => {
    discoverFilters = { subjects: new Set(discoverDraft.subjects), maxRate: discoverDraft.maxRate, minRating: discoverDraft.minRating };
    applyDiscoverFilters();
    discoverFilterModal.classList.add('hidden');
    showToast('Filters applied');
  });
  document.getElementById('df-reset-btn').addEventListener('click', () => {
    resetDiscoverFilters();
    applyDiscoverFilters();
    discoverFilterModal.classList.add('hidden');
    showToast('Filters reset to your preferences');
  });
  checkDiscoverFilterValid();
}

function checkDiscoverFilterValid() {
  document.getElementById('df-apply-btn').disabled = discoverDraft.subjects.size === 0;
}

discoverFilterModal.addEventListener('click', (e) => { if (e.target === discoverFilterModal) discoverFilterModal.classList.add('hidden'); });

function renderStack() {
  cardStack.innerHTML = '';
  const visible = deck.slice(deckIndex, deckIndex + 3);
  if (visible.length === 0) {
    cardStack.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;text-align:center;color:var(--ink-soft);padding:0 20px;font-size:14px;">
      You've seen everyone who teaches what you need.<br><br>Check On-Demand for open times, or widen your preferences.
    </div>`;
    return;
  }
  const appendOrder = visible.slice().reverse();
  appendOrder.forEach((t, idx) => {
    const depthFromFront = appendOrder.length - 1 - idx;
    const el = buildCard(t);
    el.style.zIndex = 10 + idx;
    el.style.top = `${depthFromFront * 12}px`;
    el.style.left = `${depthFromFront * 8}px`;
    el.style.right = `${depthFromFront * 8}px`;
    el.style.bottom = '0';
    cardStack.appendChild(el);
  });
  const topCard = cardStack.lastElementChild;
  if (topCard) makeDraggable(topCard);
}

function buildCard(t) {
  const shared = sharedSlots(t, profile);
  const overlapText = shared.length > 0
    ? `<span class="overlap-yes">✓ ${shared.length} time${shared.length > 1 ? 's' : ''} match your schedule</span>`
    : `<span class="overlap-no">No schedule overlap yet</span>`;
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = t.id;
  card.innerHTML = `
    <div class="card-photo" style="background:${t.gradient}">
      <div class="match-badge">${t.score}% Match</div>
      <div class="initials">${t.initials}</div>
      <div class="stamp like">Like</div>
      <div class="stamp pass">Pass</div>
    </div>
    <div class="card-body">
      <div class="card-name-row"><h2>${t.name}</h2></div>
      <div class="card-meta"><span>$${t.rate}/hr</span><span>★ ${t.rating} (${t.reviews})</span></div>
      <div class="card-meta">${overlapText}</div>
      <div class="tag-row">${t.subjects.map(s => `<span class="tag subject">${s}</span>`).join('')}</div>
      <div class="tag-row">${t.styles.map(s => `<span class="tag style">${s}</span>`).join('')}</div>
      <div class="prompt-block">
        <div class="prompt-q">${t.prompt.q}</div>
        <div class="prompt-a">${t.prompt.a}</div>
      </div>
    </div>
  `;
  card.addEventListener('click', (e) => {
    if (card.dataset.dragged === 'true') { card.dataset.dragged = 'false'; return; }
    openDetail(t);
  });
  return card;
}

function makeDraggable(card) {
  let startX = 0, startY = 0, curX = 0, curY = 0, dragging = false;
  const likeStamp = card.querySelector('.stamp.like');
  const passStamp = card.querySelector('.stamp.pass');

  function down(x, y) { dragging = true; startX = x; startY = y; card.classList.add('dragging'); }
  function move(x, y) {
    if (!dragging) return;
    curX = x - startX; curY = y - startY;
    if (Math.abs(curX) > 6) card.dataset.dragged = 'true';
    const rotate = curX / 14;
    card.style.transform = `translate(${curX}px, ${curY}px) rotate(${rotate}deg)`;
    const progress = Math.min(Math.abs(curX) / 100, 1);
    if (curX > 0) { likeStamp.style.opacity = progress; passStamp.style.opacity = 0; }
    else { passStamp.style.opacity = progress; likeStamp.style.opacity = 0; }
  }
  function up() {
    if (!dragging) return;
    dragging = false;
    card.classList.remove('dragging');
    if (curX > 110) resolveSwipe(card, 'like');
    else if (curX < -110) resolveSwipe(card, 'pass');
    else { card.style.transform = ''; likeStamp.style.opacity = 0; passStamp.style.opacity = 0; }
    curX = 0; curY = 0;
  }

  card.addEventListener('mousedown', (e) => down(e.clientX, e.clientY));
  window.addEventListener('mousemove', (e) => move(e.clientX, e.clientY));
  window.addEventListener('mouseup', up);
  card.addEventListener('touchstart', (e) => { const t = e.touches[0]; down(t.clientX, t.clientY); }, { passive: true });
  card.addEventListener('touchmove', (e) => { const t = e.touches[0]; move(t.clientX, t.clientY); }, { passive: true });
  card.addEventListener('touchend', up);

  card._forceSwipe = (dir) => resolveSwipe(card, dir);
}

function resolveSwipe(card, dir) {
  const t = deck[deckIndex];
  const flyX = dir === 'like' ? 600 : -600;
  card.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
  card.style.transform = `translate(${flyX}px, ${curYOf(card)}px) rotate(${dir === 'like' ? 25 : -25}deg)`;
  card.style.opacity = '0';
  deckIndex++;
  lastSwipe = { tutor: t, dir };
  updateUndoButton();
  setTimeout(() => {
    renderStack();
    if (dir === 'like') handleLike(t);
  }, 220);
}
function curYOf(card) {
  const m = card.style.transform.match(/translate\([^,]+,\s*(-?\d+(?:\.\d+)?)px\)/);
  return m ? m[1] : 0;
}

function updateUndoButton() {
  document.getElementById('btn-undo').disabled = !lastSwipe;
}

function undoSwipe() {
  if (!lastSwipe) return;
  const { tutor: t, dir } = lastSwipe;
  if (dir === 'like') {
    matches = matches.filter(m => m.tutor.id !== t.id);
    recurring = recurring.filter(r => r.tutor.id !== t.id);
    delete chatLog[t.id];
    updateNavBadge();
  }
  deckIndex = Math.max(0, deckIndex - 1);
  lastSwipe = null;
  updateUndoButton();
  renderStack();
  showToast(`Undid your ${dir === 'like' ? 'like on' : 'pass on'} ${t.name}`);
}

function handleLike(t) {
  const shared = sharedSlots(t, profile);
  matches.push({ tutor: t, sharedSlots: shared });
  chatLog[t.id] = [
    { from: 'them', text: `Hi! Thanks for the match — I'd love to help with ${t.subjects.filter(s => profile.subjects.includes(s)).join(' & ')}. What are you hoping to work on first?` }
  ];
  updateNavBadge();
  showMatchModal(t, shared);
}

// ===== MATCH MODAL =====
const matchModal = document.getElementById('match-modal');
const matchBody = document.getElementById('match-celebration-body');
function showMatchModal(t, shared) {
  const firstName = t.name.replace(/^Dr\.\s*/, '').split(' ')[0];
  if (shared.length > 0) {
    matchBody.innerHTML = `
      <div class="match-hearts">✦ ✧ ✦</div>
      <h1>It's a Match!</h1>
      <p>You and ${firstName} have ${shared.length} overlapping time${shared.length > 1 ? 's' : ''} — set up a weekly session?</p>
      <div class="match-avatars"><div class="avatar-lg" style="background:${t.gradient}">${t.initials}</div></div>
      <button class="primary-btn" id="match-schedule-btn">Pick a Weekly Time</button>
      <button class="text-btn" id="match-message-btn">Send a Message Instead</button>
      <button class="text-btn" id="match-keep-swiping">Keep Browsing</button>
    `;
  } else {
    matchBody.innerHTML = `
      <div class="match-hearts">✦ ✧ ✦</div>
      <h1>It's a Match!</h1>
      <p>You and ${firstName} matched, but your regular schedules don't overlap yet. Check On-Demand for open one-time slots.</p>
      <div class="match-avatars"><div class="avatar-lg" style="background:${t.gradient}">${t.initials}</div></div>
      <button class="primary-btn" id="match-ondemand-btn">See Open Times</button>
      <button class="text-btn" id="match-message-btn">Send a Message Instead</button>
      <button class="text-btn" id="match-keep-swiping">Keep Browsing</button>
    `;
  }
  matchModal.classList.remove('hidden');
  matchModal.dataset.tid = t.id;
  document.getElementById('match-keep-swiping').addEventListener('click', () => matchModal.classList.add('hidden'));
  document.getElementById('match-message-btn').addEventListener('click', () => {
    matchModal.classList.add('hidden');
    openChat(t);
  });
  const scheduleBtn = document.getElementById('match-schedule-btn');
  if (scheduleBtn) scheduleBtn.addEventListener('click', () => { matchModal.classList.add('hidden'); openSlotPicker(t, shared); });
  const odBtn = document.getElementById('match-ondemand-btn');
  if (odBtn) odBtn.addEventListener('click', () => {
    matchModal.classList.add('hidden');
    odFilters = { subject: 'All', day: 'All', block: 'All', maxRate: 999, minRating: 0 };
    showScreen('ondemand');
  });
}

// ===== SLOT PICKER (recurring weekly) =====
const slotModal = document.getElementById('slot-modal');
const slotSheet = document.getElementById('slot-sheet');
function openSlotPicker(t, shared, replaceIndex) {
  const isReschedule = replaceIndex !== undefined;
  slotSheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>${isReschedule ? 'Reschedule your weekly time' : 'Set your weekly time'}</h2>
    <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 16px;">Pick one — you'll meet with ${t.name} at this time every week.</p>
    ${shared.map(key => {
      const [day, block] = key.split('-');
      return `<button class="slot-option" data-key="${key}">${dayFull(day)} · ${block}</button>`;
    }).join('')}
  `;
  slotModal.classList.remove('hidden');
  slotSheet.querySelectorAll('.slot-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const [day, block] = btn.dataset.key.split('-');
      if (isReschedule) {
        recurring[replaceIndex] = { tutor: t, day, block };
      } else {
        recurring.push({ tutor: t, day, block });
      }
      slotModal.classList.add('hidden');
      showToast(`${isReschedule ? 'Rescheduled' : 'Booked'}! Every ${dayFull(day)} · ${block} with ${t.name}`);
      showScreen('schedule');
    });
  });
}
function dayFull(abbr) {
  const map = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };
  return map[abbr] || abbr;
}
slotModal.addEventListener('click', (e) => { if (e.target === slotModal) slotModal.classList.add('hidden'); });

// ===== MANAGE MATCH / SESSION =====
const manageModal = document.getElementById('manage-modal');
const manageSheet = document.getElementById('manage-sheet');
function closeManageModal() { manageModal.classList.add('hidden'); }
manageModal.addEventListener('click', (e) => { if (e.target === manageModal) closeManageModal(); });

function openManageMatch(tutorId) {
  const m = matches.find(m => m.tutor.id === tutorId);
  if (!m) return;
  const t = m.tutor;
  manageSheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>${t.name}</h2>
    <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 20px;">Manage this match.</p>
    <button class="primary-btn" id="manage-message-btn">Message ${t.name.split(' ')[0]}</button>
    <button class="danger-btn" id="manage-unmatch-btn">Unmatch</button>
    <button class="text-btn" id="manage-close-btn">Cancel</button>
  `;
  manageModal.classList.remove('hidden');
  document.getElementById('manage-message-btn').addEventListener('click', () => { closeManageModal(); openChat(t); });
  document.getElementById('manage-close-btn').addEventListener('click', closeManageModal);
  document.getElementById('manage-unmatch-btn').addEventListener('click', () => confirmUnmatch(t));
}

function confirmUnmatch(t) {
  manageSheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>Unmatch ${t.name}?</h2>
    <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 20px;">This removes them from your matches, cancels any weekly sessions with them, and clears your conversation.</p>
    <button class="danger-btn" id="manage-confirm-unmatch-btn">Yes, Unmatch</button>
    <button class="text-btn" id="manage-close-btn">Cancel</button>
  `;
  document.getElementById('manage-close-btn').addEventListener('click', closeManageModal);
  document.getElementById('manage-confirm-unmatch-btn').addEventListener('click', () => {
    matches = matches.filter(m => m.tutor.id !== t.id);
    recurring = recurring.filter(r => r.tutor.id !== t.id);
    delete chatLog[t.id];
    updateNavBadge();
    closeManageModal();
    showToast(`Unmatched from ${t.name}`);
    renderSchedule();
  });
}

function openManageSession(refType, refIndex) {
  const entry = refType === 'recurring' ? recurring[refIndex] : ondemandBookings[refIndex];
  if (!entry) return;
  const t = entry.tutor;
  const label = refType === 'recurring' ? `Every ${dayFull(entry.day)} · ${entry.block}` : `${dayFull(entry.day)} · ${entry.time}`;
  manageSheet.innerHTML = `
    <div class="sheet-close"></div>
    <h2>${t.name}</h2>
    <p style="font-size:13px;color:var(--ink-soft);margin:6px 0 20px;">${label}</p>
    ${refType === 'recurring' ? '<button class="primary-btn" id="manage-reschedule-btn">Reschedule</button>' : ''}
    <button class="danger-btn" id="manage-cancel-session-btn">${refType === 'recurring' ? 'Cancel This Series' : 'Cancel Booking'}</button>
    <button class="text-btn" id="manage-close-btn">Close</button>
  `;
  manageModal.classList.remove('hidden');
  document.getElementById('manage-close-btn').addEventListener('click', closeManageModal);
  const rescheduleBtn = document.getElementById('manage-reschedule-btn');
  if (rescheduleBtn) {
    rescheduleBtn.addEventListener('click', () => {
      closeManageModal();
      openSlotPicker(t, sharedSlots(t, profile), refIndex);
    });
  }
  document.getElementById('manage-cancel-session-btn').addEventListener('click', () => {
    if (refType === 'recurring') {
      recurring.splice(refIndex, 1);
      showToast(`Cancelled your weekly session with ${t.name}`);
    } else {
      bookedSlotKeys.delete(entry.key);
      ondemandBookings.splice(refIndex, 1);
      showToast(`Cancelled your booking with ${t.name}`);
    }
    closeManageModal();
    renderSchedule();
  });
}

function updateNavBadge() {
  const count = matches.length;
  const badge = document.getElementById('nav-badge');
  if (count > 0) { badge.textContent = count; badge.classList.remove('hidden'); }
  else { badge.classList.add('hidden'); }
}

// ===== TOAST =====
function showToast(text) {
  const toast = document.getElementById('toast');
  toast.textContent = text;
  toast.classList.remove('hidden');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.add('hidden'), 2600);
}

// ===== DETAIL MODAL =====
const detailModal = document.getElementById('detail-modal');
const detailSheet = document.getElementById('detail-sheet');
function openDetail(t) {
  const shared = sharedSlots(t, profile);
  detailSheet.innerHTML = `
    <div class="sheet-close"></div>
    <div class="card-photo" style="background:${t.gradient};height:160px;border-radius:16px;margin-bottom:14px;">
      <div class="match-badge">${t.score}% Match</div>
      <div class="initials">${t.initials}</div>
    </div>
    <div class="card-name-row"><h2>${t.name}</h2></div>
    <div class="card-meta" style="margin-top:4px;"><span>$${t.rate}/hr</span><span>★ ${t.rating} (${t.reviews})</span></div>
    <div class="section-title">Subjects</div>
    <div class="tag-row">${t.subjects.map(s => `<span class="tag subject">${s}</span>`).join('')}</div>
    <div class="section-title">Teaching Style</div>
    <div class="tag-row">${t.styles.map(s => `<span class="tag style">${s}</span>`).join('')}</div>
    <div class="section-title">In their words</div>
    <div class="prompt-block">
      <div class="prompt-q">${t.prompt.q}</div>
      <div class="prompt-a">${t.prompt.a}</div>
    </div>
    <div class="section-title">Schedule overlap</div>
    <p style="font-size:13px;color:var(--ink-soft);">${shared.length ? shared.map(k => { const [d,b]=k.split('-'); return `${dayFull(d)} · ${b}`; }).join(', ') : 'None with your current availability'}</p>
    <button class="primary-btn" style="margin-top:20px;" id="detail-like-btn">Send a Like</button>
  `;
  detailModal.classList.remove('hidden');
  document.getElementById('detail-like-btn').addEventListener('click', () => {
    detailModal.classList.add('hidden');
    const topCard = cardStack.lastElementChild;
    if (topCard && topCard.dataset.id === t.id && topCard._forceSwipe) topCard._forceSwipe('like');
  });
}
detailModal.addEventListener('click', (e) => { if (e.target === detailModal) detailModal.classList.add('hidden'); });

// ===== ON-DEMAND =====
function renderOdFilters() {
  const bar = document.getElementById('od-filters');
  const subjOptions = ['All', ...SUBJECTS];
  const dayOptions = ['All', ...DAYS];
  const blockOptions = ['All', ...BLOCKS];
  bar.innerHTML = `
    <div class="filter-row" id="od-subject-row">${subjOptions.map(s => `<button class="filter-chip ${odFilters.subject===s?'selected':''}" data-val="${s}">${s}</button>`).join('')}</div>
    <div class="filter-row" id="od-day-row">${dayOptions.map(d => `<button class="filter-chip ${odFilters.day===d?'selected':''}" data-val="${d}">${d}</button>`).join('')}</div>
    <div class="filter-row" id="od-block-row">${blockOptions.map(b => `<button class="filter-chip ${odFilters.block===b?'selected':''}" data-val="${b}">${b}</button>`).join('')}</div>
  `;
  bindFilterRow('od-subject-row', v => { odFilters.subject = v; renderOndemandList(); });
  bindFilterRow('od-day-row', v => { odFilters.day = v; renderOndemandList(); });
  bindFilterRow('od-block-row', v => { odFilters.block = v; renderOndemandList(); });
}
function bindFilterRow(rowId, onSelect) {
  const row = document.getElementById(rowId);
  row.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      row.querySelectorAll('.filter-chip').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      onSelect(btn.dataset.val);
    });
  });
}

function renderOndemandList() {
  const list = document.getElementById('ondemand-list');
  const rows = [];
  TUTORS.forEach(t => {
    t.slots.forEach((slot, idx) => {
      const key = `${t.id}-${idx}`;
      if (bookedSlotKeys.has(key)) return;
      if (odFilters.subject !== 'All' && !t.subjects.includes(odFilters.subject)) return;
      if (odFilters.day !== 'All' && slot.day !== odFilters.day) return;
      if (odFilters.block !== 'All' && slot.block !== odFilters.block) return;
      rows.push({ t, slot, key });
    });
  });
  if (rows.length === 0) {
    list.innerHTML = `<p class="empty-state">No open slots match those filters right now.<br><br>Try widening your search.</p>`;
    return;
  }
  list.innerHTML = rows.map(({ t, slot, key }) => `
    <div class="slot-card">
      <div class="avatar-md" style="background:${t.gradient}">${t.initials}</div>
      <div class="slot-info">
        <div class="slot-name">${t.name}</div>
        <div class="slot-meta">${t.subjects.join(' • ')} · $${t.rate}/hr · ★ ${t.rating}</div>
        <div class="slot-time">${slot.day} · ${slot.time}</div>
      </div>
      <button class="book-btn" data-key="${key}">Book</button>
    </div>
  `).join('');
  list.querySelectorAll('.book-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      const [tid, idxStr] = key.split('-').length > 2 ? [key.split('-').slice(0,-1).join('-'), key.split('-').pop()] : key.split('-');
      const idx = Number(idxStr);
      const t = TUTORS.find(tu => tu.id === tid);
      const slot = t.slots[idx];
      bookedSlotKeys.add(key);
      ondemandBookings.push({ tutor: t, day: slot.day, time: slot.time, key });
      showToast(`Booked! ${slot.day} · ${slot.time} with ${t.name}`);
      renderOndemandList();
      renderSchedule();
    });
  });
}

// ===== SCHEDULE =====
function getSessions() {
  return [
    ...recurring.map((r, i) => ({ tutor: r.tutor, day: r.day, label: r.block, weekly: true, refType: 'recurring', refIndex: i })),
    ...ondemandBookings.map((b, i) => ({ tutor: b.tutor, day: b.day, label: b.time, weekly: false, refType: 'ondemand', refIndex: i })),
  ].sort((a, b) => DAYS.indexOf(a.day) - DAYS.indexOf(b.day));
}

function renderSchedule() {
  const container = document.getElementById('schedule-content');
  let html = `<div class="section-title">Your Matches</div>`;
  if (matches.length === 0) {
    html += `<p class="empty-state" style="margin-top:0;">No matches yet — head to Discover to start swiping.</p>`;
  } else {
    matches.slice().reverse().forEach(m => {
      const t = m.tutor;
      const log = chatLog[t.id] || [];
      const last = log[log.length - 1];
      html += `<div class="match-row">
        <div class="avatar-md" style="background:${t.gradient}">${t.initials}</div>
        <div class="match-row-main" data-id="${t.id}"><div class="chat-name">${t.name}</div><div class="last-msg">${last ? last.text : 'Say hello!'}</div></div>
        <button class="row-menu-btn" data-id="${t.id}" aria-label="Manage match">⋯</button>
      </div>`;
    });
  }

  html += `<div class="section-title">This Week</div>`;
  const sessions = getSessions();

  if (sessions.length === 0) {
    html += `<p class="empty-state" style="margin-top:0;">No sessions booked yet. Match with a tutor or grab an On-Demand slot.</p>`;
  } else {
    sessions.forEach(s => {
      html += `<div class="session-row" data-ref-type="${s.refType}" data-ref-index="${s.refIndex}">
        <div class="session-day">${s.day}</div>
        <div class="session-info">
          <div class="session-name">${s.tutor.name}</div>
          <div class="session-meta">${s.label} · ${s.tutor.subjects.join(' & ')}</div>
        </div>
        <span class="freq-badge ${s.weekly ? 'weekly' : 'once'}">${s.weekly ? 'Weekly' : 'One-time'}</span>
      </div>`;
    });
  }

  container.innerHTML = html;
  container.querySelectorAll('.row-menu-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openManageMatch(btn.dataset.id);
    });
  });
  container.querySelectorAll('.session-row').forEach(row => {
    row.addEventListener('click', () => {
      openManageSession(row.dataset.refType, Number(row.dataset.refIndex));
    });
  });
  container.querySelectorAll('.match-row-main').forEach(row => {
    row.addEventListener('click', () => {
      const m = matches.find(m => m.tutor.id === row.dataset.id);
      if (m) openChat(m.tutor);
    });
  });
}

// ===== HOME =====
function renderHome() {
  const container = document.getElementById('home-content');
  const topPick = deck[deckIndex];
  const sessionCount = recurring.length + ondemandBookings.length;
  const nextSession = getSessions()[0];

  let html = `
    <div class="home-greeting">
      <h1>Welcome back 👋</h1>
      <p>Here's what's happening with your tutoring.</p>
    </div>
    <div class="stat-row">
      <div class="stat-chip"><div class="stat-num">${matches.length}</div><div class="stat-label">Matches</div></div>
      <div class="stat-chip"><div class="stat-num">${sessionCount}</div><div class="stat-label">Sessions</div></div>
      <div class="stat-chip"><div class="stat-num">${topPick ? topPick.score + '%' : '—'}</div><div class="stat-label">Top Match</div></div>
    </div>

    <div class="section-title">Next Session</div>`;

  if (nextSession) {
    html += `
      <div class="next-session-card">
        <div class="avatar-md" style="background:${nextSession.tutor.gradient}">${nextSession.tutor.initials}</div>
        <div class="session-info">
          <div class="session-name">${nextSession.tutor.name}</div>
          <div class="session-meta">${nextSession.day} · ${nextSession.label} · ${nextSession.tutor.subjects.join(' & ')}</div>
        </div>
        <span class="freq-badge ${nextSession.weekly ? 'weekly' : 'once'}">${nextSession.weekly ? 'Weekly' : 'One-time'}</span>
      </div>`;
  } else {
    html += `<p class="empty-state" style="margin-top:0;">Nothing booked yet — match with a tutor or grab an open slot.</p>`;
  }

  html += `
    <div class="section-title">Quick Actions</div>
    <div class="quick-actions">
      <button class="quick-action" data-screen="discover"><span class="qa-icon">🔍</span>Keep Swiping</button>
      <button class="quick-action" data-screen="ondemand"><span class="qa-icon">⚡</span>Open Times</button>
      <button class="quick-action" data-screen="schedule"><span class="qa-icon">📅</span>Your Matches</button>
      <button class="quick-action" data-screen="profile"><span class="qa-icon">⚙️</span>Preferences</button>
    </div>`;

  if (topPick) {
    html += `
      <div class="section-title">Your Top Match</div>
      <div class="spotlight-card" id="spotlight-card">
        <div class="avatar-md" style="background:${topPick.gradient}">${topPick.initials}</div>
        <div class="session-info">
          <div class="session-name">${topPick.name}</div>
          <div class="session-meta">${topPick.subjects.join(' • ')} · ${topPick.score}% Match</div>
        </div>
        <span class="spotlight-arrow">→</span>
      </div>`;
  }

  container.innerHTML = html;
  container.querySelectorAll('.quick-action').forEach(btn => {
    btn.addEventListener('click', () => showScreen(btn.dataset.screen));
  });
  const spotlight = document.getElementById('spotlight-card');
  if (spotlight) spotlight.addEventListener('click', () => showScreen('discover'));
}

// ===== CHAT =====
function openChat(t) {
  document.getElementById('chat-name').textContent = t.name;
  const av = document.getElementById('chat-avatar');
  av.style.background = t.gradient;
  av.textContent = t.initials;
  document.getElementById('chat-input').dataset.tid = t.id;
  renderChatMessages(t.id);
  showScreen('chat');
}
function renderChatMessages(tid) {
  const container = document.getElementById('chat-messages');
  const log = chatLog[tid] || [];
  container.innerHTML = log.map(m => `<div class="msg ${m.from === 'me' ? 'me' : 'them'}">${m.text}</div>`).join('');
  container.scrollTop = container.scrollHeight;
}
document.getElementById('chat-send').addEventListener('click', sendChatMessage);
document.getElementById('chat-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') sendChatMessage(); });
function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  const tid = input.dataset.tid;
  if (!text || !tid) return;
  chatLog[tid] = chatLog[tid] || [];
  chatLog[tid].push({ from: 'me', text });
  input.value = '';
  renderChatMessages(tid);
  renderSchedule();
  setTimeout(() => {
    chatLog[tid].push({ from: 'them', text: "Got it — thanks for sharing. Want to lock in our first session this week?" });
    renderChatMessages(tid);
    renderSchedule();
  }, 900);
}
document.getElementById('chat-back').addEventListener('click', () => showScreen('schedule'));

// ===== PROFILE / YOU =====
function renderProfileScreen() {
  const container = document.getElementById('profile-content');
  container.innerHTML = `
    <div class="pref-item"><div class="pref-label">Subjects</div><div class="pref-value">${profile.subjects.join(', ')}</div></div>
    <div class="pref-item"><div class="pref-label">Availability</div><div class="pref-value">${Array.from(profile.availability).map(k => { const [d,b]=k.split('-'); return `${d} ${b}`; }).join(', ')}</div></div>
    <div class="pref-item"><div class="pref-label">Preferred tutor style</div><div class="pref-value">${profile.styles.length ? profile.styles.join(', ') : 'No preference specified'}</div></div>
    <div class="pref-item"><div class="pref-label">Budget</div><div class="pref-value">${BUDGET_TIERS.find(b => b.max === profile.maxRate)?.label || 'No max set'}</div></div>
    <button class="primary-btn" id="edit-prefs-btn" style="margin-top:6px;">Edit Preferences</button>
  `;
  document.getElementById('edit-prefs-btn').addEventListener('click', () => openOnboarding('edit', 'profile'));
}

// ===== NAV / SCREENS =====
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (name === 'home') renderHome();
  if (name === 'schedule') renderSchedule();
  if (name === 'ondemand') { renderOdFilters(); renderOndemandList(); }
  if (name === 'profile') renderProfileScreen();
  const target = document.getElementById(`screen-${name}`);
  if (target) target.classList.remove('hidden');
  const navBtn = document.querySelector(`.nav-btn[data-screen="${name}"]`);
  if (navBtn) navBtn.classList.add('active');
}
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => showScreen(btn.dataset.screen));
});

document.getElementById('btn-like').addEventListener('click', () => {
  const top = cardStack.lastElementChild;
  if (top && top._forceSwipe) top._forceSwipe('like');
});
document.getElementById('btn-pass').addEventListener('click', () => {
  const top = cardStack.lastElementChild;
  if (top && top._forceSwipe) top._forceSwipe('pass');
});
document.getElementById('btn-info').addEventListener('click', () => {
  const t = deck[deckIndex];
  if (t) openDetail(t);
});
document.getElementById('btn-undo').addEventListener('click', undoSwipe);
document.getElementById('filter-btn').addEventListener('click', () => openOnboarding('edit', 'discover'));
document.getElementById('home-filter-btn').addEventListener('click', () => openOnboarding('edit', 'home'));
document.getElementById('discover-filter-btn').addEventListener('click', openDiscoverFilters);

// ===== INIT =====
if (profile) {
  buildDeck();
  showScreen('home');
} else {
  openOnboarding('initial');
}
