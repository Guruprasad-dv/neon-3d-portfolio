          const q = points[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx*dx + dy*dy);
          if (d < 105) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(52,255,151,${(1-d/105)*.09})`; ctx.lineWidth = .6; ctx.stroke();
          }
        }
      });
      raf = requestAnimationFrame(draw);
    };
    resize(); draw(); window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas className="particle-canvas" ref={canvasRef} aria-hidden="true" />;
}

const projects = [
  { n:'01', icon:Waves, tag:'COMPUTER VISION · DEEP LEARNING', title:'DeepRescue', desc:'A real-time drowning detection concept focused on identifying distress movement and inactivity in water using computer vision.', tech:['Python','OpenCV','YOLO / CNN-LSTM'], color:'green', link:'mailto:your.email@example.com?subject=DeepRescue%20project' },
  { n:'02', icon:Bitcoin, tag:'MACHINE LEARNING · PREDICTION', title:'Bitcoin Price Prediction', desc:'An academic machine-learning project exploring historical price patterns with regression and ensemble models.', tech:['Python','Pandas','Scikit-learn'], color:'gold', link:'mailto:your.email@example.com?subject=Bitcoin%20prediction%20project' },
  { n:'03', icon:Code2, tag:'WEB DEVELOPMENT · INTERACTIVE UI', title:'3D Portfolio', desc:'A personal digital space combining expressive typography, motion, neon lighting and a responsive developer-first layout.', tech:['React','Three.js','CSS Motion'], color:'blue', link:'#contact' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  useEffect(() => {
    const onScroll = () => {
      const sections = ['home','about','skills','projects','contact'];
      let current = 'Home';
      sections.forEach(id => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top < 180) current = id[0].toUpperCase()+id.slice(1); });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <ParticleField />
    <div className="noise" aria-hidden="true" />
    <header className="nav">
      <a href="#home" className="brand" onClick={closeMenu}><span className="brand-mark">G<span>.</span></span><span className="brand-name">GURU PRASAD <i>/ DEV</i></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {['Home','About','Skills','Projects','Contact'].map(item => <a key={item} className={active===item?'active':''} href={'#'+item.toLowerCase()} onClick={closeMenu}>{item}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot"/> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line"/></div>
          <p className="hero-kicker">COMPUTER SCIENCE · DEVELOPER</p>
          <h1>Building ideas<br/>into <span className="outline-word">real</span><br/><span className="green-word">experiences.</span></h1>
          <p className="hero-desc">Hey, I'm <strong>Guru Prasad D V</strong> — a developer exploring code, AI and creative technology to build things that feel as good as they work.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-ghost" href="#contact">Get in touch <ArrowDownRight size={17}/></a>
          </div>
          <div className="hero-stats">
            <div><strong>03<span>+</span></strong><small>FEATURED PROJECTS</small></div>
            <div><strong>05<span>+</span></strong><small>CORE TECHNOLOGIES</small></div>
            <div><strong>∞</strong><small>THINGS TO LEARN</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/><div className="visual-orbit orbit-three"/>
          <div className="visual-cross cross-a">+</div><div className="visual-cross cross-b">+</div>
          <div className="image-frame"><div className="image-glow"/><img src="/images/profile.png" alt="Portrait of Guru Prasad D V" className="profile-image"/><div className="image-scan"/></div>
          <div className="float-card card-code"><span className="mini-icon"><Code2 size={16}/></span><div><b>Creative code</b><small>Building & learning</small></div><span className="card-status"/></div>
          <div className="float-card card-ai"><span className="mini-icon"><Cpu size={16}/></span><div><b>AI / ML</b><small>Curiosity → creation</small></div></div>
          <div className="vertical-label">FIG. 001 — THE DEVELOPER</div>
          <div className="visual-caption"><span>01 / 05</span><span>THINK · BUILD · REPEAT</span></div>
        </div>
        <a href="#about" className="scroll-cue"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
      </section>

      <section id="about" className="section-wrap about-section">
        <div className="section-index">01 <span>/ ABOUT</span></div>
        <div className="about-grid">
          <h2>Curious mind.<br/><span className="green-word">Builder's mindset.</span></h2>
          <div className="about-copy"><p className="large-copy">I like understanding how things work — then using that knowledge to make something useful.</p><p>I'm pursuing Computer Science and Engineering, building a foundation in programming, data structures and machine learning. I enjoy learning by making projects, testing ideas and improving them one iteration at a time.</p><div className="about-note"><Sparkles size={17}/><span>Currently exploring the intersection of AI, computer vision and interactive web experiences.</span></div></div>
        </div>
        <div className="about-bottom"><span>BASED IN INDIA</span><span className="line-grow"/><span>ALWAYS IN BETA <span className="green-word">●</span></span></div>
      </section>

      <section id="skills" className="section-wrap skills-section">
        <div className="section-index">02 <span>/ TOOLKIT</span></div>
        <div className="section-heading"><h2>Tools of the <span className="green-word">trade.</span></h2><p>My current toolkit — growing with every project.</p></div>
        <div className="skills-grid">
          {[['01','LANGUAGES',['Python','Java','SQL','JavaScript']],['02','AI & DATA',['Machine Learning','Pandas','Model Evaluation','Data Processing']],['03','WEB & TOOLS',['React','HTML / CSS','Git / GitHub','OpenCV']],['04','FOUNDATIONS',['Data Structures','Computer Networks','Problem Solving','OOP']]].map(([n,title,items])=><article className="skill-card" key={n}><div className="skill-top"><span>{n}</span><ArrowUpRight size={18}/></div><h3>{title}</h3><div className="skill-tags">{items.map(s=><span key={s}>{s}</span>)}</div></article>)}
        </div>
      </section>

      <section id="projects" className="section-wrap projects-section">
        <div className="section-index">03 <span>/ SELECTED WORK</span></div>
        <div className="section-heading project-heading"><h2>Made with <span className="green-word">intent.</span></h2><p>A few ideas I've been turning into working concepts.</p></div>
        <div className="projects-list">{projects.map(p=>{const Icon=p.icon;return <article className={'project-card '+p.color} key={p.n}><div className="project-number">{p.n}</div><div className="project-icon"><Icon size={25}/></div><div className="project-main"><p className="project-tag">{p.tag}</p><h3>{p.title}</h3><p className="project-desc">{p.desc}</p><div className="project-tech">{p.tech.map(t=><span key={t}>{t}</span>)}</div></div><a href={p.link} className="project-open" aria-label={'Learn about '+p.title}><MoveUpRight size={22}/></a><div className="project-decoration"/></article>})}</div>
      </section>

      <section id="contact" className="section-wrap contact-section">
        <div className="section-index">04 <span>/ CONTACT</span></div>
        <div className="contact-panel"><div className="contact-orb"/><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let's make<br/>something <span className="green-word">matter.</span></h2><p className="contact-copy">Open to internships, collaborations and conversations about technology.</p><a className="button button-primary" href="mailto:your.email@example.com?subject=Let's%20connect">Say hello <Mail size={17}/></a><div className="contact-foot"><span>NO SPAM. JUST GOOD IDEAS.</span><span>RESPONSE TIME: ASAP*</span></div></div>
      </section>
    </main>

    <footer className="footer section-wrap"><a href="#home" className="brand"><span className="brand-mark">G<span>.</span></span><span className="brand-name">GURU PRASAD <i>/ DEV</i></span></a><span className="footer-center">DESIGNED WITH CURIOSITY <span className="green-word">✳</span></span><div className="social-links"><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={17}/></a><a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><ArrowUpRight size={17}/></a><a href="mailto:your.email@example.com" aria-label="Email"><Mail size={17}/></a></div><p className="copyright">© {new Date().getFullYear()} GURU PRASAD D V. BUILT TO KEEP EVOLVING.</p></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
