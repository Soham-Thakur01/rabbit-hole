import { useState } from 'react'
import DraggableEmoji from '../components/DraggableEmoji'
import { thoughts } from '../data/thoughts'

function Mind() {
  const [openThought, setOpenThought] = useState(null)

  function toggleThought(id) {
    setOpenThought(openThought === id ? null : id)
  }

  return (
    <main className="mind-page">
      <section className="mind-hero">
        <div>
          <p className="page-label">brain_dump.md</p>

          <h1>
            What’s on
            <span> my mind?</span>
          </h1>

          <p>
            Half-formed ideas, observations, lessons and questions saved before
            my brain replaces them with something else.
          </p>
        </div>

        <div className="mind-message">
          <span>STATUS</span>
          <p>Thinking about everything all at once.</p>
          <small>Last checked: probably five minutes ago</small>
        </div>

        <DraggableEmoji
          emoji="💭"
          label="thought bubble"
          x={80}
          y={5}
          size="4rem"
          rotation={8}
        />

        <DraggableEmoji
          emoji="📝"
          label="note"
          x={5}
          y={72}
          size="3.7rem"
          rotation={-8}
        />

        <DraggableEmoji
          emoji="👁️"
          label="eye"
          x={88}
          y={72}
          size="3.5rem"
          rotation={5}
        />
      </section>

      <section className="thoughts-section">
        <p className="section-label">Recent transmissions</p>
        <h2>Notes from an overcrowded brain.</h2>

        <div className="thoughts-grid">
          {thoughts.map((thought, index) => {
            const isOpen = openThought === thought.id

            return (
              <button
                type="button"
                className={`thought-note ${isOpen ? 'open' : ''}`}
                onClick={() => toggleThought(thought.id)}
                aria-expanded={isOpen}
                key={thought.id}
              >
                <div className="thought-note-top">
                  <span>Note 0{index + 1}</span>
                  <span>{thought.date}</span>
                </div>

                <p className="thought-category">{thought.category}</p>
                <h3>{thought.title}</h3>

                <p className="thought-excerpt">{thought.excerpt}</p>

                <span className="thought-action">
                  {isOpen ? 'Close note −' : 'Open note +'}
                </span>
              </button>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Mind