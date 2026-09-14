import DraggableEmoji from '../components/DraggableEmoji'

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-intro">
          <p className="page-label">about_me.txt</p>

          <h1>
            Too many interests.
            <span> One brain.</span>
          </h1>

          <p>
            I’m Soham—a computer engineering student who enjoys building
            software, obsessing over cinema, exploring fictional worlds,
            playing games, and learning facts that are useful approximately
            zero percent of the time.
          </p>
        </div>

        <article className="identity-window">
          <div className="window-bar">
            <span></span>
            <span></span>
            <span></span>
            <p>identity.exe</p>
          </div>

          <dl>
            <div>
              <dt>Name</dt>
              <dd>Soham</dd>
            </div>

            <div>
              <dt>Based in</dt>
              <dd>Pune, India</dd>
            </div>

            <div>
              <dt>Studying</dt>
              <dd>Computer Engineering</dd>
            </div>

            <div>
              <dt>Current mission</dt>
              <dd>Learn, build and ship</dd>
            </div>

            <div>
              <dt>Tabs open</dt>
              <dd>Probably too many</dd>
            </div>
          </dl>
        </article>

        <DraggableEmoji
          emoji="🧠"
          label="brain"
          x={65}
          y={4}
          size="3.8rem"
          rotation={8}
        />

        <DraggableEmoji
          emoji="🕹️"
          label="joystick"
          x={88}
          y={72}
          size="3.5rem"
          rotation={-9}
        />

        <DraggableEmoji
          emoji="🍿"
          label="popcorn"
          x={4}
          y={74}
          size="3.5rem"
          rotation={10}
        />
      </section>

      <section className="interest-board">
        <p className="section-label">Things occupying my brain</p>
        <h2>A personality built from side quests.</h2>

        <div className="interest-grid">
          <article>
            <span>🎬</span>
            <h3>Cinema</h3>
            <p>Films that leave something behind after the credits.</p>
          </article>

          <article>
            <span>💻</span>
            <h3>Code</h3>
            <p>Turning unfinished ideas into things people can use.</p>
          </article>

          <article>
            <span>⛩️</span>
            <h3>Anime</h3>
            <p>Huge worlds, unforgettable characters and impossible fights.</p>
          </article>

          <article>
            <span>🎮</span>
            <h3>Gaming</h3>
            <p>Another perfectly reasonable way to lose track of time.</p>
          </article>

          <article>
            <span>🧩</span>
            <h3>Odd Facts</h3>
            <p>Information I didn’t need but absolutely had to know.</p>
          </article>

          <article>
            <span>💭</span>
            <h3>Thoughts</h3>
            <p>Questions, opinions and ideas still under construction.</p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default About