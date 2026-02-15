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

// ── Signals (positive insights from audio) ──
const MOCK_SIGNALS = [
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
];

// ── Alerts (negative/concerning raw insights) ──
const MOCK_ALERTS = [
  { id:4, icon:'&#9888;', title:'Churn risk flagged for 3 enterprise accounts',
    preview:'Usage has declined 40% across Globex, Initech, and Oscorp in the past 30 days.',
    source:'CS Weekly Sync · May 13', date:'May 13',
    summary:'Three enterprise accounts (Globex, Initech, Oscorp) showed a combined 40% usage decline over 30 days. Globex has not logged in for 2 weeks. Initech raised concerns about API latency in their last support ticket. Oscorp\'s champion left the company.' },
  { id:5, icon:'&#9873;', title:'Competitor launched a free tier targeting our SMB segment',
    preview:'Acme Corp announced a free plan with features overlapping our Starter tier.',
    source:'Competitive Intel Call · May 11', date:'May 11',
    summary:'Acme Corp launched a free-forever plan including transcription (up to 10 hrs/month) and basic search — directly competing with our $29/mo Starter plan. Early signals show increased trial sign-up cancellations in the SMB segment.' },
  { id:6, icon:'&#9888;', title:'Engineering velocity dropped 22% this sprint',
    preview:'Story points completed fell from 89 to 69, with 4 carry-over items.',
    source:'Sprint Retro · May 9', date:'May 9',
    summary:'Sprint velocity declined 22% due to unplanned infrastructure work (database migration complications) and two senior engineers being pulled into customer escalations. Four stories were carried over.' },
  { id:10, icon:'&#9888;', title:'API latency complaints from 5 enterprise accounts',
    preview:'Average response time spiked from 120ms to 340ms for batch processing endpoints.',
    source:'Support Escalation · May 12', date:'May 12',
    summary:'Five enterprise accounts reported significant API latency degradation, particularly on batch processing endpoints. Average response time increased from 120ms to 340ms. Root cause appears linked to the database migration that also affected engineering velocity.' },
  { id:11, icon:'&#9888;', title:'Support ticket volume up 35% this week',
    preview:'Tickets surged driven by API issues and onboarding confusion for new accounts.',
    source:'Support Team Standup · May 14', date:'May 14',
    summary:'Support ticket volume increased 35% week-over-week. Primary drivers: API latency complaints (40% of tickets), onboarding friction for 3 new enterprise accounts (25%), and billing questions related to the competitive free tier news (15%).' },
  { id:12, icon:'&#9888;', title:'Trial-to-paid conversion dropped 8 points',
    preview:'SMB conversion fell from 23% to 15% since Acme Corp\'s free tier announcement.',
    source:'Growth Team Sync · May 13', date:'May 13',
    summary:'Trial-to-paid conversion rate dropped from 23% to 15% in the SMB segment, coinciding with Acme Corp\'s free tier launch. Enterprise conversion remains stable at 38%. The growth team recommends urgently differentiating the Starter plan or introducing a limited free tier.' },
];

// ── Issues (grouped alerts — first-class organizational objects) ──
let MOCK_ISSUES = [
  { id:101, title:'Customer Retention Crisis', severity:'high',
    description:'Multiple enterprise accounts showing churn signals, compounded by technical issues that erode trust.',
    alertIds:[4,10], signalFeedIds:[2,3], status:'open',
    rootCause:'Low feature adoption among at-risk accounts combined with API performance degradation. The accounts that never activated bulk upload or analytics dashboard — the features most correlated with high NPS — are now experiencing compounding technical frustrations from the API latency spike, accelerating disengagement.',
    impact:{ accounts:5, arrAtRisk:'$340K', mentions:14, trend:'rising', severity:9 },
    timeline:[{date:'May 1',label:'Oscorp champion departs'},{date:'May 5',label:'Globex last login'},{date:'May 9',label:'API latency spike begins'},{date:'May 12',label:'Initech escalation filed'},{date:'May 13',label:'CS flags 3 accounts'}],
    actionPlan:'1. Immediate executive outreach to Globex, Initech, and Oscorp within 48 hours.\n2. Fast-track API latency fix — coordinate with engineering to prioritize the database migration completion.\n3. Launch targeted enablement campaign: schedule 1:1 onboarding sessions for bulk upload and analytics dashboard.\n4. Create automated feature adoption nudges for accounts below 30% feature utilization.\n5. Establish weekly churn risk review with CS and Product teams.',
    resolution:null },
  { id:102, title:'Competitive Pressure from Acme Corp', severity:'high',
    description:'Acme Corp\'s free tier is directly threatening SMB conversion and forcing urgent pricing/positioning decisions.',
    alertIds:[5,12], signalFeedIds:[1,3], status:'open',
    rootCause:'Acme Corp\'s free tier directly undercuts the Starter plan ($29/mo) with overlapping features (transcription + basic search). The timing coincides with a period where the engineering team lacks capacity to ship a competitive response, creating a window of vulnerability in the SMB segment.',
    impact:{ accounts:0, arrAtRisk:'$180K pipeline', mentions:8, trend:'rising', severity:8 },
    timeline:[{date:'May 5',label:'Bulk upload launches (our advantage)'},{date:'May 11',label:'Acme announces free tier'},{date:'May 12',label:'Trial cancellations spike'},{date:'May 13',label:'Conversion drops 8pts'}],
    actionPlan:'1. Ship a feature comparison landing page as a quick win (estimated 3 story points).\n2. Create a "Why Munshi" one-pager for sales outbound messaging emphasizing AI insights, bulk processing, and enterprise features.\n3. Evaluate introducing a limited free tier (5 hrs/month) to neutralize Acme\'s positioning.\n4. Coordinate the next feature launch with a targeted marketing campaign to recapture SMB attention.\n5. Monitor enterprise pipeline weekly for any spillover impact.',
    resolution:null },
  { id:103, title:'Engineering Capacity Bottleneck', severity:'medium',
    description:'Sprint velocity decline threatens the team\'s ability to respond to competitive and customer pressures.',
    alertIds:[6,11], signalFeedIds:[3], status:'open',
    rootCause:'Unplanned database migration complications consumed significant engineering bandwidth, while simultaneously two senior engineers were pulled into customer escalations (related to the API latency issues). This created a cascading effect: reduced velocity led to carry-over stories, which reduces next sprint capacity, which delays the competitive response to Acme Corp.',
    impact:{ accounts:0, arrAtRisk:'$0 direct', mentions:6, trend:'stable', severity:6 },
    timeline:[{date:'May 2',label:'DB migration begins'},{date:'May 5',label:'Migration complications arise'},{date:'May 9',label:'Sprint retro flags -22% velocity'},{date:'May 12',label:'Engineers pulled to escalations'},{date:'May 14',label:'Support volume +35%'}],
    actionPlan:'1. Ring-fence 20% of engineering capacity for unplanned work going forward.\n2. Establish an on-call rotation to shield the sprint team from customer escalations.\n3. Prioritize the database migration completion to resolve the root cause of API latency.\n4. Evaluate bringing in 1-2 contract engineers for the next 4 weeks to clear the backlog.\n5. Defer non-critical tech debt for one sprint to free capacity for competitive response.',
    resolution:null },
];

// ── Resolved Issues (institutional memory) ──
let RESOLVED_ISSUES = [
  { id:200, title:'Onboarding Friction for Enterprise Accounts', severity:'high',
    description:'Enterprise accounts were taking 14+ days to onboard, causing early churn.',
    alertIds:[], signalFeedIds:[], status:'resolved',
    rootCause:'Complex setup process requiring multiple manual steps, unclear documentation, and no proactive check-in cadence during the first 30 days.',
    impact:{ accounts:8, arrAtRisk:'$520K', mentions:22, trend:'resolved', severity:0 },
    timeline:[{date:'Feb 1',label:'Issue identified'},{date:'Feb 15',label:'Onboarding audit complete'},{date:'Mar 1',label:'New process launched'},{date:'Apr 10',label:'Verified — 8 days avg'}],
    resolution:{
      rootCauseConfirmed:'Complex 14-day onboarding with 12 manual steps and no guided workflow.',
      solutionApplied:'Redesigned onboarding to 5 automated steps with in-app guidance. Added proactive CS check-ins at day 1, 3, 7. Created self-serve analytics dashboard for instant ROI visibility.',
      preventiveMeasure:'Automated onboarding health score that flags accounts stuck at any step for >24 hours. Monthly onboarding experience review with CS team.',
      comments:'This fix directly contributed to the 12-point NPS increase. The accounts that went through the new onboarding converted at 2x the rate of legacy onboarding. Consider applying this same pattern to feature adoption onboarding.'
    } },
];

// Backward-compat: flat list for processing ticker
const MOCK_WHISPERS = [...MOCK_SIGNALS, ...MOCK_ALERTS];

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
  initCursorGlow();
  initStats();
  setupBreadcrumbs();
  setupCmdPalette();
  setupUploadWizard();
  setupAskMunshi();
  setupWhisperActions();
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

// ── Navigation (smooth crossfade transitions) ──
let _currentSection = 'home';
let _transitioning = false;

function showSection(name) {
  if (name === _currentSection || _transitioning) return;
  _transitioning = true;

  const sections = { home:'homeSection', collections:'collectionsSection', whispers:'whispersSection' };
  const oldEl = document.getElementById(sections[_currentSection]);
  const newEl = document.getElementById(sections[name]);

  // Hide breadcrumbs for the old section
  hideBreadcrumb(_currentSection);

  // Phase 1: animate out the old section
  if (oldEl) {
    oldEl.classList.remove('section-active');
    oldEl.classList.add('section-leaving');
  }

  setTimeout(() => {
    // Finish old section
    if (oldEl) {
      oldEl.style.display = 'none';
      oldEl.classList.remove('section-leaving');
    }

    // Prepare new section
    if (name === 'collections') {
      document.getElementById('collectionsLanding').style.display = '';
      document.getElementById('collectionDetail').style.display = 'none';
      hideBreadcrumb('collections');
    }
    if (name === 'whispers') {
      document.getElementById('whispersLanding').style.display = '';
      document.getElementById('whispersDetail').style.display = 'none';
      const issueDetail = document.getElementById('issueDetailView');
      if (issueDetail) issueDetail.style.display = 'none';
      const oldToggle = document.querySelector('.issue-toggle-row');
      if (oldToggle) oldToggle.remove();
      hideBreadcrumb('whispers');
    }

    // Show new section
    newEl.style.display = '';
    // Force reflow so the initial transform state is applied
    void newEl.offsetHeight;
    newEl.classList.add('section-active');

    if (name === 'whispers') {
      resizeBubblesCanvas();
      animateCountUps();
    }
    if (name === 'home') {
      animateStats();
    }

    _currentSection = name;
    _transitioning = false;
  }, 260);
}

// ── Event listeners ──
function setupEventListeners() {
  const uploadArea = document.getElementById('uploadArea');
  const audioFileInput = document.getElementById('audioFileInput');
  const uploadAddBtn = document.querySelector('.upload-add-btn');

  uploadArea.addEventListener('click', () => openUploadWizard());
  uploadArea.addEventListener('dragover', e => { e.preventDefault(); uploadArea.classList.add('dragover'); });
  uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('dragover'));
  uploadArea.addEventListener('drop', e => {
    e.preventDefault(); uploadArea.classList.remove('dragover');
    openUploadWizard();
  });
  if (uploadAddBtn) uploadAddBtn.addEventListener('click', e => { e.stopPropagation(); openUploadWizard(); });

  document.getElementById('createBtn').addEventListener('click', () => openUploadWizard());
  document.getElementById('createArchiveBtn').addEventListener('click', () => openUploadWizard());
  const signInBtn = document.getElementById('signInBtn');
  if (signInBtn) signInBtn.addEventListener('click', () => openUploadWizard());
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
  issues: { label:'Issues',  icon:'&#9888;', color:'#d97706', bg:'linear-gradient(160deg,#fffbeb,#fef3c7,#fde68a,#fcd34d)' },
};

let currentZoomCat = null;

function populateWhispers() {
  // Signals panel
  const sigCountEl = document.getElementById('bentoCountSignal');
  if (sigCountEl) { sigCountEl.dataset.target = MOCK_SIGNALS.length; sigCountEl.textContent = '0'; }
  const sigPreview = document.getElementById('bentoPreviewSignal');
  if (sigPreview) {
    sigPreview.innerHTML = '';
    MOCK_SIGNALS.forEach(s => {
      const div = document.createElement('div'); div.className = 'bento-preview-item';
      div.innerHTML = `<span class="bp-dot"></span><div class="bp-content"><span class="bp-title">${s.title}</span><span class="bp-source">${s.source}</span></div>`;
      sigPreview.appendChild(div);
    });
  }
  // Issues panel
  const openIssues = MOCK_ISSUES.filter(i => i.status === 'open');
  const issCountEl = document.getElementById('bentoCountIssues');
  if (issCountEl) { issCountEl.dataset.target = openIssues.length; issCountEl.textContent = '0'; }
  const issPreview = document.getElementById('bentoPreviewIssues');
  if (issPreview) {
    issPreview.innerHTML = '';
    openIssues.forEach(iss => {
      const alerts = MOCK_ALERTS.filter(a => iss.alertIds.includes(a.id));
      const div = document.createElement('div'); div.className = 'bento-preview-item';
      div.innerHTML = `<span class="bp-dot"></span><div class="bp-content"><span class="bp-title">${iss.title}</span><span class="bp-source">${iss.severity.toUpperCase()} · ${alerts.length} alerts</span></div>`;
      issPreview.appendChild(div);
    });
  }
}

function renderSignalCards() {
  const grid = document.getElementById('whisperGrid');
  if (!grid) return;
  grid.innerHTML = '';
  MOCK_SIGNALS.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'whisper-card signal';
    card.style.animationDelay = (i * 0.08) + 's';
    card.innerHTML = `
      <span class="whisper-card-icon">${s.icon}</span>
      <div class="whisper-card-title">${s.title}</div>
      <div class="whisper-card-preview">${s.preview}</div>
      <div class="whisper-card-source">${s.source}</div>
      <div class="whisper-card-expand">Read more &rarr;</div>`;
    card.addEventListener('click', () => openWhisperModal(s));
    grid.appendChild(card);
  });
}

function renderIssueCards() {
  const grid = document.getElementById('whisperGrid');
  if (!grid) return;
  grid.innerHTML = '';
  // Open/Resolved toggle
  const toggleRow = document.createElement('div');
  toggleRow.className = 'issue-toggle-row';
  toggleRow.innerHTML = `<button class="issue-toggle active" data-filter="open">Open (${MOCK_ISSUES.filter(i=>i.status==='open').length})</button><button class="issue-toggle" data-filter="resolved">Resolved (${RESOLVED_ISSUES.length})</button>`;
  grid.parentElement.insertBefore(toggleRow, grid);
  toggleRow.querySelectorAll('.issue-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      toggleRow.querySelectorAll('.issue-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _renderIssueList(btn.dataset.filter === 'resolved' ? RESOLVED_ISSUES : MOCK_ISSUES.filter(i=>i.status==='open'));
    });
  });
  _renderIssueList(MOCK_ISSUES.filter(i => i.status === 'open'));
}

function _renderIssueList(issues) {
  const grid = document.getElementById('whisperGrid');
  grid.innerHTML = '';
  if (issues.length === 0) {
    grid.innerHTML = '<div class="coll-no-results">No issues found</div>';
    return;
  }
  issues.forEach((iss, i) => {
    const alerts = MOCK_ALERTS.filter(a => iss.alertIds.includes(a.id));
    const sevClass = iss.severity === 'high' ? 'sev-high' : iss.severity === 'medium' ? 'sev-med' : 'sev-low';
    const card = document.createElement('div');
    card.className = 'issue-card';
    card.style.animationDelay = (i * 0.08) + 's';
    card.innerHTML = `
      <div class="issue-card-top">
        <span class="issue-sev-badge ${sevClass}">${iss.severity.toUpperCase()}</span>
        <span class="issue-status-dot ${iss.status}"></span>
      </div>
      <div class="issue-card-title">${iss.title}</div>
      <div class="issue-card-desc">${iss.description}</div>
      <div class="issue-card-meta">${alerts.length} alert${alerts.length!==1?'s':''} grouped${iss.status === 'resolved' ? ' · Resolved' : ''}</div>
      <div class="issue-card-cta">Investigate &rarr;</div>`;
    card.addEventListener('click', () => openIssueDetail(iss));
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
  if (!meta) return;
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

  overlay.offsetHeight;
  requestAnimationFrame(() => {
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.borderRadius = '0';
  });

  setTimeout(() => {
    document.getElementById('whispersLanding').style.display = 'none';
    // Hide issue detail if it was open
    const issueDetailEl = document.getElementById('issueDetailView');
    if (issueDetailEl) issueDetailEl.style.display = 'none';

    const detail = document.getElementById('whispersDetail');
    detail.style.display = '';
    document.getElementById('whisperDetailIcon').innerHTML = meta.icon;
    const titleEl = document.getElementById('whisperDetailTitle');
    titleEl.textContent = meta.label;
    titleEl.style.color = meta.color;

    // Remove any leftover toggle rows
    const oldToggle = detail.querySelector('.issue-toggle-row');
    if (oldToggle) oldToggle.remove();

    if (cat === 'signal') {
      renderSignalCards();
    } else if (cat === 'issues') {
      renderIssueCards();
    }

    showBreadcrumb('whispers', meta.label);
    overlay.style.opacity = '0';
    setTimeout(() => overlay.remove(), 450);
  }, 520);
}

// ── Back button → reverse zoom out ──
function setupWhisperBack() {
  document.getElementById('whisperBack').addEventListener('click', () => {
    // If issue detail is open, go back to issues list
    const issueDetail = document.getElementById('issueDetailView');
    if (issueDetail && issueDetail.style.display !== 'none') {
      issueDetail.style.display = 'none';
      document.getElementById('whispersDetail').style.display = '';
      showBreadcrumb('whispers', 'Issues');
      return;
    }

    const cat = currentZoomCat;
    if (!cat) {
      document.getElementById('whispersDetail').style.display = 'none';
      document.getElementById('whispersLanding').style.display = '';
      return;
    }
    const meta = CAT_META[cat];
    if (!meta) {
      document.getElementById('whispersDetail').style.display = 'none';
      document.getElementById('whispersLanding').style.display = '';
      currentZoomCat = null;
      return;
    }

    // Remove leftover toggle rows
    const oldToggle = document.querySelector('.issue-toggle-row');
    if (oldToggle) oldToggle.remove();

    const landing = document.getElementById('whispersLanding');
    landing.style.display = '';
    landing.style.opacity = '0';

    requestAnimationFrame(() => {
      const pane = document.querySelector(`.bento-pane[data-cat="${cat}"]`);
      const targetRect = pane ? pane.getBoundingClientRect() : { top: 0, left: 0, width: 0, height: 0 };

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

      document.getElementById('whispersDetail').style.display = 'none';

      overlay.offsetHeight;
      requestAnimationFrame(() => {
        overlay.style.top = targetRect.top + 'px';
        overlay.style.left = targetRect.left + 'px';
        overlay.style.width = targetRect.width + 'px';
        overlay.style.height = targetRect.height + 'px';
        overlay.style.borderRadius = '18px';
      });

      setTimeout(() => {
        landing.style.transition = 'opacity .3s ease';
        landing.style.opacity = '1';
        overlay.style.opacity = '0';
        hideBreadcrumb('whispers');
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
  _currentModalWhisper = w;
  // Reset action result area
  const actionResult = document.getElementById('wmActionResult');
  if (actionResult) { actionResult.style.display = 'none'; actionResult.innerHTML = ''; }

  const modal = document.getElementById('whisperModal');
  const badge = document.getElementById('whisperModalBadge');
  badge.className = 'whisper-modal-badge ' + w.cat;
  badge.textContent = (CAT_META[w.cat] || {label:'Signal'}).label;
  document.getElementById('whisperModalTitle').textContent = w.title;
  document.getElementById('whisperModalText').textContent = w.preview;
  // Stream the summary text word-by-word
  const summaryEl = document.getElementById('whisperModalSummary');
  streamSummaryText(summaryEl, w.summary, w.id);
  const header = document.getElementById('whisperModalHeader');
  header.style.borderBottomColor = w.cat === 'signal' ? 'rgba(22,163,74,.2)' : 'rgba(217,119,6,.2)';

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

    // Show breadcrumb
    showBreadcrumb('collections', archive.title);

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
        hideBreadcrumb('collections');
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
      <div class="coll-ep-expanded"></div>`;
    // Toggle expand with skeleton loading
    let loaded = false;
    div.querySelector('.coll-ep-header').addEventListener('click', () => {
      const isExpanding = !div.classList.contains('expanded');
      div.classList.toggle('expanded');
      if (isExpanding && !loaded) {
        loaded = true;
        const expandedDiv = div.querySelector('.coll-ep-expanded');
        showSkeletonThenContent(expandedDiv, ep);
      }
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
  drawIssueClusters();
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

// --- Issues: cluster/network viz (alerts grouping into issues) ---
function drawIssueClusters() {
  const c = document.getElementById('vizIssues');
  if (!c) return;
  const ctx = c.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  c.width = 130 * dpr; c.height = 85 * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const W = 130, H = 85;

  // Create scattered dots that gravitationally cluster into 3 groups
  const clusters = [
    { cx: 25, cy: 28, color: 'rgba(217,119,6,' },
    { cx: 65, cy: 55, color: 'rgba(220,38,38,' },
    { cx: 105, cy: 30, color: 'rgba(217,119,6,' },
  ];
  const dots = [];
  clusters.forEach((cl, ci) => {
    for (let d = 0; d < 4; d++) {
      dots.push({
        x: Math.random() * W, y: Math.random() * H,
        targetX: cl.cx + (Math.random() - 0.5) * 18,
        targetY: cl.cy + (Math.random() - 0.5) * 14,
        cluster: ci, r: 2.5 + Math.random() * 1.5,
      });
    }
  });

  let tick = 0;
  function frame() {
    tick++;
    ctx.clearRect(0, 0, W, H);
    const t = Math.min(tick / 90, 1);
    const eased = 1 - Math.pow(1 - t, 3);

    // Draw connection lines between dots in same cluster
    clusters.forEach((cl, ci) => {
      const group = dots.filter(d => d.cluster === ci);
      for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
          const a = group[i], b = group[j];
          const ax = a.x + (a.targetX - a.x) * eased;
          const ay = a.y + (a.targetY - a.y) * eased;
          const bx = b.x + (b.targetX - b.x) * eased;
          const by = b.y + (b.targetY - b.y) * eased;
          ctx.beginPath();
          ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
          ctx.strokeStyle = cl.color + (0.15 * eased) + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });

    // Draw dots
    dots.forEach(d => {
      const x = d.x + (d.targetX - d.x) * eased;
      const y = d.y + (d.targetY - d.y) * eased;
      const cl = clusters[d.cluster];
      ctx.beginPath();
      ctx.arc(x, y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = cl.color + '0.6)';
      ctx.shadowColor = cl.color + '0.4)';
      ctx.shadowBlur = 6;
      ctx.fill();
    });
    ctx.shadowBlur = 0;

    // Draw cluster center pulses after convergence
    if (eased > 0.8) {
      const pulse = 0.5 + 0.5 * Math.sin(tick * 0.08);
      clusters.forEach(cl => {
        ctx.beginPath();
        ctx.arc(cl.cx, cl.cy, 6 + pulse * 3, 0, Math.PI * 2);
        ctx.fillStyle = cl.color + (0.1 + pulse * 0.1) + ')';
        ctx.fill();
      });
    }

    if (tick < 150) requestAnimationFrame(frame);
    else {
      // Keep gently pulsing
      let loopTick = 0;
      function loop() {
        loopTick++;
        ctx.clearRect(0, 0, W, H);
        // Lines
        clusters.forEach((cl, ci) => {
          const group = dots.filter(d => d.cluster === ci);
          for (let i = 0; i < group.length; i++) {
            for (let j = i + 1; j < group.length; j++) {
              ctx.beginPath();
              ctx.moveTo(group[i].targetX, group[i].targetY);
              ctx.lineTo(group[j].targetX, group[j].targetY);
              ctx.strokeStyle = cl.color + '0.15)';
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
        // Dots
        dots.forEach(d => {
          const jitter = Math.sin(loopTick * 0.03 + d.targetX) * 1.5;
          ctx.beginPath();
          ctx.arc(d.targetX + jitter, d.targetY + jitter * 0.6, d.r, 0, Math.PI * 2);
          ctx.fillStyle = clusters[d.cluster].color + '0.55)';
          ctx.shadowColor = clusters[d.cluster].color + '0.3)';
          ctx.shadowBlur = 5;
          ctx.fill();
        });
        ctx.shadowBlur = 0;
        const pulse = 0.5 + 0.5 * Math.sin(loopTick * 0.05);
        clusters.forEach(cl => {
          ctx.beginPath();
          ctx.arc(cl.cx, cl.cy, 5 + pulse * 3, 0, Math.PI * 2);
          ctx.fillStyle = cl.color + (0.08 + pulse * 0.08) + ')';
          ctx.fill();
        });
        requestAnimationFrame(loop);
      }
      requestAnimationFrame(loop);
    }
  }
  requestAnimationFrame(frame);
}

// ══════════════════════════════════════════
// ── Cursor Spotlight (global) ────────────
// ══════════════════════════════════════════
function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  // Hide on touch devices
  if ('ontouchstart' in window) return;

  let mx = -500, my = -500;
  let cx = -500, cy = -500;
  let visible = false;
  let rafId = null;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    if (!visible) { visible = true; glow.classList.add('visible'); }
    if (!rafId) rafId = requestAnimationFrame(glowLoop);
  });

  document.addEventListener('mouseleave', () => {
    visible = false;
    glow.classList.remove('visible');
  });

  function glowLoop() {
    cx += (mx - cx) * 0.15;
    cy += (my - cy) * 0.15;
    glow.style.left = cx + 'px';
    glow.style.top = cy + 'px';
    if (Math.abs(cx - mx) > 0.5 || Math.abs(cy - my) > 0.5) {
      rafId = requestAnimationFrame(glowLoop);
    } else {
      glow.style.left = mx + 'px';
      glow.style.top = my + 'px';
      rafId = null;
    }
  }
}

// ══════════════════════════════════════════
// ── Stats Dashboard (Home) ───────────────
// ══════════════════════════════════════════
function initStats() {
  // Compute values from data
  const totalMinutes = archives.reduce((s, a) => s + a.duration, 0);
  const totalHours = (totalMinutes / 60).toFixed(1);
  const totalCollections = archives.length;
  let totalEpisodes = 0;
  Object.values(MOCK_EPISODES).forEach(eps => totalEpisodes += eps.length);
  const totalWhispers = MOCK_WHISPERS.length;

  document.getElementById('statHours').dataset.target = totalHours;
  document.getElementById('statHours').dataset.suffix = ' hrs';
  document.getElementById('statCollections').dataset.target = totalCollections;
  document.getElementById('statEpisodes').dataset.target = totalEpisodes;
  document.getElementById('statWhispers').dataset.target = totalWhispers;

  animateStats();
}

function animateStats() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseFloat(el.dataset.target) || 0;
    const suffix = el.dataset.suffix || '';
    const isFloat = String(target).includes('.');
    if (target === 0) return;
    el.textContent = '0' + suffix;
    const duration = 1000;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      el.textContent = (isFloat ? val.toFixed(1) : Math.round(val)) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

// ══════════════════════════════════════════
// ── Breadcrumb Trail Navigation ──────────
// ══════════════════════════════════════════
function setupBreadcrumbs() {
  // Collections breadcrumb root click → go back
  const collRoot = document.getElementById('collBcRoot');
  if (collRoot) {
    collRoot.addEventListener('click', () => {
      document.getElementById('collBack').click();
    });
  }
  // Whispers breadcrumb root click → go back
  const whisperRoot = document.getElementById('whisperBcRoot');
  if (whisperRoot) {
    whisperRoot.addEventListener('click', () => {
      document.getElementById('whisperBack').click();
    });
  }
}

function showBreadcrumb(section, label) {
  if (section === 'collections') {
    const bc = document.getElementById('collBreadcrumb');
    document.getElementById('collBcCurrent').textContent = label;
    bc.style.display = 'flex';
    bc.style.animation = 'none';
    void bc.offsetHeight;
    bc.style.animation = '';
  } else if (section === 'whispers') {
    const bc = document.getElementById('whisperBreadcrumb');
    document.getElementById('whisperBcCurrent').textContent = label;
    bc.style.display = 'flex';
    bc.style.animation = 'none';
    void bc.offsetHeight;
    bc.style.animation = '';
  }
}

function hideBreadcrumb(section) {
  if (section === 'collections') {
    const bc = document.getElementById('collBreadcrumb');
    if (bc) bc.style.display = 'none';
  } else if (section === 'whispers') {
    const bc = document.getElementById('whisperBreadcrumb');
    if (bc) bc.style.display = 'none';
  }
}

// ══════════════════════════════════════════
// ── Skeleton Loaders (episode expand) ────
// ══════════════════════════════════════════
function showSkeletonThenContent(expandedDiv, ep) {
  // Inject skeleton lines
  expandedDiv.innerHTML = `
    <div style="padding:12px 0">
      <div class="skeleton-line" style="width:100%"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    </div>`;

  setTimeout(() => {
    expandedDiv.innerHTML = `
      <div class="coll-ep-section">
        <h4>Summary</h4>
        <div class="coll-ep-summary">${ep.summary}</div>
      </div>
      <div class="coll-ep-section">
        <h4>Transcript</h4>
        <div class="coll-ep-transcript">${ep.transcript}</div>
      </div>`;
  }, 400);
}

// ══════════════════════════════════════════
// ── Streaming Text (whisper modal) ───────
// ══════════════════════════════════════════
const _streamedInsights = new Set();

function streamSummaryText(summaryEl, text, insightId) {
  if (_streamedInsights.has(insightId)) {
    summaryEl.textContent = text;
    return;
  }
  _streamedInsights.add(insightId);

  const words = text.split(' ');
  summaryEl.textContent = '';
  summaryEl.classList.add('streaming-cursor');
  let idx = 0;

  const iv = setInterval(() => {
    if (idx < words.length) {
      summaryEl.textContent += (idx > 0 ? ' ' : '') + words[idx];
      idx++;
    } else {
      clearInterval(iv);
      summaryEl.classList.remove('streaming-cursor');
    }
  }, 20);
}

// ══════════════════════════════════════════
// ── Command Palette (Cmd+K / Ctrl+K) ────
// ══════════════════════════════════════════
let _cmdkOpen = false;
let _cmdkActiveIdx = 0;
let _cmdkResults = [];

function setupCmdPalette() {
  const overlay = document.getElementById('cmdkOverlay');
  const input = document.getElementById('cmdkInput');
  const resultsEl = document.getElementById('cmdkResults');
  const pill = document.getElementById('cmdkPill');

  if (!overlay || !input) return;

  // Toggle with Ctrl+K / Cmd+K
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      toggleCmdPalette();
    }
    if (e.key === 'Escape' && _cmdkOpen) {
      closeCmdPalette();
    }
  });

  // Pill click
  if (pill) pill.addEventListener('click', () => toggleCmdPalette());

  // Close on overlay click
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeCmdPalette();
  });

  // Input handling
  let debounce = null;
  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      const q = input.value.trim();
      _cmdkResults = buildSearchIndex(q);
      _cmdkActiveIdx = 0;
      renderCmdkResults();
    }, 100);
  });

  // Keyboard navigation
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      _cmdkActiveIdx = Math.min(_cmdkActiveIdx + 1, _cmdkResults.length - 1);
      renderCmdkResults();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      _cmdkActiveIdx = Math.max(_cmdkActiveIdx - 1, 0);
      renderCmdkResults();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (_cmdkResults[_cmdkActiveIdx]) {
        executeCmdkAction(_cmdkResults[_cmdkActiveIdx]);
      }
    }
  });
}

function toggleCmdPalette() {
  _cmdkOpen ? closeCmdPalette() : openCmdPalette();
}

function openCmdPalette() {
  const overlay = document.getElementById('cmdkOverlay');
  const input = document.getElementById('cmdkInput');
  overlay.style.display = 'flex';
  input.value = '';
  _cmdkResults = buildSearchIndex('');
  _cmdkActiveIdx = 0;
  renderCmdkResults();
  setTimeout(() => input.focus(), 50);
  _cmdkOpen = true;
}

function closeCmdPalette() {
  document.getElementById('cmdkOverlay').style.display = 'none';
  _cmdkOpen = false;
}

function buildSearchIndex(query) {
  const q = query.toLowerCase();
  const results = [];

  // Pages
  const pages = [
    { type:'page', icon:'&#127968;', title:'Home', sub:'Landing page', action:() => navTo('home') },
    { type:'page', icon:'&#128218;', title:'Collections', sub:'Browse all collections', action:() => navTo('collections') },
    { type:'page', icon:'&#128172;', title:'Whispers', sub:'AI-discovered insights', action:() => navTo('whispers') },
  ];
  pages.forEach(p => {
    if (!q || p.title.toLowerCase().includes(q) || p.sub.toLowerCase().includes(q)) results.push(p);
  });

  // Actions
  const actions = [
    { type:'action', icon:'&#10010;', title:'Create archive', sub:'Start a new archive', action:() => { closeCmdPalette(); document.getElementById('createModal').style.display = 'flex'; } },
    { type:'action', icon:'&#128228;', title:'Upload audio', sub:'Upload and process audio', action:() => { closeCmdPalette(); navTo('home'); setTimeout(() => document.getElementById('audioFileInput').click(), 300); } },
  ];
  actions.forEach(a => {
    if (!q || a.title.toLowerCase().includes(q) || a.sub.toLowerCase().includes(q)) results.push(a);
  });

  // Collections (archives)
  archives.forEach(a => {
    if (!q || a.title.toLowerCase().includes(q) || a.category.toLowerCase().includes(q) || a.host.toLowerCase().includes(q)) {
      results.push({
        type:'collection', icon:'&#128218;', title:a.title,
        sub:`${a.category} · ${a.host}`,
        action:() => {
          closeCmdPalette();
          navTo('collections');
          setTimeout(() => {
            const cards = document.querySelectorAll('.collection-card');
            const idx = archives.findIndex(x => x.id === a.id);
            if (idx >= 0 && cards[idx]) openCollection(a, cards[idx]);
          }, 350);
        }
      });
    }
  });

  // Episodes
  archives.forEach(a => {
    const eps = MOCK_EPISODES[a.id] || [];
    eps.forEach(ep => {
      if (!q || ep.title.toLowerCase().includes(q) || (ep.guest && ep.guest.toLowerCase().includes(q))) {
        results.push({
          type:'episode', icon:'&#127911;', title:ep.title,
          sub:`Episode in ${a.title}`,
          action:() => {
            closeCmdPalette();
            navTo('collections');
            setTimeout(() => {
              const cards = document.querySelectorAll('.collection-card');
              const idx = archives.findIndex(x => x.id === a.id);
              if (idx >= 0 && cards[idx]) openCollection(a, cards[idx]);
            }, 350);
          }
        });
      }
    });
  });

  // Signals
  MOCK_SIGNALS.forEach(s => {
    if (!q || s.title.toLowerCase().includes(q) || s.preview.toLowerCase().includes(q)) {
      results.push({
        type:'whisper', icon:'&#9650;', title:s.title,
        sub:`Signal · ${s.source}`,
        action:() => {
          closeCmdPalette(); navTo('whispers');
          setTimeout(() => {
            const pane = document.querySelector('.bento-pane[data-cat="signal"]');
            if (pane) zoomIntoCat('signal', pane);
          }, 350);
        }
      });
    }
  });

  // Issues
  MOCK_ISSUES.concat(RESOLVED_ISSUES).forEach(iss => {
    const matchTitle = iss.title.toLowerCase().includes(q);
    const matchSev = iss.severity.toLowerCase().includes(q);
    const matchAlerts = MOCK_ALERTS.filter(a => iss.alertIds.includes(a.id)).some(a => a.title.toLowerCase().includes(q));
    if (!q || matchTitle || matchSev || matchAlerts) {
      results.push({
        type:'whisper', icon:'&#9888;', title:iss.title,
        sub:`Issue · ${iss.severity.toUpperCase()} · ${iss.status}`,
        action:() => {
          closeCmdPalette(); navTo('whispers');
          setTimeout(() => {
            const pane = document.querySelector('.bento-pane[data-cat="issues"]');
            if (pane) zoomIntoCat('issues', pane);
            setTimeout(() => openIssueDetail(iss), 600);
          }, 350);
        }
      });
    }
  });

  // Limit results
  return results.slice(0, 20);
}

function renderCmdkResults() {
  const container = document.getElementById('cmdkResults');
  if (_cmdkResults.length === 0) {
    container.innerHTML = '<div class="cmdk-empty">No results found</div>';
    return;
  }

  // Group by type
  const groups = {};
  const groupOrder = ['page','action','collection','episode','whisper'];
  const groupLabels = { page:'Pages', action:'Actions', collection:'Collections', episode:'Episodes', whisper:'Whispers' };

  _cmdkResults.forEach((r, i) => {
    if (!groups[r.type]) groups[r.type] = [];
    groups[r.type].push({ ...r, _idx: i });
  });

  let html = '';
  groupOrder.forEach(type => {
    if (!groups[type]) return;
    html += `<div class="cmdk-group-label">${groupLabels[type]}</div>`;
    groups[type].forEach(r => {
      html += `<div class="cmdk-item${r._idx === _cmdkActiveIdx ? ' active' : ''}" data-idx="${r._idx}">
        <div class="cmdk-item-icon">${r.icon}</div>
        <div class="cmdk-item-body">
          <div class="cmdk-item-title">${r.title}</div>
          <div class="cmdk-item-sub">${r.sub}</div>
        </div>
        <span class="cmdk-item-badge">${groupLabels[r.type]}</span>
      </div>`;
    });
  });

  container.innerHTML = html;

  // Click handlers
  container.querySelectorAll('.cmdk-item').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.idx);
      if (_cmdkResults[idx]) executeCmdkAction(_cmdkResults[idx]);
    });
    el.addEventListener('mouseenter', () => {
      _cmdkActiveIdx = parseInt(el.dataset.idx);
      container.querySelectorAll('.cmdk-item').forEach(e => e.classList.remove('active'));
      el.classList.add('active');
    });
  });

  // Scroll active item into view
  const activeEl = container.querySelector('.cmdk-item.active');
  if (activeEl) activeEl.scrollIntoView({ block:'nearest' });
}

function executeCmdkAction(result) {
  closeCmdPalette();
  if (result.action) result.action();
}

function navTo(section) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const link = document.querySelector(`.nav-link[data-section="${section}"]`);
  if (link) link.classList.add('active');
  showSection(section);
}

// ══════════════════════════════════════════
// ── Issue Detail + Tools ─────────────────
// ══════════════════════════════════════════
let _currentIssue = null;
let _activeUnderstandTool = null;
let _activeResolveTool = null;

function openIssueDetail(issue) {
  _currentIssue = issue;
  const detail = document.getElementById('issueDetailView');
  const listDetail = document.getElementById('whispersDetail');
  if (listDetail) listDetail.style.display = 'none';

  // Remove old toggle row if present
  const oldToggle = document.querySelector('.issue-toggle-row');
  if (oldToggle) oldToggle.remove();

  detail.style.display = '';

  // Header
  const sevEl = document.getElementById('issueDetailSev');
  sevEl.className = 'issue-sev-badge ' + (issue.severity === 'high' ? 'sev-high' : issue.severity === 'medium' ? 'sev-med' : 'sev-low');
  sevEl.textContent = issue.severity.toUpperCase();

  const statusEl = document.getElementById('issueDetailStatus');
  statusEl.className = 'issue-status-badge ' + issue.status;
  statusEl.textContent = issue.status.toUpperCase();

  document.getElementById('issueDetailTitle').textContent = issue.title;

  // Meta
  const alerts = MOCK_ALERTS.filter(a => issue.alertIds.includes(a.id));
  const firstDate = alerts.length > 0 ? alerts[alerts.length - 1].date : 'N/A';
  const trend = issue.impact ? issue.impact.trend : 'unknown';
  document.getElementById('issueDetailMeta').textContent = `${alerts.length} alerts | First seen: ${firstDate} | Trend: ${trend.charAt(0).toUpperCase() + trend.slice(1)}`;

  // Grouped Alerts
  const alertsList = document.getElementById('issueAlertsList');
  alertsList.innerHTML = '';
  alerts.forEach(a => {
    const item = document.createElement('div');
    item.className = 'issue-alert-item';
    item.innerHTML = `
      <span class="issue-alert-icon">${a.icon}</span>
      <div class="issue-alert-body">
        <div class="issue-alert-title">${a.title}</div>
        <div class="issue-alert-source">${a.source}</div>
        <div class="issue-alert-expanded">${a.summary}</div>
      </div>`;
    item.addEventListener('click', () => item.classList.toggle('expanded'));
    alertsList.appendChild(item);
  });

  // Reset tool results
  _activeUnderstandTool = null;
  _activeResolveTool = null;
  document.getElementById('issueUnderstandResult').style.display = 'none';
  document.getElementById('issueResolveResult').style.display = 'none';

  // Wire tool buttons
  document.querySelectorAll('#issueUnderstandRow .issue-tool-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.onclick = () => handleUnderstandTool(btn.dataset.tool, issue);
  });
  document.querySelectorAll('#issueResolveRow .issue-tool-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.onclick = () => handleResolveTool(btn.dataset.tool, issue);
  });

  // Resolution button
  const resolveBtn = document.getElementById('issueResolveBtn');
  const resForm = document.getElementById('resolutionForm');
  resolveBtn.style.display = issue.status === 'resolved' ? 'none' : '';
  resForm.style.display = 'none';
  resolveBtn.onclick = () => openGuidedResolution(issue);

  // Back button in issue detail
  document.getElementById('issueDetailBack').onclick = () => {
    detail.style.display = 'none';
    document.getElementById('whispersDetail').style.display = '';
    showBreadcrumb('whispers', 'Issues');
    // Rebuild issue cards
    const oldToggle2 = document.querySelector('.issue-toggle-row');
    if (oldToggle2) oldToggle2.remove();
    renderIssueCards();
  };

  // Update breadcrumb
  showBreadcrumb('whispers', 'Issues / ' + issue.title);
}

// ── Understand Tools ──
function handleUnderstandTool(tool, issue) {
  const resultEl = document.getElementById('issueUnderstandResult');
  const row = document.getElementById('issueUnderstandRow');
  row.querySelectorAll('.issue-tool-btn').forEach(b => b.classList.remove('active'));
  row.querySelector(`[data-tool="${tool}"]`).classList.add('active');

  if (_activeUnderstandTool === tool) {
    resultEl.style.display = 'none';
    row.querySelector(`[data-tool="${tool}"]`).classList.remove('active');
    _activeUnderstandTool = null;
    return;
  }
  _activeUnderstandTool = tool;
  resultEl.style.display = '';

  if (tool === 'rootcause') {
    resultEl.innerHTML = `<div class="issue-tool-content">
      <h4>Root Cause Analysis</h4>
      <div class="itc-highlight">${issue.rootCause}</div>
      <p><strong>Contributing factors:</strong></p>
      <ul>
        ${issue.alertIds.map(id => {
          const a = MOCK_ALERTS.find(x => x.id === id);
          return a ? `<li>${a.title} — ${a.preview}</li>` : '';
        }).join('')}
      </ul>
    </div>`;
  } else if (tool === 'impact') {
    const imp = issue.impact || {};
    resultEl.innerHTML = `<div class="issue-tool-content">
      <h4>Impact Radar</h4>
      <div class="impact-metrics">
        <div class="impact-metric"><span class="impact-metric-value">${imp.accounts || 0}</span><span class="impact-metric-label">Accounts Affected</span></div>
        <div class="impact-metric"><span class="impact-metric-value">${imp.arrAtRisk || '$0'}</span><span class="impact-metric-label">ARR at Risk</span></div>
        <div class="impact-metric"><span class="impact-metric-value">${imp.mentions || 0}</span><span class="impact-metric-label">Total Mentions</span></div>
        <div class="impact-metric"><span class="impact-metric-value">${imp.severity || 0}/10</span><span class="impact-metric-label">Severity Score</span></div>
        <div class="impact-metric"><span class="impact-metric-value">${(imp.trend || 'unknown').charAt(0).toUpperCase() + (imp.trend || '').slice(1)}</span><span class="impact-metric-label">Trend Direction</span></div>
      </div>
    </div>`;
  } else if (tool === 'timeline') {
    const tl = issue.timeline || [];
    resultEl.innerHTML = `<div class="issue-tool-content">
      <h4>Timeline</h4>
      <canvas class="issue-timeline-canvas" id="issueTimelineCanvas"></canvas>
      <ul>${tl.map(t => `<li><strong>${t.date}:</strong> ${t.label}</li>`).join('')}</ul>
    </div>`;
    // Draw timeline canvas
    setTimeout(() => drawTimelineViz(tl), 50);
  }
}

function drawTimelineViz(events) {
  const c = document.getElementById('issueTimelineCanvas');
  if (!c || events.length === 0) return;
  const ctx = c.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = c.getBoundingClientRect();
  c.width = rect.width * dpr;
  c.height = 140 * dpr;
  c.style.height = '140px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const W = rect.width, H = 140;

  const padX = 40, padY = 30;
  const lineY = H / 2;
  const n = events.length;
  let drawn = 0;

  function frame() {
    drawn++;
    const progress = Math.min(drawn / 50, 1);
    const eased = 1 - Math.pow(1 - progress, 2);
    ctx.clearRect(0, 0, W, H);

    // Timeline line
    const lineEnd = padX + (W - 2 * padX) * eased;
    const grad = ctx.createLinearGradient(padX, 0, W - padX, 0);
    grad.addColorStop(0, 'rgba(217,119,6,0.2)');
    grad.addColorStop(1, 'rgba(217,119,6,0.6)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(padX, lineY);
    ctx.lineTo(lineEnd, lineY);
    ctx.stroke();

    // Events
    const showCount = Math.ceil(eased * n);
    for (let i = 0; i < showCount; i++) {
      const x = padX + (i / (n - 1)) * (W - 2 * padX);
      // Dot
      ctx.beginPath();
      ctx.arc(x, lineY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#d97706';
      ctx.shadowColor = 'rgba(217,119,6,0.4)';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
      // Label
      ctx.fillStyle = '#78350f';
      ctx.font = '600 10px GT Walsheim, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(events[i].date, x, lineY - 14);
      // Desc below
      ctx.fillStyle = '#92400e';
      ctx.font = '500 9px GT Walsheim, sans-serif';
      const words = events[i].label.split(' ');
      let line1 = '', line2 = '';
      words.forEach(w => {
        if ((line1 + ' ' + w).length < 18) line1 += (line1 ? ' ' : '') + w;
        else line2 += (line2 ? ' ' : '') + w;
      });
      ctx.fillText(line1, x, lineY + 20);
      if (line2) ctx.fillText(line2, x, lineY + 32);
    }

    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

// ── Resolve Tools ──
function handleResolveTool(tool, issue) {
  const resultEl = document.getElementById('issueResolveResult');
  const row = document.getElementById('issueResolveRow');
  row.querySelectorAll('.issue-tool-btn').forEach(b => b.classList.remove('active'));
  row.querySelector(`[data-tool="${tool}"]`).classList.add('active');

  if (_activeResolveTool === tool) {
    resultEl.style.display = 'none';
    row.querySelector(`[data-tool="${tool}"]`).classList.remove('active');
    _activeResolveTool = null;
    return;
  }
  _activeResolveTool = tool;
  resultEl.style.display = '';

  if (tool === 'signalfeed') {
    const signals = MOCK_SIGNALS.filter(s => issue.signalFeedIds.includes(s.id));
    let html = '<div class="issue-tool-content"><h4>Signal Feed</h4><p>These positive signals may inform a resolution:</p>';
    signals.forEach(s => {
      html += `<div class="signal-feed-card">
        <h5>${s.icon} ${s.title}</h5>
        <p>${s.summary}</p>
        <div class="sfc-how">How this helps: ${
          s.id === 1 ? 'Revenue momentum provides leverage for resource allocation to fix this issue.' :
          s.id === 2 ? 'The NPS improvement methodology can be applied to affected accounts.' :
          'High feature adoption patterns can be replicated for at-risk accounts.'
        }</div>
      </div>`;
    });
    html += '</div>';
    resultEl.innerHTML = html;
  } else if (tool === 'past') {
    let html = '<div class="issue-tool-content"><h4>Past Resolutions</h4>';
    if (RESOLVED_ISSUES.length === 0) {
      html += '<p>No past resolutions found for similar issues.</p>';
    } else {
      html += '<p>Similar issues that were previously resolved:</p>';
      RESOLVED_ISSUES.forEach(ri => {
        html += `<div class="past-res-card">
          <h5>${ri.title}</h5>
          <div class="past-res-field"><label>Root Cause</label><p>${ri.resolution.rootCauseConfirmed}</p></div>
          <div class="past-res-field"><label>Solution Applied</label><p>${ri.resolution.solutionApplied}</p></div>
          <div class="past-res-field"><label>Preventive Measure</label><p>${ri.resolution.preventiveMeasure}</p></div>
          <div class="past-res-field"><label>Notes</label><p>${ri.resolution.comments}</p></div>
        </div>`;
      });
    }
    html += '</div>';
    resultEl.innerHTML = html;
  } else if (tool === 'actionplan') {
    const steps = (issue.actionPlan || '').split('\n').filter(s => s.trim());
    resultEl.innerHTML = `<div class="issue-tool-content">
      <h4>Action Plan</h4>
      <p>AI-generated step-by-step plan based on alert analysis and signal insights:</p>
      <div class="itc-highlight">${steps.map(s => s.trim()).join('<br>')}</div>
    </div>`;
  } else if (tool === 'whatif') {
    resultEl.innerHTML = `<div class="issue-tool-content">
      <h4>What-If Scenario</h4>
      <p>Describe a proposed solution to see AI-simulated impact:</p>
      <div class="whatif-input-area">
        <input type="text" class="whatif-input" id="whatifInput" placeholder="e.g., Hire 2 contract engineers for 4 weeks..." />
        <button class="whatif-btn" id="whatifRunBtn">Simulate</button>
      </div>
      <div id="whatifResultArea"></div>
    </div>`;
    document.getElementById('whatifRunBtn').addEventListener('click', () => runWhatIf(issue));
    document.getElementById('whatifInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') runWhatIf(issue);
    });
  }
}

function runWhatIf(issue) {
  const input = document.getElementById('whatifInput');
  const text = input.value.trim();
  if (!text) return;
  const area = document.getElementById('whatifResultArea');
  area.innerHTML = `<div class="whatif-result">
    <h4 style="font-size:13px;font-weight:700;color:var(--black);margin-bottom:8px">Simulated Impact Analysis</h4>
    <p style="font-size:12px;color:var(--grey);line-height:1.55;font-weight:500">Based on your proposed action: <strong>"${text}"</strong></p>
    <ul style="padding-left:20px;margin:10px 0">
      <li style="font-size:12px;color:var(--grey);margin-bottom:4px"><strong>Likelihood of resolution:</strong> ${Math.floor(65 + Math.random() * 25)}%</li>
      <li style="font-size:12px;color:var(--grey);margin-bottom:4px"><strong>Estimated time to impact:</strong> ${Math.floor(1 + Math.random() * 3)} weeks</li>
      <li style="font-size:12px;color:var(--grey);margin-bottom:4px"><strong>Risk of side effects:</strong> ${['Low', 'Medium'][Math.floor(Math.random() * 2)]}</li>
      <li style="font-size:12px;color:var(--grey);margin-bottom:4px"><strong>Confidence level:</strong> ${['Moderate', 'High'][Math.floor(Math.random() * 2)]} — based on ${issue.alertIds.length} alerts and ${issue.signalFeedIds.length} signal feeds</li>
    </ul>
    <p style="font-size:11px;font-weight:600;color:var(--purple);margin-top:8px">Recommendation: ${Math.random() > 0.5 ? 'This approach aligns well with the signal data. Consider proceeding.' : 'Promising direction, but consider combining with action plan steps 1-2 for better coverage.'}</p>
  </div>`;
}

// ── Guided Resolution ──
function openGuidedResolution(issue) {
  const form = document.getElementById('resolutionForm');
  form.style.display = '';

  // AI pre-fill
  document.getElementById('resRootCause').value = issue.rootCause || '';
  document.getElementById('resSolution').value = issue.actionPlan ? issue.actionPlan.split('\n').slice(0, 2).join('\n') : 'Apply targeted fix based on analysis.';
  document.getElementById('resPrevention').value = 'Implement monitoring and early-warning systems. Establish regular review cadence.';
  document.getElementById('resComments').value = '';

  document.getElementById('resCancelBtn').onclick = () => { form.style.display = 'none'; };
  document.getElementById('resConfirmBtn').onclick = () => confirmResolution(issue);

  // Scroll into view
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function confirmResolution(issue) {
  const rootCause = document.getElementById('resRootCause').value;
  const solution = document.getElementById('resSolution').value;
  const prevention = document.getElementById('resPrevention').value;
  const comments = document.getElementById('resComments').value;

  // Move issue to resolved
  issue.status = 'resolved';
  issue.resolution = {
    rootCauseConfirmed: rootCause,
    solutionApplied: solution,
    preventiveMeasure: prevention,
    comments: comments || 'Resolved by team.'
  };

  // Move from MOCK_ISSUES to RESOLVED_ISSUES
  MOCK_ISSUES = MOCK_ISSUES.filter(i => i.id !== issue.id);
  RESOLVED_ISSUES.push(issue);

  // Update UI
  document.getElementById('resolutionForm').style.display = 'none';
  document.getElementById('issueResolveBtn').style.display = 'none';
  document.getElementById('issueDetailStatus').className = 'issue-status-badge resolved';
  document.getElementById('issueDetailStatus').textContent = 'RESOLVED';

  // Toast
  showToast('Issue resolved — added to institutional memory', 'View Issues', () => {
    document.getElementById('issueDetailView').style.display = 'none';
    document.getElementById('whispersDetail').style.display = '';
    const oldToggle = document.querySelector('.issue-toggle-row');
    if (oldToggle) oldToggle.remove();
    renderIssueCards();
  });

  // Update landing counts
  populateWhispers();
}

// ══════════════════════════════════════════
// ── Upload Wizard ────────────────────────
// ══════════════════════════════════════════
let _wizStep = 1;
let _wizSource = 'local';
let _wizFileCount = 0;

function openUploadWizard() {
  _wizStep = 1;
  _wizSource = 'local';
  _wizFileCount = 0;
  document.getElementById('wizOverlay').style.display = 'flex';
  updateWizardUI();
}

function closeWizard() {
  document.getElementById('wizOverlay').style.display = 'none';
}

function setupUploadWizard() {
  const overlay = document.getElementById('wizOverlay');
  if (!overlay) return;

  document.getElementById('wizClose').addEventListener('click', closeWizard);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeWizard(); });

  // Source cards
  document.querySelectorAll('.wiz-source-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.wiz-source-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      _wizSource = card.dataset.source;
      document.getElementById('wizLocalDetail').style.display = _wizSource === 'local' ? '' : 'none';
      document.getElementById('wizCloudDetail').style.display = _wizSource === 'cloud' ? '' : 'none';
      document.getElementById('wizApiDetail').style.display = _wizSource === 'api' ? '' : 'none';
    });
  });

  // Drop zone
  const dropZone = document.getElementById('wizDropZone');
  dropZone.addEventListener('click', () => document.getElementById('wizFileInput').click());
  dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.style.borderColor = 'var(--purple)'; });
  dropZone.addEventListener('dragleave', () => { dropZone.style.borderColor = ''; });
  dropZone.addEventListener('drop', e => {
    e.preventDefault(); dropZone.style.borderColor = '';
    _wizFileCount = 50 + Math.floor(Math.random() * 150);
    document.getElementById('wizFileCount').textContent = _wizFileCount + ' files selected';
  });
  document.getElementById('wizFileInput').addEventListener('change', () => {
    _wizFileCount = 50 + Math.floor(Math.random() * 150);
    document.getElementById('wizFileCount').textContent = _wizFileCount + ' files selected';
  });

  // Copy buttons
  document.getElementById('wizCopyKey').addEventListener('click', () => {
    showToast('API key copied to clipboard', '');
  });
  document.getElementById('wizCopyEndpoint').addEventListener('click', () => {
    showToast('Endpoint copied to clipboard', '');
  });

  // Nav buttons
  document.getElementById('wizNext').addEventListener('click', () => {
    if (_wizStep === 3) {
      // Launch processing
      closeWizard();
      const collName = document.getElementById('wizCollName').value || 'Q2 Sales Calls';
      const fileCount = _wizSource === 'local' ? (_wizFileCount || 127) : (80 + Math.floor(Math.random() * 120));
      startProcessing({ collName, fileCount, source: _wizSource });
      return;
    }
    if (_wizStep === 2) {
      // Populate confirm card
      const fileCount = _wizSource === 'local' ? (_wizFileCount || 127) : (80 + Math.floor(Math.random() * 120));
      const hrs = (fileCount * (25 + Math.random() * 35) / 60).toFixed(0);
      document.getElementById('wizConfirmFiles').textContent = fileCount + ' files';
      document.getElementById('wizConfirmDuration').textContent = '~' + hrs + ' hours';
      document.getElementById('wizConfirmColl').textContent = document.getElementById('wizCollName').value || 'Q2 Sales Calls';
      document.getElementById('wizConfirmCat').textContent = document.getElementById('wizAutoCat').checked ? 'Enabled' : 'Disabled';
      document.getElementById('wizConfirmWhispers').textContent = document.getElementById('wizGenWhispers').checked ? 'Enabled' : 'Disabled';
    }
    _wizStep++;
    updateWizardUI();
  });
  document.getElementById('wizPrev').addEventListener('click', () => {
    if (_wizStep > 1) { _wizStep--; updateWizardUI(); }
  });
}

function updateWizardUI() {
  document.querySelectorAll('.wiz-step').forEach(s => {
    const n = parseInt(s.dataset.step);
    s.classList.remove('active', 'done');
    if (n === _wizStep) s.classList.add('active');
    if (n < _wizStep) s.classList.add('done');
  });
  document.getElementById('wizPane1').style.display = _wizStep === 1 ? '' : 'none';
  document.getElementById('wizPane2').style.display = _wizStep === 2 ? '' : 'none';
  document.getElementById('wizPane3').style.display = _wizStep === 3 ? '' : 'none';
  document.getElementById('wizPrev').style.display = _wizStep > 1 ? '' : 'none';
  document.getElementById('wizNext').textContent = _wizStep === 3 ? 'Begin Processing' : 'Next \u2192';
}

// ══════════════════════════════════════════
// ── Processing Dashboard ─────────────────
// ══════════════════════════════════════════
const MOCK_FILE_NAMES = [
  'Sales Call - Acme Corp - Jan 15.mp3','Weekly Standup - Engineering - Jan 16.wav','CS Check-in - Globex Industries.mp3',
  'Board Meeting - Q4 Review.wav','Product Demo - Healthcare Vertical.mp3','Interview - Sr. Engineer Candidate.wav',
  'Sales Call - Initech - Follow Up.mp3','All Hands - Company Update Jan.wav','CS Escalation - Oscorp.mp3',
  'Training Session - New Hires.wav','Sales Discovery - Pied Piper.mp3','Sprint Retro - Team Alpha.wav',
  'Customer Interview - NPS Deep Dive.mp3','Investor Update Call - Series B.wav','Competitive Intel - Acme Analysis.mp3',
  'Sales Call - Wayne Enterprises.wav','Partnership Discussion - Umbrella Inc.mp3','Design Review - Mobile App.wav',
  'Sales Call - Stark Industries.mp3','QBR - Enterprise Accounts.wav','Marketing Strategy Session.mp3',
  'Sales Call - Cyberdyne Systems.wav','Support Escalation - API Issues.mp3','Leadership Offsite - Day 1.wav',
  'Sales Call - Soylent Corp.mp3','Engineering All-Hands - Roadmap.wav','Customer Success - Onboarding Call.mp3',
  'Sales Forecast Review - Q2.wav','Product Strategy - AI Features.mp3','HR Town Hall - Benefits Update.wav',
];

function startProcessing(config) {
  const hero = document.querySelector('.hero');
  const statsRow = document.getElementById('statsRow');
  const recentSection = document.querySelector('.recent-section');
  const clientsSection = document.querySelector('.clients-section');
  const dash = document.getElementById('processingDashboard');

  // Hide hero content, show dashboard
  if (hero) hero.style.display = 'none';
  if (statsRow) statsRow.style.display = 'none';
  if (recentSection) recentSection.style.display = 'none';
  if (clientsSection) clientsSection.style.display = 'none';
  dash.style.display = '';

  const totalFiles = config.fileCount || 127;
  let queued = totalFiles;
  let processing = 0;
  let complete = 0;
  let failed = 0;
  let whisperCount = 0;
  const streamEl = document.getElementById('procStream');
  streamEl.innerHTML = '';

  document.getElementById('procTitle').textContent = `Processing ${totalFiles} files...`;
  document.getElementById('procQueued').textContent = queued;
  document.getElementById('procProcessing').textContent = processing;
  document.getElementById('procComplete').textContent = complete;
  document.getElementById('procFailed').textContent = failed;

  // Generate mock file list
  const files = [];
  for (let i = 0; i < totalFiles; i++) {
    const name = MOCK_FILE_NAMES[i % MOCK_FILE_NAMES.length].replace(/\.(mp3|wav)$/, ` ${Math.floor(i / MOCK_FILE_NAMES.length) + 1}.$1`);
    files.push({ name, dur: 15 + Math.floor(Math.random() * 50), status: 'queued' });
  }

  const CIRCUM = 213.6;
  const ring = document.getElementById('procRingFill');
  const pctEl = document.getElementById('procRingPct');
  const etaEl = document.getElementById('procEta');
  const flashEl = document.getElementById('procTickerFlash');
  const whisperCountEl = document.getElementById('procWhisperCount');

  let fileIdx = 0;
  const startTime = Date.now();

  const interval = setInterval(() => {
    if (fileIdx >= totalFiles) {
      clearInterval(interval);
      processingComplete(config, totalFiles, whisperCount);
      return;
    }

    // Process 1-3 files per tick
    const batch = Math.min(1 + Math.floor(Math.random() * 3), totalFiles - fileIdx);
    for (let b = 0; b < batch && fileIdx < totalFiles; b++) {
      const f = files[fileIdx];
      f.status = Math.random() < 0.02 ? 'failed' : 'complete';
      if (f.status === 'complete') complete++;
      else failed++;
      queued--;
      fileIdx++;

      // Add to stream (keep last 15)
      const row = document.createElement('div');
      row.className = 'proc-file';
      row.innerHTML = `
        <span class="proc-file-icon">${f.status === 'complete' ? '&#10003;' : '&#10005;'}</span>
        <span class="proc-file-name">${f.name}</span>
        <span class="proc-file-dur">${f.dur}m</span>
        <span class="proc-file-status ${f.status}">${f.status}</span>`;
      streamEl.prepend(row);
      if (streamEl.children.length > 15) streamEl.removeChild(streamEl.lastChild);
    }

    // Every ~8 files, discover a whisper
    if (complete % 8 < batch && complete > 0) {
      whisperCount++;
      whisperCountEl.textContent = whisperCount;
      const mockTitles = MOCK_ISSUES.map(i => i.title).concat(MOCK_SIGNALS.map(s => s.title));
      flashEl.textContent = '— ' + mockTitles[whisperCount % mockTitles.length];
      flashEl.classList.add('show');
      setTimeout(() => flashEl.classList.remove('show'), 2000);
    }

    processing = Math.min(3, totalFiles - fileIdx);
    queued = totalFiles - fileIdx - processing;
    if (queued < 0) queued = 0;

    document.getElementById('procQueued').textContent = queued;
    document.getElementById('procProcessing').textContent = processing;
    document.getElementById('procComplete').textContent = complete;
    document.getElementById('procFailed').textContent = failed;

    const pct = Math.round((fileIdx / totalFiles) * 100);
    pctEl.textContent = pct + '%';
    ring.style.strokeDashoffset = CIRCUM - (CIRCUM * pct / 100);

    const elapsed = (Date.now() - startTime) / 1000;
    const rate = fileIdx / elapsed;
    const remaining = Math.max(0, Math.round((totalFiles - fileIdx) / rate));
    etaEl.textContent = remaining > 0 ? `~${remaining}s remaining` : 'Finishing...';
  }, 120);
}

function processingComplete(config, totalFiles, whisperCount) {
  const pctEl = document.getElementById('procRingPct');
  const etaEl = document.getElementById('procEta');
  const titleEl = document.getElementById('procTitle');
  pctEl.textContent = '100%';
  document.getElementById('procRingFill').style.strokeDashoffset = '0';
  etaEl.textContent = 'Complete';
  titleEl.textContent = `${totalFiles} files processed`;

  // Show nav badge
  const badge = document.getElementById('whisperNavBadge');
  if (badge) badge.classList.add('visible');

  // Show toast
  showToast(
    `Processing complete — ${whisperCount} new issues discovered`,
    'View Issues',
    () => {
      navTo('whispers');
      if (badge) badge.classList.remove('visible');
    }
  );

  // Auto-redirect after 2.5s
  setTimeout(() => {
    // Restore home page
    const hero = document.querySelector('.hero');
    const statsRow = document.getElementById('statsRow');
    const recentSection = document.querySelector('.recent-section');
    const clientsSection = document.querySelector('.clients-section');
    const dash = document.getElementById('processingDashboard');
    if (hero) hero.style.display = '';
    if (statsRow) statsRow.style.display = '';
    if (recentSection) recentSection.style.display = '';
    if (clientsSection) clientsSection.style.display = '';
    if (dash) dash.style.display = 'none';

    // Navigate to whispers
    populateWhispers();
    navTo('whispers');
    if (badge) badge.classList.remove('visible');
  }, 2500);
}

// ══════════════════════════════════════════
// ── Toast Notifications ──────────────────
// ══════════════════════════════════════════
function showToast(message, actionText, actionFn) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">&#10024;</span>
    <div class="toast-body"><div class="toast-msg">${message}</div></div>
    ${actionText ? `<button class="toast-action">${actionText}</button>` : ''}`;
  if (actionText && actionFn) {
    toast.querySelector('.toast-action').addEventListener('click', () => {
      actionFn();
      toast.classList.add('leaving');
      setTimeout(() => toast.remove(), 300);
    });
  }
  container.appendChild(toast);
  // Auto-dismiss after 6s
  setTimeout(() => {
    toast.classList.add('leaving');
    setTimeout(() => toast.remove(), 300);
  }, 6000);
}

// ══════════════════════════════════════════
// ── Whisper Modal Actions ────────────────
// ══════════════════════════════════════════
let _currentModalWhisper = null;

function setupWhisperActions() {
  document.getElementById('wmActionEmail').addEventListener('click', () => generateEmailDraft());
  document.getElementById('wmActionBrief').addEventListener('click', () => generateBrief());
  document.getElementById('wmActionExport').addEventListener('click', () => exportInsight());
}

function generateEmailDraft() {
  const w = _currentModalWhisper;
  if (!w) return;
  const resultEl = document.getElementById('wmActionResult');
  const toMap = { signal: 'sales-team@company.com', alert: 'cs-team@company.com', issues: 'leadership@company.com' };
  const subjectMap = {
    signal: `Action needed: ${w.title}`,
    alert: `Urgent: ${w.title}`,
    issues: `Issue: ${w.title}`
  };
  const bodyLines = `Hi team,\n\nI wanted to flag an insight from our audio analysis:\n\n${w.summary}\n\nRecommended next steps:\n- Review the source material (${w.source})\n- Discuss in our next sync\n- Assign an owner for follow-up\n\nBest,\n[Your name]`;

  resultEl.style.display = '';
  resultEl.innerHTML = `<div class="wm-email-composer">
    <div class="wm-email-field"><label>To</label><input type="text" value="${toMap[w.cat]}" /></div>
    <div class="wm-email-field"><label>Subject</label><input type="text" value="${subjectMap[w.cat]}" /></div>
    <div class="wm-email-field"><label>Body</label><textarea>${bodyLines}</textarea></div>
  </div>`;
}

function generateBrief() {
  const w = _currentModalWhisper;
  if (!w) return;
  const resultEl = document.getElementById('wmActionResult');
  const questions = (w.questions || []).map(q => `<li>${q}</li>`).join('');
  resultEl.style.display = '';
  resultEl.innerHTML = `<div class="wm-brief">
    <h5>${w.title}</h5>
    <p><strong>Category:</strong> ${(CAT_META[w.cat]||{label:'Signal'}).label} &nbsp;|&nbsp; <strong>Source:</strong> ${w.source}</p>
    <p>${w.summary}</p>
    <p><strong>Key questions to investigate:</strong></p>
    <ul>${questions}</ul>
    <div class="wm-brief-rec">Recommendation: Schedule a 15-minute review with stakeholders to align on next steps before end of week.</div>
  </div>`;
}

function exportInsight() {
  const w = _currentModalWhisper;
  if (!w) return;
  const data = { title: w.title, category: w.cat, source: w.source, summary: w.summary, questions: w.questions };
  if (navigator.clipboard) {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
  }
  showToast('Insight exported to clipboard', '');
}

// ══════════════════════════════════════════
// ── Ask Munshi (Floating AI Panel) ───────
// ══════════════════════════════════════════
let _askOpen = false;

const MUNSHI_RESPONSES = [
  { keywords: ['churn', 'risk', 'at-risk', 'retention', 'customer retention'],
    answer: 'The "Customer Retention Crisis" issue groups 2 critical alerts: churn risk for 3 enterprise accounts and API latency complaints. Combined ARR at risk is approximately $340K. Signals feeding this issue suggest that NPS improvements and feature adoption success (68% bulk upload adoption) provide a proven playbook. The recommended approach: immediate executive outreach + targeted feature enablement for at-risk accounts. You can investigate this issue directly in the Issues panel.',
    sources: ['Issue: Customer Retention Crisis', 'CS Weekly Sync · May 13'],
    followups: ['Show me the root cause analysis for the retention issue', 'What signals could help resolve this?'] },
  { keywords: ['pricing', 'competitor', 'acme', 'free tier', 'competitive'],
    answer: 'The "Competitive Pressure from Acme Corp" issue groups 2 alerts: their free tier launch and your trial conversion drop (-8 points). Signals feeding this issue include your strong revenue position (80% Q2 target) and high feature adoption — key differentiators. The issue is currently OPEN with HIGH severity. Action plan includes a feature comparison page, a "Why Munshi" one-pager, and evaluating a limited free tier.',
    sources: ['Issue: Competitive Pressure from Acme Corp', 'Competitive Intel Call · May 11'],
    followups: ['What is the action plan for the competitive issue?', 'Show me past resolutions for similar issues'] },
  { keywords: ['revenue', 'sales', 'pipeline', 'target', 'quota'],
    answer: 'Signal: Q2 revenue target is 80% complete with 6 weeks remaining. Pipeline coverage at 3.2x, driven by enterprise healthcare deals. Two large contracts in final negotiation could push to 110% attainment. This signal feeds into both the Customer Retention and Competitive Pressure issues as leverage — strong revenue gives you room to invest in fixes.',
    sources: ['Signal: 80% Q2 revenue target reached', 'Sales Standup · May 14'],
    followups: ['Which issues does this signal feed into?', 'How does this compare to Q1 performance?'] },
  { keywords: ['engineering', 'sprint', 'velocity', 'development', 'bottleneck'],
    answer: 'The "Engineering Capacity Bottleneck" issue groups 2 alerts: sprint velocity drop (-22%) and support ticket surge (+35%). Root cause: database migration complications cascaded into customer escalations, reducing team capacity. This is MEDIUM severity but threatens your ability to respond to the competitive pressure issue. Recommended: ring-fence 20% capacity and consider contract engineers.',
    sources: ['Issue: Engineering Capacity Bottleneck', 'Sprint Retro · May 9'],
    followups: ['Show me the timeline of the engineering issue', 'What-if we hire contract engineers?'] },
  { keywords: ['nps', 'satisfaction', 'customer success', 'onboarding'],
    answer: 'Signal: Enterprise NPS jumped 12 points this quarter (54 → 66). This signal feeds into the Customer Retention Crisis issue — the NPS improvement methodology (faster onboarding, proactive check-ins, self-serve analytics) is exactly what the at-risk accounts need. There is also a resolved issue "Onboarding Friction" that documented how onboarding was fixed from 14 to 8 days — this institutional memory is available for reference.',
    sources: ['Signal: Client NPS jumped 12 points', 'Resolved: Onboarding Friction'],
    followups: ['Show me the resolved onboarding issue', 'How can we apply this to at-risk accounts?'] },
  { keywords: ['weekly', 'briefing', 'summary', 'overview', 'last week', 'issue'],
    answer: 'Here is your issue-centric briefing:\n\n**3 Open Issues:**\n1. Customer Retention Crisis (HIGH) — 2 alerts, $340K ARR at risk\n2. Competitive Pressure from Acme Corp (HIGH) — 2 alerts, rising\n3. Engineering Capacity Bottleneck (MEDIUM) — 2 alerts, stable\n\n**3 Signals:** Revenue at 80% target, NPS +12 points, Feature adoption 68%\n\n**1 Resolved Issue:** Onboarding Friction — resolution documented as institutional memory\n\n**Priority:** Customer Retention Crisis requires immediate attention as it has the highest direct ARR impact.',
    sources: ['All Issues', 'All Signals'],
    followups: ['Investigate the Customer Retention Crisis', 'What are the signals that could help?'] },
];

function setupAskMunshi() {
  const fab = document.getElementById('askFab');
  const panel = document.getElementById('askPanel');
  const backdrop = document.getElementById('askBackdrop');
  const closeBtn = document.getElementById('askClose');
  const clearBtn = document.getElementById('askClear');
  const input = document.getElementById('askInput');
  const sendBtn = document.getElementById('askSend');
  if (!fab || !panel) return;

  fab.addEventListener('click', () => toggleAskPanel());
  closeBtn.addEventListener('click', () => closeAskPanel());
  backdrop.addEventListener('click', () => closeAskPanel());
  clearBtn.addEventListener('click', () => clearAskChat());

  // Keyboard shortcut
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'j') {
      e.preventDefault();
      toggleAskPanel();
    }
  });

  // Send message
  sendBtn.addEventListener('click', () => sendAskMessage());
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); sendAskMessage(); }
  });

  // Suggestion buttons
  document.querySelectorAll('.ask-suggest-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.textContent;
      sendAskMessage();
    });
  });
}

function toggleAskPanel() { _askOpen ? closeAskPanel() : openAskPanel(); }

function openAskPanel() {
  document.getElementById('askPanel').classList.add('open');
  if (window.innerWidth < 768) document.getElementById('askBackdrop').classList.add('visible');
  document.getElementById('askFab').style.display = 'none';
  _askOpen = true;
  setTimeout(() => document.getElementById('askInput').focus(), 200);
}

function closeAskPanel() {
  document.getElementById('askPanel').classList.remove('open');
  document.getElementById('askBackdrop').classList.remove('visible');
  document.getElementById('askFab').style.display = '';
  _askOpen = false;
}

function clearAskChat() {
  const msgs = document.getElementById('askMessages');
  msgs.innerHTML = `<div class="ask-suggestions" id="askSuggestions">
    <p class="ask-suggest-label">Try asking:</p>
    <button class="ask-suggest-btn">What did customers say about pricing this month?</button>
    <button class="ask-suggest-btn">Summarize all competitive mentions across sales calls</button>
    <button class="ask-suggest-btn">What are the top objections from prospects?</button>
    <button class="ask-suggest-btn">Give me a weekly briefing from last week's meetings</button>
  </div>`;
  msgs.querySelectorAll('.ask-suggest-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('askInput').value = btn.textContent;
      sendAskMessage();
    });
  });
}

function sendAskMessage() {
  const input = document.getElementById('askInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  const msgs = document.getElementById('askMessages');
  // Hide suggestions
  const suggs = document.getElementById('askSuggestions');
  if (suggs) suggs.style.display = 'none';

  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'ask-msg user';
  userMsg.textContent = text;
  msgs.appendChild(userMsg);
  msgs.scrollTop = msgs.scrollHeight;

  // Find matching response
  const q = text.toLowerCase();
  let match = MUNSHI_RESPONSES.find(r => r.keywords.some(k => q.includes(k)));
  if (!match) match = MUNSHI_RESPONSES[5]; // Default to weekly briefing

  // Show typing indicator, then stream response
  const aiContainer = document.createElement('div');
  aiContainer.style.alignSelf = 'flex-start';
  aiContainer.style.maxWidth = '85%';
  const aiMsg = document.createElement('div');
  aiMsg.className = 'ask-msg ai streaming-cursor';
  aiMsg.textContent = '';
  aiContainer.appendChild(aiMsg);
  msgs.appendChild(aiContainer);
  msgs.scrollTop = msgs.scrollHeight;

  // Stream words
  const words = match.answer.split(' ');
  let idx = 0;
  const iv = setInterval(() => {
    if (idx < words.length) {
      aiMsg.textContent += (idx > 0 ? ' ' : '') + words[idx];
      idx++;
      msgs.scrollTop = msgs.scrollHeight;
    } else {
      clearInterval(iv);
      aiMsg.classList.remove('streaming-cursor');

      // Add sources
      if (match.sources && match.sources.length) {
        const sourcesDiv = document.createElement('div');
        sourcesDiv.className = 'ask-sources';
        match.sources.forEach(s => {
          const pill = document.createElement('span');
          pill.className = 'ask-source-pill';
          pill.textContent = s;
          sourcesDiv.appendChild(pill);
        });
        aiContainer.appendChild(sourcesDiv);
      }

      // Add follow-ups
      if (match.followups && match.followups.length) {
        const fuDiv = document.createElement('div');
        fuDiv.className = 'ask-followups';
        match.followups.forEach(f => {
          const btn = document.createElement('button');
          btn.className = 'ask-followup-btn';
          btn.textContent = f;
          btn.addEventListener('click', () => {
            document.getElementById('askInput').value = f;
            sendAskMessage();
          });
          fuDiv.appendChild(btn);
        });
        aiContainer.appendChild(fuDiv);
      }
      msgs.scrollTop = msgs.scrollHeight;
    }
  }, 18);
}

window.showArchiveDetail = showArchiveDetail;
window.deleteArchive = deleteArchive;
