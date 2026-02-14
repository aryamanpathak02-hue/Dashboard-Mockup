// ── Data ──
let archives = [
  { id:1, number:'001', title:'The Twenty Minute VC', category:'STARTUP / VC', duration:143, host:'Harry Stebbings', audioUrl:null,
    transcript:'In this episode, Harry Stebbings discusses venture capital, startup funding, and entrepreneurship with insights from industry leaders.',
    summary:'A comprehensive discussion on VC trends — fundraising strategies, market dynamics, and the future of startup investing.' },
  { id:2, number:'002', title:'Huberman Lab', category:'HEALTH / SCIENCE', duration:210, host:'Andrew Huberman', audioUrl:null,
    transcript:'Dr. Huberman explores the science of sleep, neuroplasticity, and optimal performance with actionable protocols.',
    summary:'Neuroscience and health optimization — sleep science, brain plasticity, and evidence-based protocols.' },
  { id:3, number:'003', title:'People by WTF', category:'CULTURE / SOCIETY', duration:187, host:'Nikhil Kamath', audioUrl:null,
    transcript:'Nikhil Kamath engages in a thought-provoking conversation about culture, society, and human behavior.',
    summary:'Cultural exploration — discussions on society, human behavior, and contemporary social dynamics.' },
  { id:4, number:'004', title:'Lex Fridman Podcast', category:'TECHNOLOGY', duration:224, host:'Lex Fridman', audioUrl:null,
    transcript:'A deep conversation about artificial intelligence, consciousness, and the future of humanity.',
    summary:'AI, consciousness, and the meaning of life — a wide-ranging technical and philosophical discussion.' },
  { id:5, number:'005', title:'The Tim Ferriss Show', category:'BUSINESS', duration:96, host:'Tim Ferriss', audioUrl:null,
    transcript:'Tim Ferriss deconstructs world-class performers to extract tactics, tools, and routines you can use.',
    summary:'Productivity hacks and mental models from top performers across industries.' },
  { id:6, number:'006', title:'Invest Like the Best', category:'STARTUP / VC', duration:132, host:'Patrick O\'Shaughnessy', audioUrl:null,
    transcript:'Patrick explores the ideas, methods, and stories of people that will help you better invest your time and money.',
    summary:'Investment frameworks and mental models from leading investors and operators.' }
];
let archiveCounter = archives.length;

const AUTH_KEY = 'munshi_user';
function getAuth(){ try{ const r=sessionStorage.getItem(AUTH_KEY); return r?JSON.parse(r):null }catch(_){return null} }
function setAuth(u){ u?sessionStorage.setItem(AUTH_KEY,JSON.stringify(u)):sessionStorage.removeItem(AUTH_KEY) }

const MOCK_CLIENTS = [
  'Acme Corp','Globex','Initech','Hooli','Pied Piper','Umbrella Inc','Stark Industries',
  'Wayne Enterprises','Oscorp','Cyberdyne','Soylent Corp','Aperture Science','Massive Dynamic'
];

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  renderArchives();
  renderCollections();
  buildClientSlider();
  setupEventListeners();
  updateAuthUI();
  updatePremiumSection();
});

// ── Navigation ──
function showSection(name) {
  document.getElementById('homeSection').style.display = name === 'home' ? '' : 'none';
  document.getElementById('collectionsSection').style.display = name === 'collections' ? '' : 'none';
  document.getElementById('premiumSection').style.display = name === 'premium' ? '' : 'none';
}

// ── Event listeners ──
function setupEventListeners() {
  const uploadArea = document.getElementById('uploadArea');
  const audioFileInput = document.getElementById('audioFileInput');
  const uploadAddBtn = document.querySelector('.upload-add-btn');

  uploadArea.addEventListener('click', () => audioFileInput.click());
  uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
  uploadArea.addEventListener('drop', e => {
    e.preventDefault(); uploadArea.classList.remove('dragover');
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith('audio/')) handleFileSelect(f); else alert('Please drop an audio file');
  });
  if (uploadAddBtn) uploadAddBtn.addEventListener('click', e => { e.stopPropagation(); audioFileInput.click(); });
  audioFileInput.addEventListener('change', e => handleFileSelect(e.target.files[0]));

  document.getElementById('createBtn').addEventListener('click', () => document.getElementById('createModal').style.display = 'flex');
  document.getElementById('createArchiveBtn').addEventListener('click', () => document.getElementById('createModal').style.display = 'flex');
  document.getElementById('modalClose').addEventListener('click', () => document.getElementById('archiveModal').style.display = 'none');
  document.getElementById('createModalClose').addEventListener('click', () => document.getElementById('createModal').style.display = 'none');
  document.getElementById('archiveModal').addEventListener('click', e => { if (e.target.id === 'archiveModal') e.target.style.display = 'none'; });
  document.getElementById('createModal').addEventListener('click', e => { if (e.target.id === 'createModal') e.target.style.display = 'none'; });

  // Sign-in
  document.getElementById('signInBtn').addEventListener('click', () => document.getElementById('signInModal').style.display = 'flex');
  document.getElementById('signOutBtn').addEventListener('click', signOut);
  document.getElementById('signInModalClose').addEventListener('click', () => document.getElementById('signInModal').style.display = 'none');
  document.getElementById('signInModal').addEventListener('click', e => { if (e.target.id === 'signInModal') e.target.style.display = 'none'; });
  document.getElementById('signInForm').addEventListener('submit', handleSignIn);
  document.getElementById('premiumSignInBtn').addEventListener('click', () => {
    const u = getAuth();
    if (!u) document.getElementById('signInModal').style.display = 'flex';
    else alert('Contact sales to upgrade your team to Premium.');
  });

  document.getElementById('createArchiveForm').addEventListener('submit', handleCreateArchive);
  document.getElementById('modalAudioInput').addEventListener('change', e => { if (e.target.files[0]) console.log('Audio:', e.target.files[0].name); });

  // Nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      showSection(link.dataset.section || 'home');
    });
  });
}

// ── Auth ──
function updateAuthUI() {
  const u = getAuth();
  document.getElementById('signInBtn').style.display = u ? 'none' : '';
  document.getElementById('signOutBtn').style.display = u ? '' : 'none';
  const ub = document.getElementById('userBadge');
  ub.style.display = u ? '' : 'none'; if (u) ub.textContent = u.email;
  document.getElementById('premiumBadge').style.display = (u && u.isPremium) ? '' : 'none';
}
function updatePremiumSection() {
  const u = getAuth();
  document.querySelectorAll('.premium-card').forEach(c => {
    const l = c.querySelector('.premium-lock'); if (!l) return;
    c.classList.remove('unlocked');
    if (!u) l.textContent = 'Sign in to view';
    else if (u.isPremium) { c.classList.add('unlocked'); l.textContent = '✓ Included'; }
    else l.textContent = 'Upgrade';
  });
  const t = document.getElementById('premiumCtaText'), b = document.getElementById('premiumSignInBtn');
  if (!u) { t.textContent = 'Sign in to see plans and upgrade.'; b.textContent = 'Sign in'; b.style.display = ''; }
  else if (u.isPremium) { t.textContent = 'You have full Premium access.'; b.style.display = 'none'; }
  else { t.textContent = 'Upgrade to Premium for your team.'; b.textContent = 'Upgrade'; b.style.display = ''; }
}
function handleSignIn(e) {
  e.preventDefault();
  const email = document.getElementById('signInEmail').value.trim();
  if (!email) return;
  setAuth({ email, isPremium: document.getElementById('signInPremium').checked });
  document.getElementById('signInModal').style.display = 'none';
  document.getElementById('signInForm').reset();
  updateAuthUI(); updatePremiumSection();
}
function signOut() { setAuth(null); updateAuthUI(); updatePremiumSection(); }

// ── File handling ──
function handleFileSelect(file) {
  if (!file || !file.type.startsWith('audio/')) { alert('Please select an audio file'); return; }
  const bar = document.getElementById('progressFill'), txt = document.getElementById('progressText');
  document.getElementById('uploadProgress').style.display = 'block';
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 15;
    if (p >= 100) { p = 100; clearInterval(iv);
      setTimeout(() => { txt.textContent = 'Done!';
        setTimeout(() => { document.getElementById('uploadProgress').style.display = 'none'; bar.style.width = '0%';
          if (confirm('Processed! Create an archive?')) document.getElementById('createModal').style.display = 'flex';
        }, 800);
      }, 400);
    }
    bar.style.width = p + '%';
    txt.textContent = p < 30 ? 'Uploading…' : p < 60 ? 'Transcribing…' : p < 90 ? 'Summarising…' : 'Finalising…';
  }, 180);
}

// ── Mock generators ──
function mockTranscript(n){ return `Transcript of ${n}: A rich conversation covering multiple topics and perspectives. Key points and takeaways are highlighted throughout.`; }
function mockSummary(){ return 'Key topics and actionable insights distilled from the full audio recording.'; }

// ── Render archives (compact list on home) ──
function renderArchives() {
  const c = document.getElementById('archivesContainer'); c.innerHTML = '';
  archives.slice(0, 4).forEach(a => c.appendChild(archiveRow(a)));
}
function archiveRow(a) {
  const d = document.createElement('div'); d.className = 'archive-item';
  d.innerHTML = `
    <div class="archive-number-col">${a.number}</div>
    <div class="archive-body">
      <div class="archive-title">${a.title}</div>
      <div class="archive-meta">
        <span class="archive-tag">${a.category}</span>
        <div class="archive-meta-item"><span class="archive-meta-label">${a.duration}</span> min</div>
        <div class="archive-meta-item">${a.host}</div>
      </div>
    </div>
    <div class="archive-actions-col">
      <button class="archive-action-btn" onclick="event.stopPropagation();showArchiveDetail(${a.id})" title="View">&#8943;</button>
      <button class="archive-action-btn" onclick="event.stopPropagation();deleteArchive(${a.id})" title="Delete">&#10005;</button>
    </div>`;
  d.addEventListener('click', () => showArchiveDetail(a.id));
  return d;
}

// ── Render collections (grid) ──
function renderCollections() {
  const g = document.getElementById('collectionsGrid'); g.innerHTML = '';
  archives.forEach(a => {
    const c = document.createElement('div'); c.className = 'collection-card';
    c.innerHTML = `
      <span class="collection-card-num">Archive ${a.number}</span>
      <div class="collection-card-title">${a.title}</div>
      <div class="collection-card-meta">
        <span class="archive-tag">${a.category}</span>
        <span class="collection-card-host">${a.host} &middot; ${a.duration} min</span>
      </div>`;
    c.addEventListener('click', () => showArchiveDetail(a.id));
    g.appendChild(c);
  });
}

// ── Archive detail ──
function showArchiveDetail(id) {
  const a = archives.find(x => x.id === id); if (!a) return;
  document.getElementById('modalTitle').textContent = a.title;
  document.getElementById('transcriptText').textContent = a.transcript || 'No transcript.';
  document.getElementById('summaryText').textContent = a.summary || 'No summary.';
  const ap = document.getElementById('audioPlayer');
  if (a.audioUrl) { ap.src = a.audioUrl; ap.style.display = ''; } else { ap.src = ''; ap.style.display = 'none'; }
  document.getElementById('archiveModal').style.display = 'flex';
}
function deleteArchive(id) {
  if (!confirm('Delete this archive?')) return;
  archives = archives.filter(a => a.id !== id);
  renderArchives(); renderCollections();
}
function handleCreateArchive(e) {
  e.preventDefault();
  const t = document.getElementById('archiveTitle').value,
        cat = document.getElementById('archiveCategory').value,
        h = document.getElementById('archiveHost').value,
        f = document.getElementById('modalAudioInput').files[0];
  if (!f) { alert('Select an audio file'); return; }
  archiveCounter++;
  archives.unshift({ id: Date.now(), number: String(archiveCounter).padStart(3,'0'), title: t, category: cat,
    duration: 60 + Math.floor(Math.random()*200), host: h, audioUrl: f ? URL.createObjectURL(f) : null,
    transcript: mockTranscript(f.name), summary: mockSummary() });
  renderArchives(); renderCollections();
  document.getElementById('createModal').style.display = 'none';
  document.getElementById('createArchiveForm').reset();
}

// ── Client conveyor belt ──
function buildClientSlider() {
  const track = document.getElementById('clientsTrack');
  const html = MOCK_CLIENTS.map(n => `<div class="client-logo"><span class="cl-dot"></span>${n}</div>`).join('');
  track.innerHTML = html + html; // duplicate for seamless loop
}

window.showArchiveDetail = showArchiveDetail;
window.deleteArchive = deleteArchive;
