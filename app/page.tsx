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
type DashboardView = (typeof dashboardViews)[number];

const lostDeals = [['Peninsular Reserve Bank','Iron Automation suite consolidation','−$1.28M'],['Cascade Mutual Insurance','IMX Tools pilot conversion','−$1.16M'],['Continental Payments Group','Iron Networking new workload','−$1.11M']];
const customers = [['Braithwaite & Mercer','$7.41M','+6.9%'],['Sakurada Trust & Banking','$7.34M','+8.3%'],['Helvetia Postal Finance','$7.32M','+7.0%'],['Cascade Mutual Insurance','$7.28M','+6.3%'],['Meridian National Bank','$5.49M','+4.0%']];

function Metric({ label, value, note }: { label: string; value: string; note: string }) {
  return <div className="dash-metric"><span>{label}</span><strong>{value}</strong><small>{note}</small></div>;
}

function ChartPanel({ title, note, type = 'bars' }: { title: string; note: string; type?: 'bars' | 'line' | 'donut' }) {
  return <section className={`dash-chart ${type}`}><h3>{title}</h3><p>{note}</p><div className="chart-visual">{type === 'bars' && [42,68,54,82,61,91,73].map((n,i) => <i key={i} style={{height:`${n}%`}} />)}{type === 'line' && <span>⌁</span>}{type === 'donut' && <b>86.5%</b>}</div></section>;
}

function DashboardContent({ view }: { view: DashboardView }) {
  if (view === 'Triage') return <div className="dashboard-body"><DialogTitle>What needs attention</DialogTitle><DialogDescription>Everything open in 3Q 2026, with the evidence behind each item and a draft of the next step already written.</DialogDescription><p className="quarter-line">Quarter so far: $128.0M booked against $133.0M budget (96.2%) · $31.0M active pipeline across 47 deals</p><section className="signal-card week-card"><h3>Since last week <small>Recomputed from live record dates</small></h3><p>◷ No deals crossed the 180-day line</p><p>↗ Latest closed week: won $0.70M across 1 deal</p><p>◎ No low-satisfaction responses in the last 7 days</p></section><section className="signal-card danger-card"><h3>Lost deals missing a loss reason <small>29 items · $17.30M at stake</small></h3><p>The “why” sits blank on these, so the QBR cannot attribute the revenue until someone fills it in.</p>{lostDeals.map((row) => <div className="signal-row" key={row[0]}><span><b>{row[0]}</b> · {row[1]}<small>Closed lost this quarter · follow-up owner assigned</small></span><strong>{row[2]}</strong><button>Draft follow-up</button></div>)}</section><section className="signal-card opportunity-card"><h3>Underserved accounts <small>1 item</small></h3><div className="signal-row"><span><b>Meridian National Bank</b> · Banking, Americas<small>We hold 18% of a $30.74M wallet</small></span><strong>+$13.30M potential</strong><button>Open account</button></div></section><section className="signal-card cycle-card"><h3>Deals past a normal cycle <small>1 item · $0.20M at stake</small></h3><div className="signal-row"><span><b>Nordvik Clearing</b> · Iron Monitoring renewal uplift<small>Negotiate · 214 days in cycle</small></span><strong>$0.20M</strong><button>Ask Probe</button></div></section></div>;
  if (view === 'Revenue') return <div className="dashboard-body"><div className="dash-filters"><label>Year<select><option>All</option><option>2026</option></select></label><label>Region<select><option>All</option><option>Americas</option><option>EMEA</option></select></label><label>UT30<select><option>All</option><option>Iron Monitoring</option></select></label></div><div className="dash-alerts"><p><b>4 negative deals missing a reason for loss</b><span>$-4.60M at risk. The “why” is blank.</span></p><p><b>Transactional tracking below budget</b><span>−1.30M variance this quarter.</span></p></div><div className="metric-grid"><Metric label="Total revenue (actual)" value="$128.00M" note="Budget $133.00M"/><Metric label="Budget attainment" value="96.2%" note="Current quarter"/><Metric label="B/(W) vs budget" value="$-5.00M" note="Variance"/><Metric label="YTY change" value="10.4%" note="Year to year"/></div><div className="dash-tabs">Overview　 Trends　 Deals　 Customers　 Products　 QBR Insights</div><section className="signal-card"><h3>Total Revenue</h3><table className="dash-table"><thead><tr><th>Segment</th><th>Budget</th><th>Actual</th><th>B/(W)</th><th>Budget %</th><th>YTY %</th></tr></thead><tbody><tr><td>Transactional</td><td>28.20</td><td>26.90</td><td>-1.30</td><td>95.4%</td><td>17.4%</td></tr><tr><td>Stream</td><td>104.80</td><td>101.10</td><td>-3.70</td><td>96.5%</td><td>8.7%</td></tr><tr><td>Total</td><td>133.00</td><td>128.00</td><td>-5.00</td><td>96.2%</td><td>10.4%</td></tr></tbody></table></section><div className="chart-grid"><ChartPanel title="Quarterly Compare" note="Transactional vs Stream revenue"/><ChartPanel title="Revenue by IOT" note="Revenue split across geographies" type="donut"/></div></div>;
  if (view === 'Pipeline') return <div className="dashboard-body"><div className="dash-filters"><label>Year<select><option>All</option></select></label><label>Region<select><option>All</option></select></label><label>UT30<select><option>All</option></select></label></div><div className="dash-tabs">Current Quarter　 Deals　 Prior Quarter　 Prior Weekly Trends</div><DialogTitle>Opportunity Results for Current Quarter and Week, 3Q 2026</DialogTitle><div className="chart-grid"><ChartPanel title="Opp Forecast Value by Qtr ($M)" note="Active value by forecast close quarter"/><ChartPanel title="Current Qtr Opp Value by IOT" note="Total opp value $31.00M" type="donut"/></div><section className="signal-card"><h3>Active Opps by Stage</h3><div className="metric-grid"><Metric label="Active pipeline" value="$31.0M" note="47 opps"/><Metric label="Seller forecast" value="$23.0M" note="33 opps flagged"/><Metric label="Won this quarter" value="$4.5M" note="7 opps"/><Metric label="Lost this quarter" value="$3.0M" note="5 opps"/></div><div className="stage-bars">{[['Engage','3.4'],['Design','1.6'],['Qualify','10.4'],['Propose','4.6'],['Negotiate','4.8'],['Closing','6.2']].map(([label,n]) => <div key={label}><span>{label}</span><i style={{width:`${Number(n)*8}%`}}/><b>${n}M</b></div>)}</div></section></div>;
  if (view === 'Satisfaction') return <div className="dashboard-body"><div className="dash-filters"><label>UT30<select><option>All</option><option>Iron Service Automation Suite</option></select></label></div><div className="metric-grid five"><Metric label="Total Responses" value="867" note="Survey completions"/><Metric label="Avg OSAT Score" value="4.17" note="Out of 5.0"/><Metric label="Satisfaction Score" value="86.5%" note="Positive"/><Metric label="Low Satisfaction" value="0.3%" note="OSAT 1–2"/><Metric label="Email Open Rate" value="52.0%" note="Campaign performance"/></div><div className="dash-tabs">Overview　 Products　 Campaigns　 Alerts</div><div className="chart-grid satisfaction"><ChartPanel title="Satisfaction Distribution" note="High 86.5% · Neutral 13.1% · Low 0.3%" type="donut"/><ChartPanel title="Satisfaction Trend Over Time" note="Satisfaction Score · Avg OSAT" type="line"/><ChartPanel title="Satisfaction by Region" note="Americas · EMEA · APAC · Japan"/><ChartPanel title="Satisfaction by Survey Type" note="Post-purchase · Support · Renewal" type="line"/></div></div>;
  if (view === 'Licenses') return <div className="dashboard-body"><div className="dash-filters"><label>Year<select><option>All</option><option>2026</option></select></label><label>Region<select><option>All</option></select></label><label>UT30<select><option>All</option></select></label></div><div className="dash-tabs">Customer Portfolio　 Licenses & Entitlements</div><div className="metric-grid"><Metric label="Customers (2026)" value="20" note="Active accounts"/><Metric label="Product adds" value="1" note="Year to date"/><Metric label="Product drops" value="0" note="Year to date"/><Metric label="New customers" value="0" note="Year to date"/></div><section className="signal-card"><h3>Customer product portfolio</h3><p>Top customers by 2026 revenue: what they pay for, and what changed vs 2025</p><table className="dash-table license-table"><thead><tr><th>Customer</th><th>2026 revenue</th><th>YoY</th><th>Paying for</th></tr></thead><tbody>{customers.map(row => <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td><span className="product-pill">Iron Analytics</span><span className="product-pill">IMX Tools</span><span className="product-pill">Automation</span></td></tr>)}</tbody></table></section></div>;
  return <div className="dashboard-body workspace-body"><DialogTitle>Team workspace</DialogTitle><DialogDescription>Every analysis lives in its owner’s folder and re-queries the live database on open.</DialogDescription><div className="folder-grid">{[['Antonio','You'],['Priya R','PR'],['Ingrid S','IS'],['Marcus E','ME']].map(([name,initials]) => <button key={name}><span>{initials}</span><b>{name}</b><i>folder</i></button>)}<button className="add-folder"><span>＋</span><b>Add teammate</b></button></div></div>;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [activePanel, setActivePanel] = useState<ActivePanel | null>(null);
  const [dashboardView, setDashboardView] = useState<DashboardView>('Triage');
  const panel = activePanel && activePanel !== 'telosz' ? detailPanels[activePanel] : null;

  const keyboardOpen = (panelKey: PanelKey) => (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActivePanel(panelKey);
    }
  };

  return (
    <main className="site-shell">
      <section className="make-board" aria-label="Susan Xu pinned portfolio board">
        <aside className="profile-strip">
          <header><h1>SUSAN XU</h1><p>Information Science, Systems, and<br />Technology</p><small>@ Cornell Engineering</small><em>Data Science + UX Design</em></header>
          <section><span>ABOUT ME</span><p>Designing thoughtful products at the intersection of human-centered design, technology, and product strategy.</p></section>
          <nav aria-label="Table of contents"><span>TABLE OF CONTENTS</span>{['IBM','Altheros Capital','Medium Design Collective','New York State Bridge Authority','Develop For Good','Chinese Drama Society at Cornell','INFO 1998','INFO 3450','INFO 4125'].map((item,i)=><button key={item} onClick={() => setActivePanel(i === 0 ? 'telosz' : i < 6 ? 'works' : 'skills')}><b>0{i+1}</b>{item}</button>)}</nav>
          <footer><span>STAY CONNECTED</span><div><a href="mailto:hello@dawn.design">Email ↗</a><a href="#">LinkedIn ↗</a></div></footer>
        </aside>

        <div className="cork-canvas">
          <button className="pin-piece ibm-sticker" onClick={() => setActivePanel('telosz')} aria-label="Open the TelosZ project"><i className="blue-pin" /><span>IBM.</span><small>TELOSZ PROJECT</small></button>
          <button className="pin-piece abroad-card" onClick={() => setActivePanel('about')}><i className="blue-pin" /><span>Semester Abroad</span><b>Fall 2026</b></button>
          <button className="pin-piece bridge-sticker" onClick={() => setActivePanel('works')}><i className="green-pin" /><span>NEW<br /><b>YORK</b><br />STATE</span><strong>Bridge<br />Authority</strong></button>
          <button className="pin-piece drama-sticker" onClick={() => setActivePanel('works')}><i className="red-pin" /><span>剧</span><small>CORNELL CHINESE DRAMA SOCIETY</small></button>
          <button className="pin-piece cornell-pennant" onClick={() => setActivePanel('about')}><i className="red-pin" /><span>CORNELL</span></button>
          <button className="pin-piece camera-sticker" onClick={() => setActivePanel('works')}><i className="green-pin" /><span /><b>◉</b></button>
          <button className="pin-piece develop-sticker" onClick={() => setActivePanel('works')}><i className="red-pin" /><span>&lt;develop<span>for good</span>&gt;</span></button>
          <button className="pin-piece ac-note" onClick={() => setActivePanel('works')}><i className="blue-pin" /><span>AC</span></button>
          <button className="pin-piece map-polaroid" onClick={() => setActivePanel('about')}><i className="blue-pin" /><small>PLACES I&apos;VE BEEN</small><div className="map-art">✦　 ·　 ✦<br />　✦　　·　　✦</div></button>
          <button className="pin-piece yami-sticker" onClick={() => setActivePanel('works')}><i className="red-pin" /><span>％</span><b>YAMI</b></button>
          <button className="pin-piece medium-sticker" onClick={() => setActivePanel('works')}><i className="orange-pin" /><span>medium</span><small>design collective</small></button>
          <button className="pin-piece portrait-polaroid" onClick={() => setActivePanel('resume')}><i className="red-pin" /><div><span>SX</span></div><b>Susan Xu</b></button>
          <button className="pin-piece course-card info-1998" onClick={() => setActivePanel('skills')}><i className="purple-pin" /><small>COURSEWORK　07</small><b>INFO 1998</b><span>Digital Product Design</span></button>
          <button className="pin-piece suitcase-sticker" onClick={() => setActivePanel('resume')}><i className="brown-pin" /><span>✦ ◈ ✿ ◇<br />◇ ✿ ◈ ✦</span></button>
          <button className="pin-piece course-card info-3450" onClick={() => setActivePanel('skills')}><i className="blue-pin" /><small>RESEARCH　08</small><b>INFO 3450</b><span>Human Computer Interaction</span></button>
          <button className="pin-piece course-card info-4125" onClick={() => setActivePanel('skills')}><i className="brown-pin" /><small>COURSEWORK　09</small><b>INFO 4125</b><span>Project Management</span></button>
          <button className="pin-piece notion-sticker" onClick={() => setActivePanel('contact')}><i className="blue-pin" /><span>N</span></button>
          <i className="loose-pin loose-one" /><i className="loose-pin loose-two" /><i className="loose-pin loose-three" />
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
            <DashboardContent view={dashboardView} />
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
