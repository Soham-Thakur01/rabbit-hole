import DraggableEmoji from '../components/DraggableEmoji'
import { currentlyLearning, projects } from '../data/projects'

function Coding() {
  return (
    <main className="coding-page">
      <section className="coding-hero">
        <div className="coding-intro">
          <p className="page-label">developer_mode: ON</p>

          <h1>
            Ideas become
            <span> working software.</span>
          </h1>

          <p>
            I’m learning by building—one project, bug, confusing error message
            and successful deployment at a time.
          </p>
        </div>

        <article className="terminal-window">
          <div className="window-bar">
            <span></span>
            <span></span>
            <span></span>
            <p>soham@rabbit-hole</p>
          </div>

          <div className="terminal-content">
            <p>
              <span>$</span> whoami
            </p>
            <strong>Computer engineering student</strong>

            <p>
              <span>$</span> current_goal
            </p>
            <strong>Build useful products</strong>

            <p>
              <span>$</span> status
            </p>
            <strong className="terminal-success">Still learning...</strong>
          </div>
        </article>

        <DraggableEmoji
          emoji="⚡"
          label="lightning"
          x={87}
          y={5}
          size="3.8rem"
          rotation={8}
        />

        <DraggableEmoji
          emoji="💾"
          label="floppy disk"
          x={4}
          y={75}
          size="3.5rem"
          rotation={-10}
        />
      </section>

      <section className="projects-section">
        <p className="section-label">Selected experiments</p>
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card-top">
                <span>{project.number}</span>
                <span>{project.status}</span>
              </div>

              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <ul className="technology-list">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className="project-link">
  {project.repositoryUrl && (
    <a
      href={project.repositoryUrl}
      target="_blank"
      rel="noreferrer"
    >
      Repository ↗
    </a>
  )}

  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noreferrer"
      className="live-project-link"
    >
      Live website ↗
    </a>
  )}

  {!project.repositoryUrl && !project.liveUrl && (
    <span>Repository not public yet</span>
  )}
</div>
            </article>
          ))}
        </div>
      </section>

      <section className="learning-section">
        <p className="section-label">Current loading screen</p>
        <h2>What I’m learning</h2>

        <div className="learning-list">
          {currentlyLearning.map((topic, index) => (
            <div key={topic}>
              <span>0{index + 1}</span>
              <p>{topic}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Coding