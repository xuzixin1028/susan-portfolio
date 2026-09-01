'use client';

import { useState } from 'react';
import { ArrowDownRight, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';

const projects = [
  { id: '01', name: '品牌设计', en: 'BRANDING', tone: 'sun', note: 'WABI COFFEE' },
  { id: '02', name: '海报设计', en: 'POSTER', tone: 'lilac', note: 'TYPE / FORM' },
  { id: '03', name: '包装设计', en: 'PACKAGING', tone: 'paper', note: 'MORI SERIES' },
  { id: '04', name: 'AI 视觉', en: 'AI VISUAL', tone: 'amber', note: 'SUNSHINE' },
  { id: '05', name: '编辑设计', en: 'EDITORIAL', tone: 'mint', note: 'FIELD NOTES' },
];

const detailPanels = {
  about: { title: 'ABOUT ME / 个人简介', description: 'A visual designer turning strategy, stories and systems into memorable brand experiences.', items: ['CURIOSITY', 'STRATEGY', 'STORY', 'SYSTEMS', 'CRAFT'] },
  works: { title: 'SELECTED WORKS / 精选作品', description: 'A curated selection across identity, editorial, packaging and image-making.', items: ['BRANDING', 'POSTER', 'PACKAGING', 'AI VISUAL', 'EDITORIAL'] },
  resume: { title: 'RESUME / 个人履历', description: 'Experience built at the intersection of design direction, visual systems and production.', items: ['EXPERIENCE', 'EDUCATION', 'AWARDS', 'CLIENTS', 'TOOLS'] },
  skills: { title: 'SKILLS / 技能标签', description: 'From first concept to the final visual system, with motion and emerging tools in the mix.', items: ['MOTION', 'IP DESIGN', 'TYPOGRAPHY', 'BRANDING', 'POSTER'] },
  contact: { title: 'CONTACT / 联系方式', description: 'Available for full-time roles, collaborations and thoughtful new projects.', items: ['EMAIL', 'PHONE', 'LOCATION', 'WECHAT', 'SOCIAL'] },
  note: { title: 'OPEN TO WORK / 合作邀请', description: 'Let’s create something useful, distinctive and genuinely memorable together.', items: ['FULL-TIME', 'FREELANCE', 'REMOTE', 'COLLAB', 'HELLO'] },
} as const;

type PanelKey = keyof typeof detailPanels;
type ActivePanel = PanelKey | 'telosz';
const dashboardViews = ['Triage', 'Revenue', 'Pipeline', 'Satisfaction', 'Licenses', 'Workspace'] as const;

export default function Home() {
  const [active, setActive] = useState(0);
  const [activePanel, setActivePanel] = useState<ActivePanel | null>(null);
  const [dashboardView, setDashboardView] = useState<(typeof dashboardViews)[number]>('Triage');
  const panel = activePanel && activePanel !== 'telosz' ? detailPanels[activePanel] : null;

  const keyboardOpen = (panelKey: PanelKey) => (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActivePanel(panelKey);
    }
  };

  return (
    <main className="site-shell">
      <section className="portfolio-frame" aria-label="DAWN 视觉设计作品集">
        <aside className="legend-card paper-card clickable-sticker" role="button" tabIndex={0} onClick={() => setActivePanel('about')} onKeyDown={keyboardOpen('about')}>
          <div className="brand-block"><p className="eyebrow">DA×WN PORTFOLIO</p><p className="micro">WHERE IDEAS MEET NEW BEGINNINGS.</p></div>
          <div className="rule" />
          <div className="mode-block"><p className="eyebrow">WHY NOT MODE</p><p className="micro"><span className="status-dot" /> CURIOSITY ACTIVE</p></div>
          <div className="rule" />
          <div><p className="eyebrow">BOARD LEGEND</p><ol className="legend-list">
            {['Key Tag · About', 'Clear File · Works', 'ID Card · Resume', 'Black Badge · Skills', 'Airmail · Contact'].map((item, i) => <li key={item}><span>0{i + 1}</span><span>{item}</span></li>)}
          </ol></div>
          <div className="rule" />
          <div><p className="eyebrow">OBJECT INTERFACE</p><p className="micro">→ HOVER FOR DETAILS</p><p className="micro">→ CLICK TO UNFOLD</p></div>
          <div className="statement">BRANDS/OBJECTS<br />STORIES &amp;<br />IMAGE SYSTEMS.</div>
          <div className="legend-footer"><div className="qr-grid" aria-hidden="true">{Array.from({ length: 25 }).map((_, i) => <i key={i} />)}</div><p>CONNECT &amp; FOLLOW<br /><span>Discover my works.<br />Let&apos;s cooperate.</span></p></div>
        </aside>
        <div className="pegboard">
          <button type="button" className="object about-tag sticker-button" aria-label="打开 TelosZ dashboard project" onClick={() => setActivePanel('telosz')}><span className="hook small" /><span className="tag-copy"><b>01</b><strong>TELOSZ</strong><em>运营看板</em><small>Open the live portfolio intelligence experience.</small><ArrowDownRight /></span></button>
          <button type="button" className="object skill-badge sticker-button" onClick={() => setActivePanel('skills')}><span className="hook" /><div><p><b>04 SKILLS</b><span>技能标签</span></p><div className="skill-pills"><i>BRANDING</i><i>POSTER</i><i>PACKAGING</i><i>AI VISUAL</i><i>SOCIAL MEDIA</i></div><ArrowRight /></div></button>
          <section className="object work-file clickable-sticker" role="button" tabIndex={0} aria-labelledby="works-title" onClick={() => setActivePanel('works')} onKeyDown={keyboardOpen('works')}><span className="hook file-hook" /><div className="file-shell">
            <header><span className="section-number">02</span><h1 id="works-title">SELECTED WORKS</h1><p>精选作品</p><i /><small>A selection of projects in branding, packaging, poster &amp; more.</small></header>
            <div className="project-stack">{projects.map((project, i) => <button key={project.id} className={active === i ? 'active' : ''} onClick={(event) => { event.stopPropagation(); setActive(i); setActivePanel('works'); }}><span className="project-no">{project.id}</span><span className="project-name"><b>{project.en}</b><small>{project.name}</small></span><span className={`project-art ${project.tone}`}><em>{project.note}</em></span></button>)}</div>
          </div></section>
          <button type="button" className="object resume-card paper-card sticker-button" onClick={() => setActivePanel('resume')}><span className="strap" /><div className="resume-inner"><div><b>03 ABOUT ME</b><span>简介<br />信息</span></div><div className="portrait">D</div><p>Work experience<br />Education</p><footer><span>VIEW CV</span><ArrowRight /></footer></div></button>
          <button type="button" className="object contact-card paper-card sticker-button" onClick={() => setActivePanel('contact')}><span className="hook contact-hook" /><div className="stamp">✺</div><span className="section-number">05</span><h2>CONTACT</h2><p>联系方式</p><ul><li><Mail /> hello@dawn.design</li><li><Phone /> +86 183 7398 8105</li><li><MapPin /> Changsha, China</li></ul><ArrowRight className="contact-arrow" /></button>
          <button type="button" className="object open-note paper-card sticker-button" onClick={() => setActivePanel('note')}><span className="chain" /><b>OPEN TO WORK ☺</b><p>Let&apos;s create<br />something great<br />together!</p><hr /><small>Available for<br />full-time roles<br />&amp; exciting projects.</small><span className="barcode" /></button>
        </div>
      </section>

      <Dialog open={activePanel !== null} onOpenChange={(open) => { if (!open) setActivePanel(null); }}>
        {activePanel === 'telosz' && <DialogContent className="dashboard-modal">
          <div className="dashboard-app">
            <header className="dashboard-nav">
              <strong>TelosZ</strong>
              <nav aria-label="Dashboard sections">{dashboardViews.map((view) => <button key={view} className={dashboardView === view ? 'current' : ''} onClick={() => setDashboardView(view)}>{view}</button>)}</nav>
              <span>⌘K</span><button className="demo-badge">Demo · synthetic data</button>
            </header>
            <div className="dashboard-body">
              <DialogTitle>{dashboardView === 'Triage' ? 'What needs attention' : dashboardView}</DialogTitle>
              <DialogDescription>{dashboardView === 'Triage' ? 'Everything open this quarter, with the evidence behind each item and a draft of the next step already written.' : `A focused ${dashboardView.toLowerCase()} view for the active portfolio and its latest signals.`}</DialogDescription>
              <p className="quarter-line">Quarter so far: $128.0M booked against $133.0M budget (96.2%) · $31.0M active pipeline across 47 deals</p>
              <section className="signal-card week-card"><h3>Since last week <small>Recomputed from live record dates</small></h3><p>◷ No deals crossed the 180-day line</p><p>↗ Latest closed week: won $0.70M across 1 deal</p><p>◎ No low-satisfaction responses in the last 7 days</p></section>
              <section className="signal-card danger-card"><header><h3>Lost deals missing a loss reason <small>29 items · $17.30M at stake</small></h3></header><p>The “why” is blank on these, so the review cannot attribute the revenue until someone fills it in.</p>
                {[['Peninsular Reserve Bank','Iron Automation suite consolidation','−$1.28M'],['Cascade Mutual Insurance','IMX Tools pilot conversion','−$1.16M'],['Continental Payments Group','Iron Networking new workload','−$1.11M']].map((row) => <div className="signal-row" key={row[0]}><span><b>{row[0]}</b> · {row[1]}<small>Closed lost this quarter · follow-up owner assigned</small></span><strong>{row[2]}</strong><button>Draft follow-up</button></div>)}
              </section>
              <section className="signal-card opportunity-card"><h3>Underserved accounts <small>1 item</small></h3><div className="signal-row"><span><b>Meridian National Bank</b> · Banking, Americas<small>We hold 18% of a $30.74M wallet</small></span><strong>+$13.30M potential</strong><button>Open account</button></div></section>
            </div>
            <button className="probe-button">✦ Probe with Assistant <i>3</i></button>
          </div>
        </DialogContent>}
        {panel && <DialogContent className="detail-modal">
          <div className="modal-heading"><DialogTitle>{panel.title}</DialogTitle><DialogDescription>{panel.description}</DialogDescription></div>
          <div className="modal-capsules">
            {panel.items.map((item, index) => <article className={`modal-capsule capsule-${index + 1}`} key={item}><div className="capsule-art"><span>{String(index + 1).padStart(2, '0')}</span><i /></div><b>{item}</b></article>)}
          </div>
          {activePanel === 'contact' && <a className="modal-cta" href="mailto:hello@dawn.design">HELLO@DAWN.DESIGN <ArrowRight /></a>}
        </DialogContent>}
      </Dialog>
    </main>
  );
}
