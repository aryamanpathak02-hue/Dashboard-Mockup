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

const MOCK_CLIENTS = [
  'Acme Corp','Globex','Initech','Hooli','Pied Piper','Umbrella Inc','Stark Industries',
  'Wayne Enterprises','Oscorp','Cyberdyne','Soylent Corp','Aperture Science','Massive Dynamic'
];

// ── Mock episodes for each collection (keyed by archive id) ──
const MOCK_EPISODES = {
  1: [
    { ep: 1, title: 'How to Raise a Seed Round in 2025', date: 'Jan 5', duration: 22, guest: 'Sarah Chen, Partner at Sequoia',
      summary: 'Sarah Chen discusses how the seed fundraising landscape has changed. Key points include the rise of pre-seed rounds, the importance of narrative over metrics at the earliest stages, and why founder-market fit is now the #1 criterion for top-tier VCs. She shares frameworks for cold outreach, warm intros, and the ideal deck structure.',
      transcript: 'Harry: Welcome back to the Twenty Minute VC. Today we have Sarah Chen, Partner at Sequoia. Sarah, the seed landscape has changed dramatically...\n\nSarah: Thanks Harry. Absolutely — what we\'re seeing is that seed rounds are getting both larger and more competitive. Founders need to think about narrative-market fit before they even think about product-market fit...\n\nHarry: That\'s a fascinating framing. Can you elaborate on what you mean by narrative-market fit?\n\nSarah: Of course. It\'s about whether your story — your "why now, why you, why this" — resonates with the current market moment. The best founders can articulate a thesis about where the world is going and position themselves as the inevitable solution...\n\n[Continues for 22 minutes covering deck structure, warm vs cold outreach, valuation benchmarks, and common mistakes founders make during fundraising.]' },
    { ep: 2, title: 'The Art of Board Management', date: 'Jan 12', duration: 19, guest: 'David Velez, CEO of Nubank',
      summary: 'David Velez shares how he manages Nubank\'s board with transparency and structure. Topics include meeting cadence, how to deliver bad news, leveraging board members as strategic assets, and the difference between an advisory board and a governing board. He emphasizes that the best board relationships are built on trust and radical candor.',
      transcript: 'Harry: David, you\'ve built Nubank into one of the largest digital banks in the world. How has your relationship with your board evolved?\n\nDavid: It\'s been a journey. In the early days, board meetings were informal — almost like check-ins. But as we scaled past 10 million customers, we needed structure...\n\nHarry: What does that structure look like today?\n\nDavid: We run quarterly board meetings with a very specific format. We start with a 10-minute "state of the world" — macro trends, competitive landscape. Then we go deep on 2-3 strategic topics. We never just report numbers; we discuss decisions...\n\n[Continues with insights on handling difficult board conversations, managing activist investors, and building trust through transparency.]' },
    { ep: 3, title: 'Scaling a Marketplace from Zero', date: 'Jan 19', duration: 24, guest: 'Dara Khosrowshahi, CEO of Uber',
      summary: 'Dara discusses the chicken-and-egg problem of marketplace businesses. He details Uber\'s early strategies in new cities, the role of subsidies, when to pull back on incentives, and how to know if you have true product-market fit in a two-sided marketplace. Also covers regulatory challenges and community building.',
      transcript: 'Harry: Dara, marketplace businesses are notoriously difficult to start. How did Uber solve the cold-start problem?\n\nDara: The key insight was geographic density. You don\'t try to launch everywhere — you pick one neighborhood and make the experience magical there...\n\n[Continues for 24 minutes covering growth tactics, regulatory strategy, and marketplace economics.]' },
    { ep: 4, title: 'Why Most Pivots Fail', date: 'Jan 26', duration: 18, guest: 'Stewart Butterfield, Co-founder of Slack',
      summary: 'Stewart Butterfield recounts the famous pivot from Glitch (a game) to Slack (enterprise messaging). He discusses the psychology of pivots, the danger of sunk cost fallacy, how to know when it\'s time to pivot, and what makes some pivots succeed while most fail. A masterclass in founder resilience and pattern recognition.',
      transcript: 'Harry: Stewart, Slack is one of the most celebrated pivots in tech history. Take us back to that moment of decision.\n\nStewart: It was terrifying, honestly. We had spent years building Glitch. The team was passionate about it. But the numbers didn\'t lie — retention was declining...\n\n[Continues discussing the emotional and strategic aspects of company pivots.]' },
    { ep: 5, title: 'The Future of AI in Venture Capital', date: 'Feb 2', duration: 21, guest: 'Vinod Khosla, Khosla Ventures',
      summary: 'Vinod Khosla shares his bold predictions on how AI will transform venture capital itself — from deal sourcing to due diligence to portfolio management. He argues that 80% of VC decisions could be automated within a decade and discusses which human skills will remain irreplaceable.',
      transcript: 'Harry: Vinod, you\'ve been investing in AI companies for over a decade. How do you see AI transforming venture capital itself?\n\nVinod: I think most VCs are in denial about this. AI will do to VC what it\'s doing to every other knowledge work industry...\n\n[Continues for 21 minutes with predictions and debate about the future of human judgment in investing.]' },
  ],
  2: [
    { ep: 1, title: 'The Science of Deep Sleep', date: 'Feb 3', duration: 45, guest: 'Dr. Matt Walker, UC Berkeley',
      summary: 'Dr. Walker explains the four stages of sleep, why deep sleep is critical for memory consolidation and immune function, and provides a protocol for optimizing sleep architecture. Topics include temperature regulation, light exposure timing, and the impact of alcohol on sleep quality.',
      transcript: 'Andrew: Welcome to the Huberman Lab. Today we dive deep into the science of sleep with Dr. Matt Walker from UC Berkeley.\n\nMatt: Thank you Andrew. Sleep is the single most effective thing you can do for your brain and body health...\n\n[Continues with detailed neuroscience of sleep stages, protocols for sleep optimization, and common misconceptions about sleep supplements.]' },
    { ep: 2, title: 'Dopamine and Motivation', date: 'Feb 10', duration: 52, guest: 'Solo episode',
      summary: 'Dr. Huberman breaks down the dopamine system — how it drives motivation (not just pleasure), the concept of baseline vs. peak dopamine, and practical tools for maintaining healthy dopamine levels. Covers cold exposure, exercise timing, and the dopamine dangers of social media.',
      transcript: 'Andrew: Today I want to discuss one of the most misunderstood molecules in neuroscience: dopamine. Most people think of dopamine as the "pleasure chemical" but that\'s actually a misconception...\n\n[Continues with detailed neurochemistry, practical protocols, and evidence-based tools for dopamine regulation.]' },
    { ep: 3, title: 'Optimizing Focus and Concentration', date: 'Feb 17', duration: 48, guest: 'Solo episode',
      summary: 'A deep dive into the neuroscience of attention and focus. Covers the role of acetylcholine, visual focus as a gateway to mental focus, ultradian rhythms (90-minute work cycles), and specific supplements and behaviors that enhance concentration. Includes a complete focus protocol.',
      transcript: 'Andrew: The ability to focus is perhaps the most valuable skill in the modern world. Today I\'ll share the neuroscience behind focus and give you a complete protocol...\n\n[Detailed discussion of attentional mechanisms, practical focus protocols, and supplement recommendations.]' },
    { ep: 4, title: 'Gut-Brain Connection', date: 'Feb 24', duration: 55, guest: 'Dr. Justin Sonnenburg, Stanford',
      summary: 'Dr. Sonnenburg explains the microbiome-brain axis, how gut bacteria influence mood and cognition, and the role of fermented foods in mental health. They discuss the Stanford fermented foods study and practical dietary recommendations.',
      transcript: 'Andrew: Today we explore the fascinating connection between your gut and your brain with Dr. Justin Sonnenburg from Stanford...\n\n[Continues with cutting-edge microbiome research, dietary recommendations, and the science of fermented foods.]' },
  ],
  3: [
    { ep: 1, title: 'The Indian Startup Ecosystem', date: 'Mar 1', duration: 62, guest: 'Kunal Shah, Founder of CRED',
      summary: 'Kunal Shah discusses India\'s unique startup landscape, the delta-4 framework for evaluating startups, why India\'s digital infrastructure (UPI, Aadhaar) creates unique opportunities, and the cultural factors that influence entrepreneurship in India.',
      transcript: 'Nikhil: Kunal, you\'ve been one of the most influential voices in the Indian startup ecosystem. Let\'s start with your delta-4 framework.\n\nKunal: The idea is simple but powerful. For a product to succeed, the efficiency score of the new way must be at least 4 points higher than the old way on a scale of 1-10...\n\n[Continues discussing India\'s startup ecosystem, cultural entrepreneurship, and digital infrastructure advantages.]' },
    { ep: 2, title: 'Mental Models for Decision Making', date: 'Mar 8', duration: 58, guest: 'Shane Parrish, Farnam Street',
      summary: 'Shane Parrish shares his favorite mental models for better decision-making, including inversion, second-order thinking, and the map-territory problem. They discuss how billionaires think differently about risk and why most people optimize for the wrong things.',
      transcript: 'Nikhil: Shane, you\'ve spent years studying how the world\'s best thinkers make decisions. What have you learned?\n\nShane: The biggest insight is that most smart people are actually terrible decision-makers because they confuse intelligence with wisdom...\n\n[Continues with mental models, decision frameworks, and real-world examples.]' },
    { ep: 3, title: 'Art, Culture, and Identity', date: 'Mar 15', duration: 54, guest: 'Prateek Kuhad, Musician',
      summary: 'Prateek Kuhad opens up about the creative process, dealing with success and expectations, how Indian identity shapes his music, and the intersection of art and commerce. A deeply personal conversation about authenticity.',
      transcript: 'Nikhil: Prateek, your music has touched millions of people. How do you approach the creative process?\n\nPrateek: It\'s messy, honestly. I don\'t have a romantic view of creativity. Most days I sit with my guitar and nothing comes...\n\n[Continues with discussion of creativity, identity, fame, and the music industry.]' },
  ],
  4: [
    { ep: 1, title: 'The Nature of Consciousness', date: 'Mar 20', duration: 180, guest: 'Roger Penrose, Nobel Laureate',
      summary: 'Sir Roger Penrose discusses his theory that consciousness arises from quantum processes in microtubules (Orch-OR theory), the limits of computation, Gödel\'s incompleteness theorems, and why he believes AI will never truly be conscious. A 3-hour exploration of the deepest questions in science.',
      transcript: 'Lex: Roger, you\'ve spent decades thinking about consciousness. What is your current understanding?\n\nRoger: Well, I think consciousness is deeply connected to the fabric of spacetime itself. The Orch-OR theory suggests that...\n\n[An extensive 3-hour conversation covering quantum mechanics, consciousness, mathematics, and the philosophy of mind.]' },
    { ep: 2, title: 'AGI: Promise and Peril', date: 'Mar 27', duration: 165, guest: 'Demis Hassabis, CEO of DeepMind',
      summary: 'Demis Hassabis discusses the path to AGI, AlphaFold\'s impact on biology, the alignment problem, and DeepMind\'s approach to AI safety. He shares his vision for how AGI could solve climate change, disease, and energy but acknowledges the existential risks.',
      transcript: 'Lex: Demis, DeepMind has achieved remarkable things with AlphaGo, AlphaFold, and now Gemini. Where are we on the path to AGI?\n\nDemis: I think we\'re closer than most people realize, but also further away in ways that matter. The capability gap is closing fast...\n\n[Continues with detailed technical discussion of AI capabilities, safety research, and the future of intelligence.]' },
    { ep: 3, title: 'The Meaning of Life', date: 'Apr 3', duration: 195, guest: 'Jordan Peterson, Psychologist',
      summary: 'A wide-ranging conversation covering archetypes, responsibility, the psychology of meaning, religious narratives, and the crisis of purpose in modern society. Peterson argues that meaning comes from taking on the heaviest burden you can bear.',
      transcript: 'Lex: Jordan, what gives life meaning?\n\nJordan: That\'s the deepest question there is. I\'ve spent 30 years thinking about it. My best answer is that meaning is found at the intersection of order and chaos...\n\n[3+ hour conversation spanning psychology, philosophy, religion, and personal responsibility.]' },
    { ep: 4, title: 'Robotics and the Physical World', date: 'Apr 10', duration: 142, guest: 'Marc Raibert, Boston Dynamics',
      summary: 'Marc Raibert discusses the challenges of building robots that can navigate the physical world, why walking is harder than chess for AI, the future of humanoid robots, and how Atlas and Spot are being deployed in real-world applications.',
      transcript: 'Lex: Marc, Boston Dynamics has been building robots for decades. What is the hardest problem in robotics?\n\nMarc: The physical world is incredibly complex. We take for granted how easy it is to walk across a room...\n\n[Detailed discussion of robotics, AI embodiment, and the future of human-robot interaction.]' },
  ],
  5: [
    { ep: 1, title: 'How to Master Any Skill', date: 'Apr 15', duration: 65, guest: 'Josh Waitzkin, Chess Prodigy',
      summary: 'Josh Waitzkin breaks down the meta-learning process he used to become a chess champion and world champion martial artist. Covers the concept of "making smaller circles," the importance of loss in learning, and his daily practice routine.',
      transcript: 'Tim: Josh, you\'ve achieved mastery in multiple domains. What\'s the common thread in your learning process?\n\nJosh: The key insight is what I call "making smaller circles." Most people try to learn by adding complexity. Masters learn by simplifying...\n\n[Continues with deep discussion of learning science, deliberate practice, and peak performance.]' },
    { ep: 2, title: 'Building a Morning Routine', date: 'Apr 22', duration: 48, guest: 'Jocko Willink, Navy SEAL',
      summary: 'Jocko Willink explains his 4:30 AM routine, the discipline-equals-freedom philosophy, and how to build habits that stick. Covers cold exposure, journaling, workout structure, and why consistency beats intensity.',
      transcript: 'Tim: Jocko, your morning routine is legendary. Walk us through it.\n\nJocko: I wake up at 4:30. No alarm — my body just knows. First thing I do is get after it...\n\n[Continues with practical routine building, discipline frameworks, and habit formation science.]' },
    { ep: 3, title: 'The 4-Hour Body Revisited', date: 'Apr 29', duration: 72, guest: 'Solo episode',
      summary: 'Tim revisits the experiments from his book The 4-Hour Body, sharing what still holds up, what he\'d change, and new protocols he\'s discovered since. Covers slow-carb diet updates, minimum effective dose training, and sleep optimization.',
      transcript: 'Tim: It\'s been over a decade since I published The 4-Hour Body. Today I want to revisit the key experiments and share what I\'ve learned since...\n\n[Detailed reassessment of health protocols, diet experiments, and fitness optimization strategies.]' },
  ],
  6: [
    { ep: 1, title: 'The Future of Asset Management', date: 'May 1', duration: 55, guest: 'Cathie Wood, ARK Invest',
      summary: 'Cathie Wood shares her conviction-driven investment approach, why she believes in concentrating portfolios around disruptive innovation, and her frameworks for sizing positions in high-uncertainty environments. Discusses Tesla, genomics, and the convergence of AI with other technologies.',
      transcript: 'Patrick: Cathie, your investment approach is very different from traditional asset management. Walk us through your process.\n\nCathie: We start with a 5-year time horizon, which immediately sets us apart. Most investors are thinking about the next quarter...\n\n[Continues with investment philosophy, portfolio construction, and disruptive innovation thesis.]' },
    { ep: 2, title: 'Compounding Knowledge', date: 'May 8', duration: 62, guest: 'Naval Ravikant, AngelList',
      summary: 'Naval discusses the concept of compounding knowledge, specific knowledge that can\'t be taught, and how to build leverage through code, media, and capital. A philosophical conversation about wealth creation and personal freedom.',
      transcript: 'Patrick: Naval, you\'ve become known for your thinking on wealth creation. What\'s the core insight?\n\nNaval: The most important thing to understand is that wealth is created by building things that society wants but doesn\'t yet know how to get...\n\n[Deep conversation on leverage, specific knowledge, wealth vs. status, and personal freedom.]' },
    { ep: 3, title: 'Lessons from Berkshire Hathaway', date: 'May 15', duration: 58, guest: 'Adam Mead, Author',
      summary: 'Adam Mead, author of The Complete Financial History of Berkshire Hathaway, reveals lesser-known stories from Buffett and Munger\'s partnership. Covers capital allocation decisions, insurance float strategy, and why Berkshire\'s structure is nearly impossible to replicate.',
      transcript: 'Patrick: Adam, you spent years studying every financial filing Berkshire ever produced. What surprised you the most?\n\nAdam: The thing that struck me was how much of Berkshire\'s success came from the insurance float strategy in the early years...\n\n[Historical analysis of Berkshire Hathaway, investment principles, and capital allocation mastery.]' },
  ],
};

// Mock whisper insights — categorised into signal / alert / bridge
const MOCK_WHISPERS = [
  // ── Signals (green — positive) ──
  { id:1, cat:'signal', icon:'&#9650;', title:'80% Q2 revenue target reached',
    preview:'Team is on track to exceed quarterly goals by end of month.',
    source:'Sales Standup · May 14',
    summary:'During the weekly sales standup, the VP of Sales confirmed that 80% of the Q2 revenue target has been closed with 6 weeks remaining. Pipeline coverage is at 3.2x, driven primarily by enterprise deals in the healthcare vertical. The team flagged that two large contracts are in final negotiation and could push the quarter to 110% attainment.',
    questions:['Which enterprise deals are closest to closing?','What is driving the healthcare vertical specifically?','How does this compare to Q1 at the same point?'] },
  { id:2, cat:'signal', icon:'&#9733;', title:'Client NPS jumped 12 points this quarter',
    preview:'Customer satisfaction is at an all-time high across enterprise accounts.',
    source:'Customer Success Review · May 10',
    summary:'The CS team reported a 12-point NPS increase (from 54 to 66) among enterprise accounts. Key drivers include faster onboarding (reduced from 14 to 8 days), proactive check-ins, and the new self-serve analytics dashboard. Three accounts upgraded their plans citing improved ROI visibility.',
    questions:['Which accounts upgraded and what was their reasoning?','What specific onboarding changes drove the improvement?','Are there segments where NPS did not improve?'] },
  { id:3, cat:'signal', icon:'&#10003;', title:'New product feature adoption at 68% in first week',
    preview:'The bulk upload feature launched last Monday is seeing strong early traction.',
    source:'Product Sync · May 12',
    summary:'Bulk upload, launched May 5, reached 68% adoption among active users within 7 days — exceeding the 40% target. Support tickets related to file management dropped 35%. The PM noted that power users are processing 50+ files per session, suggesting a workflow shift from individual to batch processing.',
    questions:['What is the breakdown of adoption by account tier?','Are there any usability issues being reported?','How are power users changing their workflows?'] },

  // ── Alerts (red — negative / concerning) ──
  { id:4, cat:'alert', icon:'&#9888;', title:'Churn risk flagged for 3 enterprise accounts',
    preview:'Usage has declined 40% across Globex, Initech, and Oscorp in the past 30 days.',
    source:'CS Weekly Sync · May 13',
    summary:'Three enterprise accounts (Globex, Initech, Oscorp) showed a combined 40% usage decline over 30 days. Globex has not logged in for 2 weeks. Initech raised concerns about API latency in their last support ticket. Oscorp\'s champion left the company. The CS team recommends immediate executive outreach and a tailored re-engagement plan for each account.',
    questions:['Who is the new point of contact at Oscorp?','What was the API latency issue Initech reported?','What is the combined ARR at risk from these accounts?'] },
  { id:5, cat:'alert', icon:'&#9873;', title:'Competitor launched a free tier targeting our SMB segment',
    preview:'Acme Corp announced a free plan with features overlapping our Starter tier.',
    source:'Competitive Intel Call · May 11',
    summary:'Acme Corp launched a free-forever plan including transcription (up to 10 hrs/month) and basic search — directly competing with our $29/mo Starter plan. Early signals show increased trial sign-up cancellations in the SMB segment. The sales team is requesting an urgent pricing review and a feature differentiation one-pager for outbound messaging.',
    questions:['How many trial cancellations have we seen since their launch?','What features do we have that their free tier lacks?','Has our enterprise pipeline been affected at all?'] },
  { id:6, cat:'alert', icon:'&#9888;', title:'Engineering velocity dropped 22% this sprint',
    preview:'Story points completed fell from 89 to 69, with 4 carry-over items.',
    source:'Sprint Retro · May 9',
    summary:'Sprint velocity declined 22% due to unplanned infrastructure work (database migration complications) and two senior engineers being pulled into customer escalations. Four stories were carried over. The tech lead recommends ring-fencing 20% of capacity for unplanned work and establishing an on-call rotation to shield the sprint team.',
    questions:['Which customer escalations pulled engineers away?','Is the database migration now complete?','What are the 4 carry-over stories and their priority?'] },

  // ── Bridge (purple — connecting insights) ──
  { id:7, cat:'bridge', icon:'&#8644;', title:'Churn risk accounts overlap with low-adoption features',
    preview:'The 3 at-risk accounts never adopted bulk upload or analytics — the features driving retention elsewhere.',
    source:'Cross-team Analysis',
    summary:'Cross-referencing churn risk data with product analytics reveals that Globex, Initech, and Oscorp never activated the bulk upload or analytics dashboard features — the same features correlated with the highest NPS scores and lowest churn rates. This suggests a targeted enablement campaign focused on these features could materially reduce churn risk.',
    questions:['Were these accounts ever offered onboarding for these features?','What is the average time-to-churn for accounts that don\'t adopt these features?','Can we automate feature adoption nudges for at-risk accounts?'] },
  { id:8, cat:'bridge', icon:'&#128279;', title:'Revenue acceleration correlates with new feature launches',
    preview:'Q2 pipeline acceleration began the same week bulk upload shipped, suggesting product-led growth.',
    source:'Revenue × Product Correlation',
    summary:'Pipeline velocity increased 28% in the week following the bulk upload launch (May 5). Of the 12 new enterprise opportunities created since then, 8 cited "batch processing capabilities" in their evaluation criteria. This pattern mirrors Q1 where the analytics dashboard launch preceded a similar pipeline spike.',
    questions:['Which 8 opportunities cited batch processing?','What was the exact pipeline increase after the Q1 analytics launch?','Should we coordinate the next feature launch with a sales campaign?'] },
  { id:9, cat:'bridge', icon:'&#9881;', title:'Engineering slowdown may delay competitive response',
    preview:'The sprint velocity drop coincides with the need for urgent pricing/feature updates against Acme Corp.',
    source:'Ops × Engineering × Sales',
    summary:'The 22% sprint velocity decline creates a timing risk: the competitive response to Acme Corp\'s free tier requires both a pricing page update and a feature comparison tool, estimated at 13 story points. At current velocity, this work cannot ship before Acme\'s free tier gains traction.',
    questions:['Can the pricing page update be shipped independently as a quick win?','Is there budget to bring in contract engineers for the sprint?','What is the estimated timeline if we defer tech debt for one sprint?'] },
];

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initHeroWave();
  renderArchives();
  renderCollections();
  buildClientSlider();
  setupEventListeners();
  setupBentoPanes();
  setupBentoTilt();
  setupCollectionBack();
  setupCollectionSearch();
  setupWhisperBack();
  setupWhisperModal();
  initBubblesCanvas();
  populateWhispers();
  initBentoViz();
});

// ══════════════════════════════════════════
// ── Hero: Futuristic glowing waveform ────
// ══════════════════════════════════════════
function initHeroWave() {
  const canvas = document.getElementById('heroWaveCanvas');
  const headline = document.getElementById('heroHeadline');
  if (!canvas || !headline) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const W = () => canvas.width / dpr;
  const H = () => canvas.height / dpr;

  // Wave layers — each is a sine-based curve with unique params
  const layers = [
    { freq: 0.012, amp: 0.35, speed: 1.8,  color1: 'rgba(139,92,246,0.5)',  color2: 'rgba(96,165,250,0.3)',  glow: 'rgba(139,92,246,0.35)', blur: 18, width: 2.5 },
    { freq: 0.018, amp: 0.28, speed: 2.4,  color1: 'rgba(167,139,250,0.6)', color2: 'rgba(139,92,246,0.35)', glow: 'rgba(167,139,250,0.3)',  blur: 14, width: 2 },
    { freq: 0.008, amp: 0.45, speed: 1.2,  color1: 'rgba(96,165,250,0.45)', color2: 'rgba(192,132,252,0.3)', glow: 'rgba(96,165,250,0.3)',   blur: 22, width: 3 },
    { freq: 0.022, amp: 0.18, speed: 3.0,  color1: 'rgba(192,132,252,0.5)', color2: 'rgba(96,165,250,0.25)', glow: 'rgba(192,132,252,0.25)', blur: 10, width: 1.5 },
    { freq: 0.015, amp: 0.38, speed: 1.5,  color1: 'rgba(139,92,246,0.55)', color2: 'rgba(167,139,250,0.4)', glow: 'rgba(139,92,246,0.4)',   blur: 20, width: 2.8 },
    { freq: 0.025, amp: 0.12, speed: 3.5,  color1: 'rgba(224,204,250,0.4)', color2: 'rgba(96,165,250,0.2)',  glow: 'rgba(224,204,250,0.2)',  blur: 8,  width: 1.2 },
  ];

  // Envelope: amplitude is highest in centre, tapers to edges
  function envelope(x, w) {
    const nx = (x / w) * 2 - 1; // -1 to 1
    return Math.pow(Math.max(0, 1 - nx * nx), 1.5);
  }

  const WAVE_DURATION = 3500;  // ms — wave plays for 3.5s
  const FADE_START = 2800;     // ms — canvas starts fading
  let startTime = null;
  let animId = null;

  function draw(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const w = W(), h = H();
    const cy = h / 2;

    ctx.clearRect(0, 0, w, h);

    // Global intensity — ramps up then holds
    const ramp = Math.min(1, elapsed / 800);
    // Pulse factor — subtle breathing
    const pulse = 1 + 0.08 * Math.sin(elapsed * 0.003);

    layers.forEach(layer => {
      const phase = elapsed * 0.001 * layer.speed;

      // Draw the wave curve
      ctx.save();
      ctx.shadowColor = layer.glow;
      ctx.shadowBlur = layer.blur * ramp;
      ctx.lineWidth = layer.width;

      // Create gradient along the wave
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, 'transparent');
      grad.addColorStop(0.2, layer.color1);
      grad.addColorStop(0.5, layer.color2);
      grad.addColorStop(0.8, layer.color1);
      grad.addColorStop(1, 'transparent');
      ctx.strokeStyle = grad;

      // Upper wave
      ctx.beginPath();
      for (let x = 0; x < w; x += 2) {
        const env = envelope(x, w);
        const y = cy - env * layer.amp * h * pulse * ramp *
          (Math.sin(x * layer.freq + phase) +
           0.5 * Math.sin(x * layer.freq * 2.3 + phase * 1.4) +
           0.25 * Math.sin(x * layer.freq * 0.7 + phase * 0.6));
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Mirror (lower wave) — reflected
      ctx.beginPath();
      for (let x = 0; x < w; x += 2) {
        const env = envelope(x, w);
        const y = cy + env * layer.amp * h * pulse * ramp *
          (Math.sin(x * layer.freq + phase) +
           0.5 * Math.sin(x * layer.freq * 2.3 + phase * 1.4) +
           0.25 * Math.sin(x * layer.freq * 0.7 + phase * 0.6));
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    });

    // Draw centre line glow
    ctx.save();
    const lineGrad = ctx.createLinearGradient(0, 0, w, 0);
    lineGrad.addColorStop(0, 'transparent');
    lineGrad.addColorStop(0.15, 'rgba(139,92,246,0.15)');
    lineGrad.addColorStop(0.5, 'rgba(167,220,255,0.25)');
    lineGrad.addColorStop(0.85, 'rgba(139,92,246,0.15)');
    lineGrad.addColorStop(1, 'transparent');
    ctx.strokeStyle = lineGrad;
    ctx.shadowColor = 'rgba(167,220,255,0.3)';
    ctx.shadowBlur = 6;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(w, cy);
    ctx.stroke();
    ctx.restore();

    // Transition to text
    if (elapsed >= FADE_START && !canvas.classList.contains('fade-out')) {
      canvas.classList.add('fade-out');
      setTimeout(() => headline.classList.add('revealed'), 200);
    }

    if (elapsed < WAVE_DURATION) {
      animId = requestAnimationFrame(draw);
    }
  }

  animId = requestAnimationFrame(draw);
}

// ── Navigation ──
function showSection(name) {
  document.getElementById('homeSection').style.display = name === 'home' ? '' : 'none';
  document.getElementById('collectionsSection').style.display = name === 'collections' ? '' : 'none';
  document.getElementById('whispersSection').style.display = name === 'whispers' ? '' : 'none';
  if (name === 'collections') {
    // Always reset to grid view
    document.getElementById('collectionsLanding').style.display = '';
    document.getElementById('collectionDetail').style.display = 'none';
  }
  if (name === 'whispers') {
    // Always reset to landing view
    document.getElementById('whispersLanding').style.display = '';
    document.getElementById('whispersDetail').style.display = 'none';
    resizeBubblesCanvas();
    // Trigger count-up animation
    animateCountUps();
  }
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

// ── File handling — redirects to Whispers after processing ──
function handleFileSelect(file) {
  if (!file || !file.type.startsWith('audio/')) { alert('Please select an audio file'); return; }
  const bar = document.getElementById('progressFill'), txt = document.getElementById('progressText');
  document.getElementById('uploadProgress').style.display = 'block';
  let p = 0;
  const iv = setInterval(() => {
    p += Math.random() * 15;
    if (p >= 100) { p = 100; clearInterval(iv);
      setTimeout(() => { txt.textContent = 'Done — discovering whispers…';
        setTimeout(() => {
          document.getElementById('uploadProgress').style.display = 'none';
          bar.style.width = '0%';
          // Switch to Whispers tab & populate insights
          populateWhispers();
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          const wLink = document.querySelector('.nav-link[data-section="whispers"]');
          if (wLink) wLink.classList.add('active');
          showSection('whispers');
        }, 600);
      }, 400);
    }
    bar.style.width = p + '%';
    txt.textContent = p < 30 ? 'Uploading…' : p < 60 ? 'Transcribing…' : p < 90 ? 'Extracting whispers…' : 'Finalising…';
  }, 180);
}

// ── Whispers ──
const CAT_META = {
  signal: { label:'Signals', icon:'&#9650;', color:'#16a34a', bg:'linear-gradient(160deg,#ecfdf5,#d1fae5,#a7f3d0,#6ee7b7)' },
  alert:  { label:'Alerts',  icon:'&#9888;', color:'#dc2626', bg:'linear-gradient(160deg,#fff5f5,#fed7d7,#fca5a5)' },
  bridge: { label:'Bridge',  icon:'&#8644;', color:'#7c3aed', bg:'linear-gradient(160deg,#faf5ff,#ede9fe,#c4b5fd)' },
};

let currentZoomCat = null; // track which category is expanded

function populateWhispers() {
  ['signal','alert','bridge'].forEach(cat => {
    const items = MOCK_WHISPERS.filter(w => w.cat === cat);
    const countEl = document.getElementById('bentoCount' + cat.charAt(0).toUpperCase() + cat.slice(1));
    if (countEl) {
      countEl.dataset.target = items.length;
      countEl.textContent = '0';
    }

    // Fill preview content inside each pane
    const previewEl = document.getElementById('bentoPreview' + cat.charAt(0).toUpperCase() + cat.slice(1));
    if (!previewEl) return;
    previewEl.innerHTML = '';
    items.forEach(w => {
      const div = document.createElement('div');
      div.className = 'bento-preview-item';
      div.innerHTML = `<span class="bp-dot"></span><div class="bp-content"><span class="bp-title">${w.title}</span><span class="bp-source">${w.source}</span></div>`;
      previewEl.appendChild(div);
    });
  });
}

function renderWhisperCards(cat) {
  const grid = document.getElementById('whisperGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = MOCK_WHISPERS.filter(w => w.cat === cat);
  filtered.forEach((w, i) => {
    const card = document.createElement('div');
    card.className = 'whisper-card ' + w.cat;
    card.style.animationDelay = (i * 0.08) + 's';
    card.innerHTML = `
      <span class="whisper-card-icon">${w.icon}</span>
      <div class="whisper-card-title">${w.title}</div>
      <div class="whisper-card-preview">${w.preview}</div>
      <div class="whisper-card-source">${w.source}</div>
      <div class="whisper-card-expand">Read more &rarr;</div>`;
    card.addEventListener('click', () => openWhisperModal(w));
    grid.appendChild(card);
  });
}

// ── Bento pane click → zoom into category ──
function setupBentoPanes() {
  document.querySelectorAll('.bento-pane').forEach(pane => {
    pane.addEventListener('click', () => zoomIntoCat(pane.dataset.cat, pane));
  });
}

function zoomIntoCat(cat, paneEl) {
  currentZoomCat = cat;
  const meta = CAT_META[cat];
  const rect = paneEl.getBoundingClientRect();

  const overlay = document.createElement('div');
  overlay.className = 'whisper-zoom-overlay';
  overlay.id = 'zoomOverlay';
  overlay.style.background = meta.bg;
  overlay.style.top = rect.top + 'px';
  overlay.style.left = rect.left + 'px';
  overlay.style.width = rect.width + 'px';
  overlay.style.height = rect.height + 'px';
  overlay.style.opacity = '1';
  document.body.appendChild(overlay);

  // Force reflow then expand to full viewport
  overlay.offsetHeight;
  requestAnimationFrame(() => {
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.borderRadius = '0';
  });

  // After zoom completes, swap content
  setTimeout(() => {
    document.getElementById('whispersLanding').style.display = 'none';
    const detail = document.getElementById('whispersDetail');
    detail.style.display = '';
    document.getElementById('whisperDetailIcon').innerHTML = meta.icon;
    const titleEl = document.getElementById('whisperDetailTitle');
    titleEl.textContent = meta.label;
    titleEl.style.color = meta.color;
    renderWhisperCards(cat);

    // Fade out overlay to reveal content
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 450);
  }, 520);
}

// ── Back button → reverse zoom out ──
function setupWhisperBack() {
  document.getElementById('whisperBack').addEventListener('click', () => {
    const cat = currentZoomCat;
    if (!cat) {
      document.getElementById('whispersDetail').style.display = 'none';
      document.getElementById('whispersLanding').style.display = '';
      return;
    }
    const meta = CAT_META[cat];

    // Show landing (hidden behind overlay) so we can measure pane position
    const landing = document.getElementById('whispersLanding');
    landing.style.display = '';
    landing.style.opacity = '0';

    // Give layout a frame to render
    requestAnimationFrame(() => {
      const pane = document.querySelector(`.bento-pane[data-cat="${cat}"]`);
      const targetRect = pane ? pane.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };

      // Create overlay covering full screen
      const overlay = document.createElement('div');
      overlay.className = 'whisper-zoom-overlay';
      overlay.style.background = meta.bg;
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.borderRadius = '0';
      overlay.style.opacity = '1';
      document.body.appendChild(overlay);

      // Hide detail behind overlay
      document.getElementById('whispersDetail').style.display = 'none';

      // Force reflow, then animate BACK to pane position
      overlay.offsetHeight;
      requestAnimationFrame(() => {
        overlay.style.top = targetRect.top + 'px';
        overlay.style.left = targetRect.left + 'px';
        overlay.style.width = targetRect.width + 'px';
        overlay.style.height = targetRect.height + 'px';
        overlay.style.borderRadius = '18px';
      });

      // Fade landing in, remove overlay when done
      setTimeout(() => {
        landing.style.transition = 'opacity .3s ease';
        landing.style.opacity = '1';
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.remove();
          landing.style.transition = '';
          landing.style.opacity = '';
          currentZoomCat = null;
        }, 350);
      }, 480);
    });
  });
}

// ── Modal with suggested questions ──
function openWhisperModal(w) {
  const modal = document.getElementById('whisperModal');
  const badge = document.getElementById('whisperModalBadge');
  badge.className = 'whisper-modal-badge ' + w.cat;
  badge.textContent = CAT_META[w.cat].label;
  document.getElementById('whisperModalTitle').textContent = w.title;
  document.getElementById('whisperModalText').textContent = w.preview;
  document.getElementById('whisperModalSummary').textContent = w.summary;
  const header = document.getElementById('whisperModalHeader');
  header.style.borderBottomColor = w.cat === 'signal' ? 'rgba(22,163,74,.2)' : w.cat === 'alert' ? 'rgba(220,38,38,.2)' : 'rgba(139,92,246,.2)';

  // Render suggested questions
  const qList = document.getElementById('whisperQuestionsList');
  qList.innerHTML = '';
  (w.questions || []).forEach(q => {
    const btn = document.createElement('button');
    btn.className = 'whisper-question-btn';
    btn.textContent = q;
    btn.addEventListener('click', () => {
      alert('Searching your audio for:\n"' + q + '"\n\n(Coming soon)');
    });
    qList.appendChild(btn);
  });

  modal.style.display = 'flex';
}

function setupWhisperModal() {
  const modal = document.getElementById('whisperModal');
  if (!modal) return;
  document.getElementById('whisperModalClose').addEventListener('click', () => modal.style.display = 'none');
  modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
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
    const eps = MOCK_EPISODES[a.id] || [];
    const c = document.createElement('div'); c.className = 'collection-card';
    c.innerHTML = `
      <span class="collection-card-num">Archive ${a.number}</span>
      <div class="collection-card-title">${a.title}</div>
      <div class="collection-card-meta">
        <span class="archive-tag">${a.category}</span>
        <span class="collection-card-host">${a.host} &middot; ${a.duration} min</span>
      </div>
      <span class="collection-card-episodes">${eps.length} episode${eps.length !== 1 ? 's' : ''}</span>`;
    c.addEventListener('click', () => openCollection(a, c));
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
  // Redirect to Whispers after creating archive
  populateWhispers();
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const wLink = document.querySelector('.nav-link[data-section="whispers"]');
  if (wLink) wLink.classList.add('active');
  showSection('whispers');
}

// ══════════════════════════════════════════
// ── Collection detail (zoom, episodes) ──
// ══════════════════════════════════════════
let currentCollectionId = null;

function openCollection(archive, cardEl) {
  currentCollectionId = archive.id;
  const rect = cardEl.getBoundingClientRect();

  // Create zoom overlay
  const overlay = document.createElement('div');
  overlay.className = 'coll-zoom-overlay';
  overlay.style.top = rect.top + 'px';
  overlay.style.left = rect.left + 'px';
  overlay.style.width = rect.width + 'px';
  overlay.style.height = rect.height + 'px';
  overlay.style.opacity = '1';
  document.body.appendChild(overlay);

  overlay.offsetHeight; // force reflow
  requestAnimationFrame(() => {
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.borderRadius = '0';
  });

  // After zoom completes, swap content
  setTimeout(() => {
    document.getElementById('collectionsLanding').style.display = 'none';
    const detail = document.getElementById('collectionDetail');
    detail.style.display = '';

    // Populate header
    document.getElementById('collDetailTitle').textContent = archive.title;
    document.getElementById('collDetailTag').textContent = archive.category;
    document.getElementById('collDetailMeta').textContent = `${archive.host} · ${archive.duration} min total`;

    // Clear search
    document.getElementById('collSearchInput').value = '';

    // Render episodes
    renderEpisodes(archive.id);

    // Fade out overlay
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 450);
  }, 520);
}

function setupCollectionBack() {
  document.getElementById('collBack').addEventListener('click', () => {
    const id = currentCollectionId;
    const landing = document.getElementById('collectionsLanding');
    landing.style.display = '';
    landing.style.opacity = '0';

    requestAnimationFrame(() => {
      // Find the card for reverse zoom
      const cards = document.querySelectorAll('.collection-card');
      let targetRect = { top: window.innerHeight / 2 - 50, left: window.innerWidth / 2 - 140, width: 280, height: 100 };
      const archiveIdx = archives.findIndex(a => a.id === id);
      if (archiveIdx >= 0 && cards[archiveIdx]) {
        targetRect = cards[archiveIdx].getBoundingClientRect();
      }

      const overlay = document.createElement('div');
      overlay.className = 'coll-zoom-overlay';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.borderRadius = '0';
      overlay.style.opacity = '1';
      document.body.appendChild(overlay);

      document.getElementById('collectionDetail').style.display = 'none';

      overlay.offsetHeight;
      requestAnimationFrame(() => {
        overlay.style.top = targetRect.top + 'px';
        overlay.style.left = targetRect.left + 'px';
        overlay.style.width = targetRect.width + 'px';
        overlay.style.height = targetRect.height + 'px';
        overlay.style.borderRadius = 'var(--radius)';
      });

      setTimeout(() => {
        landing.style.transition = 'opacity .3s ease';
        landing.style.opacity = '1';
        overlay.style.opacity = '0';
        setTimeout(() => {
          overlay.remove();
          landing.style.transition = '';
          landing.style.opacity = '';
          currentCollectionId = null;
        }, 350);
      }, 480);
    });
  });
}

function renderEpisodes(archiveId, filter) {
  const episodes = MOCK_EPISODES[archiveId] || [];
  const container = document.getElementById('collEpisodes');
  const countEl = document.getElementById('collEpisodeCount');
  container.innerHTML = '';

  let filtered = episodes;
  if (filter && filter.trim()) {
    const q = filter.toLowerCase();
    filtered = episodes.filter(ep =>
      ep.title.toLowerCase().includes(q) ||
      (ep.guest && ep.guest.toLowerCase().includes(q)) ||
      ep.summary.toLowerCase().includes(q)
    );
  }

  countEl.textContent = filtered.length === episodes.length
    ? `${filtered.length} episode${filtered.length !== 1 ? 's' : ''}`
    : `${filtered.length} of ${episodes.length} episodes`;

  if (filtered.length === 0) {
    container.innerHTML = '<div class="coll-no-results">No episodes match your search</div>';
    return;
  }

  filtered.forEach((ep, i) => {
    const div = document.createElement('div');
    div.className = 'coll-episode';
    div.style.animationDelay = (i * 0.06) + 's';
    div.innerHTML = `
      <div class="coll-ep-header">
        <div class="coll-ep-num">EP ${ep.ep}</div>
        <div class="coll-ep-body">
          <div class="coll-ep-title">${ep.title}</div>
          <div class="coll-ep-meta">${ep.guest || 'Solo'} · ${ep.date} · ${ep.duration} min</div>
          <div class="coll-ep-preview">${ep.summary.substring(0, 100)}…</div>
        </div>
        <div class="coll-ep-chevron">&#9662;</div>
      </div>
      <div class="coll-ep-expanded">
        <div class="coll-ep-section">
          <h4>Summary</h4>
          <div class="coll-ep-summary">${ep.summary}</div>
        </div>
        <div class="coll-ep-section">
          <h4>Transcript</h4>
          <div class="coll-ep-transcript">${ep.transcript}</div>
        </div>
      </div>`;
    // Toggle expand
    div.querySelector('.coll-ep-header').addEventListener('click', () => {
      div.classList.toggle('expanded');
    });
    container.appendChild(div);
  });
}

function setupCollectionSearch() {
  const input = document.getElementById('collSearchInput');
  if (!input) return;
  let debounce = null;
  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      if (currentCollectionId) {
        renderEpisodes(currentCollectionId, input.value);
      }
    }, 200);
  });
}

// ── Client conveyor belt ──
function buildClientSlider() {
  const track = document.getElementById('clientsTrack');
  const html = MOCK_CLIENTS.map(n => `<div class="client-logo"><span class="cl-dot"></span>${n}</div>`).join('');
  track.innerHTML = html + html;
}

// ══════════════════════════════════════════
// ── Floating Knowledge Bubbles (Canvas) ──
// ══════════════════════════════════════════
let bubblesAnim = null;
const bubbles = [];
const BUBBLE_COUNT = 28;
const CONNECTION_DIST = 160;

function initBubblesCanvas() {
  const canvas = document.getElementById('bubblesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Seed bubbles
  for (let i = 0; i < BUBBLE_COUNT; i++) {
    bubbles.push({
      x: Math.random() * 1200,
      y: Math.random() * 800,
      r: 6 + Math.random() * 22,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      hue: 250 + Math.random() * 30,       // purple range
      sat: 50 + Math.random() * 30,
      light: 60 + Math.random() * 20,
      alpha: 0.15 + Math.random() * 0.35,
    });
  }

  function resize() {
    const sec = document.getElementById('whispersSection');
    if (!sec) return;
    canvas.width = sec.offsetWidth;
    canvas.height = sec.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function draw() {
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Update positions
    bubbles.forEach(b => {
      b.x += b.vx; b.y += b.vy;
      if (b.x < -b.r) b.x = w + b.r;
      if (b.x > w + b.r) b.x = -b.r;
      if (b.y < -b.r) b.y = h + b.r;
      if (b.y > h + b.r) b.y = -b.r;
    });

    // Draw connections
    for (let i = 0; i < bubbles.length; i++) {
      for (let j = i + 1; j < bubbles.length; j++) {
        const dx = bubbles[i].x - bubbles[j].x;
        const dy = bubbles[i].y - bubbles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(bubbles[i].x, bubbles[i].y);
          ctx.lineTo(bubbles[j].x, bubbles[j].y);
          ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Draw bubbles with gradient
    bubbles.forEach(b => {
      const grad = ctx.createRadialGradient(b.x - b.r * 0.3, b.y - b.r * 0.3, 0, b.x, b.y, b.r);
      grad.addColorStop(0, `hsla(${b.hue},${b.sat}%,${b.light}%,${b.alpha + 0.15})`);
      grad.addColorStop(1, `hsla(${b.hue},${b.sat}%,${b.light}%,${b.alpha * 0.3})`);
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    });

    bubblesAnim = requestAnimationFrame(draw);
  }
  draw();
}

function resizeBubblesCanvas() {
  const canvas = document.getElementById('bubblesCanvas');
  const sec = document.getElementById('whispersSection');
  if (!canvas || !sec) return;
  // Small delay to let section render
  setTimeout(() => {
    canvas.width = sec.offsetWidth;
    canvas.height = sec.offsetHeight;
  }, 50);
}

// ══════════════════════════════════════════
// ── Count-up animation ──────────────────
// ══════════════════════════════════════════
function animateCountUps() {
  document.querySelectorAll('.bento-count').forEach(el => {
    const target = parseInt(el.dataset.target) || 0;
    if (target === 0) return;
    el.textContent = '0';
    const duration = 800;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ══════════════════════════════════════════
// ── Mouse-tracking 3D tilt ──────────────
// ══════════════════════════════════════════
function setupBentoTilt() {
  const MAX_TILT = 5; // degrees
  document.querySelectorAll('.bento-pane').forEach(pane => {
    let rafId = null;
    let targetRX = 0, targetRY = 0;
    let currentRX = 0, currentRY = 0;

    pane.addEventListener('mousemove', e => {
      const rect = pane.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const mx = e.clientX - cx;
      const my = e.clientY - cy;
      // Invert Y for natural tilt
      targetRY = (mx / (rect.width / 2)) * MAX_TILT;
      targetRX = -(my / (rect.height / 2)) * MAX_TILT;
      if (!rafId) rafId = requestAnimationFrame(tiltLoop);
    });

    pane.addEventListener('mouseleave', () => {
      targetRX = 0;
      targetRY = 0;
      if (!rafId) rafId = requestAnimationFrame(tiltLoop);
    });

    function tiltLoop() {
      currentRX += (targetRX - currentRX) * 0.12;
      currentRY += (targetRY - currentRY) * 0.12;
      pane.style.transform = `perspective(800px) rotateX(${currentRX.toFixed(2)}deg) rotateY(${currentRY.toFixed(2)}deg)`;
      if (Math.abs(currentRX - targetRX) > 0.05 || Math.abs(currentRY - targetRY) > 0.05) {
        rafId = requestAnimationFrame(tiltLoop);
      } else {
        pane.style.transform = `perspective(800px) rotateX(${targetRX}deg) rotateY(${targetRY}deg)`;
        rafId = null;
      }
    }
  });
}

// ══════════════════════════════════════════
// ── Micro-visualizations (canvas) ───────
// ══════════════════════════════════════════
function initBentoViz() {
  drawTrendLine();
  drawRadarPing();
  drawBridgeLines();
}

// --- Signal: ascending trend line ---
function drawTrendLine() {
  const c = document.getElementById('vizSignal');
  if (!c) return;
  const ctx = c.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  c.width = 130 * dpr; c.height = 85 * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const W = 130, H = 85;

  // Data points (ascending with some variation)
  const pts = [0.7, 0.62, 0.55, 0.5, 0.42, 0.38, 0.34, 0.28, 0.22, 0.15];
  const len = pts.length;
  let drawn = 0;
  const totalFrames = 60;

  function frame() {
    drawn++;
    const progress = Math.min(drawn / totalFrames, 1);
    const eased = 1 - Math.pow(1 - progress, 2);
    const showPts = Math.ceil(eased * len);

    ctx.clearRect(0, 0, W, H);
    // Gradient stroke
    const grad = ctx.createLinearGradient(0, H, W, 0);
    grad.addColorStop(0, 'rgba(22,163,74,0.2)');
    grad.addColorStop(1, 'rgba(22,163,74,0.7)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = 'rgba(22,163,74,0.4)';
    ctx.shadowBlur = 8;

    ctx.beginPath();
    for (let i = 0; i < showPts; i++) {
      const x = (i / (len - 1)) * (W - 20) + 10;
      const y = pts[i] * (H - 20) + 10;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Dot at end
    if (showPts > 0) {
      const lx = ((showPts - 1) / (len - 1)) * (W - 20) + 10;
      const ly = pts[showPts - 1] * (H - 20) + 10;
      ctx.beginPath();
      ctx.arc(lx, ly, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#16a34a';
      ctx.shadowBlur = 12;
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// --- Alert: radar/sonar ping ---
function drawRadarPing() {
  const c = document.getElementById('vizAlert');
  if (!c) return;
  const ctx = c.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  c.width = 130 * dpr; c.height = 85 * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const W = 130, H = 85;
  const cx = W / 2, cy = H / 2;
  const maxR = 36;

  // Multiple ping rings
  const rings = [{ birth: 0 }, { birth: 40 }, { birth: 80 }];
  let tick = 0;

  function frame() {
    tick++;
    ctx.clearRect(0, 0, W, H);

    rings.forEach(ring => {
      const age = (tick - ring.birth) % 120;
      if (age < 0) return;
      const progress = age / 90;
      if (progress > 1) return;
      const r = progress * maxR;
      const alpha = (1 - progress) * 0.55;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(220,38,38,${alpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Center dot
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(220,38,38,0.7)';
    ctx.shadowColor = 'rgba(220,38,38,0.5)';
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.shadowBlur = 0;

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// --- Bridge: connecting dots ---
function drawBridgeLines() {
  const c = document.getElementById('vizBridge');
  if (!c) return;
  const ctx = c.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  c.width = 130 * dpr; c.height = 85 * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const W = 130, H = 85;

  const dotA = { x: 18, y: H / 2 };
  const dotB = { x: W - 18, y: H / 2 };
  let tick = 0;

  function frame() {
    tick++;
    ctx.clearRect(0, 0, W, H);

    // Animated dashed line drawing from both ends toward center
    const cycle = tick % 120;
    const progress = Math.min(cycle / 60, 1);
    const eased = 1 - Math.pow(1 - progress, 2);
    const midX = W / 2;

    // Left to center
    const leftEndX = dotA.x + (midX - dotA.x) * eased;
    // Right to center
    const rightEndX = dotB.x - (dotB.x - midX) * eased;

    ctx.setLineDash([4, 4]);
    ctx.lineDashOffset = -tick * 0.5;
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';

    // Left line
    const gradL = ctx.createLinearGradient(dotA.x, 0, midX, 0);
    gradL.addColorStop(0, 'rgba(139,92,246,0.3)');
    gradL.addColorStop(1, 'rgba(139,92,246,0.7)');
    ctx.strokeStyle = gradL;
    ctx.beginPath();
    ctx.moveTo(dotA.x, dotA.y);
    ctx.lineTo(leftEndX, H / 2);
    ctx.stroke();

    // Right line
    const gradR = ctx.createLinearGradient(dotB.x, 0, midX, 0);
    gradR.addColorStop(0, 'rgba(139,92,246,0.3)');
    gradR.addColorStop(1, 'rgba(139,92,246,0.7)');
    ctx.strokeStyle = gradR;
    ctx.beginPath();
    ctx.moveTo(dotB.x, dotB.y);
    ctx.lineTo(rightEndX, H / 2);
    ctx.stroke();

    ctx.setLineDash([]);

    // Dots
    [dotA, dotB].forEach(d => {
      ctx.beginPath();
      ctx.arc(d.x, d.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139,92,246,0.5)';
      ctx.shadowColor = 'rgba(139,92,246,0.4)';
      ctx.shadowBlur = 10;
      ctx.fill();
    });

    // Meeting point glow when connected
    if (eased > 0.95) {
      const pulse = 0.5 + 0.5 * Math.sin(tick * 0.1);
      ctx.beginPath();
      ctx.arc(midX, H / 2, 4 + pulse * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139,92,246,${0.3 + pulse * 0.3})`;
      ctx.shadowBlur = 14;
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

window.showArchiveDetail = showArchiveDetail;
window.deleteArchive = deleteArchive;
