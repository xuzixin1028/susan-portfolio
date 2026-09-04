'use client'

import { useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
const asset = (name: string) => `/portfolio-assets/${name}`
const ibmImg = asset('IBM-1.png'), acImg = asset('AC.jpeg'), mdcImg = asset('MDC.jpeg')
const bridgeImg = asset('Bridge_Authority-removebg-preview-1.png'), dfgImg = asset('DFG.jpeg'), cdscImg = asset('CDSC-removebg-preview.png')
const mapImg = asset('ChatGPT_Image_Sep_1__2026__02_31_26_AM.png'), susanImg = asset('IMG_4190.jpg'), icelandImg = asset('DSC08670.JPG')
const cornellImg = asset('ChatGPT_Image_Sep_1__2026__03_12_35_AM-removebg-preview__1_-1.png'), edinburghImg = asset('ChatGPT_Image_Sep_1__2026__03_03_57_AM-removebg-preview__1_-1.png')
const cameraImg = asset('GUEST_8594cd7d-301f-457a-8afe-4c27db3800a4-removebg-preview-1.png')
const filmPhoto1 = asset('72b8e607fo9db05fff5413e497d1592e.JPG'), filmPhoto2 = asset('000059850004_Original.JPG'), filmPhoto3 = asset('d69d61bb6r83cc5a239910984d81dab0.JPG')
const suitcaseImg = asset('ChatGPT_Image_Sep_2__2026__06_42_06_PM-removebg-preview.png')
const info1998_lofi1 = asset('Screenshot_2026-09-03_at_11.59.03_PM.png'), info1998_lofi2 = asset('Screenshot_2026-09-03_at_11.59.09_PM.png')
const info1998_midfi = asset('Mid_Fi.png'), info1998_hifi = asset('Hi_Fi.png'), info1998_proto = asset('prototype.png')
const info1998_real1 = asset('IMG_4209.PNG'), info1998_real2 = asset('IMG_4210.PNG')
const yamiImg = asset('ChatGPT_Image_Sep_2__2026__06_27_54_PM.png'), notionImg = asset('ChatGPT_Image_Sep_2__2026__06_30_06_PM.png')
const travelPhoto1 = asset('DSC01513.JPG'), travelPhoto2 = asset('DSC09778.JPG'), travelPhoto3 = asset('IMG_2153.JPG'), travelPhoto4 = asset('Screenshot_2026-09-02_at_6.43.01_PM.png')

// ─── Types ────────────────────────────────────────────────────────────────────

type CardType = 'sticker' | 'index'

interface ProjectSection {
  name: string
  tags?: string
  description?: string
  role?: string
  timeline?: string
  team?: string
  link?: string
}

interface Detail {
  timeline: string
  team?: string
  myRole?: string
  overview: string
  problem?: string
  process?: string
  impact?: string
  takeaways?: string
  projectLink?: string
  projectLinks?: { label: string; url: string }[]
  pdfPage?: number
  sections?: ProjectSection[]
  images?: string[]
  imageLabels?: string[]
}

interface Project {
  id: number
  num: string
  title: string
  role: string
  category: string
  cardType: CardType
  rotation: number
  top: string
  left: string
  pinColor: string
  bg: string
  accent: string
  stickerSrc?: string
  stickerSize?: number
  detail: Detail
}

interface TravelCountry {
  name: string
  cities: string[]
}

interface TravelRegion {
  emoji: string
  name: string
  countries: TravelCountry[]
}

// ─── Travel Data ──────────────────────────────────────────────────────────────

const TRAVEL_REGIONS: TravelRegion[] = [
  {
    emoji: '🌏',
    name: 'Asia',
    countries: [
      { name: 'Russia', cities: ['Moscow'] },
      { name: 'China', cities: ['🏠 Tianjin (home)', 'Beijing', 'Shanghai', 'Chengdu', 'Chongqing', 'Shenyang', 'Sanya', 'Qingdao', 'Jiuzhaigou', 'Xilinhot'] },
      { name: 'Korea', cities: ['Seoul'] },
      { name: 'Japan', cities: ['Tokyo', 'Osaka', 'Kyoto'] },
      { name: 'Hong Kong', cities: [] },
      { name: 'Singapore', cities: [] },
    ]
  },
  {
    emoji: '🌍',
    name: 'Europe',
    countries: [
      { name: 'Iceland', cities: [] },
      { name: 'France', cities: ['Paris'] },
      { name: 'Switzerland', cities: [] },
    ]
  },
  {
    emoji: '🌊',
    name: 'Caribbean',
    countries: [
      { name: 'Bahamas', cities: [] },
      { name: 'Puerto Rico', cities: [] },
      { name: 'Dominican Republic', cities: [] },
    ]
  },
  {
    emoji: '🗺️',
    name: 'North America',
    countries: [
      { name: 'United States', cities: ['🏠 New York (home)', 'Maine', 'Boston', 'Virginia', 'New Jersey', 'Pennsylvania', 'Connecticut', 'Vermont', 'Florida', 'New Orleans', 'Las Vegas', 'California'] },
      { name: 'Canada', cities: ['Toronto', 'Vancouver'] },
    ]
  },
]

// ─── Project Data ─────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    id: 1, num: '01', title: 'IBM', role: 'Product Management',
    category: 'PRODUCT MANAGEMENT', cardType: 'sticker',
    rotation: -2.5, top: '4%', left: '1.5%',
    pinColor: '#cc2200', bg: '#000000', accent: '#0d3880',
    stickerSrc: ibmImg, stickerSize: 195,
    detail: {
      timeline: '45 Days · Summer 2026',
      team: '3 Product Management Interns',
      myRole: 'Product Management · Product Strategy · UX Design · AI/LLM · Data Visualization',
      overview: "Turning fragmented revenue data into actionable insights for product managers. During my Product Management internship at IBM, my fellow interns and I developed Telos, a 0-to-1 internal revenue analytics platform built in 45 days to support 12 product managers across IBM's $1B+ Z portfolio.",
      problem: "Product and revenue data previously lived across disconnected sources and manual Excel workflows, making it difficult for PMs to understand why deals were lost, compare account performance, and identify growth opportunities.",
      process: "We brought CRM, revenue, deployment, and usage data together through PostgreSQL and MCP, enabling PMs to explore information through natural-language queries.",
      impact: "I worked across product strategy, UX, data, and AI, defining requirements with PMs, designing dashboard experiences and workflows, and integrating AI-powered analysis with IBM Bob. Our analysis uncovered missing loss reasons in 70% of lost deals and helped surface $75M in potential annual expansion opportunities through account benchmarking.",
      takeaways: "Note: All customer, revenue, account, and performance data shown in this portfolio case study is mock data created for demonstration purposes and does not represent actual IBM customer or business data.",
      projectLink: 'https://antonio.ac/telosz',
      pdfPage: 1,
    }
  },
  {
    id: 2, num: '02', title: 'Altheros Capital', role: 'UI/UX Design Administrative Lead',
    category: 'UX DESIGN', cardType: 'sticker',
    rotation: 4.0, top: '3%', left: '42%',
    pinColor: '#0d3880', bg: '#ffffff', accent: '#1a1a1a',
    stickerSrc: acImg, stickerSize: 115,
    detail: {
      timeline: 'Dec. 2025 – Aug. 2026',
      team: '20 Designers · 10 Projects',
      myRole: 'UI/UX Design Administrative Lead',
      overview: "Leading design across 10 client products and a 20-person design team. As UI/UX Design Administrative Lead, I managed 20 designers across 10 projects, matching designers to projects based on their interests and strengths while supporting teams throughout the design process.",
      process: "I worked closely with product managers, business leads, and developers to translate product needs into design direction, troubleshoot UX challenges, and coordinate design resources across teams. Several projects progressed from early product requirements through design, development, and final client delivery.",
      sections: [
        { name: 'Insane Vegan', tags: 'Consumer Products · Plant-Based Foods', link: 'https://www.linkedin.com/company/insane-vegan/people/' },
        { name: 'Nerd Perfect', tags: 'Consumer Products · Pop Culture', link: 'https://nerdperfectpodcast.com/' },
        { name: 'Creddly AI', tags: 'FinTech · Risk Management' },
        { name: 'Cara AI', tags: 'Healthcare · AI Companion', link: 'https://mycara.ai/' },
        { name: 'Midwest Health', tags: 'Healthcare · Behavioral Health', link: 'https://midwesthealth.us/' },
        { name: 'Rhett Health', tags: 'Healthcare · Veteran Wellness' },
        { name: 'Wells Health', tags: "Healthcare · Men's Health" },
        { name: 'Altheros Capital Website', tags: 'Investment · Corporate' },
        { name: 'California Property Company', tags: 'Real Estate · Development' },
        { name: 'JR', tags: 'Technology · Advanced Robotics' },
      ],
      pdfPage: 2,
    }
  },
  {
    id: 3, num: '03', title: 'Medium Design Collective', role: 'Product / Project Management',
    category: 'PRODUCT DESIGN', cardType: 'sticker',
    rotation: -1.8, top: '5%', left: '62%',
    pinColor: '#c2400a', bg: '#1a1a1a', accent: '#888888',
    stickerSrc: mdcImg, stickerSize: 152,
    detail: {
      timeline: 'Oct. 2024 – Dec. 2025',
      overview: "Designing and leading client projects from brand identity to digital experiences. Through Medium Design Collective, I worked across client projects as both a product designer and project manager, translating client needs into visual identities and digital experiences while collaborating with multidisciplinary design teams.",
      sections: [
        {
          name: 'CGCC',
          description: 'Building a cohesive visual identity through collaborative brand exploration. As part of a four-person design team, I collaborated on visual concepts, logos, presentation assets, and brand guidelines, translating client goals into a consistent visual identity.',
          role: 'Product Designer', timeline: 'Oct. – Dec. 2024', team: '4 Designers',
          link: 'https://drive.google.com/file/d/1wxmL0tIL_UaOCHU0K5a4OBd3bRhbFxKR/view',
        },
        {
          name: 'Muffinz NYC',
          description: 'Creating a playful brand system for a growing NYC business. I collaborated with a five-person design team and served as an assistant PM, exploring brand direction, refining visual concepts, and creating cohesive assets that reflected the client\'s personality and audience.',
          role: 'Product Designer, assistant PM', timeline: 'Jan. – Apr. 2025', team: '5 Designers',
          link: 'https://drive.google.com/file/d/1edqpidsIGY2QNJHLdwM5sv5SueFOE5fC/view?usp=sharing',
        },
        {
          name: 'VAST Health',
          description: 'Leading a six-person design team from client requirements to final creative direction. As Product Manager, I coordinated the project roadmap, facilitated communication between the client and designers, and guided a six-person team through research, ideation, feedback, and final delivery.',
          role: 'Product Manager', timeline: 'Oct. – Dec. 2025', team: '1 PM · 6 Designers',
          link: 'https://drive.google.com/file/d/1qP9T5C8Tqun1HlrU3TdP6OfUH9kPT0gt/view?usp=sharing',
        },
      ],
      pdfPage: 4,
    }
  },
  {
    id: 4, num: '04', title: 'New York State Bridge Authority', role: 'Engineering / Technology',
    category: 'ENGINEERING', cardType: 'sticker',
    rotation: 2.2, top: '43%', left: '3%',
    pinColor: '#1a5c1a', bg: '#ffffff', accent: '#14532d',
    stickerSrc: bridgeImg, stickerSize: 168,
    detail: {
      timeline: 'Summer 2023',
      overview: 'Developed technology solutions for infrastructure management at the New York State Bridge Authority, focusing on data systems modernization and process automation.',
      problem: 'Maintenance records were stored across disconnected legacy systems, making it nearly impossible to prioritize repairs or allocate resources efficiently.',
      process: 'Audited existing data infrastructure across 5 bridge facilities, designed a unified database schema, built automated reporting scripts in Python, and documented the full system.',
      impact: "Reduced time-to-report for maintenance inspections by 65%. New data system is now the foundation for the NYSBA's ongoing digital modernization initiative.",
      takeaways: 'Note: Due to the nature of my work with a New York State government authority, internal projects, systems, and materials are confidential and cannot be displayed publicly.',
      pdfPage: 6,
    }
  },
  {
    id: 5, num: '05', title: 'Develop For Good', role: 'Product Design / Technology',
    category: 'PRODUCT DESIGN', cardType: 'sticker',
    rotation: -3.2, top: '41%', left: '27%',
    pinColor: '#cc2200', bg: '#0d1b4e', accent: '#e91e8c',
    stickerSrc: dfgImg, stickerSize: 98,
    detail: {
      timeline: 'Spring 2023',
      overview: "Designed and built technology solutions for a nonprofit partner through Develop for Good's national volunteer program connecting students with social impact organizations.",
      problem: 'The nonprofit lacked digital tools to track volunteer hours, manage recurring programs, and communicate updates to diverse stakeholder groups.',
      process: 'Led discovery sessions with the nonprofit leadership team, designed wireframes and high-fidelity mockups in Figma, and collaborated with a 4-person dev team to ship a volunteer management portal.',
      impact: 'Delivered a system actively used by 200+ volunteers. Client reported saving 5+ staff hours per week on administrative coordination tasks.',
      takeaways: 'Nonprofit product design means optimizing for resource constraints. Simplicity and long-term maintainability outweigh feature richness every time.',
      projectLinks: [
        { label: 'CLIMATE DONOR', url: 'https://docs.google.com/presentation/d/1b9fhxZrU-9FvxavxaELBT948hnGnNOvjmqkbhcFY8Jo/edit?slide=id.gc6f73a04f_0_0#slide=id.gc6f73a04f_0_0' },
        { label: 'PRIDE FAMILY', url: 'https://developforgood.notion.site/The-Pride-Family-Designing-A-Web-App-Connecting-Disowned-LGBTQIA-Individuals-with-Supportive-Famil-197fbe7117c080f598a1f78b3a5fd9e6' },
      ],
      pdfPage: 7,
    }
  },
  {
    id: 6, num: '06', title: 'Chinese Drama Society at Cornell', role: 'Visual Design / Creative Direction',
    category: 'VISUAL DESIGN', cardType: 'sticker',
    rotation: 2.0, top: '65%', left: '2%',
    pinColor: '#8b1a1a', bg: '#ffffff', accent: '#7c2d12',
    stickerSrc: cdscImg, stickerSize: 145,
    detail: {
      timeline: '2022 – Present',
      overview: "Visual design and creative direction for Cornell's Chinese Drama Society — covering marketing campaigns, printed materials, and full production branding across three years.",
      problem: "The club's visual identity was inconsistent across channels, reducing brand recognition and making it harder to attract new audience members and performers.",
      process: 'Redesigned the full visual identity system, built reusable design templates for recurring content, directed promotional photoshoots, and designed programs and posters for 3 major productions.',
      impact: 'Production attendance increased by 50% following the rebrand. Social following grew from 300 to 800+ across platforms.',
      takeaways: 'Creative direction means building systems that scale — not just making one beautiful thing, but designing so the whole team can consistently produce beautiful things.',
      pdfPage: 21,
    }
  },
  {
    id: 7, num: '07', title: 'INFO 1998', role: 'Digital Product Design',
    category: 'COURSEWORK', cardType: 'index',
    rotation: 1.8, top: '44%', left: '43%',
    pinColor: '#5b21b6', bg: '#f5f0ff', accent: '#4c1d95',
    detail: {
      timeline: 'Fall 2022',
      overview: "Redesigning a Spotify feature to let users multi-select songs and add them to playlists in bulk — reducing friction for a common but underserved use case.",
      problem: "Spotify users have no easy way to select multiple songs at once and add them to different playlists. The current flow requires repeating the same action song by song, which is tedious when curating large libraries.",
      process: "Started with lo-fi sketches to map the selection flow, then built mid-fi wireframes in Figma to test layout and interaction patterns. Iterated into high-fidelity mockups and a clickable prototype, validating the flow across the full add-to-playlist journey.",
      impact: "Final prototype covers 6 screens: entry point, select mode activation, partial/full selection states, playlist picker, and the updated playlist view. Research screenshots from real Spotify informed the starting interaction model.",
      images: [info1998_lofi1, info1998_lofi2, info1998_midfi, info1998_hifi, info1998_proto, info1998_real1, info1998_real2],
      imageLabels: ['Lo-Fi Sketches — Feature 1: Multi-Select', 'Lo-Fi Sketches — After Add/Delete flows', 'Mid-Fi Wireframes', 'Hi-Fi Mockups', 'Prototype Flow', 'Research: Spotify Context (1)', 'Research: Spotify Context (2)'],
      pdfPage: 8,
    }
  },
  {
    id: 8, num: '08', title: 'INFO 3450', role: 'Human Computer Interaction',
    category: 'RESEARCH', cardType: 'index',
    rotation: 1.5, top: '64%', left: '37%',
    pinColor: '#1e40af', bg: '#f0f4ff', accent: '#1e3a8a',
    detail: {
      timeline: 'Spring 2024',
      overview: 'Advanced coursework in Human-Computer Interaction at Cornell, covering empirical research methods, cognitive models, and interaction design theory at depth.',
      problem: 'Apply rigorous HCI research methodology to identify and quantify real usability failures in existing digital products, then propose evidence-based solutions.',
      process: 'Conducted heuristic evaluations, contextual inquiry studies, think-aloud usability sessions, and semester-long independent research on attention patterns in algorithmic news feeds.',
      impact: 'Research insights presented to the department. Methods and frameworks now directly inform my professional UX research practice.',
      takeaways: "HCI research consistently reveals that assumptions about how real people use technology are almost always wrong. Observe carefully — don't assume.",
      projectLinks: [
        { label: 'VIEW PROJECT', url: 'https://drive.google.com/file/d/1gECj31k4ez8fCcnRmxXayhcBmzQQ84PZ/view?usp=sharing' },
        { label: 'VIEW PROTOTYPE', url: 'https://www.figma.com/proto/90YuYZiRLxPAye4jqaXNwc/INFO-3450-Figma-Design--Copy-?node-id=87-122&starting-point-node-id=5%3A2&t=Z0CHe4ajHPgqP8Do-1' },
      ],
      pdfPage: 22,
    }
  },
  {
    id: 9, num: '09', title: 'INFO 4125', role: 'Project Management',
    category: 'COURSEWORK', cardType: 'index',
    rotation: -1.8, top: '73%', left: '63%',
    pinColor: '#6b4226', bg: '#fdf5e6', accent: '#78350f',
    detail: {
      timeline: 'Fall 2024',
      overview: 'Advanced project management course at Cornell focused on group design projects, agile methodologies, stakeholder management, and professional PM tooling.',
      problem: 'Apply professional PM frameworks to a semester-long group design challenge with real client constraints, ambiguous requirements, and a hard delivery deadline.',
      process: 'Led a team of 5 through the full design sprint lifecycle: scoping, discovery, ideation, prototyping, and formal presentation to client stakeholders using Jira, Confluence, and Figma.',
      impact: 'Client presentation rated excellent by both course instructors and the external sponsor. Project was selected as a showcase example for future cohorts.',
      takeaways: 'Managing creative teams requires clarity without rigidity — the right process creates space for creativity rather than constraining it.',
      projectLink: 'https://docs.google.com/presentation/d/1k9oLlKgfc7v7kqiw2zOyQjWGYr4ZTzpjVkKJLI-6tbA/edit?usp=sharing',
      pdfPage: 23,
    }
  },
]

const YAMI_PROJECT: Project = {
  id: 10, num: '10', title: 'Yami', role: 'Campus Ambassador', category: 'CAMPUS AMBASSADOR', cardType: 'sticker', rotation: 4, top: '3%', left: '55%', pinColor: '#cc2222', bg: '#fff', accent: '#cc2222', stickerSrc: yamiImg,
  detail: { timeline: 'Sept. 2025 – Present', overview: "Bringing Yami to Cornell through content, community, and campus experiences. As a Campus Ambassador, I create social media content and support in-person activations that introduce Yami products and campaigns to Cornell's student community.", pdfPage: 24 }
}

const NOTION_PROJECT: Project = {
  id: 11, num: '11', title: 'Notion', role: 'Campus Ambassador', category: 'CAMPUS AMBASSADOR', cardType: 'sticker', rotation: -3, top: '82%', left: '50%', pinColor: '#444', bg: '#fff', accent: '#111', stickerSrc: notionImg,
  detail: { timeline: 'Sept. 2025 – May 2026', overview: 'Connecting students with tools for better ways to learn, organize, and create. As a Campus Ambassador, I promote Notion through social media and campus events, helping students discover ways to incorporate the platform into their academic and creative workflows.', pdfPage: 25 }
}

const tocTitle = (project: Project) => ({
  7: 'INFO 1998 — Intro to Digital Product Design',
  8: 'INFO 3450 — Human Computer Interaction',
  9: 'INFO 4125 — Project Management',
}[project.id] ?? project.title)

// ─── Push Pin ─────────────────────────────────────────────────────────────────

function PushPin({ color = '#cc2200', style }: { color?: string; style?: CSSProperties }) {
  return (
    <div style={{ position: 'absolute', zIndex: 10, ...style }}>
      <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
        <circle cx="9" cy="7" r="6.5" fill={color} />
        <circle cx="9" cy="7" r="6.5" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="0.6" />
        <ellipse cx="7.2" cy="5.2" rx="2.2" ry="1.8" fill="rgba(255,255,255,0.42)" />
        <rect x="8.2" y="13" width="1.6" height="9" rx="0.8" fill="#8a8a8a" />
        <rect x="8.2" y="13" width="1.6" height="2" rx="0.8" fill="#a0a0a0" />
      </svg>
    </div>
  )
}

// ─── Shared Props ─────────────────────────────────────────────────────────────

interface CardProps {
  project: Project
  highlighted: boolean
  onClick: (p: Project) => void
  onHover: (id: number | null) => void
}

// ─── Sticker Card ─────────────────────────────────────────────────────────────

function StickerCard({ project, highlighted, onClick, onHover }: CardProps) {
  const [hovered, setHovered] = useState(false)
  const active = hovered || highlighted

  return (
    <div
      style={{
        position: 'absolute',
        top: project.top,
        left: project.left,
        width: `${project.stickerSize}px`,
        cursor: 'pointer',
        zIndex: active ? 20 : 2,
        transform: `rotate(${active ? project.rotation * 0.1 : project.rotation}deg) translateY(${active ? -10 : 0}px)`,
        transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onClick={() => onClick(project)}
      onMouseEnter={() => { setHovered(true); onHover(project.id) }}
      onMouseLeave={() => { setHovered(false); onHover(null) }}
    >
      <PushPin color={project.pinColor} style={{ top: '-13px', left: '50%', transform: 'translateX(-50%)' }} />
      <img
        src={project.stickerSrc}
        alt={project.title}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          filter: active
            ? 'drop-shadow(0 16px 32px rgba(0,0,0,0.42)) drop-shadow(0 5px 14px rgba(0,0,0,0.26))'
            : 'drop-shadow(3px 6px 14px rgba(0,0,0,0.32)) drop-shadow(1px 2px 5px rgba(0,0,0,0.14))',
          transition: 'filter 0.25s ease',
        }}
      />
      <div style={{ textAlign: 'center', marginTop: '8px', opacity: active ? 1 : 0, transition: 'opacity 0.2s ease' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '7.5px', letterSpacing: '0.1em', color: 'rgba(55,28,5,0.85)', background: 'rgba(255,248,220,0.94)', padding: '2px 10px', borderRadius: '2px', boxShadow: '0 1px 6px rgba(0,0,0,0.16)', whiteSpace: 'nowrap' }}>
          View Project →
        </span>
      </div>
    </div>
  )
}

// ─── Index Card (07, 08, 09) ──────────────────────────────────────────────────

function ProjectCard({ project, highlighted, onClick, onHover }: CardProps) {
  const [hovered, setHovered] = useState(false)
  const active = hovered || highlighted

  const handlers = {
    onClick: () => onClick(project),
    onMouseEnter: () => { setHovered(true); onHover(project.id) },
    onMouseLeave: () => { setHovered(false); onHover(null) },
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: project.top,
        left: project.left,
        width: '212px',
        background: project.bg,
        padding: '13px 15px 11px',
        borderRadius: '1px',
        border: '1px solid rgba(0,0,0,0.07)',
        transform: `rotate(${active ? project.rotation * 0.12 : project.rotation}deg) translateY(${active ? -6 : 0}px)`,
        boxShadow: active
          ? '0 18px 55px rgba(0,0,0,0.3), 0 6px 18px rgba(0,0,0,0.18)'
          : '3px 5px 16px rgba(0,0,0,0.22), 1px 2px 5px rgba(0,0,0,0.1)',
        cursor: 'pointer',
        transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
        zIndex: active ? 20 : 2,
      }}
      {...handlers}
    >
      <PushPin color={project.pinColor} style={{ top: '-11px', left: '50%', transform: 'translateX(-50%)' }} />

      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '7px', letterSpacing: '0.16em', color: '#c0c0c0', marginBottom: '4px' }}>
        {project.category}
      </div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#d0d0d0', marginBottom: '2px' }}>
        {project.num}
      </div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: project.cardType === 'index' ? '20px' : '16px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: '4px' }}>
        {project.title}
      </div>
      <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '10px', color: '#666', marginBottom: '13px', lineHeight: 1.4 }}>
        {project.role}
      </div>

      {[1, 0.55, 0.35].map((op, i) => (
        <div key={i} style={{ height: '1px', background: `rgba(172,148,102,${op * 0.8})`, marginBottom: '7px', width: i === 2 ? '52%' : '100%' }} />
      ))}

      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', color: project.accent, opacity: active ? 1 : 0, transition: 'opacity 0.2s ease', marginTop: '8px' }}>
        View Project →
      </div>
    </div>
  )
}

// ─── Photo / Bio Flip Card ────────────────────────────────────────────────────

const BIO_PARAGRAPHS = [
  "I'm Susan, a Cornell Engineering student exploring the space where design, technology, data, and business collide. I love exploring new ideas and turning them into something real, from figuring out what should exist and planning how to make it happen to watching all the pieces come together.",
  "That curiosity has taken me from UX and visual design to engineering, research, and product management. Across all of them, I've realized I'm drawn to the same thing: taking something complicated and making it simpler, more useful, and more human.",
  "When I'm not making things, I'm probably traveling somewhere new, behind a camera, or making new friends :)",
]

function PhotoCard({ onOpen }: { onOpen: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        top: '23%',
        left: '64%',
        width: '252px',
        height: '358px',
        cursor: 'pointer',
        zIndex: hovered ? 20 : 3,
        transform: `rotate(${hovered ? -1.0 : -2.5}deg) translateY(${hovered ? -8 : 0}px)`,
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.34), 0 6px 18px rgba(0,0,0,0.18)'
          : '4px 7px 24px rgba(0,0,0,0.3), 2px 3px 9px rgba(0,0,0,0.14)',
        background: '#ffffff',
        padding: '13px 13px 0',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PushPin color="#c2400a" style={{ top: '-13px', left: '50%', transform: 'translateX(-50%)' }} />

      <img
        src={susanImg}
        alt="Susan Xu"
        style={{ width: '100%', flex: 1, objectFit: 'cover', objectPosition: 'center 18%', display: 'block', minHeight: 0 }}
      />

      <div style={{ height: '52px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', flexShrink: 0 }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px', fontWeight: 700, color: '#1a1a1a', letterSpacing: '0.01em' }}>
          Susan Xu
        </span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '6.5px', color: '#c8c8c8', letterSpacing: '0.1em', opacity: hovered ? 1 : 0, transition: 'opacity 0.2s ease' }}>
          read more →
        </span>
      </div>
    </div>
  )
}

// ─── Bio Modal ────────────────────────────────────────────────────────────────

function BioModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(90,58,20,0.75)', backdropFilter: 'blur(2px)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-scroll"
        style={{ background: '#ffffff', width: 'min(680px, 92vw)', maxHeight: '88vh', overflowY: 'auto', borderRadius: '1px', padding: '0 0 48px', position: 'relative', boxShadow: '0 24px 80px rgba(0,0,0,0.42), 0 8px 24px rgba(0,0,0,0.2)', transform: 'rotate(-0.3deg)' }}
      >
        <PushPin color="#c2400a" style={{ top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />

        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '18px', right: '20px', background: 'rgba(255,255,255,0.82)', border: 'none', cursor: 'pointer', fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.14em', color: '#000', padding: '4px 8px', transition: 'color 0.15s ease', zIndex: 2 }}
        >
          BACK TO BOARD ×
        </button>

        {/* Hero photo */}
        <div style={{ width: '100%', height: '300px', overflow: 'hidden', position: 'relative' }}>
          <img
            src={icelandImg}
            alt="Susan Xu"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 38%', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.35) 100%)' }} />
        </div>

        {/* Content */}
        <div style={{ padding: '36px 48px 48px' }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', color: '#c0c0c0', marginBottom: '8px' }}>
            ABOUT ME
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 5px', lineHeight: 1.05 }}>
            Hi, I'm Susan
          </h2>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#bbb', marginBottom: '28px', letterSpacing: '0.1em' }}>
            📍 New York
          </div>

          <div style={{ height: '1px', background: '#ececec', marginBottom: '28px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {BIO_PARAGRAPHS.map((para, i) => (
              <p key={i} style={{ fontFamily: "'Nunito', sans-serif", fontSize: '14px', color: '#333', lineHeight: 1.78, margin: 0 }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Flag / Sticker Flip Card ─────────────────────────────────────────────────

interface FlagCardProps {
  img: string
  altText: string
  backLabel?: string
  backTitle: string
  backSubtitle: string
  backBg: string
  backAccent: string
  top: string
  left: string
  rotation: number
  pinColor: string
  width: number
  aspectRatio: number
}

function FlagCard({ img, altText, backLabel, backTitle, backSubtitle, backBg, backAccent, top, left, rotation, pinColor, width, aspectRatio }: FlagCardProps) {
  const [flipped, setFlipped] = useState(false)
  const [hovered, setHovered] = useState(false)
  const height = Math.round(width * aspectRatio)

  return (
    <div
      style={{
        position: 'absolute',
        top, left,
        width: `${width}px`,
        height: `${height}px`,
        perspective: '900px',
        cursor: 'pointer',
        zIndex: flipped ? 25 : hovered ? 20 : 2,
        transform: `rotate(${hovered ? rotation * 0.1 : rotation}deg) translateY(${hovered ? -8 : 0}px)`,
        transition: 'transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: '100%', height: '100%', position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.62s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>

        {/* Front: sticker image */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden' as CSSProperties['WebkitBackfaceVisibility'],
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <PushPin color={pinColor} style={{ top: '-13px', left: '50%', transform: 'translateX(-50%)' }} />
          <img
            src={img}
            alt={altText}
            style={{
              width: '100%', height: '100%', objectFit: 'contain', display: 'block',
              filter: hovered
                ? 'drop-shadow(0 12px 26px rgba(0,0,0,0.42)) drop-shadow(0 4px 10px rgba(0,0,0,0.26))'
                : 'drop-shadow(3px 6px 14px rgba(0,0,0,0.32)) drop-shadow(1px 2px 5px rgba(0,0,0,0.14))',
              transition: 'filter 0.25s ease',
            }}
          />
        </div>

        {/* Back: compact note — same sticker footprint */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden' as CSSProperties['WebkitBackfaceVisibility'],
          transform: 'rotateY(180deg)',
          background: backBg,
          boxShadow: '4px 6px 20px rgba(0,0,0,0.28)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '6px 14px', gap: '2px',
          border: '1px solid rgba(0,0,0,0.07)',
        }}>
          <PushPin color={pinColor} style={{ top: '-13px', left: '50%', transform: 'translateX(-50%)' }} />
          {backLabel && (
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '5.5px', letterSpacing: '0.16em', color: '#c0c0c0', textAlign: 'center' }}>
              {backLabel}
            </div>
          )}
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '15px', fontWeight: 700, color: '#1a1a1a', textAlign: 'center', lineHeight: 1.1 }}>
            {backTitle}
          </div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '11px', color: backAccent, textAlign: 'center', lineHeight: 1.2, fontWeight: 600 }}>
            {backSubtitle}
          </div>
        </div>

      </div>
    </div>
  )
}

// ─── Camera / Film Strip ──────────────────────────────────────────────────────

const FILM_PHOTOS = [
  { src: filmPhoto1, caption: 'Reykjavik, Iceland', num: '01' },
  { src: filmPhoto2, caption: 'Santa Cruz, California', num: '02' },
  { src: filmPhoto3, caption: 'Cornell University', num: '03' },
]

function Sprockets() {
  return (
    <div style={{ height: '26px', background: '#080808', display: 'flex', alignItems: 'center', paddingLeft: '18px', gap: '13px', overflow: 'hidden', flexShrink: 0 }}>
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} style={{ width: '10px', height: '16px', background: '#272727', borderRadius: '2px', flexShrink: 0 }} />
      ))}
    </div>
  )
}

const TRAVEL_PHOTOS = [
  { src: travelPhoto1, caption: 'Adventures' },
  { src: travelPhoto2, caption: 'On the Road' },
  { src: travelPhoto3, caption: 'Friends' },
  { src: travelPhoto4, caption: 'Memories' },
]

function SuitcaseCard({ onOpen }: { onOpen: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        top: '56%',
        left: '48%',
        width: '120px',
        cursor: 'pointer',
        zIndex: hovered ? 20 : 2,
        transform: `rotate(${hovered ? -1 : -3.5}deg) translateY(${hovered ? -10 : 0}px)`,
        transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PushPin color="#b8860b" style={{ top: '-13px', left: '50%', transform: 'translateX(-50%)' }} />
      <img
        src={suitcaseImg}
        alt="Suitcase"
        style={{
          width: '100%', height: 'auto', display: 'block',
          filter: hovered
            ? 'drop-shadow(0 14px 28px rgba(0,0,0,0.45)) drop-shadow(0 5px 12px rgba(0,0,0,0.28))'
            : 'drop-shadow(3px 6px 14px rgba(0,0,0,0.30)) drop-shadow(1px 2px 5px rgba(0,0,0,0.14))',
          transition: 'filter 0.25s ease',
        }}
      />
      <div style={{ textAlign: 'center', marginTop: '6px', opacity: hovered ? 1 : 0, transition: 'opacity 0.2s ease' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '7px', letterSpacing: '0.1em', color: 'rgba(55,28,5,0.85)', background: 'rgba(255,248,220,0.94)', padding: '2px 8px', borderRadius: '2px', boxShadow: '0 1px 6px rgba(0,0,0,0.16)', whiteSpace: 'nowrap' }}>
          Travel & Friends →
        </span>
      </div>
    </div>
  )
}

function TravelModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(10,8,6,0.88)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#faf8f4',
          borderRadius: '4px',
          width: 'min(720px, 92vw)',
          maxHeight: '88vh',
          overflowY: 'auto',
          boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
          position: 'relative',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '22px', color: 'rgba(60,40,20,0.5)', zIndex: 10, lineHeight: 1 }}
        >
          ×
        </button>

        {/* Header */}
        <div style={{ padding: '36px 48px 24px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 700, color: '#1a1208', margin: 0, lineHeight: 1.1 }}>
            Travel & Friends
          </h2>
        </div>

        {/* Photo grid — portrait */}
        <div style={{ padding: '0 48px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
          {TRAVEL_PHOTOS.map((photo, i) => (
            <div key={i} style={{ borderRadius: '2px', overflow: 'hidden', aspectRatio: '3/4' }}>
              <img
                src={photo.src}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CameraCard({ onOpen }: { onOpen: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        top: '60%',
        left: '24%',
        width: '134px',
        cursor: 'pointer',
        zIndex: hovered ? 20 : 2,
        transform: `rotate(${hovered ? 0.4 : 2.8}deg) translateY(${hovered ? -8 : 0}px)`,
        transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PushPin color="#2d6a2d" style={{ top: '-13px', left: '50%', transform: 'translateX(-50%)' }} />
      <img
        src={cameraImg}
        alt="Fujifilm QuickSnap"
        style={{
          width: '100%', height: 'auto', display: 'block',
          filter: hovered
            ? 'drop-shadow(0 14px 28px rgba(0,0,0,0.45)) drop-shadow(0 5px 12px rgba(0,0,0,0.28))'
            : 'drop-shadow(3px 6px 14px rgba(0,0,0,0.32)) drop-shadow(1px 2px 5px rgba(0,0,0,0.14))',
          transition: 'filter 0.25s ease',
        }}
      />
      <div style={{ textAlign: 'center', marginTop: '6px', opacity: hovered ? 1 : 0, transition: 'opacity 0.2s ease' }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '7px', letterSpacing: '0.1em', color: 'rgba(55,28,5,0.85)', background: 'rgba(255,248,220,0.94)', padding: '2px 8px', borderRadius: '2px', boxShadow: '0 1px 6px rgba(0,0,0,0.16)', whiteSpace: 'nowrap' }}>
          View Film →
        </span>
      </div>
    </div>
  )
}

function FilmStripModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(8,6,4,0.94)', backdropFilter: 'blur(5px)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: 'min(940px, 96vw)', position: 'relative' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '28px' }}>
          <img src={cameraImg} alt="Fujifilm QuickSnap" style={{ height: '56px', width: 'auto', filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.6))' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '7.5px', letterSpacing: '0.22em', color: '#c8a96e', marginBottom: '5px' }}>
              ON FILM · FUJIFILM QUICKSNAP
            </div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#f5f0e8', lineHeight: 1.05 }}>
              Captured Moments
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2px', cursor: 'pointer', fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.3)', padding: '7px 12px', transition: 'all 0.15s ease' }}
            onMouseEnter={(e) => { const b = e.currentTarget; b.style.color = '#fff'; b.style.borderColor = 'rgba(255,255,255,0.4)' }}
            onMouseLeave={(e) => { const b = e.currentTarget; b.style.color = 'rgba(255,255,255,0.3)'; b.style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            CLOSE ×
          </button>
        </div>

        {/* Film strip */}
        <div style={{ background: '#0e0e0e', borderRadius: '3px', overflow: 'hidden', boxShadow: '0 30px 90px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04)' }}>
          <Sprockets />

          <div style={{ display: 'flex', padding: '16px 24px', gap: '18px', overflowX: 'auto', background: '#111' }}>
            {FILM_PHOTOS.map((photo, i) => (
              <div key={i} style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Frame number */}
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '7px', color: '#c8a96e', letterSpacing: '0.18em', marginBottom: '7px' }}>
                  ▲ {photo.num}
                </div>

                {/* Photo frame */}
                <div style={{ border: '3px solid #1e1e1e', background: '#000', overflow: 'hidden', width: '268px', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)' }}>
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'center 30%', display: 'block', filter: 'sepia(0.12) contrast(1.06) saturate(0.9)' }}
                  />
                </div>

                {/* Caption */}
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '7.5px', color: '#7a6a52', letterSpacing: '0.1em', marginTop: '10px', textAlign: 'center' }}>
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>

          <Sprockets />
        </div>

        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.15)', marginTop: '16px', textAlign: 'center', letterSpacing: '0.1em' }}>
          press esc or click outside to close
        </div>
      </div>
    </div>
  )
}

// ─── Map Card ─────────────────────────────────────────────────────────────────

function MapCard({ onOpen }: { onOpen: () => void }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        top: '18%',
        left: '37%',
        width: '246px',
        background: '#ffffff',
        borderRadius: '1px',
        padding: '12px 12px 14px',
        cursor: 'pointer',
        zIndex: hovered ? 20 : 2,
        transform: `rotate(${hovered ? -0.1 : -1.2}deg) translateY(${hovered ? -6 : 0}px)`,
        boxShadow: hovered
          ? '0 18px 55px rgba(0,0,0,0.3), 0 6px 18px rgba(0,0,0,0.18)'
          : '3px 5px 16px rgba(0,0,0,0.22), 1px 2px 5px rgba(0,0,0,0.1)',
        transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <PushPin color="#1e40af" style={{ top: '-13px', left: '50%', transform: 'translateX(-50%)' }} />

      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '7px', letterSpacing: '0.16em', color: '#94a3b8', marginBottom: '7px' }}>
        PLACES I'VE BEEN
      </div>

      <img
        src={mapImg}
        alt="World map with visited places marked"
        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '1px' }}
      />

      <div style={{ marginTop: '7px', textAlign: 'center', fontFamily: "'Space Mono', monospace", fontSize: '7.5px', letterSpacing: '0.1em', color: '#94a3b8', opacity: hovered ? 1 : 0, transition: 'opacity 0.2s ease' }}>
        View Full List →
      </div>
    </div>
  )
}

// ─── Places Modal ─────────────────────────────────────────────────────────────

function PlacesModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(90, 58, 20, 0.75)', backdropFilter: 'blur(2px)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-scroll"
        style={{ background: '#ffffff', width: 'min(640px, 92vw)', maxHeight: '88vh', overflowY: 'auto', borderRadius: '1px', padding: '54px 50px 48px', position: 'relative', boxShadow: '0 24px 80px rgba(0,0,0,0.42), 0 8px 24px rgba(0,0,0,0.2)', transform: 'rotate(0.3deg)' }}
      >
        <PushPin color="#1e40af" style={{ top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />

        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '18px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.14em', color: '#000', padding: '4px 8px', transition: 'color 0.15s ease' }}
          onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = '#555' }}
          onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = '#c0c0c0' }}
        >
          BACK TO BOARD ×
        </button>

        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', color: '#94a3b8', marginBottom: '8px' }}>
          PLACES I'VE BEEN
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '34px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 6px', lineHeight: 1.05 }}>
          Around the World
        </h2>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>
          4 continents · 20+ countries · countless memories
        </div>

        <img
          src={mapImg}
          alt="Travel map"
          style={{ width: '100%', height: 'auto', borderRadius: '2px', marginBottom: '28px', boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}
        />

        <div style={{ height: '1px', background: '#ececec', marginBottom: '28px' }} />

        {TRAVEL_REGIONS.map((region) => (
          <div key={region.name} style={{ marginBottom: '26px' }}>
            {/* Region header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ fontSize: '15px', lineHeight: 1 }}>{region.emoji}</span>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', fontWeight: 700, color: '#1a1a1a' }}>
                {region.name}
              </div>
              <div style={{ flex: 1, height: '1px', background: '#ececec', marginLeft: '4px' }} />
            </div>

            {/* Countries */}
            {region.countries.map((country) => (
              <div key={country.name} style={{ display: 'flex', gap: '16px', marginBottom: '7px', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '9.5px', color: '#1e3a8a', fontWeight: 700, minWidth: '130px', paddingTop: '2px', letterSpacing: '0.04em', flexShrink: 0 }}>
                  {country.name}
                </div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '13px', color: '#444', lineHeight: 1.6, flex: 1 }}>
                  {country.cities.length > 0 ? country.cities.join(' · ') : (
                    <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>visited</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Project Modal ────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(90, 58, 20, 0.75)', backdropFilter: 'blur(2px)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-scroll"
        style={{ background: '#ffffff', width: 'min(700px, 92vw)', maxHeight: '88vh', overflowY: 'auto', borderRadius: '1px', padding: '54px 50px 48px', position: 'relative', boxShadow: '0 24px 80px rgba(0,0,0,0.42), 0 8px 24px rgba(0,0,0,0.2)', transform: 'rotate(-0.3deg)' }}
      >
        <PushPin color={project.pinColor} style={{ top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />

        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '18px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.14em', color: '#000', padding: '4px 8px', transition: 'color 0.15s ease' }}
          onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.color = '#555' }}
          onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.color = '#c0c0c0' }}
        >
          BACK TO BOARD ×
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
          {project.stickerSrc && (
            <img src={project.stickerSrc} alt={project.title} style={{ height: '44px', width: 'auto', filter: 'drop-shadow(1px 2px 5px rgba(0,0,0,0.18))', flexShrink: 0 }} />
          )}
          <div>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', color: project.accent, background: project.accent + '16', padding: '3px 9px', borderRadius: '2px', fontWeight: 700, display: 'inline-block', marginBottom: '5px' }}>
              {project.category}
            </span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '12px', color: '#d8d8d8', marginLeft: '10px' }}>
              {project.num}
            </span>
          </div>
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#1a1a1a', margin: '0 0 5px', lineHeight: 1.05 }}>
          {project.title}
        </h2>
        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '15px', color: '#666', marginBottom: '7px' }}>
          {project.role}
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#bbb', marginBottom: '30px', letterSpacing: '0.1em' }}>
          {project.detail.timeline}
        </div>

        <div style={{ height: '1px', background: '#ececec', marginBottom: '32px' }} />

        {project.detail.pdfPage && (
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', color: '#c0c0c0', marginBottom: '10px' }}>COMPLETE PORTFOLIO ENTRY</div>
            <iframe
              title={`${project.title} complete portfolio entry`}
              src={`/portfolio-assets/Portfolio_Writing.pdf#page=${project.detail.pdfPage}&view=FitH`}
              style={{ width: '100%', height: '680px', border: '1px solid #e3e3e3', background: '#f5f5f5' }}
            />
          </div>
        )}

        {/* Meta row */}
        {(project.detail.team || project.detail.myRole) && (
          <div style={{ display: 'flex', gap: '32px', marginBottom: '28px' }}>
            {project.detail.myRole && (
              <div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', color: '#c0c0c0', marginBottom: '5px' }}>MY ROLE</div>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '13px', color: '#444', lineHeight: 1.6, margin: 0 }}>{project.detail.myRole}</p>
              </div>
            )}
            {project.detail.team && (
              <div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', color: '#c0c0c0', marginBottom: '5px' }}>TEAM</div>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '13px', color: '#444', lineHeight: 1.6, margin: 0 }}>{project.detail.team}</p>
              </div>
            )}
          </div>
        )}

        {/* Main text sections */}
        {[
          { label: 'Overview', content: project.detail.overview },
          { label: 'Problem', content: project.detail.problem },
          { label: 'Process', content: project.detail.process },
          { label: 'Impact', content: project.detail.impact },
          { label: 'Key Takeaways', content: project.detail.takeaways },
        ].filter(s => s.content).map(({ label, content }) => (
          <div key={label} style={{ marginBottom: '28px' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', color: '#c0c0c0', marginBottom: '9px' }}>
              {label.toUpperCase()}
            </div>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '14px', color: '#333', lineHeight: 1.78, margin: 0, fontStyle: content?.startsWith('Note:') ? 'italic' : 'normal' }}>
              {content}
            </p>
          </div>
        ))}

        {/* Project link */}
        {project.detail.projectLink && (
          <div style={{ marginBottom: '28px' }}>
            <a href={project.detail.projectLink} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', letterSpacing: '0.12em', color: project.accent, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', borderBottom: `1px solid ${project.accent}40`, paddingBottom: '2px' }}>
              VIEW PROJECT ↗
            </a>
          </div>
        )}

        {project.detail.projectLinks && project.detail.projectLinks.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
            {project.detail.projectLinks.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', letterSpacing: '0.1em', color: '#fff', background: project.accent, textDecoration: 'none', padding: '9px 13px', borderRadius: '2px' }}>
                {link.label} ↗
              </a>
            ))}
          </div>
        )}

        {/* Sub-project sections */}
        {project.detail.sections && project.detail.sections.length > 0 && (
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', color: '#c0c0c0', marginBottom: '16px' }}>
              PROJECTS SUPPORTED
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {project.detail.sections.map((sec, i) => (
                <div key={i} style={{ borderLeft: `2px solid ${project.accent}30`, paddingLeft: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', flexWrap: 'wrap', marginBottom: '2px' }}>
                    <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>{sec.name}</span>
                    {sec.tags && <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: '#aaa', letterSpacing: '0.08em' }}>{sec.tags}</span>}
                  </div>
                  {sec.description && <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: '12px', color: '#555', lineHeight: 1.6, margin: '0 0 4px' }}>{sec.description}</p>}
                  {(sec.role || sec.timeline || sec.team) && (
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      {sec.role && <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: '#999' }}>Role: {sec.role}</span>}
                      {sec.timeline && <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: '#999' }}>{sec.timeline}</span>}
                      {sec.team && <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: '#999' }}>Team: {sec.team}</span>}
                    </div>
                  )}
                  {sec.link && (
                    <a href={sec.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', color: project.accent, textDecoration: 'none', letterSpacing: '0.08em', borderBottom: `1px solid ${project.accent}40`, paddingBottom: '1px' }}>
                      VIEW ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Image gallery */}
        {project.detail.images && project.detail.images.length > 0 && (
          <div style={{ marginTop: '16px' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.18em', color: '#c0c0c0', marginBottom: '14px' }}>PROCESS WORK</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.detail.images.map((src, i) => (
                <div key={i} style={{ borderRadius: '2px', overflow: 'hidden', border: '1px solid #ececec' }}>
                  <img src={src} alt={project.detail.imageLabels?.[i] ?? `image ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  {project.detail.imageLabels?.[i] && (
                    <div style={{ padding: '6px 10px', background: '#f8f8f8', fontFamily: "'Space Mono', monospace", fontSize: '8px', letterSpacing: '0.1em', color: '#aaa' }}>
                      {project.detail.imageLabels[i].toUpperCase()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [showMap, setShowMap] = useState(false)
  const [showBio, setShowBio] = useState(false)
  const [showFilm, setShowFilm] = useState(false)
  const [showTravel, setShowTravel] = useState(false)
  const [highlightedId, setHighlightedId] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [viewport, setViewport] = useState({ width: 1440, height: 900 })

  useEffect(() => {
    const handler = () => {
      setIsMobile(window.innerWidth < 768)
      setViewport({ width: window.innerWidth, height: window.innerHeight })
    }
    handler()
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const boardScale = isMobile ? 1 : Math.max(0.8, Math.min(1.6, viewport.width / 1200, viewport.height / 720))

  return (
    <div
      className="cork-board"
      style={{ width: isMobile ? '100vw' : `${viewport.width / boardScale}px`, height: isMobile ? 'auto' : `${viewport.height / boardScale}px`, minHeight: isMobile ? '100vh' : undefined, overflow: isMobile ? 'auto' : 'hidden', display: 'flex', flexDirection: isMobile ? 'column' : 'row', fontFamily: "'Nunito', sans-serif", zoom: boardScale }}
    >
      {/* ── Left Sidebar ────────────────────────────────────────────────────── */}
      <div style={{ width: isMobile ? '100%' : '26%', maxWidth: isMobile ? '100%' : '308px', minWidth: isMobile ? 'unset' : '218px', height: isMobile ? 'auto' : '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '32px 22px 0' : '26px 12px 26px 26px', flexShrink: 0 }}>
        <div style={{ width: '100%', height: isMobile ? 'auto' : '100%', background: '#fef9d2', position: 'relative', boxShadow: '5px 7px 24px rgba(0,0,0,0.22), 2px 3px 9px rgba(0,0,0,0.12)', transform: 'rotate(-0.5deg)', padding: '36px 24px 26px', display: 'flex', flexDirection: 'column' }}>
          <PushPin color="#0d3880" style={{ top: '-14px', left: '50%', transform: 'translateX(-50%)' }} />

          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.05, marginBottom: '5px' }}>
            SUSAN XU
          </div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '11px', color: '#444', lineHeight: 1.5, marginBottom: '1px' }}>
            Information Science, Systems, and Technology
          </div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '11px', color: '#666', marginBottom: '5px' }}>
            @ Cornell Engineering
          </div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '8.5px', letterSpacing: '0.1em', color: '#a0a0a0', marginBottom: '16px' }}>
            Data Science + UX Design
          </div>

          <div style={{ height: '1px', background: 'rgba(0,0,0,0.1)', marginBottom: '13px' }} />

          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '7px', letterSpacing: '0.16em', color: '#b0b0b0', marginBottom: '5px' }}>
            ABOUT ME
          </div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '11.5px', color: '#333', lineHeight: 1.65, marginBottom: '16px' }}>
            Designing thoughtful products at the intersection of human-centered design, technology, and product strategy.
          </div>

          <div style={{ height: '1px', background: 'rgba(0,0,0,0.1)', marginBottom: '13px' }} />

          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '7px', letterSpacing: '0.16em', color: '#b0b0b0', marginBottom: '9px' }}>
            TABLE OF CONTENTS
          </div>

          <div style={{ flex: 1, overflow: 'hidden' }}>
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                onClick={() => setActiveProject(p)}
                onMouseEnter={() => setHighlightedId(p.id)}
                onMouseLeave={() => setHighlightedId(null)}
                style={{ display: 'flex', gap: '8px', alignItems: 'baseline', padding: '4px 0', cursor: 'pointer', opacity: highlightedId === null || highlightedId === p.id ? 1 : 0.35, transition: 'opacity 0.15s ease', borderBottom: '1px solid rgba(0,0,0,0.055)' }}
              >
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '9px', color: '#c0c0c0', flexShrink: 0, width: '20px' }}>
                  {p.num}
                </span>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: '10.5px', color: highlightedId === p.id ? '#1a1a1a' : '#555', fontWeight: highlightedId === p.id ? 700 : 500, lineHeight: 1.38 }}>
                  {tocTitle(p)}
                </span>
              </div>
            ))}

          </div>

          <div style={{ height: '1px', background: 'rgba(0,0,0,0.1)', margin: '14px 0 12px' }} />

          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '7px', letterSpacing: '0.16em', color: '#b0b0b0', marginBottom: '8px' }}>
            STAY CONNECTED
          </div>
          <div style={{ display: 'flex', gap: '18px' }}>
            <a href="https://www.linkedin.com/in/susanxu04" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Nunito', sans-serif", fontSize: '12px', color: '#0d3880', textDecoration: 'none', fontWeight: 700, transition: 'opacity 0.15s ease' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}>
              LinkedIn ↗
            </a>
            <a href="mailto:zx323@cornell.edu"
              style={{ fontFamily: "'Nunito', sans-serif", fontSize: '12px', color: '#0d3880', textDecoration: 'none', fontWeight: 700, transition: 'opacity 0.15s ease' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.6' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}>
              Email ↗
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Board ──────────────────────────────────────────────────────── */}
      <div style={{ flex: 1, height: isMobile ? 'auto' : '100%', minHeight: isMobile ? '600px' : undefined, position: 'relative', overflow: isMobile ? 'visible' : 'hidden', padding: isMobile ? '24px 16px 40px' : undefined }}>

        {isMobile ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
            {/* Photo card on mobile */}
            <div
              style={{ width: 'calc(50% - 9px)', background: '#fff', borderRadius: '2px', boxShadow: '3px 4px 14px rgba(0,0,0,0.2)', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <img src={susanImg} alt="Susan Xu" style={{ width: '100%', height: '160px', objectFit: 'cover', objectPosition: 'center 18%', display: 'block' }} />
              <div style={{ padding: '10px 12px 12px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '13px', fontWeight: 700, color: '#1a1a1a' }}>Susan Xu</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '9px', color: '#888', marginTop: '4px', lineHeight: 1.5 }}>tap to read about me</div>
              </div>
            </div>

            {/* Map card on mobile */}
            <div
              onClick={() => setShowMap(true)}
              style={{ width: 'calc(50% - 9px)', background: '#fff', padding: '12px', borderRadius: '2px', boxShadow: '3px 4px 14px rgba(0,0,0,0.2)', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.05)' }}
            >
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '7px', color: '#94a3b8', letterSpacing: '0.12em', marginBottom: '6px' }}>PLACES I'VE BEEN</div>
              <img src={mapImg} alt="Travel map" style={{ width: '100%', height: 'auto', borderRadius: '1px' }} />
            </div>

            {PROJECTS.map((p) => (
              <div
                key={p.id}
                onClick={() => setActiveProject(p)}
                style={{ width: 'calc(50% - 9px)', background: p.stickerSrc ? '#fef9d2' : p.bg, padding: '14px', borderRadius: '2px', boxShadow: '3px 4px 14px rgba(0,0,0,0.2)', cursor: 'pointer', transform: `rotate(${p.rotation * 0.35}deg)`, border: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
              >
                {p.stickerSrc && (
                  <img src={p.stickerSrc} alt={p.title} style={{ width: '70px', height: 'auto', filter: 'drop-shadow(1px 2px 4px rgba(0,0,0,0.18))' }} />
                )}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '7px', color: p.accent, letterSpacing: '0.12em', marginBottom: '2px' }}>{p.category}</div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '10px', color: '#ccc', marginBottom: '2px' }}>{p.num}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '13px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: '3px' }}>{p.title}</div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: '9px', color: '#666' }}>{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Decorative push pins */}
            <PushPin color="#cc2200" style={{ top: '11%', right: '6%' }} />
            <PushPin color="#14532d" style={{ top: '60%', right: '4%' }} />
            <PushPin color="#4a3a1a" style={{ top: '27%', left: '25%' }} />
            <PushPin color="#8b1a1a" style={{ top: '55%', left: '51%' }} />
            <PushPin color="#4c1d95" style={{ top: '58%', right: '18%' }} />


            {/* Travel map card */}
            <MapCard onOpen={() => setShowMap(true)} />

            {/* Camera sticker */}
            <CameraCard onOpen={() => setShowFilm(true)} />

            {/* Suitcase sticker */}
            <SuitcaseCard onOpen={() => setShowTravel(true)} />

            {/* Yami sticker */}
            <div onClick={() => setActiveProject(YAMI_PROJECT)} style={{ position: 'absolute', top: '3%', left: '55%', width: '80px', zIndex: 2, transform: 'rotate(4deg)', cursor: 'pointer' }}>
              <PushPin color="#cc2222" style={{ top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <img src={yamiImg} alt="Yami" style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(2px 5px 10px rgba(0,0,0,0.28))' }} />
            </div>

            {/* Notion sticker */}
            <div onClick={() => setActiveProject(NOTION_PROJECT)} style={{ position: 'absolute', top: '82%', left: '50%', width: '88px', zIndex: 2, transform: 'rotate(-3deg)', cursor: 'pointer' }}>
              <PushPin color="#444" style={{ top: '-12px', left: '50%', transform: 'translateX(-50%)' }} />
              <img src={notionImg} alt="Notion" style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(2px 5px 10px rgba(0,0,0,0.28))' }} />
            </div>

            {/* Photo / bio card */}
            <PhotoCard onOpen={() => setShowBio(true)} />

            {/* Cornell pennant — bottom-left open area, flips to "Class of 2027" */}
            <FlagCard
              img={cornellImg} altText="Cornell University"
              backTitle="Class of 2027"
              backSubtitle="Senior Year"
              backBg="#fff5f5" backAccent="#9c2020"
              top="74%" left="16%" rotation={2.8} pinColor="#cc2200" width={230}
              aspectRatio={0.44}
            />

            {/* Edinburgh — left-column gap between IBM and NYSBA, flips to "Semester Abroad" */}
            <FlagCard
              img={edinburghImg} altText="University of Edinburgh"
              backTitle="Semester Abroad"
              backSubtitle="Fall 2026"
              backBg="#f0f4ff" backAccent="#1e3a8a"
              top="29%" left="1%" rotation={-1.8} pinColor="#1e40af" width={220}
              aspectRatio={0.40}
            />

            {/* Project cards */}
            {PROJECTS.map((p) =>
              p.cardType === 'sticker' ? (
                <StickerCard key={p.id} project={p} highlighted={highlightedId === p.id} onClick={setActiveProject} onHover={setHighlightedId} />
              ) : (
                <ProjectCard key={p.id} project={p} highlighted={highlightedId === p.id} onClick={setActiveProject} onHover={setHighlightedId} />
              )
            )}
          </>
        )}
      </div>

      {/* ── Modals ───────────────────────────────────────────────────────────── */}
      {showTravel && <TravelModal onClose={() => setShowTravel(false)} />}
      {showFilm && <FilmStripModal onClose={() => setShowFilm(false)} />}
      {showBio && <BioModal onClose={() => setShowBio(false)} />}
      {showMap && <PlacesModal onClose={() => setShowMap(false)} />}
      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </div>
  )
}
