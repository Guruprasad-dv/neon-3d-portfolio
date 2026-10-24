import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  MeshDistortMaterial,
  OrbitControls,
  Stars,
} from '@react-three/drei'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Cpu,
  BrainCircuit,
  Network,
  Layers3,
  Sprout,
  Waves,
  Bitcoin,
  GraduationCap,
  MapPin,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

const profile = {
  name: 'Guru Prasad D V.',
  title: 'Computer Science Student & Developer',
  location: 'Bengaluru, Karnataka',
  email: 'gurudv18@gmail.com',
  github: 'https://github.com/Guruprasad-dv',
  linkedin: 'https://www.linkedin.com/in/guruprasaddv/',
}

const projects = [
  {
    number: '01',
    icon: Bitcoin,
    category: 'MACHINE LEARNING',
    title: 'Bitcoin Price Prediction',
    description:
      'A machine-learning project exploring historical Bitcoin data to estimate price trends and make data-driven predictions.',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    accent: 'lime',
    link: `${profile.github}?tab=repositories`,
  },
  {
    number: '02',
    icon: Waves,
    category: 'COMPUTER VISION · DEEP LEARNING',
    title: 'DeepRescue',
    description:
      'A real-time drowning-detection concept designed to analyze activity in water and help identify potential distress situations.',
    tags: ['Deep Learning', 'OpenCV', 'Real-time Vision'],
    accent: 'blue',
    link: `${profile.github}?tab=repositories`,
  },
  {
    number: '03',
    icon: Sprout,
    category: 'AI FOR AGRICULTURE',
    title: 'Plant Disease Detection',
    description:
      'A farmer-focused idea: upload a plant image, identify possible disease symptoms, and get useful guidance.',
    tags: ['Image Classification', 'AI', 'Agriculture'],
    accent: 'violet',
    link: `${profile.github}?tab=repositories`,
  },
]

const skills = [
  { name: 'Python', type: 'Programming', icon: Code2, level: '01' },
  { name: 'Java', type: 'Programming', icon: Code2, level: '02' },
  { name: 'SQL', type: 'Data', icon: Layers3, level: '03' },
  {
    name: 'Machine Learning',
    type: 'Artificial Intelligence',
    icon: BrainCircuit,
    level: '04',
  },
  {
    name: 'Computer Networking',
    type: 'Core CS',
    icon: Network,
    level: '05',
  },
]

function CoreObject() {
  const core = useRef()
  const ring = useRef()
  const ring2 = useRef()

  useFrame((state, delta) => {
    if (core.current) {
      core.current.rotation.x += delta * 0.12
      core.current.rotation.y += delta * 0.22
    }

    if (ring.current) ring.current.rotation.z -= delta * 0.13
    if (ring2.current) ring2.current.rotation.x += delta * 0.11
  })

  return (
    <group>
      <Float speed={1.25} rotationIntensity={0.18} floatIntensity={0.45}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.1, 2]} />
          <MeshDistortMaterial
            color="#b7ff70"
            emissive="#2c6519"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.72}
            distort={0.18}
            speed={1.6}
          />
        </mesh>
      </Float>

      <mesh ref={ring} rotation={[0.9, 0.2, 0.1]}>
        <torusGeometry args={[1.65, 0.012, 12, 180]} />
        <meshBasicMaterial color="#b7ff70" transparent opacity={0.8} />
      </mesh>

      <mesh ref={ring2} rotation={[0.2, 1.1, 0.7]}>
        <torusGeometry args={[2.05, 0.008, 10, 180]} />
        <meshBasicMaterial color="#6b9dff" transparent opacity={0.65} />
      </mesh>

      <mesh position={[1.65, 0.5, 0.1]}>
        <sphereGeometry args={[0.08, 20, 20]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      <mesh position={[-1.45, -0.8, 0.3]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial color="#b7ff70" />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.3], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1.1} />
      <pointLight position={[4, 3, 4]} intensity={24} color="#b7ff70" />
      <pointLight position={[-4, -2, 2]} intensity={12} color="#668fff" />

      <Suspense fallback={null}>
        <Stars
          radius={70}
          depth={35}
          count={1300}
          factor={2.2}
          saturation={0}
          fade
          speed={0.4}
        />
        <CoreObject />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  )
}

function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-dot" />
      {children}
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Guru Prasad home">
        <span className="brand-mark">
          G<span>.</span>
        </span>
        <span>GURU PRASAD</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </nav>

      <a className="header-cta" href={`mailto:${profile.email}`}>
        Let's talk <ArrowUpRight size={15} />
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Eyebrow>COMPUTER SCIENCE · BUILDER · CURIOUS MIND</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          Turning ideas
          <br />
          into <span className="gradient-text">real-world</span>
          <br />
          technology<span className="period">.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          I'm <strong>Guru Prasad D V.</strong>, a Computer Science student at
          RV College of Engineering. I enjoy exploring software, machine
          learning, and ideas that can make a practical difference.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowRight size={17} />
          </a>
          <a className="button button-quiet" href={`mailto:${profile.email}`}>
            <Mail size={16} /> Get in touch
          </a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          <span>
            <MapPin size={14} /> {profile.location}
          </span>
          <span className="meta-divider" />
          <span className="availability">
            <i /> Open to internship opportunities
          </span>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        <div className="visual-glow" />
        <div className="visual-grid" />
        <div className="scene-canvas">
          <Scene />
        </div>
        <div className="orbit-label orbit-label-top">
          <Sparkles size={13} /> BUILD · LEARN · REPEAT
        </div>
        <div className="orbit-label orbit-label-bottom">
          <span className="tiny-bars">
            <i />
            <i />
            <i />
            <i />
          </span>
          IDEAS IN MOTION
        </div>
        <div className="visual-index">FIG. 01 / PERSONAL SYSTEM</div>
      </motion.div>

      <a className="scroll-cue" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={14} />
      </a>
    </section>
  )
}

function About() {
  return (
    <section className="section-shell about-section" id="about">
      <div className="section-heading">
        <Eyebrow>01 / A LITTLE ABOUT ME</Eyebrow>
        <h2>
          Curious by nature.
          <br />
          <span className="muted-heading">Driven to build.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p className="lead-copy">
            I’m currently pursuing a <strong>B.E. in Computer Science and
            Engineering</strong> at RV College of Engineering, after completing
            my diploma in Computer Science and Engineering at Siddaganga
            Polytechnic.
          </p>

          <p>
            I’m growing my skills by learning, experimenting, and building
            projects around data, AI, and computer vision. I value clear
            problem-solving, steady improvement, and technology that helps
            people solve real problems.
          </p>

          <div className="about-links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub <ArrowUpRight size={14} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="stats-panel">
          <div className="stat-card">
            <span className="stat-label">DIPLOMA GRADE</span>
            <strong>9.95</strong>
            <span className="stat-note">Academic achievement</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">CURRENT FOCUS</span>
            <strong className="stat-word">AI + SOFTWARE</strong>
            <span className="stat-note">Learning through projects</span>
          </div>

          <div className="stat-card stat-card-wide">
            <span className="stat-label">MY APPROACH</span>
            <div className="approach-line">
              <span>Learn</span>
              <i />
              <span>Build</span>
              <i />
              <span>Improve</span>
            </div>
            <span className="stat-note">Small steps. Useful outcomes.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section-shell skills-section" id="skills">
      <div className="section-heading section-heading-row">
        <div>
          <Eyebrow>02 / THE TOOLKIT</Eyebrow>
          <h2>
            Skills I'm building<span className="period">.</span>
          </h2>
        </div>
        <p>
          My current toolkit across programming, data, and core computer
          science.
        </p>
      </div>

      <div className="skills-list">
        {skills.map((skill, i) => {
          const Icon = skill.icon

          return (
            <motion.div
              className="skill-row"
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.06 }}
            >
              <span className="skill-number">{skill.level}</span>
              <span className="skill-icon">
                <Icon size={19} />
              </span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-type">{skill.type}</span>
              <ArrowUpRight className="skill-arrow" size={17} />
            </motion.div>
          )
        })}
      </div>

      <div className="skills-footnote">
        <Cpu size={16} /> Skillset is evolving as I work on more projects and
        learn new tools.
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="section-shell">
        <div className="section-heading section-heading-row projects-heading">
          <div>
            <Eyebrow>03 / SELECTED WORK</Eyebrow>
            <h2>
              Ideas in progress<span className="period">.</span>
            </h2>
          </div>
          <p>
            Projects that connect computer science concepts with real-world
            problems.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, i) => {
            const Icon = project.icon

            return (
              <motion.article
                className={`project-card accent-${project.accent}`}
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -7 }}
              >
                <div className="project-card-top">
                  <span className="project-number">
                    {project.number} / PROJECT
                  </span>
                  <span className="project-icon">
                    <Icon size={22} />
                  </span>
                </div>

                <div className="project-category">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore repository <ExternalLink size={15} />
                </a>
              </motion.article>
            )
          })}
        </div>

        <div className="projects-note">
          <Sparkles size={16} /> Project details and repository links will be
          updated as the work is finalized.
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section-shell education-section" id="education">
      <div className="section-heading">
        <Eyebrow>04 / THE JOURNEY</Eyebrow>
        <h2>
          Learning is the
          <br />
          <span className="muted-heading">long game.</span>
        </h2>
      </div>

      <div className="timeline">
        <div className="timeline-item timeline-current">
          <div className="timeline-marker">
            <GraduationCap size={18} />
          </div>
          <div className="timeline-content">
            <div className="timeline-top">
              <span className="timeline-label">2026 — 2029</span>
              <span className="timeline-status">
                <i /> ONGOING
              </span>
            </div>
            <h3>B.E. — Computer Science and Engineering</h3>
            <p>RV College of Engineering</p>
            <span className="timeline-detail">
              Building a stronger foundation in computer science and software
              engineering.
            </span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-marker">
            <GraduationCap size={18} />
          </div>
          <div className="timeline-content">
            <div className="timeline-top">
              <span className="timeline-label">DIPLOMA</span>
              <span className="timeline-grade">GRADE · 9.95</span>
            </div>
            <h3>Diploma — Computer Science and Engineering</h3>
            <p>Siddaganga Polytechnic, Tumkur</p>
            <span className="timeline-detail">
              Developed core technical knowledge and continued into engineering
              studies.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-card">
        <div className="contact-orb">
          <Scene />
        </div>

        <div className="contact-content">
          <Eyebrow>05 / LET'S CONNECT</Eyebrow>
          <h2>
            Have a good idea?
            <br />
            <span className="gradient-text">Let's make it real.</span>
          </h2>
          <p>
            I'm looking for opportunities to learn, contribute, and grow as a
            developer. If you'd like to connect or talk about a project, feel
            free to reach out.
          </p>
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            Say hello <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="contact-email">
          <Mail size={16} />
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="brand" href="#home">
        <span className="brand-mark">
          G<span>.</span>
        </span>
        <span>GURU PRASAD</span>
      </a>

      <span>Designed to learn. Built to grow.</span>

      <div className="footer-socials">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <Github size={17} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={17} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email">
          <Mail size={17} />
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="app">
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
