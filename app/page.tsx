'use client';

import { useState } from 'react';
import { ArrowDownRight, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const projects = [
  { id: '01', name: '品牌设计', en: 'BRANDING', tone: 'sun', note: 'WABI COFFEE' },
  { id: '02', name: '海报设计', en: 'POSTER', tone: 'lilac', note: 'TYPE / FORM' },
  { id: '03', name: '包装设计', en: 'PACKAGING', tone: 'paper', note: 'MORI SERIES' },
  { id: '04', name: 'AI 视觉', en: 'AI VISUAL', tone: 'amber', note: 'SUNSHINE' },
  { id: '05', name: '编辑设计', en: 'EDITORIAL', tone: 'mint', note: 'FIELD NOTES' },
];

export default function Home() {
  const [active, setActive] = useState(0);
  return (
    <main className="site-shell">
      <section className="portfolio-frame" aria-label="DAWN 视觉设计作品集">
        <aside className="legend-card paper-card">
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
          <a href="#about" className="object about-tag" aria-label="查看个人简介"><span className="hook small" /><span className="tag-copy"><b>01</b><strong>ABOUT ME</strong><em>个人简介</em><small>Know more about my background and vision.</small><ArrowDownRight /></span></a>
          <a href="#skills" className="object skill-badge" aria-label="查看技能"><span className="hook" /><div><p><b>04 SKILLS</b><span>技能标签</span></p><div className="skill-pills"><i>BRANDING</i><i>POSTER</i><i>PACKAGING</i><i>AI VISUAL</i><i>SOCIAL MEDIA</i></div><ArrowRight /></div></a>
          <section className="object work-file" aria-labelledby="works-title"><span className="hook file-hook" /><div className="file-shell">
            <header><span className="section-number">02</span><h1 id="works-title">SELECTED WORKS</h1><p>精选作品</p><i /><small>A selection of projects in branding, packaging, poster &amp; more.</small></header>
            <div className="project-stack">{projects.map((project, i) => <button key={project.id} className={active === i ? 'active' : ''} onClick={() => setActive(i)}><span className="project-no">{project.id}</span><span className="project-name"><b>{project.en}</b><small>{project.name}</small></span><span className={`project-art ${project.tone}`}><em>{project.note}</em></span></button>)}</div>
          </div></section>
          <a href="#resume" className="object resume-card paper-card" aria-label="查看简历"><span className="strap" /><div className="resume-inner"><div><b>03 ABOUT ME</b><span>简介<br />信息</span></div><div className="portrait">D</div><p>Work experience<br />Education</p><footer><span>VIEW CV</span><ArrowRight /></footer></div></a>
          <a href="mailto:hello@dawn.design" className="object contact-card paper-card" aria-label="发送邮件给 DAWN"><span className="hook contact-hook" /><div className="stamp">✺</div><span className="section-number">05</span><h2>CONTACT</h2><p>联系方式</p><ul><li><Mail /> hello@dawn.design</li><li><Phone /> +86 183 7398 8105</li><li><MapPin /> Changsha, China</li></ul><ArrowRight className="contact-arrow" /></a>
          <aside className="object open-note paper-card"><span className="chain" /><b>OPEN TO WORK ☺</b><p>Let&apos;s create<br />something great<br />together!</p><hr /><small>Available for<br />full-time roles<br />&amp; exciting projects.</small><span className="barcode" /></aside>
        </div>
      </section>
    </main>
  );
}
