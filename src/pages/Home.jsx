import { Link } from 'react-router'
import DraggableEmoji from '../components/DraggableEmoji'

function Home() {
  return (
    <main className="home-page">
      <section className="hero-canvas">
        <div className="hero-copy">
          <p className="hero-label">Soham’s corner of the internet</p>

          <h1>
            Welcome to the
            <span> Rabbit Hole.</span>
          </h1>

          <p className="hero-description">
            Not exactly a portfolio. Not exactly a diary. Just everything my
            brain refuses to stop thinking about.
          </p>

          <div className="hero-actions">
            <Link to="/about" className="primary-link">
              Start exploring
            </Link>

            <span>Drag the objects around ↑</span>
          </div>
        </div>

        <DraggableEmoji
          emoji="🎬"
          label="cinema"
          x={7}
          y={12}
          size="4rem"
          rotation={-12}
        />

        <DraggableEmoji
          emoji="💻"
          label="computer"
          x={82}
          y={15}
          size="4rem"
          rotation={9}
        />

        <DraggableEmoji
          emoji="🎮"
          label="game controller"
          x={10}
          y={70}
          size="3.8rem"
          rotation={8}
        />

        <DraggableEmoji
          emoji="🌀"
          label="spiral"
          x={68}
          y={72}
          size="4.5rem"
          rotation={-8}
        />

        <DraggableEmoji
          emoji="🐇"
          label="rabbit"
          x={87}
          y={65}
          size="4rem"
          rotation={5}
        />

        <DraggableEmoji
          emoji="❓"
          label="question mark"
          x={48}
          y={8}
          size="3.4rem"
          rotation={-7}
        />
      </section>

      <section className="portal-section">
        <p className="section-label">Choose a tunnel</p>

        <div className="portal-grid">
          <Link to="/about" className="portal-card">
            <span>01</span>
            <h2>About Me</h2>
            <p>Who is running this strange place?</p>
          </Link>

          <Link to="/cinema" className="portal-card">
            <span>02</span>
            <h2>Cinema</h2>
            <p>Stories and frames I can’t stop thinking about.</p>
          </Link>

          <Link to="/coding" className="portal-card">
            <span>03</span>
            <h2>Coding</h2>
            <p>Things I’ve built, broken, and learned from.</p>
          </Link>

          <Link to="/mind" className="portal-card">
            <span>04</span>
            <h2>What’s on My Mind</h2>
            <p>Unfiltered thoughts before they disappear.</p>
          </Link>

          <Link to="/rabbit-holes" className="portal-card">
            <span>05</span>
            <h2>Rabbit Holes</h2>
            <p>Enter carefully. Time behaves differently here.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home